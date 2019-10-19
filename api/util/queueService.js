const config = require('../config/config');

var smsQueue = config.SMS_QUEUE;
var pushQueue = config.PUSH_QUEUE;

const queueService = {};
var channel;

queueService.init = async () => {
    let connection = require('amqplib').connect(config.RABBIT_URL);
    conn = await connection
    channel = await conn.createChannel();
    await channel.assertQueue(smsQueue, {
        maxPriority: 10
    });
    await channel.assertQueue(pushQueue, {
        maxPriority: 10
    })
}
queueService.publish = (notification) => {
    queueName = getQueueName(notification.channel)
    if (queueName)
        return channel.sendToQueue(queueName, Buffer.from(JSON.stringify(notification)), {
            durable: true,
            priority: getPriority(notification.priority)
        });
}
let getQueueName = (channelName) => {
    switch (channelName) {
        case "sms":
            return smsQueue;
        case "push_notification":
            return pushQueue;
    }
    return false;
}
let getPriority = (priority) => {
    switch (priority) {
        case "high":
            return 10;
        case "mid":
            return 5;
        default:
            return 1;
    }
}

module.exports = queueService;