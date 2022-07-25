module.exports = function(req, res, next) {
    const token = req.headers.authorization;

    if (token === (process.env.TOKEN || 'mysecretkey')) {
        next();
        return;
    }

    const error = {
        code: 403,
        msg: 'No authorization header present in request',
    };

    res.status(403).json(error);
};
