document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('#signup-email');
    const passwordInput = document.querySelector('#signup-password');
    const continueButton = document.querySelector('#signup button');
    const googleButton = document.querySelector('.google-btn');

    continueButton.addEventListener('click', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        // Aquí puedes agregar la lógica para enviar los datos al servidor
        console.log('Email:', email);
        console.log('Contraseña:', password);

        // Puedes redirigir o mostrar un mensaje de éxito aquí
        alert('Cuenta creada exitosamente.');
    });

    googleButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Aquí puedes agregar la lógica para iniciar sesión con Google
        alert('Iniciando sesión con Google...');
    });

    function validateEmail(email) {
        // Utilizamos una expresión regular sencilla para validar el formato del email
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});

function redirectToHome() {
    window.location.href = 'Inicio.html'; // Cambia a la URL de tu página de inicio
}
