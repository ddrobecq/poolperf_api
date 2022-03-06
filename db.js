const mysql = require('mysql2');
const con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPWD,
    database: process.env.DBNAME
  });
  
/* INIT CONNECTION DATABASE */
function dbinit () {
    con.connect(function(err) {
        if (err){
            console.log (err.message);
            return false;
        }
        else console.log("Connecté à la base de données " + con.config.database + "@" + con.config.host);
    });
    return true;
};

/* EXECUTE SQL QUERY WITH A PROMISE */
const execSQL = function (strreq) {
    let p = new Promise (function (res, rej) {
        con.query(strreq, function (err, result) {
            if (err) rej (err); 
            else{
                res (result); 
            }
        });        
    });
    return p;
};

module.exports ={
    dbinit,
    execSQL
}