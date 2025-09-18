const Category = require('../models/Category');


exports.createCategory = async (req, res) => {
    try {
        const { titre } = req.body;
        let category = new Category({ titre });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Category deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};