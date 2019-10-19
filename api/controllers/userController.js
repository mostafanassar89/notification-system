const userService = require("../services/userService"),
 notificationService = require("../services/notificationService")

module.exports = {
    create: (req, res) => {
        userService.save(req.body).then(() => res.sendStatus(200)).
            catch((err) => res.status(400).json({ error: err.toString() }));
    },
    find: (req, res) => {
        userService.get(req.params.userId).then((user) => res.send(user)).
            catch((err) => res.status(400).json({ error: err.toString() }));
    },
    getUserNotifications: (req, res) => {
        notificationService.getUserNotifications(req.params.userId).then((notifications) => res.send(notifications)).
            catch((err) => res.status(400).json({ error: err.toString() }));
    }

}
