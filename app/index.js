'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/flags', (request, response) => {
  returnAllFlags(response);
});

app.get('/flags/:country_code', (request, response) => {
  const { country_code } = request.params;

  returnFlag(country_code.toString(), response);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Oups! Something bad happened', err);
  }

  console.log(`Server is listening on ${port}`);
});

const returnFlag = (name, response) => {
  const dir = './data/';
  const ext = '.json';
  const file = name + ext;
  const path = dir + name + ext;

  fs.readdir(dir, (err, files) => {
    if (files.indexOf(file) === -1) {
      response.send({ err: 'not found' });
    } else {
      fs.readFile(path, (err, data) => {
        const json = JSON.parse(data.toString());
        response.send(json);
      });
    }
  });
};

const returnAllFlags = (response) => {
  const dir = './data/';
  let json = [];

  fs.readdir(dir, (err, files) => {
    for (let i in files) {
      let path = dir + files[i];

      fs.readFile(path, (err, data) => {
        json.push(JSON.parse(data.toString()));

        if (i == files.length - 1) {
          response.send(json);
        }
      });
    }
  });
};
