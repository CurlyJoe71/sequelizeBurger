const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        });
    },
    create: function(newBurger, devoured, cb) {
        orm.insertOne(newBurger, devoured, function(result) {
            cb(result);
        });
    },
    update: function(id, devoured, cb) {
        orm.updateOne(id, devoured, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;