const searchButton = document.querySelector('[data-attribute-lupa]');
const barraBusqueda = document.querySelector('[data-attribute-barra]');


const barraVisible = () =>{

    barraBusqueda.classList.toggle('header-barra-visible');
    barraBusqueda.focus();

}

const barraInvisible = () =>{

    barraBusqueda.classList.remove('header-barra-visible');
}

searchButton.addEventListener('click', barraVisible);
barraBusqueda.addEventListener('blur', barraInvisible);