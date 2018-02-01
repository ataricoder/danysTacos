var path = require('path');

module.exports = function(app) {

  app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname + "/.../public/tables.html"));
  });

  app.get('/reservation', function(req, res) {
    res.sendFile(path.join(__dirname + "/.../public/reservations.html"));
  });




  app.use( function(req, res) {
    res.sendFile(path.join(__dirname + "/.../public/index.html"));
  });





}
