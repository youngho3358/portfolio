import { forwardRef, useEffect, useState } from 'react';
import './../css/end.css';

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
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/background/background1.jpeg)` ,
        backgroundSize: zoomLevel <0.75 ? "contain" : "cover", /* 확대 수준에 따라 조정 */
        backgroundPosition: "center" /* 중앙에 배치 */
      }}>
        {/* <p className="end-main-text" >
          감사합니다.
        </p>
        <p className="end-sub-text" 
        >
          Thank You
        </p> */}
      </div>
  );
});

export default End;
