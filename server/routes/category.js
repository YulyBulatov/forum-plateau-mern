const express = require('express');
const router = express.Router();
const { createCategory, getCategories, deleteCategory } = require('../controllers/categoryController');
const auth = require('../middleware/authMiddleware');

function isAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied, admin only' });
    }
    next();
}

router.post('/', auth, isAdmin, createCategory);
router.get('/', getCategories);
router.delete('/:id', auth, isAdmin, deleteCategory);

module.exports = router;