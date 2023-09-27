const productosContainer = document.querySelector('[data-attribute-ver-consolas]');
const categoriaFiltrada = 'Consolas'; // Categoría que deseas filtrar

fetch('https://fake-api-alura-geek-delta.vercel.app/productos')
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
      if (producto.categoria === categoriaFiltrada) {
        const productoBox = document.createElement('div');
        productoBox.className = 'todos-los-productos-box';

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'todos-los-productos-box-button';           

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

        productoBox.appendChild(buttonContainer);
        productoBox.appendChild(imagenElement);
        productoBox.appendChild(nombreElement);
        productoBox.appendChild(precioElement);

        productosContainer.appendChild(productoBox);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
