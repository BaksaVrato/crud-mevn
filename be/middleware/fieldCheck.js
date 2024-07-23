
const chceck = async (req, res, next) => {

  const { id, name, number } = req.body;

  console.log(id, name, number);

  if (!name || !number || !id) {
    console.log('Fields missing...');
    return res.status(400).json({ message: 'Fields missing' });
  }

  if (typeof id !== 'number' || typeof name !== 'string' || typeof number !== 'number') {
    console.log('Invalid data types...');
    return res.status(400).json({ message: 'Invalid data type' });
  }
  next();
}

module.exports = chceck;