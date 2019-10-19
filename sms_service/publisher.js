const config = require('./config');
var connection = require('amqplib').connect(config.rabbitUrl);
var queue = config.workerQueue;

// Publisher
connection.then(function (conn) {
    return conn.createChannel();
}).then(function (ch) {
    return ch.assertQueue(queue).then(function (ok) {
        return ch.sendToQueue(queue, Buffer.from('something to do'), {
            durable: true,
        });
    });
}).catch(console.warn);