const express = require('express');
const app = express();

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