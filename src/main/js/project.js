import { forwardRef } from 'react';
import './../css/project.css';

// const Project = forwardRef((props, ref) => {
//     return(
//         <>
//             <div ref={ref} style={{background:'#1d809f', height:'1500px'}}>
//                 <div style={{width:"500px", margin:"auto"}}>
//                     <div style={{textAlign:'center',fontSize:'55px',paddingTop:'30px',borderBottom:'1px solid gray',width:'300px', margin:'auto', fontWeight:"bold", height:"90px", color:"white"}}>PROJECTS</div>
//                 </div>
//                 <div style={{display:"flex", margin:"auto", width:"1280px"}}>
//                     <div style={{textAlign:'center', width:"1280px"}}>

                        
//                         <div style={{backgroundColor:'#ffffff',width:'1280px',height:'550px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
//                         <div style={{display:"flex"}}>
//                                     <div style={{textAlign:"left", marginLeft:"20px",marginTop:'20px'}}>
//                                         <img style={{width:'550px',height:'400px', marginTop:"50px",marginLeft:'60px',border:'2px solid black',borderRadius:'10px'}} src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='itbank'></img>
//                                     </div>
//                                     <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"80px", marginTop:"80px", textAlign:"left"}}>
//                                         KREAM 웹 사이트 클론 프로젝트<br></br><label style={{fontWeight:"lighter"}}>2024.01.31 ~ 2024.08.02</label>
//                                         <p style={{fontWeight:"lighter"}}>sdasdasd</p>
//                                     </div>
//                                 </div>
//                         </div>


//                         <div style={{backgroundColor:'#ffffff',width:'1280px',height:'550px',boxShadow:'1rem 1rem 1rem 1rem rgb(68 68 68 / 20%)',borderRadius:'30px', marginTop:"50px"}}>
//                         <div style={{display:"flex"}}>
//                                     <div style={{textAlign:"left", marginLeft:"20px",marginTop:'20px'}}>
//                                         <img style={{width:'550px',height:'400px', marginTop:"50px",marginLeft:'60px',border:'2px solid black',borderRadius:'10px'}} src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='itbank'></img>
//                                     </div>
//                                     <div style={{fontSize:"25px", fontWeight:"bold", marginLeft:"80px", marginTop:"80px", textAlign:"left"}}>
//                                         KREAM 웹 사이트 클론 프로젝트<br></br><label style={{fontWeight:"lighter"}}>2024.01.31 ~ 2024.08.02</label>
//                                         <p style={{fontWeight:"lighter"}}>sdasdasd</p>
//                                     </div>
//                                 </div>
                                
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// });

// export default Project;
const Project = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="project-container">
            <div className="project-header">
                <div>PROJECTS</div>
            </div>
            <div className="project-content">

                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project1-video' src={`${process.env.PUBLIC_URL}/video/coin_investment.mp4`} alt='coin_investment' controls/>
                        {/* <img src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='project1' /> */}
                    </div>
                    <div className="project1-card-desc">
                        <p className='project-title'>COIN_INVESTMENT</p>
                        <p className='project-period'>2024.04.11 ~ 2024.04.26</p>
                        <p className='project-detail'>
                            Upbit 사이트에서 제공되는 코인의 가격을 기준으로 사용자가<br/>
                            코인을 가상투자 할 수 있는 사이트를 구현하였습니다.<br/><br/>
                            프로젝트는 node.js를 사용하여 구현되었습니다.
                        </p>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/coin_investment' >GitHub Repository로 이동하기</a>
                        <br/>
                        <br/>
                        <p className='project-url-text'>자세한 포트폴리오 내용 (p.5 ~ p.16) : </p>
                        <a className='project-address' href='https://docs.google.com/presentation/d/15SMR5FeC9Yr3w2w6wLuptSZDr3obwAIbMujhV3JVEro/#slide=id.g2f211914f85_0_3' >포트폴리오로 보러가기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project1-video' src={`${process.env.PUBLIC_URL}/video/coin_investment.mp4`} alt='coin_investment' controls/>
                        {/* <img src={`${process.env.PUBLIC_URL}/img/project/project1.png`} alt='project1' /> */}
                    </div>
                    <div className="project2-card-desc">
                        <p className='project-title'>Muzinut</p>
                        <p className='project-period'>2024.06.02 ~ 2024.08.02</p>
                        <p className='project-detail'>
                            뮤지션들이 자유롭게 자신의 음악 작업물을 게시하고<br/>
                            게시판을 통해 팬들과 소통할 수 있으며 리스너들은 게시된<br/>
                            음원을 스트리밍하여 들을 수 있는 사이트를 구현하였습니다.<br/><br/>
                            프로젝트는 Spring Framework 와 Next.js를 사용하여<br/>
                            구현되었습니다.
                        </p>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/Muzinut' >GitHub Repository로 이동하기</a>
                        <br/>
                        <br/>
                        <p className='project-url-text'>자세한 포트폴리오 내용 (p.17 ~ p.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx) : </p>
                        <a className='project-address' href='https://docs.google.com/presentation/d/15SMR5FeC9Yr3w2w6wLuptSZDr3obwAIbMujhV3JVEro/#slide=id.g2f211914f85_0_231' >포트폴리오로 보러가기</a>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
});

export default Project;