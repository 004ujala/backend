const db = require('../config/database');

const Comment = {
    add: (commentData) => {
        const { userId, postId, comment } = commentData;
        return db.query('INSERT INTO comments (user_id, post_id, comment) VALUES (?, ?, ?)', [userId, postId, comment]);
    },
    edit: (commentId, userId, comment) => {
        return db.query('UPDATE comments SET comment = ? WHERE id = ? AND user_id = ?', [comment, commentId, userId]);
    },
    delete: (commentId, userId) => {
        return db.query('DELETE FROM comments WHERE id = ? AND user_id = ?', [commentId, userId]);
    }
};

module.exports = Comment;
