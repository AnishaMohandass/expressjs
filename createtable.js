var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sample"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    var sql = "create table data (id int, name varchar(50))";
    con.query(sql, function(err,result){
        if (err) throw err;
        console.log("Table created");
    });
});