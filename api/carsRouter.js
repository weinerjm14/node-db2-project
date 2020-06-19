const express = require('express');
const db = require('../data/dbConfig');

const router = express.Router();

// POST request
router.post('/', async (req, res, next) => {
  try {
    const payload = {
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      milage: req.body.model,
      transmissionType: req.body.transmissionType,
      titlestatus: req.body.titlestatus,
    };

    const [messageID] = await db.insert(payload).into('car_dealer');
    const message = await db
      .first('*')
      .from('car_dealer')
      .where('id', messageID);

    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
});

// PUT request
router.put('/:id', async (req, res, next) => {
  try {
    const payload = {
      VIN: req.body.VIN,
      make: req.body.make,
      model: req.body.model,
      milage: req.body.model,
      transmissionType: req.body.transmissionType,
      titlestatus: req.body.titlestatus,
    };

    await db('car_dealer').update(payload).where('id', req.params.id);
    const message = await db
      .first('*')
      .from('car_dealer')
      .where('id', req.params.id);

    res.json(message);

    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
});

// GET requests

router.get('/', async (req, res, next) => {
  try {
    const messages = await db.select('*').from('car_dealer');

    res.json(messages);
  } catch (err) {
    next(err);
  }
});
router.get('/:id', async (req, res, next) => {
  try {
    const [message] = await db
      .select('*')
      .from('car_dealer')
      .where('id', req.params.id)
      .limit(1);
    res.json(message);
  } catch (err) {
    next(err);
  }
});

// DELETE request
router.delete('/:id', async (req, res, next) => {
  try {
    await db('car_dealer').where('id', req.params.id).del();

    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
module.exports = router;
