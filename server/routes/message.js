const express = require('express');
const router = express.Router();
const { createMessage, getMessagesByTopic } = require('../controllers/messageController');
const auth = require('../middleware/authMiddleware');

router.get('/topic/:topicId', getMessagesByTopic);
router.post('/', auth, createMessage);

module.exports = router;