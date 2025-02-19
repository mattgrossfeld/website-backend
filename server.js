const express = require('express')
const threadsController = require('./controllers/threadsController');
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.use('/threads', threadsController);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});