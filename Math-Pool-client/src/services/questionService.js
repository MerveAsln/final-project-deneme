import { api } from "./httpService";

const getQuestions = async (order = "asc") => {
  try {
    const response = await api.get(`/questions?order=${order}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createQuestion = async (pNewQuestion) => {
  try {
    const response = await api.post("/questions", pNewQuestion);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getQuestionsByUserId = async (userId) => {
  try {
    const response = await api.get(`/questions?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getQuestionById = async (questionId) => {
  try {
    const response = await api.get(`/questions/${questionId}`);
    console.log(response, "response bu iste");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const questionService = {
  getQuestions,
  createQuestion,
  getQuestionsByUserId,
  getQuestionById,
};

export default questionService;
