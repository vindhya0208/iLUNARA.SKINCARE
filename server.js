const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_super_secret_key_ilunara'; // In production use .env

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '.'))); // Serve current folder static files

// Auth Routes

// Register
app.post('/api/auth/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send({ message: 'Name, email, and password are required.' });
    }
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, hashedPassword], function (err) {
        if (err) {
            return res.status(500).send({ message: 'User registration failed (Email might be taken).', error: err.message });
        }
        res.status(200).send({ message: 'User registered successfully!' });
    });
});

// Login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;

    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) return res.status(500).send({ message: 'Server error.' });
        if (!user) return res.status(404).send({ message: 'User not found.' });

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null, message: 'Invalid Password!' });

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 86400 }); // 24 hours
        res.status(200).send({ auth: true, token: token, user: { name: user.name, email: user.email } });
    });
});

// Get Profile
app.get('/api/user/profile', (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        db.get(`SELECT id, name, email, phone, address FROM users WHERE id = ?`, [decoded.id], (err, user) => {
            if (err) return res.status(500).send({ message: 'There was a problem finding the user.' });
            if (!user) return res.status(404).send({ message: 'No user found.' });
            res.status(200).send(user);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
