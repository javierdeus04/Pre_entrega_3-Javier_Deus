const usersButton = document.getElementById('usersButton');
const registeredUsers = [
    {
        username: 'usuario1',
        password: 'contraseña1',
        email: 'email1',
        city: 'city1'
    },
];

const user = {
    username: '',
    password: ''
}


usersButton.addEventListener('click', async () => {
    const username = localStorage.getItem('username');
    if (!username) {
        const { value: formValues } = await Swal.fire({
            title: 'Acceso de Usuarios',
            html: `
                <form id="loginForm">
                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" required>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" required>
                    <button><a href="./pages/newUserForm.html">Registrar nuevo usuario</a></button>
                    <button>Olvidé la contraseña</button>
                </form>
            `,
            focusConfirm: false,
            showCloseButton: true,
            confirmButtonText: 'Iniciar sesión',

            preConfirm: () => {
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                const user = registeredUsers.find(user => user.username === username && user.password === password);
                return user ? [username, password] : Swal.showValidationMessage('Credenciales inválidas');
            }
        });

        if (formValues) {
            const username = formValues[0];
            localStorage.setItem('username', username);

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido ' + username,
                showConfirmButton: false,
                timer: 1500
            });
        }
    } else {
        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Sesión activa: ' + username,
            html: `
                <button id="logoutButton" class='btn btn-danger'>Cerrar Sesion</button>
            `,
            showConfirmButton: false,
            showCloseButton: true,
        });
    }

    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        Swal.close();
    });
});
