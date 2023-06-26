import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER_NAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    define: {
      freezeTableName: true,
    },
  }
);

export default sequelize;
