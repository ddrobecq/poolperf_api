const mysql = require('mysql2');
const db = require('../db');

/* SAVE A GAME */
const create = function (player) {
    let strreq = 'INSERT INTO game \
    (usr_id, gam_shot, gam_pocket, gam_foul) \
    VALUES (' + player.playerId + ',' + player.nbShot + ',' + player.nbPocket + ',' + player.nbFoul +  ')';
    
    return (db.execSQL(strreq));
};

module.exports ={
    create
}