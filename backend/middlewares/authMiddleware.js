const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Society = require('../models/Society'); // Make sure to import your Society model
const Resident = require('../models/Resident');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Identify if the user is an admin or resident based on the token role
      const userId = decoded.id; // Extract user ID from token
      let user;
      let role;

      // First, try to find the user in the `User` collection (admin role)
      user = await User.findById(userId).select('-password').populate('society');
      if (user) {
        role = user.role; // Assuming 'role' exists in the User schema
      } else {
        // If not found in User, search in the Resident collection
        user = await Resident.findById(userId).populate('society createdBy');
        if (user) {
          role = 'resident'; // Default role for residents
          req.adminId = user.createdBy?._id; // Attach admin ID
        } else {
          // If user is not found in either collection, return an error
          return res.status(401).json({ message: 'Not authorized, user not found' });
        }
      }

      req.user = user;
      req.userRole = role;

      if (user.society) {
        const society = await Society.findById(user.society).populate('residents');
        req.residents = society.residents || [];
        req.user.society = society; // Attach full society object to user

      } else {
        req.residents = [];
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'No token provided' });
  }
};

// Middleware to restrict access to specific roles
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

module.exports = { protect, restrictTo };