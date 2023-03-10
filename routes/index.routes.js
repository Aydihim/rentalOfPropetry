const express = require('express');

const router = express.Router();

const mainRouter = require('./main.routes');
const roomRouter = require('./room.routes');
const houseRouter = require('./house.routes');
const appartmentRouter = require('./appartment.routes');
const categoryRouter = require('./propetry.routes');

router.use('/', mainRouter);
router.use('/rooms', roomRouter);
router.use('/houses', houseRouter);
router.use('/appartments', appartmentRouter);
router.use('/appartments', appartmentRouter);
router.use('./property', categoryRouter);

module.exports = router;
