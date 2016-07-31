const fs = require('fs');

const DIR = './data/';
const EXT = '.json';

const returnFlag = (name, response) => {
  const file = name + EXT;
  const path = DIR + name + EXT;

  fs.readdir(DIR, (err, files) => {
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
  let json = [];

  fs.readdir(DIR, (err, files) => {
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

const getCountryList = () => {
  return fs.readdirSync(DIR);
};

module.exports = {
  returnAllFlags,
  returnFlag,
  getCountryList
};
