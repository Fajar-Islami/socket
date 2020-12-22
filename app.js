const express = require('express');
const app = express();

app.listen(9090, console.log('Server running on PORT 9090'));

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname }); //params kedua root direktori
});

app.get('/add-item', (req, res) => {
  res.sendFile('./views/add-item.html', { root: __dirname });
});

// 404 file => harus tarok di paling bawah
app.use((req, res) => {
  res.sendFile('./views/404.html', { root: __dirname });
});
