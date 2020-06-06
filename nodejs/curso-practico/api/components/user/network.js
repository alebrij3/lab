const express = require('express');

const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router();

router.get('/', function(req, res) {
  controller.list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
})

router.get('/:id', function(req, res) {
  controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
})

module.exports = router;
