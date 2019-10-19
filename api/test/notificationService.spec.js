var chai = require("chai");
const chaiAsPromised = require('chai-as-promised');

var sinon = require('sinon');
const should = chai.should();
chai.use(chaiAsPromised);
const notificationService = require('../services/notificationService');
const userService = require('../services/userService');
const queueService = require('../util/queueService');
const notificationRepo = require('../repository/notificationRepo');

describe("notificationService", function () {
    let notification;
    let user;
    let queueServiceStub;
    let userServiceStub;
    let notificationRepoStub;
    beforeEach(function () {
        user = {
            "email": "mostaf@asd.add",
            "name": "mostafa",
            "phoneNumber": "13132132",
            "preferedLanguage": "ar",
            "userId": 1
        };
        queueServiceStub = sinon.stub(queueService, "publish");
        queueServiceStub.returns(true)
        userServiceStub = sinon.stub(userService, "get");
        userServiceStub.returns(user)
        notificationRepoStub = sinon.stub(notificationRepo, "save");
        notificationRepoStub.returns(true)

        notification = {
            "userId": 1,
            "title": {
                "ar": "dsa",
                "en": "sa"
            },
            "channel": "sms",
            "priority": "low",
            "groupOfUsers": []
        }
    });
    afterEach(function () {
        queueServiceStub.restore();
        notificationRepoStub.restore();
        userServiceStub.restore();
    });

    it("creating a notification should be persisted and published", async function () {
        await notificationService.create(notification);
        notificationRepo.save.calledOnce.should.be.true;
        queueService.publish.calledOnce.should.be.true;
    });
    it("creating a notification should publish valid payload", async function () {
        await notificationService.create(notification);
        notification.user = user;
        queueService.publish.calledWith(notification).should.be.true;
    });
    it("throw an error if user and groupOfUsers are null", function () {
        notification["userId"] = null
         notificationService.create(notification).should.be.rejectedWith(Error);
    });
    it("throw an error if user and groupOfUsers are not null", () => {
        notification["groupOfUsers"] = [1];
        notificationService.create(notification).should.be.rejectedWith(Error);
    });
    it("throw an error if user is not exists", function () {
        userService.get = sinon.fake.returns(null);
        notificationService.create(notification).should.be.rejectedWith(Error);
    });
    it("throw an error if notification title doesn`t have user language", function () {
        notification["title"] = {
            "en": "das"
        };
        notificationService.create(notification).should.be.rejectedWith(Error);
    });
    it("throw an error if notification channel doesn`t exists", function () {
        notification["channel"] = "email";
        notificationService.create(notification).should.be.rejectedWith(Error);
    });
});