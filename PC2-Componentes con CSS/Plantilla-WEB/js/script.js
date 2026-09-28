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

const estilos = document.createElement('style')
estilos.textContent = '#galeria{background-color:red}'
document.head.append(estilos);


const fotos =[
        {fuente: 'https://picsum.photos/id/237/400/300', titulo: "Perro"},
        {fuente: 'https://picsum.photos/id/238/400/300', titulo: "Montaña"},
        {fuente: 'https://picsum.photos/id/239/400/300', titulo: "Ciudad"},
        {fuente: 'https://picsum.photos/id/314/400/300', titulo: "Café"}
]

fotos.forEach(foto => {
    new Ficha(foto.fuente, foto.titulo);
});
