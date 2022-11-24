import React from 'react';

// ADD SINGLE NOTE FUNCTION contains the delete button and the handleDelete function 
// Todo: make the edit function also working

function SingleNote(props) {
  return (
    <div className="card-note" id={props.id}>
      <h3 className="card-note--headline-note">{props.headline}</h3>
      <p className="card-note--date-stamp">{props.timeStamp}</p>

      <button className="btn-secondary edit" />
      <button
        className="btn-secondary delete"
        onClick={() => {
          props.handleDeleteNote(props.id);
        }}
      />
    </div>
  );
};

export default SingleNote;
