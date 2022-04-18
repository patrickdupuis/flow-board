"use strict";

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const { serverPort, clientOriginUrl } = require("./config/env.dev");
const db = require("./db/connection");
const { checkJwt } = require("./auth/check-jwt");
const {
  handleTestOctocatIssues,
  handleGetRepoIssues,
  handleSearchRepoIssuesAndPulls,
} = require("./octokit");

const app = express();

app.use(helmet());
app.use(cors({ origin: clientOriginUrl }));
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "Hello, world!" });
});

// test Github REST API fetch
app.get("/get-octocat-issues", handleTestOctocatIssues);

// Get issues from specified repository
app.get("/get-repo-issues", handleGetRepoIssues);

app.get("/search-issues-and-pulls", handleSearchRepoIssuesAndPulls);

// protected endpoint using JWT
app.get("/protected", checkJwt, (req, res) => {
  res
    .status(200)
    .json({ status: 200, message: "Hello from protected endpoint" });
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({ status: 500, message: err.message });
});

db.connectToServer((err) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  app.listen(serverPort, () => {
    console.log(`listening on port ${serverPort}`);
  });
});
