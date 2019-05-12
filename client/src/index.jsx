import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.getRepos = this.getRepos.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
       $.ajax({
         url: '',
         method: 'POST',
         data: term,
         success: function (data) {
           console.log(results, 'get req from client successfully')
           //setState
           this.setState({
             repos: results
           });
         },
         context: this,
         error: function (results) {
           console.log('error in Get req from client')
         }
       })

    // TODO
  }
   getRepos () {

      $.ajax({
        url: '',
        method: 'GET',
        success: function(results) {
          console.log(results, 'get req from client successfully')
          //setState
          this.setState({repos: results});
        },
        context: this,
        error: function(results) {
          console.log('error in Get req from client')
        }
      })
    // send a post req to server to get top 25 repos form API, and saved in DB;
    //
  }
  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));