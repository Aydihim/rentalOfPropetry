const express = require('express');

const router = express.Router();
const CategoryList = require('../components/categoryList');
const { Property } = require('../db/models');

router.get('/', (req, res) => {
  try {
    const houses = await Property.findAll({ where: { categoryId: 1 } });
    res.renderComponent(CategoryList, { title: 'Houses', houses });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
