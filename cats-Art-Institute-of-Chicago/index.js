const express = require('express');

const app = express();
const PORT = 3000;

// Motor de plantillas: las vistas están en el directorio views
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

const API = 'https://api.artic.edu/api/v1';
const IMAGENES = 'https://www.artic.edu/iiif/2';
// El museo pide esta cabecera para identificar la aplicación; sin ella bloquea las imágenes
const CABECERAS = { 'AIC-User-Agent': 'para-5-de-octubre (proyecto de clase)' };
const TEMA_ID = 'TM-8806'; // Gatos (tema "cats"), de cualquier época y estilo
const POR_PAGINA = 20;
const CAMPOS = 'id,title,artist_display,date_display,place_of_origin,medium_display,dimensions,credit_line,style_title,image_id';

// Única función que accede a la API
async function pedirApi(ruta) {
  const respuesta = await fetch(API + ruta, { headers: CABECERAS });
  if (!respuesta.ok) {
    throw new Error('La API respondió ' + respuesta.status);
  }
  return await respuesta.json();
}

// Descarga la imagen de una obra desde el servidor de imágenes del museo
async function pedirImagen(imageId) {
  const respuesta = await fetch(`${IMAGENES}/${imageId}/full/843,/0/default.jpg`, { headers: CABECERAS });
  if (!respuesta.ok) {
    throw new Error('El servidor de imágenes respondió ' + respuesta.status);
  }
  return Buffer.from(await respuesta.arrayBuffer());
}

// Listado de gatos de todas las épocas, paginado
app.get('/', async (req, res) => {
  try {
    const actual = Math.max(1, parseInt(req.query.page) || 1);
    const json = await pedirApi(
      `/artworks/search?query[term][subject_ids]=${TEMA_ID}&fields=id,title,artist_title,image_id&limit=${POR_PAGINA}&page=${actual}`
    );

    res.render('index', {
      obras: json.data,
      totalObras: json.pagination.total,
      paginaActual: actual,
      totalPaginas: json.pagination.total_pages
    });
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

// Detalle de una obra: imagen ampliada y ficha
app.get('/obra/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(404).send('Obra no encontrada');
    }

    const json = await pedirApi(`/artworks/${id}?fields=${CAMPOS}`);

    res.render('detalle', { obra: json.data });
  } catch (error) {
    res.status(500).send('Error: ' + error.message);
  }
});

// Imagen de una obra, servida desde aquí porque el navegador no puede pedirla directamente
app.get('/imagen/:imageId', async (req, res) => {
  try {
    if (!/^[0-9a-f-]{36}$/.test(req.params.imageId)) {
      return res.status(404).send('Imagen no encontrada');
    }
    const imagen = await pedirImagen(req.params.imageId);
    res.type('jpg').send(imagen);
  } catch (error) {
    res.status(502).send('Error: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
