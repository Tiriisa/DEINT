const elem = document.getElementById('cajon');
const msnry = new Masonry( elem, {
  // options
  itemSelector: '#cajon figure',
  // Las columnas se definen en porcentaje en el CSS (2 en móvil, 4 desde 900px)
  percentPosition: true,
});

// Recoloca el mosaico según van llegando las imágenes
elem.querySelectorAll('img').forEach((img) => {
  img.addEventListener('load', () => msnry.layout());
});
window.addEventListener('load', () => msnry.layout());

console.log("vale");
