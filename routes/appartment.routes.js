const express = require('express');

const router = express.Router();
const CategoryList = require('../components/categoryList');
const { Property } = require('../db/models');
const PropertyParams = require('../PropertyParams');

router.get('/', async (req, res) => {
  try {
    const apparts = await Property.findAll({ where: { categoryId: 2 } });
    res.renderComponent(CategoryList, { title: 'Appartments', apparts });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.get('/:propertyId', async (req, res) => {
  const { propertyId } = req.params;
  try {
    const property = await Property.findOne({
      where: { id: Number(propertyId) },
    });
    res.renderComponent(PropertyParams, { title: 'Appartments', property });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
