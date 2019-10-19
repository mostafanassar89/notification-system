const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require("body-parser");

const config = require("./config/config");
const notificationRoutes = require("./routes/notificationRoutes");
const userRoutes = require("./routes/userRoutes");
const queueService = require('./util/queueService');


//connect to database
mongoose.connect(config.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true, dbName: config.DB_NAME });

//init server
const app = express()
const port = 3000
app.use(bodyParser.json());

app.use(userRoutes)
app.use(notificationRoutes)

app.use('/doc', express.static(__dirname + '/public/doc'));

queueService.init().then(() => app.listen(port)).catch(process.exit)
module.exports = app;