import { forwardRef, useEffect, useRef, useState } from 'react';
import './../css/skill.css';
import SkillBar from './skillbar';

const skills = [
    { skill: 'HTML5', level: 70 },
    { skill: 'CSS3', level: 60 },
    { skill: 'JavaScript', level: 65 },
    { skill: 'React', level: 50 },
    { skill: 'Vue.js', level: 60 },
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
    const skillChartRef = useRef(null);
  
    useEffect(() => {
      const currentTarget = skillChartRef.current;
      if (!currentTarget) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target); // 애니메이션 후 감시 중지
          }
        },
        { threshold: 0.3 } // skill-chart 영역이 일정 이상 보이면 트리거
      );
  
      observer.observe(currentTarget);
  
      return () => {
        observer.unobserve(currentTarget);
      };
    }, []);
  
    return (
      <div ref={ref} className="skill-container">
        <div className="skill-header">
          <h2>SKILLS</h2>
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
                <div className="skill_img"><img src={`${process.env.PUBLIC_URL}/img/frontend/skillimg_vue.png`} alt='Vue.js' /></div>
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
        <div ref={skillChartRef} className="skill-chart">
          {skills.map((skillObj, index) => (
            <SkillBar key={index} skill={skillObj.skill} level={skillObj.level} isInView={isInView} />
          ))}
        </div>
      </div>
    );
  });
  
  export default Skill;
