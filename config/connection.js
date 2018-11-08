const mysql = require('mysql');



if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Jmg070181mu$ic",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    };
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;