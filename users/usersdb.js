const db = require('../db');

/* GET ONE USER BY ID */
const getone = function (id) {
    let strreq = 'SELECT * FROM user WHERE usr_id=' + id;
    return (db.execSQL(strreq));
};

/* GET ALL USERS */
const getall = function () {
    let strreq = 'SELECT usr_id FROM user';
    return (db.execSQL(strreq));
};

/* UPDATE A USER */
const update = function (id, body) {
    let strreq = 'UPDATE user \
    SET usr_name = "' + body.usr_name + '", \
    usr_avatar = ' + body.usr_avatar + '" WHERE usr_id=' + id;
    console.log (strreq);
    return (db.execSQL(strreq));
};

/* INSERT A USER */
const create = function (body) {
    let strreq = 'INSERT INTO user (usr_name) VALUES ("' + body.usr_name  +  '")';
    return (db.execSQL(strreq));
};

/* GET ALL games FOR A GIVEN user */
const getallGames = function (usr_id) {
    let strreq = 'SELECT * FROM game WHERE (usr_id=' + usr_id + ')';
    return (db.execSQL(strreq));
};

/* GET AVG FOR A GIVEN user */
const getStats = function (usr_id) {
    let strreq = 'SELECT (sum(gam_pocket)/sum(gam_shot)) as avgPocket, \
    (sum(gam_foul)/sum(gam_shot)) as avgFoul, \
    min(gam_foul/gam_shot) as minFoul, \
    max(gam_foul/gam_shot) as maxFoul , \
    min(gam_pocket/gam_shot) as minPocket, \
    max(gam_pocket/gam_shot) as maxPocket \
    FROM game WHERE (usr_id=' + usr_id + ') \
    GROUP BY usr_id';
    return (db.execSQL(strreq));
};

module.exports ={
    getone,
    getall,
    update,
    create,
    getallGames,
    getStats
}