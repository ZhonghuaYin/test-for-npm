import env from "dotenv";
env.config();

const getEnv = () => {
  return process.env;
};

const func = () => {
  return getEnv();
};

export default func;
