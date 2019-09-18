var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:a/:b', function(req, res, next) {
  let str=req.params.a
  res.render('index', { title: str });
});

module.exports = router;
