var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

    router.post('/readNameAndRespond', function(req, res, next) {
        res.send('Hello' + req.body.name);
});

module.exports = router;
