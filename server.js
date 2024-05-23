// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connectDB = require('./config/db');
const mysqlConnection = require('./config/mysql');
const passport = require('passport');
require('dotenv').config();  // Asegúrate de que esta línea esté aquí

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Rutas
const users = require('./routes/users');
app.use('/api/users', users);

// Conexión de Socket.io
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
