/*El formulario debe permitir el acceso a usuarios autenticados en el sistema, no olvide que el formulario debe tener validaciones de
 campo.

    Campo de correo electrónico: no debe estar en blanco ni vacío.
    Debe estar en formato de correo electrónico que contenga el carácter especial @ seguido de un dominio o proveedor seguido de un 
    punto (.)
    Ejemplo: text@text.com
    Campo de contraseña: no debe estar en blanco ni vacío.
    Botón de inicio de sesión: si el usuario está autenticado, debe redirigir al menú de administrador, de lo contrario debe mostrar un
    mensaje de error.

*/// Agrega esta función para verificar si las credenciales coinciden con algún usuario en la base de datos

const form = document.querySelector('[data-att-sesion-formulario]');
const emailInput = document.querySelector('[data-att-sesion-email]');
const passwordInput = document.querySelector('[data-att-sesion-password]');
const button = document.querySelector('[data-att-sesion-button]')
const errorDiv = document.querySelector('[data-att-error-div]');

function verificarCredenciales(email, password) {
  // Realiza una solicitud para obtener la lista de usuarios desde la base de datos
  return fetch('http://localhost:4000/usuarios')
    .then(response => response.json())
    .then(usuarios => {
      // Itera sobre la lista de usuarios y verifica si las credenciales coinciden
      for (const usuario of usuarios) {
        if (usuario.email === email && usuario.password === password) {
          return true; // Las credenciales coinciden
        }
      }
      return false; // Las credenciales no coinciden con ningún usuario
    });
}

const verificacionCompleta =  (event) =>{

  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === '' & password ==='') {
    errorDiv.textContent = 'Por favor, ingrese su correo electrónico y contraseña.';
    return;
  }

  if (email === '') {
    errorDiv.textContent = 'Por favor, ingrese su correo electrónico.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorDiv.textContent = 'El correo electrónico no es válido.';
    return;
  }

  if (password === '') {
    errorDiv.textContent = 'Por favor, ingrese su contraseña.';
    return;
  }

  // Verificar las credenciales con la base de datos
  verificarCredenciales(email, password)
  .then(credencialesCoinciden => {
    if (credencialesCoinciden) {
      // Credenciales válidas, redirigir al menú de administrador
      window.location.href = 'panel-administracion.html';
    } else {
      // Credenciales no válidas, mostrar un mensaje de error
      errorDiv.textContent = 'Credenciales incorrectas. Por favor, inténtelo nuevamente.';
    }
  })
  .catch(error => console.error('Error verificando credenciales:', error));
};
 


// Agrega esta parte al evento submit del formulario
form.addEventListener('submit', verificacionCompleta);
button.addEventListener('click', verificacionCompleta);
//emailInput.addEventListener('click', verificacionCompleta);
//passwordInput.addEventListener('click', verificacionCompleta);

emailInput.addEventListener('keyup',(event) => {

  if (event.key=== 'Enter'){
  verificacionCompleta(event);
  }

   
})

passwordInput.addEventListener('keyup',(event) => {

  if (event.key=== 'Enter'){
  verificacionCompleta(event);
  }

   
})

