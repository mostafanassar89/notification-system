const config = require('./config');
const smsProvider = require('./sms_provider');
var queue = config.workerQueue;
const rateLimit = config.notificationLimit;
var channel;
var msgCountPerMinute = 0;
init = async () => {
  try {
    var connection = require('amqplib').connect(config.rabbitUrl);
    let conn = await connection
    channel = await conn.createChannel();
    await channel.assertQueue(queue, {
      maxPriority: 10
    });
  }
  catch (err) {
    process.exit()
  }
}
init().then(() => {
  subscribeToWorkingQueue()
  setInterval(async function () {
    msgCountPerMinute = 0;
  }, 60 * 1000);
})


const subscribeToWorkingQueue = () => {
  try {
    channel.consume(queue, function (msg) {
      if (msg !== null) {
        if (msgCountPerMinute < rateLimit) {
          msgCountPerMinute++;
          channel.ack(msg);
          smsProvider.send(JSON.parse(msg.content));
        }
        else {
          channel.reject(msg, true);
        }
      }
    });
  }
  catch (err) {
    console.log(err)
  }
}