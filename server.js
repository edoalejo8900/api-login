const express = require('express');

const app = express();

const port = 3000;

// Permite recibir información en formato JSON
app.use(express.json());

// Permite utilizar los archivos de la carpeta public
app.use(express.static('public'));

// Página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Usuario de prueba
const usuarioRegistrado = {
    usuario: 'edison',
    password: '123456'
};

// Inicio de sesión
app.post('/login', (req, res) => {

    const { usuario, password } = req.body;

    if (
        usuario === usuarioRegistrado.usuario &&
        password === usuarioRegistrado.password
    ) {
        return res.status(200).json({
            mensaje: 'Autenticación satisfactoria'
        });
    }

    res.status(401).json({
        mensaje: 'Usuario o contraseña incorrectos'
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});