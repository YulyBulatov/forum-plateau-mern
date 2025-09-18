const Message = require('../models/Message');

exports.createMessage = async (req, res) => {
    try {
        const { contenu, topic } = req.body;
        const message = new Message({
            contenu,
            topic,
            auteur: req.user.id,
        });
        await message.save();
        res.status(201).json(message);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

exports.getMessagesByTopic = async (req, res) => {
    try {
        const messages = await Message.find({ topic: req.params.topicId })
            .populate('auteur', 'username')
            .populate('topic', 'titre');
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};