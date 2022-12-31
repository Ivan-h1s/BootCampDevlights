function authentication(req, res, next) {
    console.log('Autenticando');
    next();
}

module.exports = authentication;