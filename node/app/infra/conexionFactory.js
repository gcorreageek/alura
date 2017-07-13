var mysql = require('mysql');
createDbConexion = function(){
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'mysql',
                database:'pruebas'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'mysql',
                database:'pruebas_test'
        });
    }

}
module.exports = function(){
    return createDbConexion;
}