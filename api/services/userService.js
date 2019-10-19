const Validator = require('jsonschema').Validator;
 userRepo = require("../repository/userRepo");

const userService = {};

userService.save = (userData) => {
    validate(userData);
    return userRepo.insert(userData);
}
userService.get = (userId) => {
    return userRepo.getUser(userId)
}
userService.getMany = (groupOfUsers) => {
    return userRepo.getUsers(groupOfUsers)
}

let validate = (userData) => {
    var schema = {
        "id": "/user",
        "type": "object",
        "properties": {
            "email": { "type": "string" },
            "userId": { "type": "integer" },
            "name": { "type": "string" },
            "preferedLanguage": { "type": "string" },
            "phoneNumber": { "type": "string" }
        },
        "required": ["email", "name", "preferedLanguage", "phoneNumber", "userId"]
    };
    var v = new Validator();
    validation = v.validate(userData, schema);
    if (validation.errors.length) {
        throw new Error(validation.errors)
    }
}

module.exports = userService;
