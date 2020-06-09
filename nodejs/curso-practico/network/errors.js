const response = require('./response');

function errors(err, req, res, next) {
  console.log('[error]', err);

  const msg = err.message || 'Error interno';
  const status = err.statusCode || 500;

  response.error(req, res, msg, status);
}

module.exports = errors;
