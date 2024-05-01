const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

router.post('/login', authController.loginUser);
router.get('/profile', authenticateJWT, authController.getProfile);

module.exports = router;
