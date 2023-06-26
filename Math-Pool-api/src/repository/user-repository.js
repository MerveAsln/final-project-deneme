import User from "../model/user-model.js";

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error while getting users');
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    throw new Error('Error while getting user by email');
  }
};

const createUser = async (user) => {
  try {
    const existingUser = await User.findOne({ where: { email: user.email } });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteUserById = async (userId) => {
  return await User.destroy({
    where: {
      id: userId
    }
  });
};

const updatedUsers = async (users) => {
  try {
    const result = await User.bulkCreate(users, {
      updateOnDuplicate: ["role"]
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export default {
  getUsers,
  createUser,
  deleteUserById,
  getUserByEmail,
  updatedUsers
};
