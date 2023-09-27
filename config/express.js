// Jorge Enrique Oviedo Samaniego
// Student ID: 301254998
// 27 09 2023

let express = require('express'),
//morgan = require('morgan'),
//compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');


module.exports = function () {
    var app = express();


    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', './views/pages');
    app.set('view engine', 'ejs');
     app.use('/', require('../routes/index.server.routes.js'));
    //require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));
    return app;
};