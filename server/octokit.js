const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

const handleSearchRepoIssues = (req, res) => {
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
  handleSearchRepoIssues,
};
