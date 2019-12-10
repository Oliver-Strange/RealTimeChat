# Real Time Chat Server and Database

NodeJS, Express, Kenx, Socketio, SQLite3, Nodemon

## Register - api/auth/register

    "username" : "string" max 12 char, must be unique
    "password" : "string" max 16 char

    Encryption is used to store and verify the password via JWT
    Returns 201 with username, encrypted password, and user id OR 500 with error

## Login - api/auth/login

    "username" : "string",
    "password" : "string"

    If the username and encrypted password is correct a status 200 and a JWT, message, the user's roles will be returned

    {
        "message" : `Welcome ${username}, have a token!`,
        token,
        "roles" : token.roles
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
