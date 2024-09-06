const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MEME_API_URL = process.env.MEME_API_URL;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(MEME_API_URL);
    const memes = response.data.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    res.json(randomMeme);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch meme' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
