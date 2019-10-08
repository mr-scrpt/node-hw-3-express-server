const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
// Приложение
const app = express();
require('dotenv').config();
require('./buses');
require('./engine');
require('./database');

// Роутер
const router = require('./routes');


// view engine setup
app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')

  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(
    session({
      secret: 'loftschool',
      key: 'sessionkey',
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 6000
      },
      saveUninitialized: false,
      resave: false
    })
  )
  .use(express.static(path.join(__dirname, 'public')))
  .use(flash())
  .use(router);




// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
