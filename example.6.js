const Promise = require('bluebird');
const express = require('express');

const app = express();

const longJob = (time, id, callback) => {
  console.log(`Start:   ${id}`);

  setTimeout(() => {
    const result = `Done:    ${id}`;
    callback(null, result);
  }, time);
};

const longJobP = (time, id) =>
  new Promise((resolve, reject) => {
    longJob(time, id, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

// http://127.0.0.1:3000/
app.get('/', (req, res) => {
  console.log('Hello World');
  return res.status(200).json({ data: 'Hello World' });
});

// http://127.0.0.1:3000/long/10000/ten
// http://127.0.0.1:3000/long/5000/five
app.get('/long/:ms/:id', (req, res) => {
  const ms = parseInt(req.params.ms, 10);
  const id = req.params.id;

  return longJobP(ms, id)
    .then((myResult) => {
      console.log(myResult);

      const data = { myResult, ms, id };
      return res.status(200).json(data);
    })
    .catch(err => res.status(500).json({ error: err }));
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log('Example app listening at http://127.0.0.1:%s', port);
});

