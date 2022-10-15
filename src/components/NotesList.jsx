import Note from './Note';
import '../App.css';
import AddNote from './AddNote';

const NotesList = (props) => {
  const notesMapping = props.notes.map((el) => (
    <Note
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
