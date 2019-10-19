const notificationService = require("../services/notificationService")

module.exports = {
    create: (req, res) => {
        notificationService.create(req.body).then(() => res.sendStatus(200)).
            catch((err) => res.status(400).json({ error: err.toString() }));
    }
}
