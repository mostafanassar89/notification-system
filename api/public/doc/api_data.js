define({ "api": [
  {
    "type": "post",
    "url": "/notification",
    "title": "Send a notification",
    "name": "PostNotification",
    "group": "Notifications",
    "version": "0.0.0",
    "filename": "apiDoc/Notification.js",
    "groupTitle": "Notifications",
    "parameter": {
      "fields": {
        "Attributes": [
          {
            "group": "Attributes",
            "type": "String",
            "allowedValues": [
              "\"sms\"",
              "\"push_notification\""
            ],
            "optional": false,
            "field": "channel",
            "description": ""
          },
          {
            "group": "Attributes",
            "type": "String",
            "allowedValues": [
              "\"high\"",
              "\"mid\"",
              "\"low\""
            ],
            "optional": true,
            "field": "priority",
            "description": ""
          },
          {
            "group": "Attributes",
            "type": "Object",
            "optional": false,
            "field": "title",
            "description": "<p>The notification's title, a map of language codes to text for each language. Example: {&quot;en&quot;: &quot;&quot;, &quot;ar&quot;: &quot;&quot;}</p>"
          },
          {
            "group": "Attributes",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>To send a notification to a particular user, use the user ID with this endpoint.</p>"
          },
          {
            "group": "Attributes",
            "type": "Number[]",
            "optional": false,
            "field": "groupOfUsers",
            "description": "<p>To send a notification to a specific set of users, use array of the user ID with this endpoint</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Subsribe new user",
    "name": "PostUser",
    "group": "User",
    "version": "0.0.0",
    "filename": "apiDoc/User.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Attributes": [
          {
            "group": "Attributes",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Attributes",
            "type": "String",
            "size": "..100",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Attributes",
            "type": "String",
            "size": "..100",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Attributes",
            "type": "String",
            "size": "..25",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Attributes",
            "type": "String",
            "allowedValues": [
              "\"en\"",
              "\"ar\""
            ],
            "optional": false,
            "field": "preferedLanguage",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "put",
    "url": "/user/:userId/notification",
    "title": "Get the user notifications",
    "name": "UserNotifcations",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "iuserId",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification[]",
            "description": "<p>User`s notifications.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"sms\"",
              "\"push_notification\""
            ],
            "optional": false,
            "field": "notification.channel",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"high\"",
              "\"mid\"",
              "\"low\""
            ],
            "optional": true,
            "field": "notification.priority",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification.title",
            "description": "<p>The notification's title, a map of language codes to text for each language. Example: {&quot;en&quot;: &quot;&quot;, &quot;ar&quot;: &quot;&quot;}</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notification.user",
            "description": "<p>User ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apiDoc/User.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:userId/",
    "title": "Get user",
    "name": "findUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "apiDoc/User.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>The user unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>The user email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..100",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..25",
            "optional": false,
            "field": "phoneNumber",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"en\"",
              "\"ar\""
            ],
            "optional": false,
            "field": "preferedLanguage",
            "description": ""
          }
        ]
      }
    }
  }
] });
