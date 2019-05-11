

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
//example: https: //github.com/microsoft/vscode.git
  let repoSchema = mongoose.Schema({
    username: String, //
    html
    repoId:Number,//a user could have 0 or more repos, repoId would be the index
    stargazers_count: Number,
    reponame: String
  });


let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;