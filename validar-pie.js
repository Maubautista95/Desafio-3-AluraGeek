document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nombre = document.getElementById("nombre");
    const mensaje = document.getElementById("mensaje");
    const enviar = document.getElementById("enviar");
    
    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validación del campo de nombre
        const nombreValue = nombre.value.trim();
        if (nombreValue === "" || nombreValue.length > 40) {
            valid = false;
            document.getElementById("nombre-error").textContent = "Ingrese un nombre válido (máximo 40 caracteres).";
        } else {
            document.getElementById("nombre-error").textContent = "";
        }

        // Validación del campo de mensaje
        const mensajeValue = mensaje.value.trim();
        if (mensajeValue === "" || mensajeValue.length > 120) {
            valid = false;
            document.getElementById("mensaje-error").textContent = "Ingrese un mensaje válido (máximo 120 caracteres).";
        } else {
            document.getElementById("mensaje-error").textContent = "";
        }

        if (!valid) {
            event.preventDefault(); // Evita que se envíe el formulario si no es válido
        }
    });
});
