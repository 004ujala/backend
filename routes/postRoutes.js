const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, postController.getFeed);
router.get('/:postId', authMiddleware, postController.getPostDetails);
router.post('/', authMiddleware, postController.createPost);
router.delete('/:postId', authMiddleware, postController.deletePost);
router.get('/:postId/likes', authMiddleware, postController.getLikes);
router.get('/:postId/comments', authMiddleware, postController.getComments);


module.exports = router;
