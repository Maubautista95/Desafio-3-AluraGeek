// Selecciona los elementos del DOM
const searchBar = document.querySelector('[data-attribute-barra]');
const searchButton = document.querySelector('[data-attribute-lupa]');


searchButton.addEventListener('click', () => {

    searchBar.classList.add('header-barra-visible');
});

searchBar.addEventListener('blur', () => {

    searchBar.classList.remove('header-barra-visible');
});

document.body.addEventListener('click', (event) => {
    // Verifica si el elemento clicado no es la barra de búsqueda ni el botón de búsqueda
    if (event.target !== searchBar && event.target !== searchButton) {
        searchBar.classList.remove('header-barra-visible');
    }
});


searchBar.addEventListener('keyup',(event) => {

    if (event.key=== 'Enter'){
    // Obtiene el término de búsqueda ingresado por el usuario
    const searchTerm = searchBar.value.toLowerCase().trim();

    // Redirige al usuario a la página de resultados con el término de búsqueda como parámetro
    window.location.href = `resultados-busqueda.html?query=${encodeURIComponent(searchTerm)}`;
}
}); 