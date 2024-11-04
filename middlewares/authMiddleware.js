const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Society = require('../models/Society'); // Ensure you have the Society model

// Protect middleware to authenticate and authorize users
const protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];

    try {
      // Decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user and populate the society field
      const user = await User.findById(decoded.id).select('-password').populate('society');

      if (!user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      // Set req.user with adminId and societyId
      req.user = {
        _id: user._id,
        society: user.society ? user.society._id : null, // If society exists, use its ID; otherwise null
        role: user.role
      };

      // If the user has a society, populate residents
      if (user.society) {
        const society = await Society.findById(user.society._id).populate('residents');
        req.residents = society.residents; // Attach residents to the request
      } else {
        req.residents = []; // No society means no residents
      }

      next(); // Proceed to the next middleware or route handler
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
