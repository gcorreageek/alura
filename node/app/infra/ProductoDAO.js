function ProductoDAO(connection){
    this._connection=connection;
}
ProductoDAO.prototype.lista = function(llamandoo){
    this._connection.query('select * from produtos',llamandoo);
}
ProductoDAO.prototype.salva = function(produto,callback){
    this._connection.query('insert into produtos set ?',produto,callback);
}

module.exports = function(){
    return ProductoDAO;
}