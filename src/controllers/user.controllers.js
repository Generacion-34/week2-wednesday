const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async (req, res) => {
  const result = await User.findAll()
  return res.json(result)
});

const create = catchError(async (req, res) => {
  console.log(req.body);
  const result = await User.create(req.body)
  return res.json(result)
})

module.exports = {
  getAll,
  create
}