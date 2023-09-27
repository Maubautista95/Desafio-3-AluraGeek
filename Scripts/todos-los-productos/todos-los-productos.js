const productosContainer = document.querySelector('[data-attribute-todos-los-productos]');

fetch('https://fake-api-alura-geek-delta.vercel.app/productos')
  .then(response => response.json())
  .then(data => { 
    data.forEach(producto => {
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

      const categoriaElement = document.createElement('p');
      categoriaElement.textContent = producto.categoria;

      productoBox.appendChild(imagenElement);
      productoBox.appendChild(nombreElement);
      productoBox.appendChild(precioElement);
      productoBox.appendChild(categoriaElement);

      productosContainer.appendChild(productoBox);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
  