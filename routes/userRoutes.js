const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/find', authMiddleware, userController.findUsers);
router.post('/follow', authMiddleware, userController.followUser);

module.exports = router;
