

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var db = mongoose.connection

//  db.on('error', console.error.bind(console, 'connection error:'));
//  db.once('open', function () {console.log('DATABASE OPEN'); });

let repoSchema = mongoose.Schema({
  owner: String,
  html_url: String,
  repoId: Number,//a user could have 0 or more repos, repoId would be the index
  stargazers_count: Number,
  reponame: String
});


let Repo = mongoose.model('Repo', repoSchema);

let save = (results) => {
  for(var i = 0; i < results.length; i++) {
    var data = new Repo ({
      owner: results[i].owner.login,
      html_url: results[i].owner.login,
      repoId: results[i].owner.id,
      stargazers_count: results[i].owner.stargazers_count,
      reponame: results[i].name
    });
    data.save(function(err) {
      if(err) {
        return handleError(err);
      }
    })
  }
}

let findTopRepos = function () {
  let query = Repo.find({}).sort({forks: -1}).limit(25);
  return query.exec();

};

module.exports.findTopRepos = findTopRepos;
module.exports.Repo = Repo;
module.exports.save = save;