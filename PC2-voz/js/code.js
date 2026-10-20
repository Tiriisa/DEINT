const reconocimiento = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

reconocimiento.lang = "es-ES";

reconocimiento.onresult = (evento) => {
    const parrafo = document.createElement('p');
    parrafo.textContent = evento.results[0][0].transcript;
    document.getElementById("texto").append(parrafo);
};
document.getElementById("btn-escuchar").addEventListener("click", () => reconocimiento.start());