//constructs query string
const constructString = (param, values, key) => {
  const prefix = values[key - 1] ? "&" : "?";
  const name = param;
  const value = values[key];
  if (value) {
    return `${prefix}${name}=${value}`;
  } else {
    return "";
  }
};

//return constructed query string , where arg<<object>> contains the params
const getQueryString = arg => {
  Object.keys(arg).forEach(key => arg[key] === undefined && delete arg[key]);

  const keys = Object.keys(arg);
  const values = Object.values(arg);

  const queryStringArray = keys.map((param, key) => {
    return constructString(param, values, key);
  });
  const queryString = queryStringArray.join("");

  return queryString;
};

module.exports = getQueryString;
