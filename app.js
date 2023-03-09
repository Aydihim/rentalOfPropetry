require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const renderComponents = require('./middleware/renderComponent');
const testDbConnection = require('./db/testDBconection');
const sessionConfig = require('./config/session');

const indexRouter = require('./routes/index.routes');

const app = express();

const PORT = 3000;

app.use(cookieParser());
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(renderComponents);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use(morgan('dev'));

app
  .listen(PORT, () => {
    console.log(`Подняли с полу ${PORT}й порт 💪`);
    testDbConnection();
  })
  .on('error', (error) => {
    /* eslint-disable no-console */
    console.log('Ошибка веб-сервера');
    console.log(error.message);
    /* eslint-enable no-console */
  });
