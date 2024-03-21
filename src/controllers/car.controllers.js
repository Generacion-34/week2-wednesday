const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async (req, res) => {
  const result = await Car.findAll()
  return res.json(result)
});

const create = catchError(async (req, res) => {
  const result = await Car.create(req.body)
  return res.json(result)
})

module.exports = {
  getAll,
  create
}