// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; // Load secret key from environment variables

function authenticate(req, res, next) {
  // Extract token from request headers
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Verify token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded; // Set user data in request object
    next();
  });
}

module.exports = authenticate;
