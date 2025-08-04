const express = require('express');
const morgan = require('morgan');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
dotenv.config();

const courseRoutes = require('./routes/courseRoutes');
const programRoutes = require('./routes/programRoutes');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(morgan('dev'));

// Routes for API and views
app.use('/courses', courseRoutes);
app.use('/programs', programRoutes);
app.use('/students', studentRoutes);
app.use('/', authRoutes);

module.exports = app;
