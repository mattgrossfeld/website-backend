const Pool = require('pg').Pool;
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./local-properties.properties');

const pool = new Pool({
  host: properties.get('db.host'),
  port: properties.get('db.port'),
  database: properties.get('db.database'),
  user: properties.get('db.user'),
  password: properties.get('db.password')
});