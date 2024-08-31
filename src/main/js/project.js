import { forwardRef } from 'react';
import './../css/project.css';

const Project = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="project-container">
            <div className="project-header">
                <div>PROJECTS</div>
            </div>
            <div className="project-content">

                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/coin_investment.mp4`} alt='coin_investment' controls/>
                    </div>
                    <div className="project1-card-desc">
                        <p className='project-title'>COIN_INVESTMENT</p>
                        <p className='project-period'>2024.04.11 ~ 2024.04.26</p>
                        <p className='project-detail'>
                            Upbit 사이트에서 제공되는 코인의 가격을 기준으로 사용자가<br/>
                            코인을 가상투자 할 수 있는 사이트를 구현하였습니다.<br/>
                            <br/>
                            프로젝트는 node.js를 사용하여 구현되었습니다.
                        </p>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/coin_investment' >GitHub Repository로 이동하기</a>
                        <br/>
                        <br/>
                        <p className='project-url-text'>자세한 포트폴리오 내용</p>
                        <a className='project-address' href='https://docs.google.com/presentation/d/1ON_78aC0QKPjjZIxxK3ApBAt1zkyDrKiNnrYdJNBsUs/edit?usp=sharing' >포트폴리오로 보러가기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/muzinut.mp4`} alt='muzinut' controls/>
                    </div>
                    <div className="project2-card-desc">
                        <p className='project-title'>Muzinut</p>
                        <p className='project-period'>2024.06.02 ~ 2024.08.02</p>
                        <p className='project-detail'>
                            뮤지션들이 자유롭게 자신의 음악 작업물을 게시하고<br/>
                            게시판을 통해 팬들과 소통할 수 있으며 리스너들은 게시된<br/>
                            음원을 스트리밍하여 들을 수 있는 사이트를 구현하였습니다.<br/>
                            <br/>
                            프로젝트는 Spring Framework 와 Next.js를 사용하여<br/>
                            구현되었습니다.
                        </p>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/Muzinut' >GitHub Repository로 이동하기</a>
                        <br/>
                        <br/>
                        <p className='project-url-text'>자세한 포트폴리오 내용</p>
                        <a className='project-address' href='https://docs.google.com/presentation/d/1spGTYBFq0-sg8WIca2C1dYYSpg3QIzLhJNCzWgcpjFI/edit?usp=sharing' >포트폴리오로 보러가기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        {/* <video className='project-video' src={`${process.env.PUBLIC_URL}/video/muzinut.mp4`} alt='portfolio' controls/> */}
                        <div className='project-video' style={{width:'694.87px', height:'230px', textAlign:'center', paddingTop:'220px', fontSize:'25px', fontWeight:'bold'}}> - 구현 중 -</div>
                    </div>
                    <div className="project3-card-desc">
                        <p className='project-title'>Portfolio</p>
                        <p className='project-period'>2024.08.15 ~ 2024.08.30</p>
                        <p className='project-detail'>
                            직접 구현한 프로젝트들을 정리하여 포트폴리오 사이트를<br/>
                            React.js 를 기반으로 구현하였습니다.<br/>
                            <br/>
                            리액트를 사용하여 코드를 작성한 뒤 Github 에서 제공하는<br/>
                            Github Page 에 업로드하여 배포하였습니다.<br/>
                        </p>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/Muzinut' >GitHub Repository로 이동하기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        {/* <video className='project1-video' src={`${process.env.PUBLIC_URL}/video/muzinut.mp4`} alt='muzinut' controls/> */}
                        <div className='project-video' style={{width:'694.87px', height:'230px', textAlign:'center', paddingTop:'220px', fontSize:'25px', fontWeight:'bold'}}> - 구현 중 -</div>
                    </div>
                    <div className="project2-card-desc">
                        <p className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>COIN_INVESTMENT</p>
                        <p className='project-title' style={{fontSize:'30px', marginTop:'0px'}}>Backend Code Migration</p>
                        <p className='project-period'>2024.06.20 ~ now</p>
                        <p className='project-detail'>
                            기존에 javascript 로 작성되었던 코드를 백엔드 코드와<br/>
                            프론트 엔트 코드로 분리하여 코드 마이그레이션을 진행중입니다.<br/>
                            <br/>
                            단순히 코드의 언어만 변경하는 것이 아닌 사이트의 자체의<br/>
                            기능 추가 구현 및 CI/CD 를 목표로 진행중인 프로젝트입니다.<br/>
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