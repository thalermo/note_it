import React from 'react';

// ------ ADD NOTE FUNCTION --------

function AddNote(props) {
  const [noteText, setNoteText] = React.useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    // condition to check the white space and clear the text area after saving
    if (noteText.trim().length > 0) {
      props.handleAddNote(noteText);
      setNoteText('');
    }
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
