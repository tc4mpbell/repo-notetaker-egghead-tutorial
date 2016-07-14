var React = require('react');


var NoteForm = React.createClass({
  getInitialState: function() {
    return {
      note: ''
    }
  },
  handleSubmit: function() {
    var noteObject = {
      message: this.state.note
    };
    this.props.onNoteSubmit(noteObject);
    this.state.note = '';
    return false;
  },
  handleNoteChange: function(e) {
    this.setState({note: e.target.value});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.note} onChange={this.handleNoteChange}></textarea>
        <input type='submit'/>
      </form>
    );
  }
});

module.exports = NoteForm;