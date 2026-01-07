import { forwardRef, useEffect, useState } from 'react';
import './../css/project.css';

const Project = forwardRef((props, ref) => {
    /**
     * Runcombi 이미지 fade out, fade in 처리 시작
     */
    const [runcombiImgIndex, setRuncombiImgIndex] = useState(0);
    const [runcombiFade, setRuncombiFade] = useState(false);

    const runcombiImgList = [
        `${process.env.PUBLIC_URL}/img/project/project_runcombi1.png`,
        `${process.env.PUBLIC_URL}/img/project/project_runcombi2.png`,
        `${process.env.PUBLIC_URL}/img/project/project_runcombi3.png`,
        `${process.env.PUBLIC_URL}/img/project/project_runcombi4.png`,
        `${process.env.PUBLIC_URL}/img/project/project_runcombi5.png`
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRuncombiFade(true); // 페이드아웃 시작

            setTimeout(() => {
                setRuncombiImgIndex(prev => (prev + 1) % runcombiImgList.length);
                setRuncombiFade(false); // 페이드인 시작
            }, 300);
        }, 3000); // 3초마다 이미지 전환
        return () => clearInterval(interval);
    }, []);
    /**
     * Runcombi 이미지 fade out, fade in 처리 종료
     */

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
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/randomchat.mp4`} alt='randomchat' controls/>
                    </div>
                    <div className="project4-card-desc">
                        <p className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>Randomchat</p>
                        <p className='project-period'>2024.11.15 ~ 2024.12.31</p>
                        <p className='project-detail'>
                            랜덤한 유저와 화상 채팅을 할 수 있는 토이 프로젝트 입니다.<br/>
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
                        <a className='project-address' href='https://www.random-chat.site' >웹 사이트로 이동하기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        <img className='project-video' src={`${process.env.PUBLIC_URL}/img/project/project_shinhan.png`} alt='shinhan'/>
                    </div>
                    <div className="project5-card-desc">
                        <p className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>신한은행 SOL Bank 챗봇 고도화</p>
                        <p className='project-period'>2025.02 ~ 2025.04</p>
                        <p className='project-detail'>
                            신한은행 SOL Bank 앱 내 챗봇 고도화 프로젝트 입니다.<br/>
                            <br/>
                            구좌 로그인 보안 취약점 수정
                            <p className='sub'>⇁ 기존 구현되어 있던 챗봇 내 구좌 로그인 보안 취약점을 랜덤한 UUID 와 DateTime 으로 조합하여 SHA256 으로 해시처리 후 비교하여 방지하였습니다.</p>
                            
                            <br/>
                            챗봇 AI 추천 상품 고도화
                            <p className='sub'>⇁ 기존 챗봇 AI 를 통해 제공하던 추천 상품을 고도화하여 고객별 추천 상품에 대한 접근 빈도 및 가입 현황을 데이터화 하였습니다.</p>
                        </p>
                    </div>
                </div>
                
                <div className="project-card">
                    <div className="project-card-img">
                        <img className={`project-video fade-image${runcombiFade? ' hide' : ''}`} src={runcombiImgList[runcombiImgIndex]} alt='runcombi'/>
                    </div>
                    <div className="project6-card-desc">
                        <p className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>Runcombi</p>
                        <p className='project-period'>2025.06 ~ 2025.08</p>
                        <p className='project-detail'>
                            CMC 동아리 내에서 개발하고 현재까지 서비스 중인 어플리케이션 입니다.<br/>
                            <br/>
                            반려견과의 산책을 기록으로 남겨 확인할 수 있는 프로젝트 입니다.<br/>
                            구체적인 산책 경로와 산책 내용을 기재하여 캘린더 형태로 확인할 수 있습니다.<br/>
                            <br/>
                            1인 서버 개발자로 참여하여 혼자 모든 서버를 개발한 프로젝트입니다.<br/>
                        </p>
                        <p className='project-url-text'>Back-End GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/Central-MakeUs/RunCombi_Server' >GitHub Repository로 이동하기</a>
                        <p className='project-url-text'>iOS 앱 다운로드 : </p>
                        <a className='project-address' href='https://apps.apple.com/kr/app/%EB%9F%B0%EC%BD%A4%EB%B9%84-%EB%B0%98%EB%A0%A4%EA%B2%AC-%EC%82%B0%EC%B1%85-%EC%9A%B4%EB%8F%99-%EA%B8%B0%EB%A1%9D/id6747975586' >iOS 앱 다운로드</a>
                        <p className='project-url-text'>Android 앱 다운로드 : </p>
                        <a className='project-address' href='https://play.google.com/store/apps/details?id=com.combo.runcombi&pcampaignid=web_share' >Android 앱 다운로드</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/korailtalk.mov`} alt='korailtalk' controls/>
                    </div>
                    <div className="project7-card-desc">
                        <p className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>코레일톡 앱 리뉴얼</p>
                        <p className='project-period'>2025.05 ~ 2026.01</p>
                        <p className='project-detail'>
                            새롭게 런칭되는 코레일톡 앱의 WebView 및 Bridge 개발을 진행하였습니다.<br/>
                            <br/><br/>
                            View 전환 및 데이터 처리 방식 변경
                            <p className='sub'>⇁ AS-IS의 서버 사이드 JSP 기반 렌더링 구조를 클라이언트 사이드 View(JSP)로 새로 개발하였습니다.</p>
                            <p className='sub'>⇁ 서버-클라이언트 간 데이터 전달 방식을 통합 API 통신 기반 아키텍처로 재설계하였습니다.</p>
                            <br/>
                            Native - Webview 브리지 인터페이스 개발
                            <p className='sub'>⇁ Native와 Webview 간 양방향 데이터 전달과 동기화를 위해 JavaScript 기반 Bridge 함수 집합을 모듈화하였습니다.</p>
                            <p className='sub'>⇁ 각 페이지별 요청과 콜백 함수를 통합 설계하여 비동기 통신 및 상태 동기화 문제를 효율적으로 해결하였습니다.</p>
                        </p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        {/* <video className='project-video' src={`${process.env.PUBLIC_URL}/video/korailtalk.mov`} alt='db저축은행' controls/> */}
                        <div className='project-video' style={{width:'694.87px', height:'230px', textAlign:'center', paddingTop:'220px', fontSize:'25px', fontWeight:'bold'}}> - 프로젝트 진행중 -</div>
                    </div>
                    <div className="project8-card-desc">
                        <p className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>DB저축은행 디지털채널 재구축</p>
                        <p className='project-period'>2026.01 ~ 2026.08</p>
                        <p className='project-detail'>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Project;