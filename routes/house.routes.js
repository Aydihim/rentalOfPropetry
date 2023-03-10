const express = require('express');

const router = express.Router();
const CategoryList = require('../components/CategoriesList');
const { Property } = require('../db/models');
const { Category } = require('../db/models');
const PropertyParams = require('../components/PropertyParams');

router.get('/', async (req, res) => {
  try {
    const properties = await Property.findAll({ where: { categoryId: 1 } });
    res.renderComponent(CategoryList, { title: 'Houses', properties });
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
    const category = Category.findAll({ where: { categoryId: 1 } });
    res.renderComponent(PropertyParams, { title: 'Houses', property, category });
  } catch (e) {
    res.status(500).json(e.message);
  }
});
//sggege
module.exports = router;
