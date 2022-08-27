const jwt = require('jsonwebtoken');

const config = {
    authSecret: 'mysecret',
}

module.exports = config

module.exports.isAuthenticated = function (req, res, next) {
    var token = req.headers.authorization

    if (token) {

        jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function(err, decoded) {
            if (err) {
                return res.status(401).json({ message: 'unauthorized' })
            } else {
                return next();
            }
        });

    } else {

        return res.status(401).json({ message: 'unauthorized' })
        
    }

}
