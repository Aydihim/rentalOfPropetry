const express = require('express');

const router = express.Router();
const CategoryList = require('../components/categoryList');
const { Property } = require('../db/models');
const PropertyParams = require('../PropertyParams');

router.get('/', (req, res) => {
  try {
    const rooms = await Property.findAll({ where: { categoryId: 3 } });
    res.renderComponent(CategoryList, { title: 'Rooms', rooms });
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
    res.renderComponent(PropertyParams, { title: 'Rooms', property });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
