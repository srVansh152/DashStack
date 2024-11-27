const nodemailer = require('nodemailer');
const User = require('../models/User');
const Resident = require('../models/Resident');
const { generateToken } = require('../utils/token');
const cloudinary = require('../config/cloudinaryConfig');


// Email sending utility function
const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT === '465', // Use SSL for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Ensure this is your app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: subject,
      text: text,
    });

    console.log('OTP email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email sending failed');
  }
};

// Generate a 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
};

// Register a new user
exports.register = async (req, res) => {
  const { firstname, lastname, email, phone, country, state, city, society, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const userPhoto = req.file ? req.file.path : null;

    const newUser = new User({
      firstname,
      lastname,
      email,
      phone,
      country,
      state,
      city,
      society,
      password,
      role: 'admin',
      userPhoto,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      phone: newUser.phone,
      country: newUser.country,
      state: newUser.state,
      city: newUser.city,
      society: newUser.society,
      role: newUser.role,
      userPhoto: newUser.userPhoto,
      token: generateToken(newUser),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check for admin or security guard in User model
    let user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      return res.json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        token: generateToken(user),
      });
    }

    // If no admin/security guard found, check in Resident model for resident
    const resident = await Resident.findOne({ email });
    if (resident && (await resident.comparePassword(password))) {
      return res.json({
        _id: resident._id,
        firstname: resident.firstname,
        lastname: resident.lastname,
        email: resident.email,
        role: 'resident', // Setting role for residents
        token: generateToken(resident),
      });
    }

    // If no matching user or resident found
    res.status(401).json({ message: 'Invalid email or password' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login', error: error.message });
  }
};


// Forgot Password - Send OTP required to reset password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    // Find user by email or phone in both User and Resident models
    let user = await User.findOne({
      email: email
    });

    if (!user) {
      // If user not found in User model, check in Resident model
      user = await Resident.findOne({
        email: email
      });
    }

    if (!user) {
      return res.status(404).json({ message: 'User or Resident not found' });
    }

    // Generate OTP and set expiration
    const otp = generateOTP();
    user.resetOtp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    await user.save();

    // Send OTP to user's email
    await sendEmail(user.email, 'Your OTP Code', `Your OTP is ${otp}`);
    res.json({ message: 'OTP sent to your email' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send OTP email', error: error.message });
  }
};

//verify otp 
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Log the incoming OTP
    console.log(email);
    console.log('Incoming OTP:', otp);

    // Search for user in both User and Resident models
    const user = await User.findOne({
      email: email,
      resetOtp: otp.toString(), // Ensure consistent type
      otpExpires: { $gt: Date.now() }, // Check expiration
    }) || await Resident.findOne({
      email: email,
      resetOtp: otp.toString(), // Ensure consistent type
      otpExpires: { $gt: Date.now() },
    });

    // Log the retrieved user
    console.log('User found for OTP verification:', user);

    if (!user) {
      return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
    }

    res.json({ message: 'OTP verified successfully. Proceed to reset password.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to verify OTP', error: error.message });
  }
};


// Reset Password - Verify OTP before this step
exports.resetPassword = async (req, res) => {
  const { emailOrPhone, otp, newPassword } = req.body;

  try {
    // Find the user by email/phone and OTP, ensure OTP is valid and not expired
    const user = await User.findOne({
      email: emailOrPhone,
      resetOtp: otp,
      otpExpires: { $gt: Date.now() },
    }) || await Resident.findOne({
      email: emailOrPhone,
      resetOtp: otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
    }

    // Update the user's password and clear OTP data
    user.password = newPassword; // Password hashing handled in User model `pre` hook
    user.resetOtp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to reset password', error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    console.log(req.user); // Debugging: Check if req.user is populated
    const user = await User.findById(req.user._id).select('-password').populate('society');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
  }
};

// Update (replace) the profile of the logged-in user
exports.updateMe = async (req, res) => {
  try {
    const updates = req.body;

    // Check if a new userPhoto is uploaded
    if (req.file) {
      try {
        const uploadResponse = await cloudinary.uploader.upload(req.file.path);
        updates.userPhoto = uploadResponse.secure_url;
      } catch (uploadError) {
        return res.status(500).json({
          message: 'Failed to upload userPhoto to Cloudinary',
          error: uploadError.message,
        });
      }
    }

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    }).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user data', error: error.message });
  }
};

