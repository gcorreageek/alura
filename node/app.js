var app = require("./config/express")();


//var rotasProdutos = require('./app/rutas/productos')(app);



app.listen(3000,function(){
    console.log('Servidor EXPRESS');
});

