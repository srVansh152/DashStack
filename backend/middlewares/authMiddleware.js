const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Society = require('../models/Society'); // Make sure to import your Society model

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Identify if the user is an admin or resident based on the token role
      let user = await User.findById(decoded.id).select('-password').populate('society');
      let role = user ? user.role : 'resident';

      if (role === 'resident') {
        user = await Resident.findById(decoded.id).populate('society createdBy'); // createdBy is admin
        if (!user) {
          return res.status(401).json({ message: 'Not authorized, resident not found' });
        }
        req.adminId = user.createdBy._id;  // Attach admin ID
      } else if (!user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      req.user = user;
      req.userRole = role;

      if (user.society) {
        const society = await Society.findById(user.society).populate('residents');
        req.residents = society.residents;
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