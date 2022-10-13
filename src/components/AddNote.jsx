import React from 'react';
import '../App.css';

const AddNote = (props) => {
  const [noteText, setNoteText] = React.useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    props.handleAddNote(noteText);
  };

  const handleResetClick = () => {
    setNoteText('');
  };

  return (
    <>
      <textarea
        value={noteText}
        className="container-edit--input-field"
        rows="10"
        cols="10"
        placeholder="write here your note..."
        onChange={handleChange}
      />
      <div className="container-edit--btns">
        <button className="btn-primary reset" onClick={handleResetClick} />
        <button className="btn-primary save" onClick={handleSaveClick} />
      </div>
    </>
  );
};

export default AddNote;
