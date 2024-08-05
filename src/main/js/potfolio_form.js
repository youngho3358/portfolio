import './../css/potfolio_form.css';
import React, { useRef } from 'react';
import Header from "./header";
import Top from './top';
import Aboutme from "./aboutme";
import Skill from './skill';
import Archiving from './archiving';
import Project from './project';
import Activities from './activities';
import { FaArrowUp } from "react-icons/fa6";
import End from './end.js';

const Potfolio_form = () => {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const archivingRef = useRef(null);
  const projectRef = useRef(null);
  const activitiesRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header 
        onAboutMeClick={() => handleScrollTo(aboutMeRef)}
        onSkillsClick={() => handleScrollTo(skillsRef)}
        onArchivingClick={() => handleScrollTo(archivingRef)}
        onProjectClick={() => handleScrollTo(projectRef)}
        onActivitiesClick={() => handleScrollTo(activitiesRef)} 
      />
      <Top />
      <Aboutme ref={aboutMeRef} />
      <Skill ref={skillsRef} />
      <Archiving ref={archivingRef} />    
      <Project ref={projectRef} />  
      <Activities ref={activitiesRef} />
      <End />
      <button onClick={handleScrollToTop} className="scroll-to-top"><FaArrowUp size={40} /></button>
    </>
  );
}

export default Potfolio_form;
