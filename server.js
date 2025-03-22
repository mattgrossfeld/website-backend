const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const cookieParser = require('cookie-parser'); // Add this line
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
app.use(cookieParser()); // Add this line

// Configure CORS to allow requests from specific origins
const corsOptions = {
  origin: 'https://localhost:3001', // Replace with your frontend URL
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
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

// Read SSL certificate and key
const sslOptions = {
  key: fs.readFileSync('C:/Windows/System32/certs/cert.key'),
  cert: fs.readFileSync('C:/Windows/System32/certs/cert.crt'),
  ca: fs.readFileSync('C:/Windows/System32/certs/ca.crt')
};

// Create HTTPS server
https.createServer(sslOptions, app).listen(port, () => {
  console.log(`App running on port ${port} with SSL.`);
});