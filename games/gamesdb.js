const mysql = require('mysql2');
const db = require('../db');

/* GET BODY TO ASSIGN TO Player1 or Player2's SCORES */
const assignData = function (body, i) {
    var player = {playerId: 0, nbShot: 0, nbPocket: 0, nbFault: 0};
    console.log (body.player1.nbShot);
    if (i==1) {
        player.playerId = body.playerId1;
        player.nbShot = body.nbShot1;
        player.nbPocket = body.nbPocket1;
        player.nbFault = body.nbFault1;
        }
    else {
        player.playerId = body.playerId2;
        player.nbShot = body.nbShot2;
        player.nbPocket = body.nbPocket2;
        player.nbFault = body.nbFault2;
        };

    return player;
};

/* SAVE A GAME */
const create = function (player1, player2) {
    let strreq = 'INSERT INTO game \
    (usr_id1, usr_id2, gam_shot1, gam_shot2, gam_pocket1, gam_pocket2, gam_foul1, gam_foul2) \
    VALUES (' + player1.playerId + ',' + player2.playerId + ',' + player1.nbShot + ',' + player2.nbShot + ',' + player1.nbPocket + ',' + player2.nbPocket + ',' + player1.nbFault + ',' + player2.nbFault +  ')';
    
    return (db.execSQL(strreq));
};

module.exports ={
    create
}