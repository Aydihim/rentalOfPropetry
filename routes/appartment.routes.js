const express = require('express');

const router = express.Router();
const CategoryList = require('../components/categoryList');
const { Property } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const apparts = await Property.findAll({ where: { categoryId: 2 } });
    res.renderComponent(CategoryList, { title: 'Appartments',apparts });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
