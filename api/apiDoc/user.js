
/**
* @apiDefine UserRequest
*
* @apiParam (Attributes) {Number}     userId
* @apiParam (Attributes) {String{..100}}     email
* @apiParam (Attributes) {String{..100}}     name
* @apiParam (Attributes) {String{..25}}      phoneNumber
* @apiParam (Attributes) {String="en","ar"}  preferedLanguage
*/

/**
* @apiDefine UserResponse
* @apiSuccess  {Number}            userId    The user unique ID
* @apiSuccess  {Email}             email The user email    
* @apiSuccess  {String{..100}}     name
* @apiSuccess  {String{..25}}      phoneNumber
* @apiSuccess  {String="en","ar"}  preferedLanguage
*/

/**
 * @api {post} /user Subsribe new user
 * @apiName PostUser
 * @apiGroup User
 *
 * @apiUse UserRequest
 */


 /**
 * @api {put} /user/:userId/ Get user  
 * @apiName findUser
 * @apiGroup User
 *
 * @apiParam {Number} userId Users unique ID.
 *
 * @apiUse UserResponse
 */

 /**
 * @api {put} /user/:userId/notification Get the user notifications
 * @apiName UserNotifcations
 * @apiGroup User
 *
 * @apiParam {Number} iuserId Users unique ID.
 *
 * @apiSuccess {Object}  notification[]       User`s notifications.
 * @apiUse NotificationResponse
 */