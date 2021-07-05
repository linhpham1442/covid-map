const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: './config/config.env' });

//Init app 
const app = express();

// Connect to database
connectDB();

//Set public folder
var publicDir = require('path').join(__dirname, 'public');
app.use(express.static(publicDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//View engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

// Body parser
app.use(express.json());

//Set routes
var home = require('./routes/home.js');

app.use('/', home);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`)
);