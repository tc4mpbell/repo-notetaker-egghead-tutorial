var React = require("react");

var UserData = React.createClass({
  render: function() {
    return (
      <div>
        <p>
         {this.props.username}
        </p>
        <p>
         {this.props.bio.name}
        </p>
      </div>
    );
  }
});

module.exports = UserData;