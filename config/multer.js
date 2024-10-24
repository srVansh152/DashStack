// config/multer.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'residents',
        allowedFormats: ['jpg', 'jpeg', 'png', 'pdf'],
    },
});

// Initialize multer with Cloudinary storage
const upload = multer({ storage: storage });

module.exports = upload;