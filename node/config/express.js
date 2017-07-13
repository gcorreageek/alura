var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
module.exports = function(){
    var app = express();
    app.use(express.static('./app/public'));
    app.set('view engine','ejs');
    app.set('views','./app/views');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    load('rutas',{cwd: 'app'}).then('infra').into(app);

    app.use(function(req,res,next){
        res.status(404).render('errors/404');
        next();
    });


    /*app.use(function(error, req,res,next){
       if(process.env.NODE_ENV == 'production'){
        res.status(500).render('errors/500');
       }
        next(error);
    });*/

    return app;
}