import { forwardRef, useEffect, useState } from 'react';
import './../css/end.css';


// const End = forwardRef((props, ref) => {
//     return (
//         <>
//       <div ref={ref} style={{ background: '#FFFFFF', height: '1000px', position: 'relative' }}>
//         <img 
//           style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
//           src={`${process.env.PUBLIC_URL}/img/background/background.png`} 
//           alt='javascript' 
//         />
//         <p 
//           style={{
//             zIndex:'1',
//             fontSize: '150px',
//             color: 'black',
//             textAlign: 'center',
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             margin: 0,
//             animation: 'fadeIn 3s ease-in-out'
//           }}
//         >
//           감사합니다!
//         </p>
//         <p 
//           style={{

//             zIndex:'0',
//             fontSize: '150px',
//             color: 'rgba(0,0,0,0.1)',
//             textAlign: 'center',
//             position: 'absolute',
//             top: '39%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             margin: 0,
//             marginTop:'2px',
//             animation: 'fadeIn 3s ease-in-out',
//           }}
//         >
//           Thank You
//         </p>
//       </div>
//     </>
//     );
//   });
  
//   export default End;

const End = forwardRef((props, ref) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setZoomLevel(window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 실행

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
      <div ref={ref} className="end-container"  style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/background.png)` ,
        // backgroundSize: "cover" /* 컨테이너를 덮도록 설정 */,
        backgroundSize: zoomLevel <0.75 ? "contain" : "cover", /* 확대 수준에 따라 조정 */
        backgroundPosition: "center" /* 중앙에 배치 */
      }}>
          {/* <img 
              className="end-background" 
              src={`${process.env.PUBLIC_URL}/img/background/background.png`} 
              alt='background' 
          /> */}
           <p className="end-main-text" >
        감사합니다!
      </p>
      <p className="end-sub-text" 
      >
        Thank You
      </p>
      </div>
  );
});

export default End;
