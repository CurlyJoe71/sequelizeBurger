const connection = require('../config/connection.js');

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

const orm = {
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function(newBurger, devoured, cb) {
        let queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES ("';
        queryString += newBurger;
        queryString += '", ';
        queryString += devoured;
        queryString += ')';
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw error;
            cb(result);
        })
    },
    updateOne: function(burgerID, devoured, cb) {
        let queryString = 'UPDATE burgers SET '
        queryString += objToSql(devoured);
        queryString += ' WHERE id = ';
        queryString += burgerID;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log('burger has been updated');
            cb(result);
        })
    }
};

module.exports = orm;