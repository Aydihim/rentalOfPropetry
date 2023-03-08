const db = require('./models');

async function testDbConnection() {
  /* eslint-disable no-console */
  try {
    await db.sequelize.authenticate({ logging: false });
    console.log('БД шпарит на полную');
  } catch (error) {
    console.log('Ошибка подключения к БД');
    console.log(error.message);
  }
  /* eslint-enable no-console */
}

module.exports = testDbConnection;
