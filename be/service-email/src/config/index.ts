const dotEnv = require("dotenv");

dotEnv.config();

export const config = {
  HOST: process.env.HOST,
  SENDER: process.env.SENDER,
  PASSWORD: process.env.PASSWORD
};