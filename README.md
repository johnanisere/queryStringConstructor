# queryStringConstructor

> Simple, expressive and light weight query string builder

## Install

```sh
npm i query_string_constructor
```

## usage

```jsx
const queryconstructor = require("query_string_constructor");

const page = 2;
const search = "amaka";
const token = "sdfrgbnchyey05363bbcbchdh";

const payload = {
  page,
  token,
  search
};

queryconstructor(payload);

/*
 ** returns ?page=2&token=sdfrgbnchyey05363bbcbchdh&search=amaka
 */
```

## API

### queryconstructor(payload)

Parse an object containing the values you want to be in the query string.

#### payload

Type: `object`
