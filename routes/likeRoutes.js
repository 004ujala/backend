const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, likeController.addLike);
router.delete('/:likeId', authMiddleware, likeController.removeLike);

module.exports = router;
