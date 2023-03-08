const express = require('express');

const router = express.Router();
const Main = require('../components/Main');

router.get('/', (req, res) => {
  try {
    res.renderComponent(Main, { title: 'MAIN' });
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
