const express = require('express');
const router = express.Router();
const { Category } = require('../db/models');

router.post('/addnote', async (req, res) => {
  const { title, img, price, info, address } = req.body;

  try {
    const note = await Category.create({
      title,
      img,
      price,
      info,
      address,
      userId: req.session.userId,
    });
    //   res.app.locals.studentName = student.name;
    res.json({ message: 'запись добавлена' });
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