const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../databasePool'); // Ensure correct import

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ msg: 'No token provided.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ msg: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };