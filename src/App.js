// import react library
import React from 'react';

// import library to generate IDs 
import { nanoid } from 'nanoid';

// import components 
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {

  // the main State of the App with an array of objects contains the data for each note 

  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      headline: 'Crazy ideas',
      text: ['skydiving', 'Bungee jumping'],
      timeStamp: '09:00, 25.08.21',
    },
    {
      id: nanoid(),
      headline: 'Most BingeWorthy ',
      text: ['Sinner', 'the Boys', 'inventing Anna', '13 reasons why'],
      timeStamp: '09:00, 25.08.21',
    },
    {
      id: nanoid(),
      headline: 'Groceries',
      text: ['beer yeast', 'berries', 'chickpeas', 'silken tofu'],
      timeStamp: '09:00, 25.08.21',
    },
    {
      id: nanoid(),
      headline: 'Crazy ideas',
      text: ['skydiving', 'Bungee jumping'],
      timeStamp: '09:00, 25.08.21',
    },
  ]);

  // State for the search function 
  const [searchText, setSearchText] = React.useState('');

  // State for the toggle functions
  const [themeMode, setThemeMode] = React.useState('default');

  // todo: localStorage doesn't work yet, to check what is going on 
  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('react-note-app-data'));
  //   console.log('mount');
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  // }, [notes]);

  // HandleClick form add a note
  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      headline: text,
      text: '',
      timeStamp: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // HandleClick form delete a note
  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((el) => el.id !== id);
    setNotes(newNotes);
  };

  // Search function, using diverse of js methods 
  const searchFilterMethod = notes.filter((el) =>
    el.headline.toLocaleLowerCase().includes(searchText)
  );

  return (
    <div className={`${themeMode}`}>
      <div className="App">

        <section className="container-edit">
          <Header setThemeMode={setThemeMode} themeMode={themeMode} />
          <SearchBar setSearchText={setSearchText} />
          <AddNote handleAddNote={handleAddNote} />
        </section>

        <section className="container-logs">
          <h2 className="container-logs--log-title">Check it.</h2>
          <NotesList
            notes={searchFilterMethod}
            handleDeleteNote={handleDeleteNote}
          />
        </section>

      </div>
    </div>
  );
}

export default App;
