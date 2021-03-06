import React from 'react';
import PropTypes from 'prop-types';

// TODO: update call to redux store to populate fields

const Note = ({ note }) => (
  <div>
    <div><label htmlFor="noteDate" >Date: </label> { note.datetime }</div>
    <div><label htmlFor="note" >Encounter Notes: </label> { note.body }</div>
  </div>

);

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
