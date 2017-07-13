var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController',function(){
    beforeEach(function(done){
        var connection = express.infra.conexionFactory();
        connection.query("delete from produtos", function(ex,result){
            if(!ex){
                done();
            }
        });

    });
    it('#listagem json',function(done){
        request.get('/productos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });

    it('#cadastro de novo produto com dados invalidos',function(done){
        request.post('/produtos')
        .send({titulo:"",descricao:"novo livro",preco:20.50})
        .expect(400,done);
    });
    it('#cadastro de novo produto com dados validos',function(done){
        request.post('/produtos')
        .send({titulo:"prueba de nuevo producto test",descricao:"novo livro",preco:20.50})
        .expect(302,done);
    });
});

/*var http = require('http');
var assert = require('assert');
describe('#ProductosCOntroller', function(){
    it('#listagem json',function(funcccionDeFinalizacion){
        var configuracoes = {
            hostname: 'localhost',
            port:3000,
            path:'/produtos',
            method:'post',
            headers: {
                'Accept':'application/json'
            }
        };
        http.get(configuracoes,function(res){
            assert.equal(res.statusCode ,400);
            assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
    
            funcccionDeFinalizacion();
        });
    })

});*/