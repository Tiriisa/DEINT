const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Configuramos Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Hola clase de 2º DAM', mensaje: 'Bienvenido a Express + Pug' });
});

// Arrancamos servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});