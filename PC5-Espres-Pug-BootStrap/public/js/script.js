const boton = document.createElement('button');
boton.setAttribute('type', 'button');
boton.setAttribute('data-bs-dismiss', 'modal');
boton.setAttribute('aria-label', 'Close');
boton.classList.add('btn-close');
boton.querySelector('modal-header').append(boton);