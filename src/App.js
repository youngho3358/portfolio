import Nav1 from './nav/nav.js';
import Bio from './bio/bio.js';
import Skills from './skills/skills.js'
import './App.css';
import React, { useRef } from 'react';


function App() {
  const skillBoxRef = useRef(null);

  return (
    <div className="App">
      <Nav1 skillBoxRef={skillBoxRef}/>
      <Bio skillBoxRef={skillBoxRef}/>
      <Skills skillBoxRef={skillBoxRef}/>
    </div>
  );
}

export default App;
