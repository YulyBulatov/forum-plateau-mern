const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    contenu: { type: String, required: true },
    date: { type: Date, default: Date.now },
    auteur: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
});

module.exports = mongoose.model('Message', messageSchema);