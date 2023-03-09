const express = require('express');
const { User } = require('../db/models');

// const Reg = require('../components/Reg');

const router = express.Router();
const Home = require('../components/Home');

router.get('/', (req, res) => {
  try {
    res.renderComponent(Home, { title: 'Home' });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { password, password2, name, login } = req.body;
    console.log(req.body);

    if (password && password2 && name && login) {
      if (password === password2) {
        const emailUser = await User.findOne({ where: { login } });
        if (!emailUser) {
          // const hash = await bcrypt.hash(password, 10);
          const newUser = await User.create({
            name,
            login,
            password,
            status: false,
          });
          res.app.locals.nameUser = newUser.name;
          // console.log(res.app.locals.nameUser);
          console.log(newUser.name);
          // req.session.userId = newUser.id;
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

router.post('/', async (req, res) => {
  try {
    const { password1, login1 } = req.body;
    console.log(req.body);

    if (login1) {
      const login = await User.findOne({ where: { login1 } });
      if (password1) {
        const password = await User.findOne({ where: { password1 } });

        res.app.locals.nameUser = newUser.name;
        // console.log(res.app.locals.nameUser);
        // console.log(newUser.name);
        // req.session.userId = newUser.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Неправильный пароль' });
      }
    } else {
      res.json({ message: 'Неправильный логин' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
