const express = require("express");
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controller/postController.js");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
const role = require("../middleware/roleMiddleware");

router.delete("/:id", auth, role("admin"), deletePost);

module.exports = router;