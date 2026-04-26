console.log("Archivo correcto ;)");

const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Lista de películas' });
});

app.post('/peliculas', (req, res) => {
    const nuevaPelicula = req.body;
    res.json({ message: 'Película creada', pelicula: nuevaPelicula });
});

app.put('/peliculas/:id', (req, res) => {
    const id = req.params.id;
    const peliculaActualizacion = req.body;
    res.json({ message: `Película con ID ${id} actualizada`, peliculaActualizada });
});

app.delete('/peliculas/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `Película con ID ${id} eliminada` });
});

// Servidor
app.listen(port, () => {
    console.log(`Servidor en puerto: ${port}`);
});