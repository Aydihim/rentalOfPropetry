const express = require('express');

const bcrypt = require('bcrypt');


// const Reg = require('../components/Reg');
// const Login = require('../components/Login');


const { User, Сategory, Property } = require('../db/models');
const CategoryList = require('../components/CategoriesList');


const PropertyParams = require('../components/PropertyParams');

const router = express.Router();
const Home = require('../components/Home');

router.get('/', async (req, res) => {
  try {
    const categories = await Сategory.findAll({ raw: true });
    console.log(categories, '-------------------');
    res.renderComponent(Home, { title: 'Home', categories });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.get('/categories/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const properties = await Property.findAll({
      where: { categoryId: Number(categoryId) },
    });
    res.renderComponent(CategoryList, { title: '', categoryId, properties });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.get(
  '/categories/:categoryId/properties/:propertyId',
  async (req, res) => {
    const { categoryId, propertyId } = req.params;
    try {
      const property = await Property.findOne({
        where: { id: Number(propertyId) },
      });
      const properties = await Property.findAll({
        where: { categoryId: Number(categoryId) },
      });
      res.renderComponent(PropertyParams, {
        title: `${property.title}`,
        property,
        properties,
      });
    } catch (e) {
      res.status(500).json(e.message);
    }
  },
);

router.post('/reg', async (req, res) => {
  try {
    const { password, password2, name, login } = req.body;
    // console.log(req.body);

    if (password && password2 && name && login) {
      if (password === password2) {
        const emailUser = await User.findOne({ where: { login } });
        if (!emailUser) {
          const hash = await bcrypt.hash(password, 10);
          const user = await User.create({
            name,
            login,
            password: hash,
            status: false,
          });
          req.session.userId = user.id;
          res.app.locals.userName = user.name;
          res.app.locals.userId = user.id;
          res.app.locals.userStatus = user.status;
          res.json({ message: 'ok' });
        } else {
          res.json({ message: 'Такой email уже существует' });
        }
      } else {
        res.json({ message: 'Ваши пароли не совпадают' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { password1, login1 } = req.body;
    if (password1 && login1) {
      const user = await User.findOne({ where: { login: login1 } });
      // console.log(password1, 'passssss-------------------');

      // console.log(user, '-------------------');
      if (user) {
        const isSame = await bcrypt.compare(password1, user.password);
        if (isSame) {
          req.session.userId = user.id;
          res.app.locals.userName = user.name;
          res.app.locals.userId = user.id;
          res.app.locals.userStatus = user.status;

          res.json({ message: ' вы авторизованы, ура!' });
        } else {
          res.json({ message: 'Неверный пароль' });
        }
      } else {
        res.json({
          message: 'Мы не нашли вас среди зарегистрированных пользователей',
        });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});


router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.app.locals = {};
    res.clearCookie('user_sid').redirect('/');
  });
});


module.exports = router;
