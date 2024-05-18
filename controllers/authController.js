const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const AuthController = {
    register: async (req, res) => {
        const { username, email, password } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await User.create({ username, email, password: hashedPassword });
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const [user] = await User.findByEmail(email);
            if (!user[0] || !await bcrypt.compare(password, user[0].password)) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ id: user[0].id, username: user[0].username }, process.env.SECRET_KEY);
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }
};

module.exports = AuthController;
