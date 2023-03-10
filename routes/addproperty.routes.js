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

router.delete(
  '/categories/:categoryId/properties/:propertyId',
  async (req, res) => {
    try {
      const property = await Property.findOne({
        where: { id: req.params.propertyId },
      });
      if (property.userId === req.session.userId) {
        const propertiesNum = await Property.destroy({
          where: { id: req.params.propertyId },
        });
        res.json({ propertiesNum });
      }
    } catch (error) {
      res.send(error.message);
    }
  },
);

module.exports = router;
