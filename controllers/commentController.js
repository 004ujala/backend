const Comment = require('../models/commentModel');

const CommentController = {
    addComment: async (req, res) => {
        const { postId, comment } = req.body;
        try {
            await Comment.add({ userId: req.user.id, postId, comment });
            res.status(201).json({ message: 'Comment added successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error adding comment' });
        }
    },
    editComment: async (req, res) => {
        const { commentId } = req.params;
        const { comment } = req.body;
        try {
            await Comment.edit(commentId, req.user.id, comment);
            res.status(200).json({ message: 'Comment edited successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error editing comment' });
        }
    },
    deleteComment: async (req, res) => {
        const { commentId } = req.params;
        try {
            await Comment.delete(commentId, req.user.id);
            res.status(200).json({ message: 'Comment deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting comment' });
        }
    }
};

module.exports = CommentController;
