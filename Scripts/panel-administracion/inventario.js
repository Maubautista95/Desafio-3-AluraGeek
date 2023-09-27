const productosContainer = document.querySelector('[data-attribute-todos-los-productos]');
const editForm = document.querySelector('[data-edit-form]'); // Asegúrate de seleccionar el formulario de edición
let productoAEditar = {}; // Variable global para mantener el producto que se está editando

fetch('https://fake-api-alura-geek-delta.vercel.app/productos')
  .then(response => response.json())
  .then(data => {
    data.forEach(producto => {
      const productoBox = document.createElement('div');
      productoBox.className = 'todos-los-productos-box';
      productoBox.setAttribute('data-producto-id', producto.id);

      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'todos-los-productos-box-button';

      const eliminarButton = document.createElement('button');
      eliminarButton.className = 'todos-los-productos-eliminar';

      const editarButton = document.createElement('button');
      editarButton.className = 'todos-los-productos-editar';

      buttonContainer.appendChild(eliminarButton);
      buttonContainer.appendChild(editarButton);

      eliminarButton.addEventListener('click', () => {
        const productId = producto.id;
        eliminarProducto(productId);
      });

      editarButton.addEventListener('click', () => {
        editarProducto(producto);
      });

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

      const idElement = document.createElement('p');
      idElement.className = 'todos-los-productos-box-id';
      idElement.textContent = `#${producto.id}`;

      productoBox.appendChild(buttonContainer);
      productoBox.appendChild(imagenElement);
      productoBox.appendChild(nombreElement);
      productoBox.appendChild(precioElement);
      productoBox.appendChild(idElement);

      productosContainer.appendChild(productoBox);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

function eliminarProducto(productId) {
  fetch(`https://fake-api-alura-geek-delta.vercel.app/productos/${productId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        const productoAEliminar = document.querySelector(`[data-producto-id="${productId}"]`);
        if (productoAEliminar) {
          productosContainer.removeChild(productoAEliminar);
        }
      } else {
        console.error('Error al eliminar el producto:', response.status);
      }
    })
    .catch(error => {
      console.error('Error al eliminar el producto:', error);
    });
}

const tituloEditForm = document.querySelector('[data-edit-title]');

function editarProducto(producto) {
  // Establece el producto actualmente en edición

  
  productoAEditar = producto;

  // Llena los campos del formulario de edición con los datos del producto
  tituloEditForm.textContent = `Editando ${producto.nombre}`;
  document.querySelector('[data-edit-url-imagen]').value = producto.urlImagen;
  document.querySelector('[data-edit-categoria]').value = producto.categoria;
  document.querySelector('[data-edit-nombre]').value = producto.nombre;
  document.querySelector('[data-edit-precio]').value = producto.precio;
  document.querySelector('[data-edit-descripcion]').value = producto.descripcion;

  // Muestra el formulario de edición
  editForm.classList.remove('editar-not-displayed');
}

// Agrega un evento submit al formulario de edición
editForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtiene los valores actualizados de los campos del formulario
  const urlImgEditarInput = document.querySelector('[data-edit-url-imagen]');
  const categoriaEditarInput = document.querySelector('[data-edit-categoria]');
  const nombreEditarInput = document.querySelector('[data-edit-nombre]');
  const precioEditarInput = document.querySelector('[data-edit-precio]');
  const descripcionEditarInput = document.querySelector('[data-edit-descripcion]');

  // Creamos un objeto con los datos actualizados
  const datosActualizados = {
    urlImagen: urlImgEditarInput.value,
    categoria: categoriaEditarInput.value,
    nombre: nombreEditarInput.value,
    precio: precioEditarInput.value,
    descripcion: descripcionEditarInput.value
  };

  // Obtén el ID del producto actualmente en edición
  const productId = productoAEditar.id;

  // Realizamos una solicitud PUT para actualizar el producto en el servidor
  fetch(`https://fake-api-alura-geek-delta.vercel.app/productos/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datosActualizados)
  })
    .then(response => response.json())
    .then(productoActualizado => {
      console.log('Producto actualizado:', productoActualizado);
      editForm.classList.add('editar-not-displayed');        
    })
    .catch(error => {
      console.error('Error al actualizar el producto:', error);
    });
});
