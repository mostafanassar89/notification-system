
/**
* @apiDefine NotificationRequest
*
* @apiParam (Attributes) {String="sms","push_notification"}        channel
* @apiParam (Attributes) {String="high","mid","low"}        [priority]
* @apiParam (Attributes) {Object}     title The notification's title, a map of language codes to text for each language. Example: {"en": "", "ar": ""}
* @apiParam (Attributes) {Number}        userId To send a notification to a particular user, use the user ID with this endpoint.
* @apiParam (Attributes) {Number[]}        groupOfUsers To send a notification to a specific set of users, use array of the user ID with this endpoint
*/

/**
* @apiDefine NotificationResponse
*
* @apiSuccess  {String="sms","push_notification"}        notification.channel
* @apiSuccess  {String="high","mid","low"}        [notification.priority]
* @apiSuccess  {Object}     notification.title The notification's title, a map of language codes to text for each language. Example: {"en": "", "ar": ""}
* @apiSuccess  {Number}        notification.user User ID
*/

 /**
 * @api {post} /notification  Send a notification 
 * @apiName PostNotification
 * @apiGroup Notifications
 *
 * @apiUse NotificationRequest
 */