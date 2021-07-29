var postgreSQL = require('pg').Pool;
var config=require('./config');

var connection = new postgreSQL({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB,
    port: 5432,
    charset: 'utf8mb4',
    ssl: {
        rejectUnauthorized: false
    }
}, { multipleStatements: true });

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log(err);
    }
});
module.exports = connection;