var mongoose = require("mongoose");


var userRepo = {};
let userSchema = mongoose.Schema({
    userId: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    preferedLanguage: { type: String, required: true },
});

userSchema.index({ email: 1 }, { unique: true })
let model = mongoose.model('user', userSchema);

userRepo.insert = (user) => {
    return model.insertMany(user)
}
userRepo.getUser = (userId) => {
    return model.findOne({ userId: userId });
}
userRepo.getUsers = (usersId) => {
    return model.find({ userId: { $in: usersId } });
}

module.exports = userRepo;
