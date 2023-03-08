const express = require('express');

const router = express.Router();
const Home = require('../components/Home');

router.get('/', (req, res) => {
  try {
    res.renderComponent(Home, { title: 'Home' });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
