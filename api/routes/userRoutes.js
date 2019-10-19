const router = require('express').Router(),
 userController = require("../controllers/userController")


router.post('/user/', userController.create);
router.get('/user/:userId', userController.find);
router.get('/user/:userId/notifications', userController.getUserNotifications);
module.exports = router