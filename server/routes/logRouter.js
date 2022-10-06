const express = require('express');
const logRouter = express.Router();
const LogEntry = require('../models/logEntry');

logRouter
  .route('/')
  .get((req, res, next) => {
    LogEntry.find((err, logEntries) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(200).send(logEntries);
    });
  })
  .post((req, res, next) => {
    const newLog = new LogEntry(req.body);
    newLog.save((err, savedLog) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      return res.status(201).send(savedLog);
    });
  });

module.exports = logRouter;
