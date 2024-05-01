const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const {
            fullName,
            dateOfBirth,
            securityQuestion,
            address,
            phoneNumber,
            city,
            state,
            zipCode,
            country,
            email,
            password
        } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullName,
            dateOfBirth,
            securityQuestion,
            address,
            phoneNumber,
            city,
            state,
            zipCode,
            country,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully.',data:newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

