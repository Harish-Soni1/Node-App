var connection = require('./postgreSQL');
var appConstants = require('./appConstants');

exports.executeQuery = function (sp, data, res, callback) {
    connection.query(sp, data, function (err, rows, fields) {
        if (!err) {
            callback(rows);
        }
        else {
            console.log("erron in database: ",err);
            res.status(503).json({ status: appConstants.ServerError_StatusCode, message: err });
        }
    });
}

exports.executeRawQuery = function (sp, data, callback) {
    connection.query(sp, data, function (err, rows, fields) {
        if (!err) {
            callback(err, rows);
        }
        else {
            console.log("erron in database: ",err);
            res.status(503).json({ status: appConstants.ServerError_StatusCode, message: err });
        }
    });
}