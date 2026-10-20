# Gatos - Art Institute of Chicago

Aplicación web que muestra las obras catalogadas bajo el tema "cats" (gatos) en la colección del Art Institute of Chicago, de cualquier época y estilo. Los datos y las imágenes se obtienen de la [API pública del museo](https://api.artic.edu/docs/).

Es un proyecto de clase hecho con Express y Pug.

## Requisitos

- Node.js 18 o superior (se usa el `fetch` nativo)

## Instalación y uso

```bash
npm install
npm start
```

Después abre <http://localhost:3000> en el navegador.

## Qué hace

- **Listado paginado**: la portada muestra 100 obras por página en una cuadrícula tipo mosaico (Masonry), con enlaces para ir a la página anterior y a la siguiente.
- **Ficha de la obra**: al pulsar una obra se ve su imagen ampliada junto con el artista, la fecha, el lugar de origen, el estilo, la técnica, las dimensiones y la procedencia.

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Listado de obras. Admite `?page=N` para la paginación. |
| `/obra/:id` | Ficha de una obra a partir de su identificador en la API. |
| `/imagen/:imageId` | Imagen de una obra, descargada del servidor IIIF del museo y reenviada al navegador. |

## Por qué las imágenes pasan por el servidor

El museo pide que cada petición lleve la cabecera `AIC-User-Agent` para identificar la aplicación, y sin ella bloquea las imágenes. Un navegador no puede añadir esa cabecera a una etiqueta `<img>`, así que la ruta `/imagen/:imageId` hace la petición desde el servidor y devuelve el resultado.

## Estructura

```
index.js              Servidor Express: rutas y acceso a la API
views/
  index.pug           Listado paginado
  detalle.pug         Ficha de una obra
public/
  css/                Hojas de estilo (reset y estilos propios)
  js/
    code.js           Inicializa el mosaico de la portada
    masonry.pkgd.min.js
```

## Configuración

Los ajustes están como constantes al principio de [index.js](index.js):

| Constante | Valor | Para qué sirve |
| --- | --- | --- |
| `PORT` | `3000` | Puerto en el que escucha el servidor. |
| `TEMA_ID` | `TM-8806` | Identificador del tema "cats" en la API. Cambiándolo se muestra otro tema. |
| `POR_PAGINA` | `20` | Número de obras por página. |
| `CABECERAS` | `AIC-User-Agent` | Cabecera con la que la aplicación se identifica ante el museo. |

## Créditos

- Datos e imágenes: [Art Institute of Chicago API](https://api.artic.edu/docs/)
- Mosaico: [Masonry](https://masonry.desandro.com/)
