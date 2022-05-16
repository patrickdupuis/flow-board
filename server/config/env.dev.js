const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

// server listening port
const serverPort = process.env.SERVER_PORT;

// MongoDB
const mongoUri = process.env.MONGO_URI;

// Auth0
const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;

module.exports = {
  serverPort,
  mongoUri,
  audience,
  domain,
  serverPort,
  clientOriginUrl,
};
