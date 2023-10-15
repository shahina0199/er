const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (payload) => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

module.exports = { generateToken };
