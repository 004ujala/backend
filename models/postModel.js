const db = require('../config/database');

const Post = {
    create: (postData) => {
        const { userId, content, media } = postData;
        return db.execute('INSERT INTO posts (user_id, content, media) VALUES (?, ?, ?)', [userId, content, media]);
    },
    delete: (postId, userId) => {
        return db.execute('DELETE FROM posts WHERE id = ? AND user_id = ?', [postId, userId]);
    },
    findById: (postId) => {
        return db.execute('SELECT * FROM posts WHERE id = ?', [postId]);
    },
    getFeed: (userId) => {
        return db.execute(`
      SELECT posts.*, users.username 
      FROM posts 
      JOIN follows ON posts.user_id = follows.followee_id 
      JOIN users ON posts.user_id = users.id 
      WHERE follows.follower_id = ? OR posts.user_id = ? 
      ORDER BY posts.created_at DESC
    `, [userId, userId]);
    },
    getLikes: (postId) => {
        return db.execute(`
            SELECT users.username, likes.created_at
            FROM likes
            JOIN users ON likes.user_id = users.id
            WHERE likes.post_id = ?
        `, [postId]);
    },
    getComments: (postId) => {
        return db.execute(`
            SELECT users.username, comments.comment, comments.created_at
            FROM comments
            JOIN users ON comments.user_id = users.id
            WHERE comments.post_id = ?
        `, [postId]);
    },
};

module.exports = Post;
