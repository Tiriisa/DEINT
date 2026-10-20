const express = require('express');
const app = express();
const port = 3003;
const path = require('path');

// Configuramos Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio', mensaje: 'Bienvenido a Express + Pug', activa: "inicio" });
});

// Ruta secundaria
app.get('/acordeon', (req, res) => {
  res.render('acordeon', { titulo: 'Acordeon', mensaje: 'Se trata de un componente visual que permite mostrar información por fases.', activa: "acordeon" });
});

app.get('/modal', (req, res) => {
  res.render('modal', { titulo: 'Ventana modal', mensaje: 'Se trata de una caja emergente que solicita intervención de la persona usuaria.', activa: "modal" });
});

app.get('/tooltips', (req, res) =>{
  res.render('tooltips', { titulo: 'ToolTips', mensaje: 'Es un pequeño recuadro de texto que aparece cuando pasamos el cursor por encima de un elemento', activa: "tooltips" });
});

// Arrancamos servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});