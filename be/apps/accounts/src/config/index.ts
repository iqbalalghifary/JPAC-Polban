const dotEnv = require("dotenv");

dotEnv.config();

export const config = {
  MONGO_URI: process.env.CLEAN_NEST_MONGO_CONNECTION_STRING,
  PORT: process.env.PORT,
  JWT_EXPIRED: process.env.JWT_EXPIRED,
  JWT_SECRET: process.env.JWT_SECRET,
};