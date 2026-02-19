import React, { useEffect, useState } from 'react';
import './../css/skillbar.css';

const SkillBar = ({ skill, level, isInView }) => {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let currentLevel = 0;
    let animationInterval;
    setDisplayLevel(0);

    const startDelay = setTimeout(() => {
      animationInterval = setInterval(() => {
        currentLevel += 1;
        if (currentLevel >= level) {
          setDisplayLevel(level);
          clearInterval(animationInterval);
          return;
        }
        setDisplayLevel(currentLevel);
      }, 10);
    }, 250);

    return () => {
      clearTimeout(startDelay);
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    };
  }, [isInView, level]);

  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="skill-level-bar">
        <div className="skill-level" style={{ width: `${displayLevel}%` }}>
          {displayLevel} %
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
