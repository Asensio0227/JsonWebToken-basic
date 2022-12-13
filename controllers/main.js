const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Please enter your email and password')
  }

  console.log(username,password);
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  }); res.status(200).json({ msg:"user created ", token })
};

const dashboard = async (req, res) => {
  res.send('dashboard')
};


module.exports = {
  login,
  dashboard
};