# How to run
```console
$ docker-compose up
```

# API documentation 

- GET `http://localhost:3000/doc` 

# Endpoints
First of all you need to subscribe the users before send the notifications through users endpoints .

- POST `http://localhost:3000/user` will subscribe a new user using the following body request:
```
{
	"email":"mostaf@asd.add",
	"name":"mostafa",
	"phoneNumber":"13132132",
	"preferedLanguage":"ar",
	"userId" : 1
}
```
Then you could send a notification through notifications endpoints:

- POST `http://localhost:3000/notification` will send sms notification using the following body request:
```
{

"userId" : 1,
"title": {
	"ar":"اهلا",
	"en": "hello"
},
"channel": "sms",
"priority" : "high",
"groupOfUsers" : []

}
```



# Testing
- open the `api` folder and run
```
npm test
```
