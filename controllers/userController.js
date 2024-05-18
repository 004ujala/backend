const User = require('../models/userModel');

const UserController = {
    findUsers: async (req, res) => {
        const { username } = req.body;
        try {
            const [users] = await User.findByUsername(username);
            res.json(users[0]);
        } catch (error) {
            res.status(500).json({ message: 'Error finding users' });
        }
    },
    followUser: async (req, res) => {
        const { followeeId } = req.body;
        try {
            await User.follow(req.user.id, followeeId);
            res.status(200).json({ message: 'Followed user successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error following user' });
        }
    }
};

module.exports = UserController;
