const express = require('express');
const grinderRouter = express.Router();
const Grinder = require('../models/grinder');

grinderRouter
  .route('/')
  .get((req, res, next) => {
    Grinder.find((err, grinders) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(200).send(grinders);
    });
  })
  .post((req, res, next) => {
    const newGrinder = new Grinder(req.body);
    newGrinder.save((err, savedGrinder) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(201).send(savedGrinder);
    });
  });

module.exports = grinderRouter;
