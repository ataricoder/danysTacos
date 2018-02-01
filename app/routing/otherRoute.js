var tableStuff = require('../tables/tableStuff.js');
var waitlistStuff = require('../tables/waitlistStuff');

module.exports = function(app) {

  app.get('/api/tables', function(req, res) {
    res.json(tableStuff);
  });

  app.get('/api/waitlist', function(req, res) {
    res.json(waitlistStuff);
  });



  app.post('/api/waitlist', function(req, res) {
    res.json(waitlistStuff);
  });


  app.post('/api/tables', function(req, res) {
    if(tableStuff.lenght < 5) {
      tableStuff.push(req.body);
      res.json(true);
    } else {
      waitlistStuff.push(req.body);
      res.json(false);
    }
  });

  app.post('/api/errase', function() {
    tableStuff = [];
    waitlistStuff = [];

    console.log(tableStuff);
    console.log(waitlistStuff);
  })
}
