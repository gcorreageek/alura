
module.exports = function(app){
    listaProductos = function(req,res,next){
        var connection = app.infra.conexionFactory();
        var produtosBanco = new app.infra.ProductoDAO(connection);

        produtosBanco.lista(function(err,results){
            if(err){
                return next(err);
            }
            res.format({
                html: function(){
                    res.render('productos/listadeproductos',{lista:results});
                },
                json: function(){
                    res.json(results)
                }
            });
        });
        connection.end();
    };

    app.get('/productos',listaProductos);
    app.get('/producctos/form',function(req,res){
        res.render('productos/form',
            {errosValidacao:{},produto:{}});
    });
    app.post('/produtos',function(req,res){
        var produto = req.body;

        req.assert('titulo','Titulo es obligatorio').notEmpty();
        req.assert('preco','Formato inválido').isFloat();

        var errors = req.validationErrors();
        if(errors){
            //res.render('productos/form',{errosValidacao:errors,produto:produto});
            res.format({
                html: function(){
                    res.status(400).render('productos/form',{errosValidacao:errors,produto:produto});
                },
                json: function(){
                    res.status(400).json(errors);
                }
            });
            return;
        }

        var connection = app.infra.conexionFactory();
        var produtosBanco = new app.infra.ProductoDAO(connection);


        produtosBanco.salva(produto,function(erros,resultados){
            res.redirect('/productos');
        });
        connection.end();

        
    });



}


 