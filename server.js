const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


const postsController = require('./controllers/postsController');
const usersController = require('./controllers/usersController');
const rolesController = require('./controllers/rolesController');
const communitiesController = require('./controllers/communitiesController');
// const shoutsController = require('./controllers/shoutsController');

const databasePool = require('./databasePool');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.use('/posts', postsController);
app.use('/roles', rolesController);
app.use('/users', usersController);
app.use('/communities', communitiesController);
// app.use('/shouts', shoutsController);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});