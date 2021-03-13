import './App.css';

function App() {
  return (
    <div className="App">
      <main>
      <div className="card">
            <header>
                <div className="avatar"></div>
            </header>
            <h2>Victor Crest
                <div className="age">26</div>
            </h2>
            <div className="label">London</div>
            <footer>
                <div className="col">
                    <h3>80K</h3>
                    <small>Followers</small>
                </div>
                <div className="col">
                    <h3>803K</h3>
                    <small>Likes</small>
                </div>
                <div className="col">
                    <h3>1.4K</h3>
                    <small>Photos</small>
                </div>
            </footer>
            <footer>
                Challenge by Frontend Mentor. Coded by Sam C.
            </footer>
        </div>
        </main>
    </div>
  );
}

export default App;
