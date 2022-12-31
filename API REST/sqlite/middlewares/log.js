function log(req, res, next) {
    console.log('Ruta: ' + req.baseUrl + req.path, 'Metodo: ' + req.method);
    next();
  }
  
  module.exports = log;