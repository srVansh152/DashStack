const User = require('../models/User');
const { generateToken } = require('../utils/token');
exports.register = async (req, res) => {
  const { firstname, lastname, email,country, society, password} = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ firstname, lastname, email, country, society,password});
  await user.save();

  res.status(201).json({
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
   
    country: user.country,
    society: user.society,
   
    token: generateToken(user),
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};
