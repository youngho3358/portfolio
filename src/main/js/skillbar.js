import React, { useEffect, useState } from 'react';
import './../css/skillbar.css';

// const SkillBar = ({ skill, level,isInView }) => {
//   const [displayLevel, setDisplayLevel] = useState(0);

//   // useEffect(() => {
//   //   let timeout;
//   //   if (displayLevel < level) {
//   //     timeout = setTimeout(() => setDisplayLevel(displayLevel + 1), 10);
//   //   }
//   //   return () => clearTimeout(timeout);
//   // }, [displayLevel, level]);
//   useEffect(() => {
//     let timeout;
//     if (isInView) {
//       timeout = setTimeout(() => {
//         if (displayLevel < level) {
//           const animationInterval = setInterval(() => {
//             setDisplayLevel(prev => {
//               if (prev < level) {
//                 return prev + 1;
//               } else {
//                 clearInterval(animationInterval);
//                 return prev;
//               }
//             });
//           }, 10);
//         }
//       }, 900); 
//     }
//     return () => {
//       clearTimeout(timeout);
//     };
//   }, [isInView, displayLevel, level]);

//   return (
//     <div className="skill-bar">
//       <div className="skill-name">{skill}</div>
//       <div className="skill-level-bar">
//         <div
//           className="skill-level"
//           style={{ width: `${displayLevel}%` }}
//         >
//           {displayLevel} %
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillBar;

const SkillBar = ({ skill, level, isInView }) => {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    let timeout;
    if (isInView) {
      timeout = setTimeout(() => {
        if (displayLevel < level) {
          const animationInterval = setInterval(() => {
            setDisplayLevel(prev => {
              if (prev < level) {
                return prev + 1;
              } else {
                clearInterval(animationInterval);
                return prev;
              }
            });
          }, 10);
        }
      }, 900); 
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isInView, displayLevel, level]);

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