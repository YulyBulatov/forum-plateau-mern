const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    creation: { type: Date, default: Date.now },
    ouvert: { type: Boolean, default: true },
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    auteur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Topic', topicSchema);