var React = require("react");
var Router = require('react-router');

var UserData = require('../components/Github/UserData');
var Notes = require('../components/Notes/Notes');
var Repos = require('../components/Github/Repos');

var Profile = React.createClass({
  mixins: [],
  componentDidMount: function() {
  },
  getInitialState: function() {
    return {
      notes: ['Hello'],
      bio: {name: "Taylor"},
      repos: ['a', 'b', 'c']
    }
  },
  render: function() {
    return (
      <div className='row'>
        <h1>{this.props.username}</h1>
        <div className='col-sm-4'>
           <h2>User Profile</h2>
           <UserData username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className='col-sm-4'>
          <h2>Repos</h2>
          <Repos repos={this.state.repos} />
        </div>
        <div className='col-sm-4'>
          <h2>Notes</h2>
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;