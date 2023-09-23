// mailer.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tucorreo@gmail.com', // Cambia esto a tu dirección de correo electrónico
    pass: 'tucontraseña' // Cambia esto a tu contraseña
  }
});

module.exports = transporter;
