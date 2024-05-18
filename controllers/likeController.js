const Like = require('../models/likeModel');

const LikeController = {
    addLike: async (req, res) => {
        const { postId } = req.body;
        try {
            await Like.add({ userId: req.user.id, postId });
            res.status(201).json({ message: 'Like added successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error adding like' });
        }
    },
    removeLike: async (req, res) => {
        const { likeId } = req.params;
        try {
            await Like.remove(likeId, req.user.id);
            res.status(200).json({ message: 'Like removed successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error removing like' });
        }
    }
};

module.exports = LikeController;
