const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const userModel = require("../models/userModel");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await userModel.createUser(name, email, hashedPassword);

  res.json({ message: "User registered" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findUserByEmail(email);

  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  const token = generateToken(user);

  res.json({ token });
};