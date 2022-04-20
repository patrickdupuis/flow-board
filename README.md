# FlowBoard Demo Application

This demo application is a small Kanban board made with React, Express, MongoDB, and Auth0.

## Project setup

Use `npm` to install the project dependencies. Do this for both the `client` and the `server` folders:

```bash
npm install
```

## Configuration

The project needs to be configured to use Auth0. For this, you'll need your own Auth0 account. You can get one for free at [https://auth0.com/](https://auth0.com/).

Copy `client/src/auth_config.json.example` into a new file called `client/src/auth_config.json`. Replace the values with your own Auth0 application information:

```json
{
  "domain": "YOUR_AUTH0_DOMAIN",
  "clientId": "YOUR_AUTH0_CLIENT_ID",
  "audience": "YOUR_AUTH0_API_IDENTIFIER"
}
```

Create a new file in the root of the project called `.env`. Provide the following information:

```
CLIENT_ORIGIN_URL=http://localhost:3000
SERVER_PORT=4000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
AUTH0_AUDIENCE=YOUR_AUTH0_API_IDENTIFIER
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
```

## Run the application

To run the application in development, execute `npm start` in both the `client` and the `server` folders:

```bash
npm start
```
