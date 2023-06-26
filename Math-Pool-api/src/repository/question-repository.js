import Question from "../model/question-model.js";
import User from "../model/user-model.js";

const getAllQuestions = async (order = "ASC") => {
  const questions = await Question.findAll({ order: [["createdAt", order]] });
  return questions;
};

const getQuestionsByUserId = async (userId, order) => {
  try {
    const questions = await Question.findAll({
      where: { userId: userId },
      order: [["createdAt", order]],
    });
    return questions;
  } catch (error) {
    console.log(error);
  }
};

const createQuestion = async (pQuestion) => {
  try {
    const newQuestion = await Question.create(pQuestion);
    return newQuestion;
  } catch (err) {
    console.log(err);
  }
};
const getQuestionById = async (questionId) => {
  const question = await Question.findOne({
    where: { id: questionId },
    include: [
      {
        model: User,
        attributes: ["firstName"],
      },
    ],
  });
  return question;
};

const deleteQuestionById = async (pId) => {
  return await Question.destroy({
    where: {
      id: pId,
    },
  });
};

const updateQuestionById = async (pId, updatedQuestion) => {
  try {
    const question = await Question.findByPk(pId);
    if (question) {
      await Question.update(updatedQuestion, { where: { id: pId } });
      return;
    }
    return { msg: "No question found with this ID" };
  } catch (error) {
    console.log(error);
  }
};
export default {
  getQuestionsByUserId,
  getAllQuestions,
  createQuestion,
  getQuestionById,
  deleteQuestionById,
  updateQuestionById,
};
