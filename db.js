const mysql = require('mysql2');
const con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPWD,
    database: process.env.DBNAME
  });
  

/* INIT CONNECTION DATABASE */
const dbinit = function () {
    con.connect(function(err) {
        if (err) console.log (err.message)
        else console.log("Connecté à la base de données " + con.config.database + "@" + con.config.host);
    });
    return con;
};

/* EXECUTE SQL QUERY WITH A PROMISE */
const execSQL = function (strreq) {
    if (dbinit()) {
        let p = new Promise (function (res, rej) {
            con.query(strreq, function (err, result) {
                if (err) rej (err); 
                else res (result); 
            });        
        });
        return p;
    }
    else return false;
};

module.exports ={
    dbinit,
    execSQL
}