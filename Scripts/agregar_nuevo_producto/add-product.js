// Función para mostrar mensajes de error en el div
function mostrarError(mensaje) {
  const errorDiv = document.querySelector('[data-att-input-error]');
  errorDiv.textContent = mensaje;
}

// Seleccionamos el formulario utilizando el atributo de datos
const nuevoProductoForm = document.querySelector('[data-att-new-product-form]');

// Agregamos un evento de escucha para el envío del formulario
nuevoProductoForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del envío del formulario

  // Obtenemos los valores de los campos de entrada utilizando atributos de datos
  const urlImagen = nuevoProductoForm.querySelector('[data-url-imagen]').value;
  const categoria = nuevoProductoForm.querySelector('[data-categoria]').value;
  const nombre = nuevoProductoForm.querySelector('[data-nombre]').value;
  const precio = nuevoProductoForm.querySelector('[data-precio]').value;
  const descripcion = nuevoProductoForm.querySelector('[data-descripcion]').value;

  // Validaciones
  if (urlImagen === '' || nombre === '' || precio === '' || descripcion === '') {
    // Si alguno de los campos está vacío, mostramos un mensaje de error
    mostrarError('Por favor, complete todos los campos.');
    return;
  }

  if (urlImagen === '' && categoria ==='' && nombre==='' && precio==='' && decripcion==='' ){
    mostrarError('Los campos están vacíos')
    return;
  }

  // Validación de la imagen (puedes agregar más validaciones si es necesario)
  if (!urlImagen.endsWith('.jpg') && !urlImagen.endsWith('.png')) {
    mostrarError('La URL de la imagen debe ser un enlace a un archivo .jpg o .png');
    return;
  }

  // Validación de la longitud del nombre y descripción
  if (nombre.length > 20 || descripcion.length > 150) {
    mostrarError('El nombre debe tener un máximo de 20 caracteres y la descripción un máximo de 150 caracteres.');
    return;
  }

  // Validación del precio (solo números)
  if (isNaN(parseFloat(precio))) {
    mostrarError('El precio debe ser un número válido.');
    return;
  }

  // Si llegamos a este punto, significa que los datos son válidos, por lo que eliminamos cualquier mensaje de error anterior
  const errorDiv = document.querySelector('[data-att-input-error]');
  errorDiv.textContent = '';

  // Creamos un objeto que representa el nuevo producto
  const nuevoProducto = {
    urlImagen,
    categoria,
    nombre,
    precio: parseFloat(precio),
    descripcion
  };

  try {
    // Realizamos una solicitud fetch para agregar un nuevo producto al servidor
    const response = await fetch('http://localhost:4000/productos', {
      method: 'POST', // Usamos el método POST para agregar un nuevo producto
      headers: {
        'Content-Type': 'application/json', // Indicamos que estamos enviando datos JSON
      },
      body: JSON.stringify(nuevoProducto), // Convertimos el objeto en una cadena JSON y lo enviamos en el cuerpo de la solicitud
    });

    if (response.ok) {
      console.log('Producto agregado exitosamente'); // Si la respuesta del servidor es exitosa, mostramos un mensaje de éxito
      nuevoProductoForm.reset(); // Restablecemos el formulario para borrar los campos
    } else {
      console.error('Hubo un error al agregar el producto'); // Si la respuesta del servidor no es exitosa, mostramos un mensaje de error
    }
  } catch (error) {
    console.error('Hubo un error:', error); // Si hay algún error en la solicitud, lo capturamos y mostramos un mensaje de error
  }
});


