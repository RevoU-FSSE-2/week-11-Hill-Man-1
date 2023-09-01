const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SIGN } = require('../config/jwt');
const db = require('../config/db.connection');

const register = async (req, res, next) => {
    const { username, password, name, address, age, role } = req.body;

    try {
        const [existingUser] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (existingUser.length > 0) {
            return res.status(401).json({ error: 'Username Already Exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users (username, password, name, address, age, role, roleStatus) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const newUser = db.query(sql, [username, hashedPassword, name, address, age, role, 'pending'])
            res.status(201).json({
                message: 'User registration successful',
            });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const [user] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (user.length === 0) {
            throw new Error('User not found');
        }

        const isPasswordCorrect = await bcrypt.compare(password, user[0].password);

        if (!isPasswordCorrect) {
            throw new Error('Invalid password');
        }

        if (user[0].roleStatus === 'pending') {
            throw new Error('Wait for Approval from Admin');
        }

        const token = jwt.sign(
            { username: user[0].username, id: user[0].id, role: user[0].role },
            process.env.JWT_SIGN,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: `${user[0].username} Login successful`,
            data: token
        });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};


module.exports = { register, login };
