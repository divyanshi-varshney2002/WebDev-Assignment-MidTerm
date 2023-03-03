const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
mongoose.connect('mongodb://localhost:27017/articles')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
const productRoutes = require('./routes/product');
app.use(productRoutes);
const port = 5000;
app.listen(port, () => {
    console.log(`server running at port ${port}`);
});