var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

//environments
var urlencodedParser = bodyParser({extended:false});
app.use(express.urlencoded());


//to connect to mysql database
var mysql = require('mysql');
var connenction = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sample',
    port:'3306'
});


//to display the result after inserting the data
app.post('/data', function(req,res){
    var create = {
        id: req.body.id,
        name: req.body.name,
    }
    connenction.query("insert into data set ?", create, function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


//to display all data in table
app.get('/listusers', function(req,res){
    connenction.query("select * from data", function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


//to display single data
app.get('/listsingle', function(req,res){
    connenction.query("select * from data where id=204", function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
}); 


//to update data
app.get('/update', function(req,res){
    connenction.query("update data set name = 'sidharth mal' where id=201", function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

//to delete data
app.get('/delete', function(req,res){
    connenction.query("delete from data where id=206", function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});




//to enter the data
app.get('/home', function(req,res){
    res.sendFile(__dirname + "/" +"design.html");
});
var server = app.listen(8086, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host,port);
});
