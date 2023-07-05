var express = require('express');
var router = express.Router();
const fs = require("fs")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/1', (req, res) => {
  const user = {
    name: 'sb',
    email: 'sb@test.com'
  };

  res.json(user);
});

module.exports = router;
