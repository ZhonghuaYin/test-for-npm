const getURL = () => {
  let url = null;
  const env = process.env.ENV;
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

const func = () => {
  return getURL();
};

module.exports = func();
