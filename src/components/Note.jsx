import React from 'react';

const Note = () => {
  return (
    <div className="card-note">
      <h3 className="card-note--headline-note">Crazy ideas</h3>
      <p className="card-note--date-stamp">09:00, 25.08.21</p>

      <button className="btn-secondary edit" />
      <button className="btn-secondary delete" />
    </div>
  );
};

export default Note;
