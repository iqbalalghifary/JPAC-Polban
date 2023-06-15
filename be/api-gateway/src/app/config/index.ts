const dotEnv = require("dotenv");

dotEnv.config();

export const config = {
  JWT_EXPIRED: process.env.JWT_EXPIRED,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT
};