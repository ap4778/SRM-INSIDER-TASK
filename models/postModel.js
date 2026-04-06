const db = require("../config/db");

// Create Post
exports.createPost = async (userId, title, content) => {
  return await db.query(
    "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
    [userId, title, content]
  );
};

// Get Posts (with pagination + search)
exports.getPosts = async (search, limit, offset) => {
  const [rows] = await db.query(
    `SELECT posts.*, users.name 
     FROM posts
     JOIN users ON posts.user_id = users.id
     WHERE posts.title LIKE ?
     LIMIT ? OFFSET ?`,
    [`%${search}%`, limit, offset]
  );
  return rows;
};

// Update Post
exports.updatePost = async (id, userId, title, content) => {
  return await db.query(
    "UPDATE posts SET title=?, content=? WHERE id=? AND user_id=?",
    [title, content, id, userId]
  );
};

// Delete Post
exports.deletePost = async (id, userId) => {
  return await db.query(
    "DELETE FROM posts WHERE id=? AND user_id=?",
    [id, userId]
  );
};