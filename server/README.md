# Real Time Chat Server and Database

NodeJS, Express, Kenx, Socketio, SQLite3, Nodemon

## Register - api/auth/register

    "username" : "string" max 12 char, must be unique
    "password" : "string" max 16 char

    Encryption is used to store and verify the password via JWT
    Returns 201 with username, encrypted password, user id, created and updated at OR 500 with error

    {
        "id": 2,
        "username": "test2",
        "password": "$2a$10$i5P/a.lgqQ9FWoy7YO.J4exk2jmbm0B8myKGasVlynaB8j0byiGbG",
        "created_at": "2019-12-10 21:46:48",
        "updated_at": "2019-12-10 21:46:48"
    }

## Login - api/auth/login

    "username" : "string",
    "password" : "string"

    If the username and encrypted password is correct a status 200, JWT, and message will be returned

    {
        "message" : `Welcome ${username}, have a token!`,
        token
    }

    JWT must be sent from client for access to restricted routes

## Restricted Routes

| GET                        | POST | PUT           | DELETE        |
| -------------------------- | ---- | ------------- | ------------- |
| api/users                  |      | api/users/:id | api/users/:id |
| api/users/:id              |      |
| ~~api/users/:id/messages~~ |      |

|
| api/channels | api/channels | api/channel/:id | api/channel/:id |
| api/channels/:id | | | |
|
