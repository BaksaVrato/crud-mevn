
const chceck = async (req, res, next) => {

  const { id, name, number } = req.body;

  if (!name || !number || !id) {
    return res.status(400).json({ message: 'Fields missing' });
  }

  if (typeof id !== 'number' || typeof name !== 'string' || typeof number !== 'number') {
    return res.status(400).json({ message: 'Invalid data type' });
  }
  next();
}

module.exports = chceck;