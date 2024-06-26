const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, commentController.addComment);
router.put('/:commentId', authMiddleware, commentController.editComment);
router.delete('/:commentId', authMiddleware, commentController.deleteComment);

module.exports = router;
