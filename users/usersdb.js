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
const update = function (body) {
    let strreq = 'UPDATE user SET usr_name = "' + body.name + '" WHERE usr_id=' + body.id;
    console.log (strreq);
    return (db.execSQL(strreq));
};

/* INSERT A USER */
const create = function (body) {
    let strreq = 'INSERT INTO user (usr_name) VALUES ("' + body.name  +  '")';
    return (db.execSQL(strreq));
};

module.exports ={
    getone,
    getall,
    update,
    create
}