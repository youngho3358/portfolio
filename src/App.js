import Nav1 from './nav/nav.js';
import Bio from './bio/bio.js';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav1/>
      <Bio/>
    </div>
  );
}

export default App;
