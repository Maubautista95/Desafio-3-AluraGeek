// Obtiene el término de búsqueda de la URL
const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get('query');

// Realiza la búsqueda y muestra los resultados en esta página

console.log(searchTerm)

const tituloResultados = document.querySelector("[data-resultados-titulo]");

tituloResultados.textContent = `Resultados para tu búsqueda sobre ${searchTerm}:`

const resultadosContainer = document.querySelector('[data-resultados-container]');


fetch('https://fake-api-alura-geek-delta.vercel.app/productos')
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
        const productoCategoria = producto.categoria.toLowerCase();
        const productoNombre = producto.nombre.toLowerCase();

    if (productoNombre.includes(searchTerm.toLowerCase()) || productoCategoria.includes(searchTerm.toLowerCase())){
      const productoBox = document.createElement('div');
      productoBox.className = 'todos-los-productos-box';


      const imagenElement = document.createElement('img');
      imagenElement.className = 'todos-los-productos-img';
      imagenElement.src = producto.urlImagen;
      imagenElement.alt = '';

      const nombreElement = document.createElement('h3');
      nombreElement.className = 'todos-los-productos-box-h';
      nombreElement.textContent = producto.nombre;

      const precioElement = document.createElement('p');
      precioElement.className = 'todos-los-productos-precio';
      precioElement.textContent = `$${producto.precio}`;
        
      const verProductoElement = document.createElement('a')
      verProductoElement.className = 'productos-index-link';
      verProductoElement.textContent=  "Ver producto";
      verProductoElement.href="#";

      
      
      productoBox.appendChild(imagenElement);
      productoBox.appendChild(nombreElement);
      productoBox.appendChild(precioElement);
      productoBox.appendChild(verProductoElement);
      

      resultadosContainer.appendChild(productoBox);
        }
    });
  })
  .catch(error => console.error('Error fetching data:', error));