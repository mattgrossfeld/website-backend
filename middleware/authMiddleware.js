const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../databasePool'); // Ensure correct import

const parseCookies = (cookieHeader) => {
  const cookies = {};
  cookieHeader && cookieHeader.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    cookies[parts.shift().trim()] = decodeURI(parts.join('='));
  });
  return cookies;
};

const verifyToken = (req, res, next) => {
  const cookies = parseCookies(req.headers.cookie); // Parse cookies
  const token = cookies.jwt; // Check for token in cookies and headers
  const csrfToken = cookies.csrf;
  if (!token) {
    return res.status(401).json({ msg: 'User not authorized.' });
  }

  if (!csrfToken) {
    return res.status(401).json({ msg: 'User not authorized.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ msg: 'Failed to authenticate token.' });
    }
    req.userName = decoded.userName;
    next();
  });
};

module.exports = { verifyToken };