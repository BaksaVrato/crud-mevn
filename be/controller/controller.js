
const read = async (req, res) => {
  res.send('Read');
};

const create = async (req, res) => {
  res.send('Create');
};

const update = async (req, res) => {
  res.send('Update');
};

const deleteOne = async (req, res) => {
  res.send('Delete');
};

module.exports = {
  read,
  create,
  update,
  deleteOne
}