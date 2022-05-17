# FlowBoard

FlowBoard is an example Kanban board application made with React, Express, MongoDB, and Auth0.

## Project setup

Use `npm` to install the project dependencies. Do this for both the `client` and the `server` folders:

```bash
npm install
```

## Configuration

### Auth0

The project must be configured to use Auth0. For this, you'll need your own Auth0 account. You can get one for free at [https://auth0.com/](https://auth0.com/).

This guide covers how authentication works in this application: [The Complete Guide to React User Authentication with Auth0](https://auth0.com/blog/complete-guide-to-react-user-authentication/)

In the folder `client/src/components/AuthorizationProvider/`, copy `auth_config.json.example` into a new file called `auth_config.json`. Replace the values with your own Auth0 application information:

```json
{
  "domain": "YOUR_AUTH0_DOMAIN",
  "clientId": "YOUR_AUTH0_CLIENT_ID",
  "audience": "YOUR_AUTH0_API_IDENTIFIER"
}
```

### MongoDB

This application was designed to be used with a free tier MongoDB Atlas database hosted at [mongodb.com](https://www.mongodb.com/). The important thing is that you know what the "Connection String" is for your database. This quickstart guide will show you how you can connect to your database from a Node.js application: [Connect to your cluster](https://www.mongodb.com/docs/drivers/node/current/quick-start/#connect-to-your-cluster)

### .env

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
