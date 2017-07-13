module.exports = function(app) {
    app.get("/",function(req, res) {
        var connection = app.infra.conexionFactory();
        var produtos = new app.infra.ProductoDAO(connection);

        produtos.lista(function(error,results,fields){
            res.render('home/index',{livros:results});
        });
        connection.end();

    });
}