const express = require('express');

const router = express.Router();
const CategoryList = require('../components/CategoriesList');
const { Property } = require('../db/models');
const PropertyParams = require('../components/PropertyParams');

router.get('/', async (req, res) => {
  try {
    const properties = await Property.findAll({ where: { categoryId: 2 } });
    res.renderComponent(CategoryList, { title: 'Appartments', properties });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

router.get('/:propertyId', async (req, res) => {
  const { propertyId } = req.params;
  try {
    console.log(propertyId);
    const property = await Property.findOne({
      where: { id: Number(propertyId) },
    });
    res.renderComponent(PropertyParams, { title: 'Appartments', property });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
