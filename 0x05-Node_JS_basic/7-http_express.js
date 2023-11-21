const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Cannot load the database');
    } else {
      const students = data.split('\n')
        .filter((student) => student)
        .map((student) => student.split(','))
        .map((student) => `${student[0]} ${student[1]}`)
        .join('\n');
      res.send(`This is the list of our students\n${students}`);
    }
  });
});

app.listen(1245);
module.exports = app;
