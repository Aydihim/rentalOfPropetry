const express = require('express');

const router = express.Router();
const CategoryList = require('../components/CategoriesList');
const { Сategory } = require('../db/models');
const PropertyParams = require('../components/PropertyParams');

router.get('/', async (req, res) => {
  try {
    res.renderComponent(CategoryList, { title: 'category', category });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//router.get('/:propertyId', async (req, res) => {
//  const { propertyId } = req.params;
//  try {
//    const property = await Property.findOne({
//      where: { id: Number(propertyId) },
//    });
//    res.renderComponent(PropertyParams, { title: 'Rooms', property });
//  } catch (e) {
//    res.status(500).json(e.message);
//  }
//});

module.exports = router;
