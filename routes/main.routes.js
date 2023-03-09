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

module.exports = router;
