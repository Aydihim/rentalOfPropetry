const { User } = require('../db/models');

// промежуточная функция для очистки куки при истёкшей сессии на сервере
const cookiesCleaner = (req, res, next) => {
  if (req.cookies.user_sid && !req.session.userId) {
    res.clearCookie('user_sid');
    res.locals = {};
  } else {
    next();
  }
};

// промежуточная функция поиска пользователя в БД по ID из сессии
const getUser = async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findByPk(Number(req.session.userId), { raw: true });
    res.locals.user = { name: user.name, id: user.id };
  }

  next();
};

module.exports = {
  cookiesCleaner,
  getUser,
};
