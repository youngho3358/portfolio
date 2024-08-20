import { forwardRef } from 'react';
import './../css/archiving.css';

// const Archiving = forwardRef((props, ref) => {
//     return(
//         <>
//             <div ref={ref} style={{background:'#212529', height:'750px'}}>
//                 <div style={{width:"500px", margin:"auto"}}>
//                     <div style={{textAlign:'center',fontSize:'55px',paddingTop:'30px',borderBottom:'1px solid gray',width:'300px', margin:'auto', fontWeight:"bold", height:"90px", color:"white"}}>ARCHIVING</div>
//                 </div>
//                 <div style={{display:"flex", margin:"auto", width:"1450px"}}>

//                     <div className='archive_img' style={{textAlign:'center', width:"650px"}}>
//                         <div style={{backgroundColor:'#ffffff',width:'650px',height:'470px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
//                             <div style={{width:"580px", margin:"auto", textAlign:"left", height:"145px"}}>
//                                 <img style={{width:'260px',height:'110px', marginTop:"20px"}} src={`${process.env.PUBLIC_URL}/img/version_control/github.png`} alt='javascript'></img>
//                             </div>
//                             <div style={{width:"525px", textAlign:"left", margin:"auto"}}>
//                                 <a className='address' href='github.com' >github.com</a>
//                             </div>
//                             <div style={{width:"525px", textAlign:"left", margin:"25px auto auto auto", fontSize:"23px"}}>
//                                 <label className='no-hover' style={{fontWeight:"bold"}}>소스 코드 저장소</label>입니다.
//                             </div>
//                             <ul style={{width:"525px", textAlign:"left", margin:"20px auto auto auto", fontSize:"23px"}}>
//                                 <li>
//                                     과거 프로젝트, 프로그램, 앱의 소스 코드
//                                 </li>
//                                 <li style={{marginTop:"15px"}}>
//                                     혼자서 코딩 연습을 위해 끄적이던 소스 코드
//                                 </li>
//                                 <li style={{marginTop:"15px"}}>
//                                     학부 시절 수강한 수업들의 코딩 과제 소스 코드
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div style={{width:"150px"}}></div>

//                     <div className='archive_img' style={{textAlign:'center', width:"650px"}}>
//                         <div style={{backgroundColor:'#ffffff',width:'650px',height:'470px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
//                             <div style={{width:"550px", margin:"auto", textAlign:"left", height:"145px"}}>
//                                 <img style={{width:'300px',height:'100px', marginTop:"20px"}} src={`${process.env.PUBLIC_URL}/img/archiving/tstory.png`} alt='javascript'></img>
//                             </div>
//                             <div style={{width:"525px", textAlign:"left", margin:"auto"}}>
//                                 <a className='address' href='github.com' >tistory.com</a>
//                             </div>
//                             <div style={{width:"525px", textAlign:"left", margin:"25px auto auto auto", fontSize:"23px"}}>
//                                 <label className='no-hover' style={{fontWeight:"bold"}}>공부 및 지식 공유 목적의 블로그</label>입니다.
//                             </div>
//                             <ul style={{width:"525px", textAlign:"left", margin:"20px auto auto auto", fontSize:"23px"}}>
//                                 <li>
//                                     공부한 것을 진정한 나의 것으로 만들기 위한 기록
//                                 </li>
//                                 <li style={{marginTop:"15px"}}>
//                                     개발자의 길을 걸으며 공부한 개발 관련 지식 정리
//                                 </li>
//                                 <li style={{marginTop:"15px"}}>
//                                     학부 시절 배운 전공 수업들의 내용 복습 및 정리
//                                 </li>
//                                 <li style={{marginTop:"15px"}}>
//                                     지식 공유를 통한 선한 영향력 행사
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//         </>
//     )
// });

// export default Archiving;

const Archiving = forwardRef((props, ref) => {
    return(
        <div ref={ref} className="archiving-container">
            <div className="archiving-header">
                <div>ARCHIVING</div>
            </div>
            <div className="archiving-content">
                <div className='archive-card'>
                    <div className="archive-img">
                        <a href='https://github.com/youngho3358'>
                            <img className='archive-content' style={{'width' : '220px'}} src={`${process.env.PUBLIC_URL}/img/version_control/github.png`} alt='github' />
                        </a>
                    </div>
                    <div className="archive-link">
                        <a className='address' href='https://github.com/youngho3358' >https://github.com/youngho3358</a>
                    </div>
                    <div className="archive-desc">
                        <label className='no-hover'>소스 코드 저장소입니다.</label>
                    </div>
                    <br/>
                    <ul className="archive-list">
                        <li>저의 GitHub 코드 저장소 입니다.</li>
                        <li>연습용으로 진행했던 미니 프로젝트의 코드</li>
                        <li>과거에 진행한 프로젝트의 세부코드</li>
                        <li>현재 진행중인 프로젝트의 코드</li>
                    </ul>
                </div>

                <div className='archive-card'>
                    <div className="archive-img">
                        <a href='https://youngho3358.tistory.com'>
                            <img className='archive-content' style={{'marginLeft' : '10px'}} src={`${process.env.PUBLIC_URL}/img/archiving/tistory.png`} alt='github' />
                        </a>
                    </div>
                    <div className="archive-link">
                        <a className='address' href='https://youngho3358.tistory.com' >https://youngho3358.tistory.com</a>
                    </div>
                    <div className="archive-desc">
                        <label className='no-hover'>기술 블로그입니다.</label>
                    </div>
                    <br/>
                    <ul className="archive-list">
                        <li>백엔드를 학습하면서 작성한 소스코드 필기</li>
                        <li>프론트엔드를 학습하면서 작성한 소스코드 필기</li>
                        <li>OS를 학습하면서 작성한 소스코드 필기</li>
                        <li>개발 과정동안 발생한 문제의 해결 방안</li>
                    </ul>
                </div>
            </div>
        </div>
    )
});

export default Archiving;