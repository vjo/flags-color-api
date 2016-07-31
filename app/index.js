'use strict';

const express = require('express');
const flags = require('./flags');

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  const list = flags.getCountryList();
  let html = '<html><body><h1>Flags Color API</h1><p>Available flags: <ul>';
  for (let i in list) {
    let cc = list[i].split('.')[0];
    html += `<li><a href="/flags/${cc}">${cc}</a></li>`
  }
  html += '</ul></p></body></html>';
  response.send(html);
});

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
