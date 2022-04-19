const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

// Test handler
const handleTestOctocatIssues = (req, res) => {
  octokit.rest.issues
    .listForRepo({
      owner: "octocat",
      repo: "Spoon-Knife",
      per_page: 3,
      page: 1,
    })
    .then(({ data }) => {
      const issues = data.map((issue) => {
        const { html_url, title, user } = issue;
        return { url: html_url, title, username: user.login };
      });
      res.status(200).json({ status: 200, issues });
    })
    .catch((err) => console.log(err));
};

// expects 3 queries:
// - owner: 'octocat'
// - repo: 'Spoon-knife'
// - limit: max issues to get (limited to 100)
const handleGetRepoIssues = (req, res) => {
  const { owner, repo, limit } = req.query;
  if (!owner || !repo || !Number(limit)) {
    res.status(500).json({
      status: 500,
      message: `Missing repository information. Got owner=${owner}, repo=${repo}, limit=${limit}`,
    });
  }
  octokit.rest.issues
    .listForRepo({
      owner,
      repo,
      per_page: limit,
    })
    .then(({ data }) => {
      return data.map((issue) => {
        const { html_url, title, user } = issue;
        return { url: html_url, title, username: user.login };
      });
    })
    .then((issues) => {
      res.status(200).json({ status: 200, issues });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ status: 500, message: "An unknown error occured" });
    });
};

const handleSearchRepoIssuesAndPulls = (req, res) => {
  // const query = "ipod+repo:octocat/Spoon-knife+is:issue";
  const { q } = req.query;
  octokit.rest.search
    .issuesAndPullRequests({
      q: q,
      sort: "created",
      order: "desc",
      per_page: 5,
      page: 1,
    })
    .then(({ data }) => {
      const issues = data.items.map((issue) => {
        const { html_url, title, user } = issue;
        return { url: html_url, title, username: user.login };
      });
      res.status(200).json({ status: 200, results: issues });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ status: 500, message: "An unknown error occured" });
    });
};

module.exports = {
  handleTestOctocatIssues,
  handleGetRepoIssues,
  handleSearchRepoIssuesAndPulls,
};
