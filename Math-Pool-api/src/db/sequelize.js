import sequelize from "./connection.js";
import User from "../models/userModel.js";
import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";

// Associations
User.hasMany(Comment);
Comment.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Post);
Post.belongsTo(User);

const connectionToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await User.sync();
    await Post.sync();
    await Comment.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectionToDatabase();
