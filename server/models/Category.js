const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    titre: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Category', categorySchema);