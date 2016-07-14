var React = require("react");
var NoteForm = require('./NoteForm');


function Note(args) {
    args = args || {};
    this.message = args.message || "";
    //this.author = args.author || "";
}

var Notes = React.createClass({
  getInitialState: function() {
    var state = {notes: []};
    var _t = this;
    Backendless.Persistence.of( Note ).find(true).then(function(coll) {
      var notes = coll.data.map(function(n) {
        return new Note({message: n.message});
      });
      _t.setState({notes: notes});
      console.log("init state 2", _t.state);
    });

    console.log("init state", this.state);

    return state;
  },
  handleNoteSubmit: function(note) {
    var dataStore = Backendless.Persistence.of(Note);
    var noteObject = new Note({message: note.message});
    dataStore.save( noteObject );

    var notes = this.state.notes;
    notes.push(noteObject);

    this.setState({
      notes: notes
    });

    console.log("after sub", this.state.notes);
  },
  render: function() {
    console.log(this.state);
    var notes = this.state.notes.map(function(n) {
      return (
        <li key={n.objectId}>{n.message}</li>
      );
    });

    return (
      <div>
         {notes}
         <NoteForm onNoteSubmit={this.handleNoteSubmit} />
      </div>
    );
  }
});

module.exports = Notes;