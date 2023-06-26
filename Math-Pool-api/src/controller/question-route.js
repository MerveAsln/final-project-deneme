import express from "express";
import questionRepository from "../repository/question-repository.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const userId = req.query.userId; // /?userId=something
    const order = req.query.order; // Get order from query parameter
    let posts;
    if (userId) {
      posts = await questionRepository.getQuestionsByUserId(userId, order);
    } else {
      posts = await questionRepository.getAllQuestions(order);
    }
    return res.status(200).send(posts);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

// Create a new post
router.post("/", async (req, res, next) => {
  try {
    const newPost = {
      subject: req.body.selectedSubject,
      question: req.body.writtenQuestion,
      image: req.body.selectedFile,
      userId: req.body.userId,
    };
    await questionRepository.createQuestion(newPost);
    return res.send(newPost);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

// Get a single post by id
router.get("/:id", async (req, res, next) => {
  try {
    const postId = req.params.id;
    const selectedPost = await questionRepository.getQuestionById(postId);
    if (selectedPost === null)
      return next({
        status: 404,
        message: `post with id  ${postId} not found`,
      });
    return res.status(200).send(selectedPost);
  } catch (err) {
    return next({ status: 500, message: err.message });
  }
});

// Update a post by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;
  const post = await questionRepository.updateQuestionById(id, updatedPost);
  return res.status(200).send(post);
});

// Delete a post by id
router.delete("/:id", async (req, res) => {
  const result = await questionRepository.deleteQuestionById(req.params.id);
  if (result === 0) {
    return res
      .status(404)
      .send(
        `Can't delete post ${req.params.id} because it doesn't even exist :)`
      );
  } else {
    return res.send(`Post ${req.params.id} deleted`);
  }
});

export default router;
