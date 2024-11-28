const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Post } = require('./models');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/posts', async (req, res) => {
  try {
    const { name, description } = req.body;
    const post = await Post.create({ name, description });
    res.status(201).json(post);
  } catch (error) {
    console.error('Error al crear el post:', error);
    res.status(500).json({ error: 'Error al crear el post' });
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).json({ error: 'Error al obtener los posts' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Post eliminado con éxito' });
    } else {
      res.status(404).json({ error: 'Post no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    res.status(500).json({ error: 'Error al eliminar el post' });
  }
});

app.put('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const post = await Post.findByPk(id);
    if (post) {
      post.name = name || post.name;
      post.description = description || post.description;
      await post.save();
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: 'Post no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    res.status(500).json({ error: 'Error al actualizar el post' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});