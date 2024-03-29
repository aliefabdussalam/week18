const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routerUser = require('./source/router/users.router');
const routerProduct = require('./source/router/product.router');
const routerCategory = require('./source/router/category.router');
const routerregister = require('./source/router/register.router');

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(`${__dirname}./upload`));
app.use(bodyParser.json());
app.use(routerUser);
app.use(routerProduct);
app.use(routerCategory);
app.use(routerregister);
app.listen(8800, () => {
  console.log('connect to 8800');
});
