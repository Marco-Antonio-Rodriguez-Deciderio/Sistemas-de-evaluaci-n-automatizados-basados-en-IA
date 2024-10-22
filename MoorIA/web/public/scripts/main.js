let isRegisterActive = false;

        // DOM Elements
        const formContainer = document.getElementById('formContainer');
        const switchContainer = document.getElementById('switchContainer');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const switchTitle = document.getElementById('switchTitle');
        const switchText = document.getElementById('switchText');
        const switchButton = document.getElementById('switchButton');
        const loginFormElement = document.getElementById('loginFormElement');
        const registerFormElement = document.getElementById('registerFormElement');

        // Toggle between login and register forms
        function toggleForm() {
            isRegisterActive = !isRegisterActive;
            
            // Toggle form visibility
            loginForm.classList.toggle('hide');
            registerForm.classList.toggle('hide');
            
            // Toggle slides
            formContainer.classList.toggle('slide-right');
            switchContainer.classList.toggle('slide-left');
            
            // Update switch container text
            if (isRegisterActive) {
                switchTitle.textContent = '¿Ya tienes una cuenta?';
                switchText.textContent = 'Inicia sesión con tu cuenta para acceder';
                switchButton.textContent = 'Iniciar Sesión';
            } else {
                switchTitle.textContent = '¿Eres nuevo aquí?';
                switchText.textContent = 'Regístrate para crear una cuenta';
                switchButton.textContent = 'Registrarse';
            }
        }

        // Handle form submissions
        loginFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(loginFormElement);
            const loginData = {
                email: formData.get('email'),
                password: formData.get('password')
            };
            console.log('Login:', loginData);
            // Aquí implementarías la lógica de login
        });

        registerFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(registerFormElement);
            const registerData = {
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            };
            console.log('Register:', registerData);
            // Aquí implementarías la lógica de registro
        });

        // Add click event to switch button
        switchButton.addEventListener('click', toggleForm);