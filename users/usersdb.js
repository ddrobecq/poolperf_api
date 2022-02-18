const mysql = require('mysql2');
const db = require('../db');

/* GET ONE USER BY ID */
const getone = function (id) {
    let strreq = 'SELECT * FROM user WHERE usr_id=' + id;
    return (db.execSQL(strreq));
};

/* GET ALL USERS */
const getall = function () {
    let strreq = 'SELECT * FROM user';
    return (db.execSQL(strreq));
};

/* UPDATE A USER */
const update = function (id, body) {
    console.log (body, id);
    let strreq = 'UPDATE user SET usr_name = "' + body.usr_name + '" WHERE usr_id=' + id;
    console.log (strreq);
    return (db.execSQL(strreq));
};

/* INSERT A USER */
const create = function (body) {
    let strreq = 'INSERT INTO user (usr_name) VALUES ("' + body.name  +  '")';
    return (db.execSQL(strreq));
};

/* GET ALL games FOR A GIVEN user */
const getallGames = function (usr_id) {
    let strreq = 'SELECT * FROM game WHERE (usr_id1=' + usr_id + ') OR (usr_id2=' + usr_id + ')';
    return (db.execSQL(strreq));
};

module.exports ={
    getone,
    getall,
    update,
    create,
    getallGames
}