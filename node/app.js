var app = require("./config/express")();

app.get('/productos',function(req,res){
    console.log("atendendo a 3344");
    res.render('productos/listadeproductos');
});

app.listen(3000,function(){
    console.log('Servidor EXPRESS');
});

