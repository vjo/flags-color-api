'use strict';

const express = require('express');
const flags = require('./flags');

const app = express();
const port = 3000;

app.get('/flags', (request, response) => {
  flags.returnAllFlags(response);
});

app.get('/flags/:country_code', (request, response) => {
  const { country_code } = request.params;
  flags.returnFlag(country_code.toString(), response);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Oups! Something bad happened', err);
  }

  console.log(`Server is listening on ${port}`);
});
