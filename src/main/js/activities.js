import { Navigate, useNavigate } from 'react-router-dom';
import './../css/activities.css';
import { forwardRef } from 'react';

// const Activities = forwardRef((props, ref) => {

//     return (
//         <>
//             <div ref={ref} style={{ background: 'rgba(107, 142, 35, 0.8)', height: '1500px' }}>
//                 <div style={{ width: "500px", margin: "auto" }}>
//                     <div style={{ textAlign: 'center', fontSize: '55px', paddingTop: '30px', borderBottom: '1px solid gray', width: '300px', margin: 'auto', fontWeight: "bold", height: "90px", color: "white" }}>ACTIVITIES</div>
//                 </div>
//                 <div style={{ display: "flex", margin: "auto", width: "1280px" }}>
//                     <div style={{ textAlign: 'center', width: "1280px" }}>
//                         <div style={{ backgroundColor: '#ffffff', width: '1280px', height: '1000px', boxShadow: '1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)', borderRadius: '30px', marginTop: "50px", paddingTop:"50px" }}>
//                             <div onClick={() => {window.location.href = 'http://www.kgitbank.kr/' }} className='activites_img' style={{ backgroundColor: 'white', width: '1100px', height: "150px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "15px", margin: "auto" }}>
//                                 <div style={{display:"flex"}}>
//                                     <div style={{textAlign:"left", marginLeft:"20px"}}>
//                                         <img style={{width:'100px',height:'120px', marginTop:"10px"}} src={`${process.env.PUBLIC_URL}/img/activities/itbank.png`} alt='itbank'></img>
//                                     </div>
//                                     <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"30px", marginTop:"40px", textAlign:"left"}}>
//                                         KG IT뱅크 부트 캠프 수료<br></br><label style={{fontWeight:"lighter"}}>2024.01.31 ~ 2024.08.02</label>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div onClick={() => {window.location.href = 'https://codingapple.com/course/react-basic/' }} className='activites_img' style={{ backgroundColor: 'white', width: '1100px', height: "150px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "15px", margin: "30px auto auto auto" }}>
//                                 <div style={{display:"flex"}}>
//                                     <div style={{textAlign:"left", marginLeft:"20px"}}>
//                                         <img style={{width:'100px',height:'120px', marginTop:"10px"}} src={`${process.env.PUBLIC_URL}/img/activities/코딩애플.png`} alt='itbank'></img>
//                                     </div>
//                                     <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"30px", marginTop:"40px", textAlign:"left"}}>
//                                         코딩 애플 React 강의 수료<br></br>
//                                         {/* <label style={{fontWeight:"lighter"}}>2024.01.31 ~ 2024.08.02</label> */}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div onClick={() => {window.location.href = 'http://www.codingapple.com/' }} className='activites_img' style={{ backgroundColor: 'white', width: '1100px', height: "150px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "15px", margin: "30px auto auto auto" }}>
//                                 <div style={{display:"flex"}}>
//                                     <div style={{textAlign:"left", marginLeft:"20px"}}>
//                                         <img style={{width:'100px',height:'120px', marginTop:"10px"}} src={`${process.env.PUBLIC_URL}/img/activities/코딩애플.png`} alt='itbank'></img>
//                                     </div>
//                                     <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"30px", marginTop:"40px", textAlign:"left"}}>
//                                         코딩 애플 TypeScript 강의 수료<br></br>
//                                         {/* <label style={{fontWeight:"lighter"}}>2024.01.31 ~ 2024.08.02</label> */}
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// });

// export default Activities;

const Activities = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="activities-container">
            <div className="activities-header">
                <div>ACTIVITIES</div>
            </div>
            <div className="activities-content">
                <div className="activities-card" onClick={() => { window.location.href = 'http://www.kgitbank.kr/' }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/itbank.png`} alt='itbank' />
                    </div>
                    <div className="activities-description">
                        KG IT뱅크 부트 캠프 수료<br /><label>2024.01.31 ~ 2024.08.02</label>
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.location.href = 'https://codingapple.com/course/react-basic/' }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/코딩애플.png`} alt='coding apple react' />
                    </div>
                    <div className="activities-description">
                        코딩 애플 React 강의 수료
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.location.href = 'https://codingapple.com/course/html-basics/' }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/코딩애플.png`} alt='coding apple typescript' />
                    </div>
                    <div className="activities-description">
                        코딩 애플 HTML/CSS 강의 수료
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Activities;
