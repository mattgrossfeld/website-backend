const Pool = require('pg').Pool;
const fs = require('fs');

var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./local-properties.properties');

const pool = new Pool({
  host: properties.get('db.host'),
  port: properties.get('db.port'),
  database: properties.get('db.database'),
  user: properties.get('db.user'),
  password: properties.get('db.password'),
  ssl: {
    rejectUnauthorized: true, // Ensure SSL is enforced
    ca: fs.readFileSync('ca-cert.pem').toString()
  }
});

const JWT_SECRET = properties.get('jwt.secret'); // Add this line

module.exports = { pool, JWT_SECRET }; // Modify this line