import React from 'react';
import './App.css';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import AddNote from './components/AddNote';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

function App() {
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

  const [searchText, setSearchText] = React.useState('');
  const [themeMode, setThemeMode] = React.useState(false);

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

  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((el) => el.id !== id);
    setNotes(newNotes);
  };

  const searchFilterMethod = notes.filter((el) =>
    el.headline.toLocaleLowerCase().includes(searchText)
  );

  return (
    <div className={`${themeMode && 'night-mode'}`}>
      <div className="App">
        <section className="container-edit">
          <Header setThemeMode={setThemeMode} />
          <SearchBar setSearchText={setSearchText} />
          <AddNote handleAddNote={handleAddNote} />
        </section>
        <section className="container-logs">
          <h2 className="container-logs--log-title">Check it.</h2>
          {/* will use a map method to render the cards soon ➡️ */}
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
