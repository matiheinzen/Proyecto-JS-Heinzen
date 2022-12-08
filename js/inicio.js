/*inicio*/

const modalContainer = document.querySelector('#modal-container')
const titulo = document.querySelector('#titulo');
const explicacion =document.querySelector('#explicacion');
const inputNombre = document.querySelector('input[type=text]');
inputNombre.addEventListener('change', () =>{
    const usuario = inputNombre.value
    modalContainer.classList.add('modal-container-active')
    titulo.innerText ='Bienvenidx ' + usuario.toLowerCase() + ' a H4 Libreria';
    explicacion.innerText = usuario + " en la pagina Articulos podras encontrar toda la variedad de lo que buscas";
});

/*fin inicio*/
