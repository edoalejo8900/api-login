const btnLogin = document.getElementById('btnLogin');

const usuario = document.getElementById('usuario');

const password = document.getElementById('password');

const mensaje = document.getElementById('mensaje');


// Detectamos cuando el usuario presiona el botón
btnLogin.addEventListener('click', async () => {

    // Obtenemos los valores escritos por el usuario
    const usuarioIngresado = usuario.value;

    const passwordIngresada = password.value;


    // Verificamos que los campos no estén vacíos
    if (!usuarioIngresado || !passwordIngresada) {

        mensaje.textContent = 'Debe ingresar usuario y contraseña';

        return;
    }


    try {

        // Enviamos los datos a nuestra API REST
        const respuesta = await fetch('/login', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                usuario: usuarioIngresado,
                password: passwordIngresada
            })

        });


        // Convertimos la respuesta de la API a JSON
        const datos = await respuesta.json();


        // Mostramos el mensaje recibido
        mensaje.textContent = datos.mensaje;


    } catch (error) {

        // Mostramos un mensaje si no se puede conectar con la API
        mensaje.textContent = 'No se pudo conectar con el servidor';

        console.error(error);

    }

});