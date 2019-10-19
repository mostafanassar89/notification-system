const router = require('express').Router(),
 notificationController = require("../controllers/notificationController")


router.post('/notification/', notificationController.create);
module.exports = router