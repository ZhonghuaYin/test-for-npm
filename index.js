const getEnv = () => {
  return process.env;
};

const func = () => {
  console.log(getEnv())
  return getEnv();
};


module.exports = func();

