require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const renderComponents = require('./middleware/renderComponent');
const indexRouter = require('./routes/index.routes');

const app = express();

const PORT = 3000;

app.use('/', indexRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(renderComponents);
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Работаем на ${PORT} порту`);
});
