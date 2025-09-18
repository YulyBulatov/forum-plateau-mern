const Topic = require('../models/Topic');

exports.createTopic = async (req, res) => {
    try {
        const { titre, categorie } = req.body;
        const topic = new Topic({
            titre,
            categorie,
            auteur: req.user.id
        });
        await topic.save();
        res.status(201).json(topic);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

exports.getTopicsByCategory = async (req, res) => {
    try {
        const topics = await Topic.find({ categorie: req.params.catId }).populate('auteur', 'username').populate('categorie', 'titre');
        res.json(topics);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};