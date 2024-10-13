const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Your data file
const middlewares = jsonServer.defaults();
const routes = require('./routes.json'); // Your routes file

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
