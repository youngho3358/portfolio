import './../css/potfolio_form.css';
import './../css/mobile.css';
import React, { useEffect, useRef, useState } from 'react';
import Header from "./header";
import Top from './top';
import Aboutme from "./aboutme";
import Skill from './skill';
import Archiving from './archiving';
import Project from './project';
import Activities from './activities';
import { FaArrowUp } from "react-icons/fa6";
import End from './end.js';

const MOBILE_BREAKPOINT = 768;

const Potfolio_form = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= MOBILE_BREAKPOINT);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const archivingRef = useRef(null);
  const projectRef = useRef(null);
  const activitiesRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={isMobile ? 'mobile-layout' : ''}>
      <Header 
        isMobile={isMobile}
        onAboutMeClick={() => handleScrollTo(aboutMeRef)}
        onSkillsClick={() => handleScrollTo(skillsRef)}
        onArchivingClick={() => handleScrollTo(archivingRef)}
        onProjectClick={() => handleScrollTo(projectRef)}
        onActivitiesClick={() => handleScrollTo(activitiesRef)} 
      />
      <Top />
      <Aboutme ref={aboutMeRef} />
      <Skill ref={skillsRef} />
      <Project ref={projectRef} />
      <Activities ref={activitiesRef} />
      <Archiving ref={archivingRef} />
      <End />
      <button onClick={handleScrollToTop} className="scroll-to-top"><FaArrowUp size={40} /></button>
    </div>
  );
}

export default Potfolio_form;
