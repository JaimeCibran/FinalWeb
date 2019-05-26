var header = document.querySelector('header');
var boton = document.querySelector('#burger');
boton.addEventListener('click', onClick);

function onClick(e) {

header.classList.toggle('open');
}
