const jwt = require('jsonwebtoken');
const { secret } = require('../config/database');

exports.generateToken = (user) => {
    return jwt.sign({ id: user._id }, secret, {
        expiresIn: 300
    });
};
