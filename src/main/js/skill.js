import { forwardRef, useEffect, useRef, useState } from 'react';
import './../css/skill.css';
import SkillBar from './skillbar';
import styled from 'styled-components';

const skills = [
    { skill: 'HTML5', level: 70 },
    { skill: 'CSS3', level: 65 },
    { skill: 'JavaScript', level: 55 },
    { skill: 'React', level: 50 },
    { skill: 'JAVA', level: 75 },
    { skill: 'Spring', level: 70 },
    { skill: 'node.js', level: 60 },
    { skill: 'MySQL', level: 55 },
    { skill: 'Oracle', level: 60 },
    { skill: 'Git', level: 40 },
    { skill: 'Github', level: 40 },
  ];
  
  const Skill = forwardRef((props, ref) => {
    const [isInView, setIsInView] = useState(false);
    const skillRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(skillRef.current); // 애니메이션 후 감시 중지
          }
        },
        { threshold: 0.1 } // 요소의 10%가 보이면 트리거
      );
  
      if (skillRef.current) {
        observer.observe(skillRef.current);
      }
  
      return () => {
        if (skillRef.current) {
          observer.unobserve(skillRef.current);
        }
      };
    }, []);
  
    return (
      <div ref={ref} className="skill-container">
        <div ref={skillRef} className="skill-header">
          <div>SKILLS</div>
        </div>
        <div className="skill-content">
          <div className="skill-column">
            <div className="skill-card">
              <div className="skill-title">FrontEnd</div>
              <div className="skill-imgs">
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_html.png`} alt='html' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_css.png`} alt='css' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_javascript.png`} alt='javascript' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_react.png`} alt='react' /></div>
              </div>
            </div>
          </div>
          <div className="skill-column">
            <div className="skill-card">
              <div className="skill-title">Backend</div>
              <div className="skill-imgs">
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/backend/skillimg_java.png`} alt='java' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/backend/skillimg_spring.png`} alt='spring' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/backend/skillimg_node.png`} alt='node' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/backend/skillimg_mysql.png`} alt='mysql' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/backend/skillimg_oracle.png`} alt='oracle' /></div>
              </div>
            </div>
          </div>
          <div className="skill-column">
            <div className="skill-card">
              <div className="skill-title">Version Control</div>
              <div className="skill-imgs">
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/version_control/git.png`} alt='git' /></div>
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/version_control/github.png`} alt='github' /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-chart">
          {skills.map((skillObj, index) => (
            <SkillBar key={index} skill={skillObj.skill} level={skillObj.level} isInView={isInView} />
          ))}
        </div>
      </div>
    );
  });
  
  export default Skill;