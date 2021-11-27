const path = require("path");

const express = require('express');
const bodyParser = require('body-parser');

const mainRoutes = require('./routers/main');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');    //views is already the default value

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRoutes.routes);

app.use((req, res) => {
  res.status(404).render('404', { pageTitle: 'Not found' });
});

app.listen(3000);