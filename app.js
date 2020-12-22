const express = require('express');
const app = express();

// EJS
app.set('view engine','ejs')

app.listen(9090, console.log('Server running on PORT 9090'));

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', { root: __dirname }); //params kedua root direktori
  // ejs jadi berubah
  res.render('index')
});

app.get('/add-item', (req, res) => {
  res.render('add-item')
});

// 404 file => harus tarok di paling bawah
app.use((req, res) => {
  res.render('404')
});
