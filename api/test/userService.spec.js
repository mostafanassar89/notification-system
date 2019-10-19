var chai = require("chai");
var sinon = require('sinon');
const should = chai.should();
const expect = chai.expect;
const userService = require('../services/userService');
const userRepo = require('../repository/userRepo');

describe("userService", function () {
    let userRepoStub;
    beforeEach(function () {
        user = {
            "email": "mostaf@asd.add",
            "name": "mostafa",
            "phoneNumber": "13132132",
            "preferedLanguage": "ar",
            "userId": 1
        };
        userRepoStub = sinon.stub(userRepo, "insert");
        userRepoStub.returns(true);
    });

    afterEach(function () {
        userRepoStub.restore();
    });
    it("create user should call insert method", function () {
        userService.save(user);
        userRepo.insert.calledOnce.should.be.true;
    });
    it("missing userId should throw exception", function () {
        user["userId"] = null;
        expect(function () { userService.save(user) }).to.throw(Error);
    });
    it("missing email should throw exception", function () {
        user["email"] = null;
        expect(function () { userService.save(user) }).to.throw(Error);
    });
});