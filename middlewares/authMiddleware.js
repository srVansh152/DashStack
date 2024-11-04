const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Society = require('../models/Society'); // Make sure to import your Society model

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Ensure you populate the society if it exists in your User model
      const user = await User.findById(decoded.id).select('-password').populate('society');

      if (!user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      req.user = user;

      // If the user has a society, get its residents
      if (user.society) {
        const society = await Society.findById(user.society).populate('residents'); // Populate residents
        req.residents = society.residents; // Attach residents to request object
      } else {
        req.residents = []; // If no society, set residents to an empty array
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