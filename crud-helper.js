// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Plant = require('./models/plant');
// const Category = require('./models/category');


// Local variables will come in handy
let u, p, c;

