const editarProducto = ()=>{

editarButton.addEventListener('click', () => {
    const productId = producto.id; // Obtén el ID del producto que se está editando
  
    // Obtén los datos del producto que se va a editar
    const productoAEditar = data.find(item => item.id === productId);
  
    // Llena los campos del formulario de edición con los datos del producto
    document.querySelector('[data-edit-url-imagen]').value = productoAEditar.urlImagen;
    document.querySelector('[data-edit-categoria]').value = productoAEditar.categoria;
    document.querySelector('[data-edit-nombre]').value = productoAEditar.nombre;
    document.querySelector('[data-edit-precio]').value = productoAEditar.precio;
    document.querySelector('[data-edit-descripcion]').value = productoAEditar.descripcion;
  
    // Puedes mostrar el formulario de edición aquí si está oculto
  })};