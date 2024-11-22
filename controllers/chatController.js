const Chat = require('../models/Chat');
const Message = require('../models/Message');

// Get all chats for a user
exports.getChats = async (req, res) => {
  try {
    const chats = await Chat.find({ participants: req.user._id })
      .populate('participants', 'name profilePhoto');
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chats' });
  }
};

// Create or Open a Chat
exports.createChat = async (req, res) => {
  try {
    const { userId } = req.body;

    let chat = await Chat.findOne({
      participants: { $all: [req.user._id, userId] },
    });

    if (!chat) {
      chat = new Chat({
        participants: [req.user._id, userId],
      });
      await chat.save();
    }

    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create chat' });
  }
};

// Send a Message
exports.sendMessage = async (req, res) => {
  try {
    const { chatId } = req.params;
    const { text, mediaUrl } = req.body;

    const message = new Message({
      chat: chatId,
      sender: req.user._id,
      text,
      mediaUrl,
    });

    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};
