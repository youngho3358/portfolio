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
                        <a className='project-address' href='https://drive.google.com/file/d/1_Z2nB5tADp9p8tJvUBekwA84BjOWh_D4/view?usp=drive_link' >포트폴리오로 보러가기</a>
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
                        <a className='project-address' href='https://drive.google.com/file/d/1SEajSp0PqzpSqfz39PhYArISyhvCuyoI/view?usp=drive_link' >포트폴리오로 보러가기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/portfolio.mp4`} alt='portfolio' controls/>
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
                        <a className='project-address' href='https://github.com/youngho3358/portfolio' >GitHub Repository로 이동하기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/randomchat.mp4`} alt='muzinut' controls/>
                        {/* <div className='project-video' style={{width:'694.87px', height:'230px', textAlign:'center', paddingTop:'220px', fontSize:'25px', fontWeight:'bold'}}> - 구현 중 -</div> */}
                    </div>
                    <div className="project4-card-desc">
                        <p className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>Randomchat</p>
                        <p className='project-period'>2024.11.15 ~ now</p>
                        <p className='project-detail'>
                            현재 구현중인 랜덤한 유저와 채팅할 수 있는 사이트입니다.<br/>
                            <br/>
                            Front-End는 React를 사용해 구현하였으며,<br/>
                            Back-End는 Spring Boot를 사용해 구현하였습니다.<br/>
                            <br/>
                            Docker Compose로 컨테이너를 분리해 구현하였으며<br/>
                            Nginx의 리버스 프록시 기능을 통해 도메인 주소 경로별로<br/>
                            백엔드, 프론트엔드 경로를 분리하여 구현하였습니다.
                        </p>
                        <p className='project-url-text'>Back-End GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/RandomChat-be' >GitHub Repository로 이동하기</a>
                        <p className='project-url-text'>Front-End GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/dlxodud123/randomchat_front' >GitHub Repository로 이동하기</a>
                        <p className='project-url-text'>웹 주소 : </p>
                        <a className='project-address' href='http://www.random-chat.site' >웹 사이트로 이동하기</a>
                    </div>
                </div>
                

            </div>
        </div>
    );
});

export default Project;