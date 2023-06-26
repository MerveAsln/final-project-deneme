import sequelize from "../config/connection.js";
import { DataTypes } from "sequelize";
const Question = sequelize.define(
  "Question",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  },
  {
    tableName: "questions",
  }
);
export default Question;
