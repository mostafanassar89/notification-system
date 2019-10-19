const notificationRepo = require("../repository/notificationRepo"),
 queueService = require("../util/queueService"),
 userService = require("../services/userService");


const notificationService = {};

const allowedChannels = ["sms", "push_notification"];

notificationService.create = async (notificationData) => {
    try {
        notificationData.groupOfUsers = notificationData.groupOfUsers || [];
        if (notificationData.userId) {
            notificationData.user = await getUser(notificationData.userId)
        }
        if (notificationData.groupOfUsers.length) {
            notificationData.users = await getGroupOfUsers(notificationData.groupOfUsers)
        }
        validate(notificationData);
        notificationRepo.save(notificationData);
        queueService.publish(notificationData);
        return true
    }
    catch (err) {
        return Promise.reject(err)
    }
}

notificationService.getUserNotifications = async (userId) => {
    return await notificationRepo.getUserNotifications(userId)
}

let getUser = (userId) => {
    return userService.get(userId);
}
let  getGroupOfUsers = (groupOfUsers) => {
    return userService.getMany(groupOfUsers);
}
let validate = (notification) => {
    if (!notification.userId && !notification.groupOfUsers.length) {
        throw Error("please set notification target user or group of users ")
    }
    else if (notification.userId && notification.groupOfUsers.length) {
        throw Error("please set only one of notification target user and group of users ")
    }
    else if (notification.userId && !notification.user) {
        throw Error("User is not exists ")
    }
    else if (notification.userId && !notification.title[notification.user["preferedLanguage"]]) {
        throw Error("User language is not exists ")
    }
    else if (allowedChannels.indexOf(notification.channel) == -1) {
        throw Error("notification channel not exists ")
    }
}
module.exports = notificationService

