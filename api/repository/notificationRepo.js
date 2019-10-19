var mongoose = require("mongoose");

var notificationRepo = {};
let notificationSchema = mongoose.Schema({
    channel: { type: String, required: true },
    priority: String,
    title: { type: Object, required: true },
    userId: { type: Number, index: true },
    groupOfUsers: [Number]
});
notificationSchema.index({ userId: 1 })
let model = mongoose.model('notification', notificationSchema);

notificationRepo.save = (notification) => {
    return model.insertMany(notification)
}
notificationRepo.getUserNotifications = (userId) => {
    return model.find({ $or: [{ userId: userId }, { groupOfUsers: userId }] });
}
module.exports = notificationRepo;
