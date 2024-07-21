
const Item = require('../models/Item');


// just for the time being, will change later
const read = async (req, res) => {
  
  const { id, name, number } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Fields missing' });
  }

  if (typeof id !== 'number') {
    return res.status(400).json({ message: 'Invalid data type' });
  }

  const item = await Item.findOne({ id }).exec();

  if (!item) {
    return res.status(400).json({ message: 'Item does not exist' });
  }

  return res.status(200).send( item.id + ' ' + item.name + ' ' + item.number );

};

const create = async (req, res) => {

  const { id, name, number } = req.body;

  const existingItem = await Item.findOne({ id }).exec();
  
  if (existingItem) {
    return res.status(400).json({ message: 'Item already exists' });
  }

  try {

    await Item.create({ id, name, number });

    return res.status(201).json({ message: 'Item created' });
    
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
 
};

const update = async (req, res) => {

  const { id, name, number } = req.body;

  const existingItem = await Item.findOne({ id }).exec();

  if (!existingItem) {
    return res.status(400).json({ message: 'Item does not exist' });
  }

  try {
    
    const updatedItem = await Item.findOneAndUpdate({ id }, { name, number }, { new: true }).exec();
    return res.status(200).json(updatedItem);

  } catch (error) {
    return res.status(500).json({message: 'Internal server error'});
  }

};

const deleteOne = async (req, res) => {

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Fields missing' });
  }

  if (typeof id !== 'number') {
    return res.status(400).json({ message: 'Invalid data type' });
  }

  const existingItem = await Item.findOne({ id }).exec();

  if (!existingItem) {
    return res.status(400).json({ message: 'Item does not exist' });
  }

  try {
    const deletedItem = await Item.findOneAndDelete({ id }).exec();
    return res.status(200).json(deletedItem);

  } catch (error) {
    return res.status(500).json({message: 'Internal server error'});
  }

};

module.exports = {
  read,
  create,
  update,
  deleteOne
}