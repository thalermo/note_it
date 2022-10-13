import './App.css';

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
          <div className="card-note">
            <h3 className="card-note--headline-note">watch on netflix</h3>
            <p className="card-note--date-stamp">00:01, 31.10.21</p>

            <button className="btn-secondary edit" />
            <button className="btn-secondary delete" />
          </div>
          <div className="card-note">
            <h3 className="card-note--headline-note">Order online</h3>
            <p className="card-note--date-stamp">15:49, 02.09.22</p>

            <button className="btn-secondary edit" />
            <button className="btn-secondary delete" />
          </div>
          <div className="card-note">
            <h3 className="card-note--headline-note">Groceries this week</h3>
            <p className="card-note--date-stamp">18:36, 15.09.22</p>

            <button className="btn-secondary edit" />
            <button className="btn-secondary delete" />
          </div>
          <div className="card-note">
            <h3 className="card-note--headline-note">Crazy ideas</h3>
            <p className="card-note--date-stamp">09:00, 25.08.21</p>

            <button className="btn-secondary edit" />
            <button className="btn-secondary delete" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
