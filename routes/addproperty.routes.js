const express = require('express');
const router = express.Router();
const { Property } = require('../db/models');
const FormAdd = require('../components/FormAdd');

router.get('/', async (req, res) => {
  res.renderComponent(FormAdd, { title: 'Добавление' });
});

router.post('/', async (req, res) => {
  const { title, img, price, info, address } = req.body;

  try {
    if (title && img && price && info && address) {
      const note = await Property.create({
        title,
        img,
        price,
        info,
        address,
        categoryId: 1,
      });
      //   res.app.locals.studentName = student.name;
      res.json({ message: 'запись добавлена' });
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.send(error.message);
  }
});

router.delete('/:studentId', async (req, res) => {
    try {
      const student = await Student.findOne({ where: { id: req.params.studentId } });
      if (student.userId === req.session.userId) {
        const studentNum = await Student.destroy({ where: { id: req.params.studentId } });
        res.json({ studentNum });
      }
    } catch (error) {
      res.send(console.log(error.message));
    }
  });

module.exports = router;
