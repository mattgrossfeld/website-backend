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
    ca: fs.readFileSync('ca-cert.pem').toString()
  }
});

module.exports = pool;