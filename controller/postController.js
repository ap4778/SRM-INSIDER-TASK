const postModel = require("../models/postModel");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  await postModel.createPost(req.user.id, title, content);

  res.json({ message: "Post created" });
};

exports.getPosts = async (req, res) => {
  const { page = 1, limit = 5, search = "" } = req.query;
  const offset = (page - 1) * limit;

  const posts = await postModel.getPosts(
    search,
    parseInt(limit),
    parseInt(offset)
  );

  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  await postModel.updatePost(id, req.user.id, title, content);

  res.json({ message: "Updated" });
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  await postModel.deletePost(id, req.user.id);

  res.json({ message: "Deleted" });
};