process.env.NODE_ENV = "development";

var express = require('express');
var app = express();
var cors = require('cors');

var config = require('./api/common/config');
const v1 = require('./api/routes/v1');

app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));
app.use(cors());


app.use('/api/v1/', v1);

app.use("*", function (req, res, next) {
    res.send("API Not Found");
});

app.listen(config.PORT, function () {
    console.log("Node RESTful API server started on " + config.PORT);
})

module.exports = app;
