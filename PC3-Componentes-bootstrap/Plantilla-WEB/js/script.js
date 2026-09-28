const elemento = "#galeria";

class Ficha {
  constructor(titulo, fuente) {
    this.titulo = titulo;
    this.fuente = fuente;
    this.crear();
  }
  crear() {
    const seccion = document.createElement("section");
    seccion.classList.add("ficha");

    const figura = document.createElement("figure");
    const imagen = document.createElement("img");
    imagen.setAttribute("src", this.fuente);
    imagen.setAttribute("alt", this.titulo);

    seccion.append(figura);
    document.querySelector(elemento).append(seccion);

    const piefoto = document.createElement("figcaption");
    piefoto.textContent = this.titulo;
    figura.append(imagen, piefoto);
  }
}

const fotos =[
        {fuente: 'https://picsum.photos/id/237/200/300', titulo: "Perro"},
        {fuente: 'https://picsum.photos/id/238/200/300', titulo: "montaña"},
        {fuente: 'https://picsum.photos/id/239/200/300', titulo: "ciudad"}
]

fotos.forEach(foto => {
    new Ficha(foto.fuente, foto.titulo);
});
