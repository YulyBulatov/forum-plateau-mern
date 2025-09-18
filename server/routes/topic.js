const express = require('express');
const router = express.Router();
const { createTopic, getTopicsByCategory } = require('../controllers/topicController');
const auth = require('../middleware/authMiddleware');

router.get('/category/:catId', getTopicsByCategory);
router.post('/', auth, createTopic);

module.exports = router;