const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data,
            name: data.burger
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create(req.body.name, req.body.devoured, function(data) {
        res.json({
            id: data.insertId
        });
    });
});

router.put('/api/burgers/:id', function(req, res) {
    let id = req.params.id;
  
    burger.update(id, {devoured: req.body.devoured}, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
});

module.exports = router;