import './App.css';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <section className="container-edit">
        <h1 className="container-edit--app-title">Note it.</h1>
        <textarea
          // rows="10"
          // cols="50"
          className="container-edit--input-field"
          placeholder="write here your note..."
        />
        <div className="container-edit--btns">
          <button className="btn-primary reset" />
          <button className="btn-primary save" />
        </div>
      </section>

      <section className="container-logs">
        <h2 className="container-logs--log-title">Check it.</h2>
        {/* will use a map method to render the cards soon ➡️ */}
        <div className="container-logs--logs-collection">
          <NotesList />
        </div>
      </section>
    </div>
  );
}

export default App;
