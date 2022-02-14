const mysql = require('mysql2');
const con = mysql.createConnection({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpwd,
    database: process.env.dbname
  });

  

/* INIT CONNECTION DATABASE */
const dbinit = function () {
    con.connect(function(err) {
        if (err) console.log (err.message)
        else console.log("Connecté à la base de données MySQL!");
    });
    return con;
};

/* EXECUTE SQL QUERY WITH A PROMISE */
const execSQL = function (strreq) {
    let p = new Promise (function (res, rej) {
        con.query(strreq, function (err, result) {
            if (err) rej (err); 
            else res (result); 
        });        
    });
    return p;
};

module.exports ={
    dbinit,
    execSQL
}