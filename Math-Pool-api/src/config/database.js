import Comment from "../model/comment-model.js";
import Question from "../model/question-model.js";
import User from "../model/user-model.js";
import sequelize from "./connection.js";

User.hasMany(Comment, { foreignKey: "userId", onDelete: "CASCADE" }); //foreignKey is used to name the foreign key, if you remove it userId will be named as UserId automatically, which is generated automatically by sequelize
Comment.belongsTo(User, { foreignKey: "userId" });

Question.hasMany(Comment, { foreignKey: "questionId" });
Comment.belongsTo(Question, { foreignKey: "questionId" });

User.hasMany(Question, { foreignKey: "userId", onDelete: "CASCADE" });
Question.belongsTo(User, { foreignKey: "userId" });
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectToDatabase();
