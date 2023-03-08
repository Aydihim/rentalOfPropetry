const express = require('express');

const router = express.Router();
const CategoryList = require('../components/categoryList');

router.get('/', (req, res) => {
  try {
    res.renderComponent(CategoryList, { title: 'Rooms' });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
