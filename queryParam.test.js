const getQueryString = require("./index");

const setUp = () => {
  const page = 1;
  const search = "jo";
  const query = "?page=1&search=jo";
  const payload = {
    page,
    search
  };
  return {
    payload,
    query
  };
};
it("returns the correct query string", () => {
  const { payload, query } = setUp();
  const resp = getQueryString(payload);

  expect(resp).toBe(query);
});
