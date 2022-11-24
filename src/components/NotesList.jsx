import SingleNote from './SingleNote';

// THE NOTE LIST COMPONENT contains the mapping method to render the default notes and added notes into the app

const NotesList = (props) => {

  // using the mapping js method outside the return section, for more clearly

  const notesMapping = props.notes.map((el) => (
    <SingleNote
      id={el.id}
      key={el.id}
      headline={el.headline}
      text={el.text}
      timeStamp={el.timeStamp}
      handleDeleteNote={props.handleDeleteNote}
    />
  ));

  return <div className="container-logs--logs-collection">{notesMapping}</div>;
};

export default NotesList;
