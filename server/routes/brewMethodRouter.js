const express = require('express');
const brewMethodRouter = express.Router();
const BrewMethod = require('../models/brewMethod');

brewMethodRouter
  .route('/')
  .get((req, res, next) => {
    BrewMethod.find((err, brewMethods) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(200).send(brewMethods);
    });
  })
  .post((req, res, next) => {
    const newBrewMethod = new BrewMethod(req.body);
    newBrewMethod.save((err, savedBrewMethod) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(201).send(savedBrewMethod);
    });
  });

module.exports = brewMethodRouter;
