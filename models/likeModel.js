const db = require('../config/database');

const Like = {
    add: (likeData) => {
        const { userId, postId } = likeData;
        return db.execute('INSERT INTO likes (user_id, post_id) VALUES (?, ?)', [userId, postId]);
    },
    remove: (likeId, userId) => {
        return db.execute('DELETE FROM likes WHERE id = ? AND user_id = ?', [likeId, userId]);
    }
};

module.exports = Like;
