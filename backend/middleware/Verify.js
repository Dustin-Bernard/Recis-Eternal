const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
 const token = req.header('Authorization');

 if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
 }

 try {
    const decoded = jwt.verify(token, 'YOUR_SECRET_KEY');
    req.user = decoded.user;
    next();
 } catch (ex) {
    res.status(400).json({ error: 'Invalid token.' });
 }
};