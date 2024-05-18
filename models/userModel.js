const db = require('../config/database');

const User = {
    create: (userData) => {
        const { username, email, password } = userData;
        return db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
    },
    findByEmail: (email) => {
        return db.query('SELECT * FROM users WHERE email = ?', [email]);
    },
    findById: (id) => {
        return db.query('SELECT * FROM users WHERE id = ?', [id]);
    },
    findByUsername: (username) => {
        return db.query('SELECT * FROM users WHERE username LIKE ?', [`%${username}%`]);
    },
    follow: (followerId, followeeId) => {
        return db.query('INSERT INTO follows (follower_id, followee_id) VALUES (?, ?)', [followerId, followeeId]);
    },
};

module.exports = User;
