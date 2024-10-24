// routes/residents.js
const express = require('express');
const router = express.Router();
const residentController = require('../controllers/residentController');
const upload = require('../config/multer');

// Routes for resident management
router.post(
    '/',
    upload.fields([
        { name: 'photo', maxCount: 1 },
        { name: 'aadhaarFront', maxCount: 1 },
        { name: 'aadhaarBack', maxCount: 1 },
        { name: 'addressProof', maxCount: 1 },
        { name: 'rentAgreement', maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            // Call the createResident method in your controller
            await residentController.createResident(req, res);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
);

router.put('/:id', upload.none(), async (req, res) => {
    try {
        // Call the updateResident method in your controller
        await residentController.updateResident(req, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await residentController.deleteResident(req, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        await residentController.getResidents(req, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        await residentController.getResidentDetails(req, res);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;