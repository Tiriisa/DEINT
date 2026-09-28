class Ficha {
    constructor(fuente, titulo){
        this.fuente = fuente;
        this.titulo = titulo;
        this.crear();
    }

    crear(){
        //alert("Hola");
        const seccion = document.createElement('section');
        seccion.classList.add('ficha')

        const figura = document.createElement('figure');
        const imagen = document.createElement('img');

        imagen.setAttribute('src', this.fuente)
        imagen.setAttribute('alt', this.titulo)
        
        seccion.append(figura);
        document.getElementById("galeria").append(seccion)


        const pieFoto = document.createElement('figcaption');
        pieFoto.textContent = this.titulo;

        figura.append(imagen, pieFoto);

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
