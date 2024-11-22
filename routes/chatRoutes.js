const express = require('express');
const { getChats, createChat, sendMessage } = require('../controllers/chatController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', protect, getChats);
router.post('/', protect, createChat);
router.post('/:chatId/message', protect, sendMessage);

module.exports = router;
