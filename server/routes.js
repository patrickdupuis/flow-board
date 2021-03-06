const projectBoard = require("./models/board");

const createNewProject = async (req, res) => {
  const { user } = req.body;
  try {
    const doc = await projectBoard.create({
      user: user,
      data: Array.from({ length: 4 }).map(() => []),
    });
    res.status(200).json({ status: 200, data: doc });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "An unknown error occurred" });
  }
};

const findProjectById = async (req, res) => {
  const { _id } = req.params;
  try {
    const doc = await projectBoard.find({ _id: _id });
    res.status(200).json({ status: 200, data: doc });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "An unknown error occured" });
  }
};

const findProjectByUser = async (req, res) => {
  const { user } = req.params;
  try {
    const doc = await projectBoard.findOneAndUpdate(
      { user: user },
      {},
      { new: true, upsert: true }
    );
    // if we created a new document due to not finding a result above
    // we must make sure we don't sent the frontend an empty array
    // change doc.data to [[],[],[],[]] instead
    // the array in the DB will become multi-dimentional once the frontend sends it an update
    if (doc.data.length === 0) {
      doc.data = Array.from({ length: 4 }).map(() => []);
    }
    res.status(200).json({ status: 200, data: doc });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "An unknown error occured" });
  }
};

const updateBoard = async (req, res) => {
  const { user, data } = req.body;
  try {
    const doc = await projectBoard.findOneAndUpdate(
      { user: user },
      { data: data },
      { new: true }
    );
    res.status(200).json({ status: 200, data: doc });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "An unknown error occured" });
  }
};

module.exports = {
  createNewProject,
  findProjectById,
  findProjectByUser,
  updateBoard,
};
