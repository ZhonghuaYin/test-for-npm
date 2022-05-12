const getURL = (env) => {
  let url = null;
  switch (env) {
    case "pro":
      url = "pro";
      break;
    case "dev":
      url = "test";
      break;
    case "qa":
      url = "stage";
      break;
    default:
      break;
  }
  return url;
};

const func = (env) => {
  return getURL(env);
};

module.exports = func;
