module.exports = {
  workerQueue: process.env.WORKER_QUEUE,
  rabbitUrl: process.env.RABBIT_MQ_URL,
  notificationLimit: process.env.NOTIFICATION_LIMIT,
}