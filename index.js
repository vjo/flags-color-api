'use strict';

const express = require('express');

const app = express();

app.get('/flags', function(req, res) {
  res.send('All the flags!');
});

app.get('/flags/:country_code', function(req, res) {
  const { country_code } = req.params;
  res.send('Just one flag: ' + country_code);
});

app.listen(3000, function() {
  console.log('Listening on port 3000!');
});
