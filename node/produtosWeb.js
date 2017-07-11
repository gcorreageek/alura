var http = require("http");

var puerto = 3000;
var host = 'localhost';
var server = http.createServer( function(req,resp){
    console.log('==>'+req.url);
    if(req.url=='/productos'){
        resp.end("<html><head></head><body><h1>Lista de Productos!<h1></body></html>");
    }else{
        resp.end("<html><head></head><body><h1>Hola Server!<h1></body></html>");
    }
    
}).listen(puerto,host);

 
console.log('Servidor '+host+':'+puerto);