const express = require('express');
const app = express();

// parse user input
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Sobreescribe el método de envío
let methodOverride = require('method-override');
// sobreescribe en la variable de action _method
app.use(methodOverride('_method'));

const webRoutes = require('./routes/web')
const appConfigs = require('./configs/app')

app.use('/', webRoutes);

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({ extname: extNameHbs });
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.listen(appConfigs.port, () => {
    console.log("The app is running on port " +
        appConfigs.port)
});