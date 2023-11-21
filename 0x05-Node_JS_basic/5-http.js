const http = require('http');
const { readFile } = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    readFile(process.argv[2], 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      } else {
        const students = data.split('\n')
          .filter((student) => student)
          .map((student) => student.split(','))
          .map((student) => `${student[0]} ${student[1]}`)
          .join('\n');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${students}`);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid request');
  }
});

app.listen(1245);
module.exports = app;
