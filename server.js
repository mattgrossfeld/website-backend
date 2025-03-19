const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

const postsController = require('./controllers/postsController');
const usersController = require('./controllers/usersController');
const rolesController = require('./controllers/rolesController');
const communitiesController = require('./controllers/communitiesController');
const shoutsController = require('./controllers/shoutsController');

const databasePool = require('./databasePool');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Configure CORS to allow requests from specific origins
const corsOptions = {
  origin: 'https://localhost:3001', // Replace with your frontend URL
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use('/posts', postsController);
app.use('/roles', rolesController);
app.use('/users', usersController);
app.use('/communities', communitiesController);
app.use('/shouts', shoutsController);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});