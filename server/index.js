const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const helpers = require('../helpers/github.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  helpers.getReposByUsername (req.body.username, (result) => {
     db.save(result, (err, success) => {

     });
    res.status(200).send(result);

  })

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.get((err, data) => {
    if(err) console.log("1", err)
    res.status(200).json(data);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

