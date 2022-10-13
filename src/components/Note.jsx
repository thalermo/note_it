import React from 'react';

const Note = (props) => {
  return (
    <div className="card-note" id={props.id}>
      <h3 className="card-note--headline-note">{props.headline}</h3>
      <p className="card-note--date-stamp">{props.timeStamp}</p>

      <button className="btn-secondary edit" />
      <button className="btn-secondary delete" />
    </div>
  );
};

export default Note;
