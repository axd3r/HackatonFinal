// Este middleware verifica si el usuario está autenticado antes de permitir el acceso a ciertas rutas

const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = function(req, res, next) {
  // Verificar si existe un token en los headers de la solicitud
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ msg: 'No hay token, acceso no autorizado' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, config.jwtSecret);
    
    // Agregar el usuario decodificado a la solicitud
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};
