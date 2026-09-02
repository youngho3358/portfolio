import { forwardRef, useEffect, useState } from 'react';
import './../css/project.css';

const RUNCOMBI_IMG_LIST = [
    `${process.env.PUBLIC_URL}/img/project/runcombi/project_runcombi1.png`,
    `${process.env.PUBLIC_URL}/img/project/runcombi/project_runcombi2.png`,
    `${process.env.PUBLIC_URL}/img/project/runcombi/project_runcombi3.png`,
    `${process.env.PUBLIC_URL}/img/project/runcombi/project_runcombi4.png`,
    `${process.env.PUBLIC_URL}/img/project/runcombi/project_runcombi5.png`
];

const CMC_ATTENDANCE_IMG_LIST = [
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance1.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance2.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance3.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance4.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance5.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance6.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance7.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance8.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance9.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance10.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance11.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance12.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance13.png`,
    `${process.env.PUBLIC_URL}/img/project/cmc_attendance/project_cmc_attendance14.png`,
];

const Project = forwardRef((props, ref) => {
    /**
     * Runcombi 이미지 fade out, fade in 처리 시작
     */
    const [runcombiImgIndex, setRuncombiImgIndex] = useState(0);
    const [runcombiFade, setRuncombiFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRuncombiFade(true); // 페이드아웃 시작

            setTimeout(() => {
                setRuncombiImgIndex(prev => (prev + 1) % RUNCOMBI_IMG_LIST.length);
                setRuncombiFade(false); // 페이드인 시작
            }, 300);
        }, 3000); // 3초마다 이미지 전환
        return () => clearInterval(interval);
    }, []);
    /**
     * Runcombi 이미지 fade out, fade in 처리 종료
     */

    /**
     * CMC 출석앱 이미지 fade out, fade in 처리 시작
     */
    const [cmcAttendanceImgIndex, setCmcAttendanceImgIndex] = useState(0);
    const [cmcAttendanceFade, setCmcAttendanceFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCmcAttendanceFade(true); // 페이드아웃 시작

            setTimeout(() => {
                setCmcAttendanceImgIndex(prev => (prev + 1) % CMC_ATTENDANCE_IMG_LIST.length);
                setCmcAttendanceFade(false); // 페이드인 시작
            }, 300);
        }, 3000); // 3초마다 이미지 전환
        return () => clearInterval(interval);
    }, []);
    /**
     * CMC 출석앱 이미지 fade out, fade in 처리 종료
     */

    return (
        <div ref={ref} className="project-container">
            <div className="project-header">
                <h2>PROJECTS</h2>
            </div>
            <div className="project-content">

                {/* coin_investment */}
                {/* <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/coin_investment.mp4`} alt='coin_investment' controls/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title'>COIN_INVESTMENT</h3>
                        <p className='project-period'>2024.04.11 ~ 2024.04.26</p>
                        <div className='project-detail'>
                            Upbit 사이트에서 제공되는 코인의 가격을 기준으로 사용자가<br/>
                            코인을 가상투자 할 수 있는 사이트를 구현하였습니다.<br/>
                            <br/>
                            프로젝트는 node.js를 사용하여 구현되었습니다.
                        </div>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/coin_investment' >GitHub Repository로 이동하기</a>
                        <br/>
                        <br/>
                        <p className='project-url-text'>자세한 포트폴리오 내용</p>
                        <a className='project-address' href='https://drive.google.com/file/d/1_Z2nB5tADp9p8tJvUBekwA84BjOWh_D4/view?usp=drive_link' >포트폴리오로 보러가기</a>
                    </div>
                </div> */}

                {/* Muzinut */}
                {/* <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/muzinut.mp4`} alt='muzinut' controls/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title'>Muzinut</h3>
                        <p className='project-period'>2024.06.02 ~ 2024.08.02</p>
                        <div className='project-detail'>
                            뮤지션들이 자유롭게 자신의 음악 작업물을 게시하고<br/>
                            게시판을 통해 팬들과 소통할 수 있으며 리스너들은 게시된<br/>
                            음원을 스트리밍하여 들을 수 있는 사이트를 구현하였습니다.<br/>
                            <br/>
                            프로젝트는 Spring Framework 와 Next.js를 사용하여<br/>
                            구현되었습니다.
                        </div>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' href='https://github.com/youngho3358/Muzinut' >GitHub Repository로 이동하기</a>
                        <br/>
                        <br/>
                        <p className='project-url-text'>자세한 포트폴리오 내용</p>
                        <a className='project-address' href='https://drive.google.com/file/d/1SEajSp0PqzpSqfz39PhYArISyhvCuyoI/view?usp=drive_link' >포트폴리오로 보러가기</a>
                    </div>
                </div> */}

                {/* 포트폴리오 */}
                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/portfolio.mp4`} alt='portfolio' controls/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title'>Portfolio</h3>
                        <p className='project-period'>2024.08.15 ~ 2024.08.30</p>
                        <div className='project-detail'>
                            직접 구현한 프로젝트들을 정리하여 포트폴리오 사이트를<br/>
                            React.js 를 기반으로 구현하였습니다.<br/>
                            <br/>
                            리액트를 사용하여 코드를 작성한 뒤 Github 에서 제공하는<br/>
                            Github Page 에 업로드하여 배포하였습니다.<br/>
                        </div>
                        <p className='project-url-text'>GitHub 코드 : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://github.com/youngho3358/portfolio' >GitHub Repository로 이동하기</a>
                    </div>
                </div>

                {/* 랜덤채팅 */}
                {/* <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/randomchat.mp4`} alt='randomchat' controls/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>Randomchat</h3>
                        <p className='project-period'>2024.11.15 ~ 2024.12.31</p>
                        <div className='project-detail'>
                            랜덤한 유저와 화상 채팅을 할 수 있는 토이 프로젝트 입니다.<br/>
                            <br/>
                            Front-End는 React를 사용해 구현하였으며,<br/>
                            Back-End는 Spring Boot를 사용해 구현하였습니다.<br/>
                            <br/>
                            Docker Compose로 컨테이너를 분리해 구현하였으며<br/>
                            Nginx의 리버스 프록시 기능을 통해 도메인 주소 경로별로<br/>
                            백엔드, 프론트엔드 경로를 분리하여 구현하였습니다.
                        </div>
                        <p className='project-url-text'>Back-End GitHub 코드 : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://github.com/youngho3358/RandomChat-be' >GitHub Repository로 이동하기</a>
                        <p className='project-url-text'>Front-End GitHub 코드 : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://github.com/dlxodud123/randomchat_front' >GitHub Repository로 이동하기</a>
                        <p className='project-url-text'>웹 주소 : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://www.random-chat.site' >웹 사이트로 이동하기</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-img">
                        <img className='project-video project-mobile-fit' src={`${process.env.PUBLIC_URL}/img/project/project_shinhan.png`} alt='shinhan'/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>신한은행 SOL Bank 챗봇 고도화</h3>
                        <p className='project-period'>2025.02 ~ 2025.04</p>
                        <div className='project-detail'>
                            신한은행 SOL Bank 앱 내 챗봇 고도화 프로젝트 입니다.<br/>
                            <br/>
                            구좌 로그인 보안 취약점 수정
                            <p className='sub'>⇁ 기존 구현되어 있던 챗봇 내 구좌 로그인 보안 취약점을 랜덤한 UUID 와 DateTime 으로 조합하여 SHA256 으로 해시처리 후 비교하여 방지하였습니다.</p>
                            
                            <br/>
                            챗봇 AI 추천 상품 고도화
                            <p className='sub'>⇁ 기존 챗봇 AI 를 통해 제공하던 추천 상품을 고도화하여 고객별 추천 상품에 대한 접근 빈도 및 가입 현황을 데이터화 하였습니다.</p>
                        </div>
                    </div>
                </div> */}
                
                {/* 런콤비 */}
                <div className="project-card">
                    <div className="project-card-img">
                        <img className={`project-video project-mobile-fit fade-image${runcombiFade? ' hide' : ''}`} src={RUNCOMBI_IMG_LIST[runcombiImgIndex]} alt='runcombi'/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>Runcombi</h3>
                        <p className='project-period'>2025.06 ~ 2025.08</p>
                        <div className='project-detail'>
                            CMC 동아리 내에서 개발하고 현재까지 서비스 중인 어플리케이션 입니다.<br/>
                            <br/>
                            반려견과의 산책을 기록으로 남겨 확인할 수 있는 프로젝트 입니다.<br/>
                            구체적인 산책 경로와 산책 내용을 기재하여 캘린더 형태로 확인할 수 있습니다.<br/>
                            <br/>
                            1인 서버 개발자로 참여하여 혼자 모든 서버를 개발한 프로젝트입니다.<br/>
                        </div>
                        <p className='project-url-text'>Back-End GitHub 코드 : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://github.com/Central-MakeUs/RunCombi_Server' >GitHub Repository로 이동하기</a>
                        <p className='project-url-text'>iOS 앱 다운로드 : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://apps.apple.com/kr/app/%EB%9F%B0%EC%BD%A4%EB%B9%84-%EB%B0%98%EB%A0%A4%EA%B2%AC-%EC%82%B0%EC%B1%85-%EC%9A%B4%EB%8F%99-%EA%B8%B0%EB%A1%9D/id6747975586' >iOS 앱 다운로드</a>
                        <p className='project-url-text'>Android 앱 다운로드 : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=com.combo.runcombi&pcampaignid=web_share' >Android 앱 다운로드</a>
                    </div>
                </div>

                {/* 코레일톡 */}
                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video project-mobile-fit' src={`${process.env.PUBLIC_URL}/video/korailtalk.mov`} alt='korailtalk' controls/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>코레일톡 앱 리뉴얼</h3>
                        <p className='project-period'>2025.05 ~ 2026.01</p>
                        <div className='project-detail'>
                            새롭게 런칭되는 코레일톡 앱의 WebView 및 Bridge 개발을 진행하였습니다.<br/>
                            <br/><br/>
                            View 전환 및 데이터 처리 방식 변경
                            <p className='sub'>⇁ AS-IS의 서버 사이드 JSP 기반 렌더링 구조를 클라이언트 사이드 View(JSP)로 새로 개발하였습니다.</p>
                            <p className='sub'>⇁ 서버-클라이언트 간 데이터 전달 방식을 통합 API 통신 기반 아키텍처로 재설계하였습니다.</p>
                            <br/>
                            Native - Webview 브리지 인터페이스 개발
                            <p className='sub'>⇁ Native와 Webview 간 양방향 데이터 전달과 동기화를 위해 JavaScript 기반 Bridge 함수 집합을 모듈화하였습니다.</p>
                            <p className='sub'>⇁ 각 페이지별 요청과 콜백 함수를 통합 설계하여 비동기 통신 및 상태 동기화 문제를 효율적으로 해결하였습니다.</p>
                        </div>
                    </div>
                </div>

                {/* CMC 동아리 출석 서버 개발 */}
                <div className="project-card">
                    <div className="project-card-img">
                        <img className={`project-video project-mobile-fit fade-image${cmcAttendanceFade? ' hide' : ''}`} src={CMC_ATTENDANCE_IMG_LIST[cmcAttendanceImgIndex]} alt='runcombi'/>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>CMC 동아리 출석 서버 개발</h3>
                        <p className='project-period'>2026.05 ~ 2026.05</p>
                        <div className='project-detail'>
                            CMC 동아리 출석체크 관리용 웹앱의 서버를 개발을 진행하였습니다.<br/>
                            <br/><br/>
                            GraphQL 단일 엔드포인트와 SDL 스키마를 구성, Query/Mutation Resolver를 도메인별로 분리<br/>
                            <br/><br/>
                            사용자 권한 및 기수에 따라 기능을 분리하여 개발
                            <p className='sub'>⇁ Root, Lead, Challenger 권한 분리, 각 기수 및 파트에 따라 출력되는 데이터 분리</p>
                        </div>
                        <p className='project-url-text'>자세한 개발내용 Notion : </p>
                        <a className='project-address' target="_blank" rel="noreferrer" href='https://app.notion.com/p/CMC-3ce105feb9a28092a926d30a0638175d?source=copy_link'>자세한 개발 내용 확인하기</a>
                    </div>
                </div>

                {/* DB저축은행 디지털 채널 재구축 */}
                <div className="project-card">
                    <div className="project-card-img">
                        <video className='project-video' src={`${process.env.PUBLIC_URL}/video/dbbank.mp4`} alt='db저축은행' controls/>
                        {/* <div className='project-video' style={{width:'694.87px', height:'230px', textAlign:'center', paddingTop:'220px', fontSize:'25px', fontWeight:'bold'}}> - 프로젝트 진행중 -</div> */}
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>DB저축은행 디지털채널 재구축</h3>
                        <p className='project-period'>2026.01 ~ 2026.08</p>
                        <div className='project-detail'>
                            새롭게 런칭되는 DB저축은행 앱의 Server 와 Front 개발을 진행하였습니다.<br/>
                            <br/><br/>
                            외부 솔루션(UbiReport)과 은행 WAS 간 연동 작업
                            <p className='sub'>⇁ 리포트 솔루션과 인터넷뱅킹, 모바일뱅킹 WAS 간 연동 작업을 진행하였습니다.</p>
                            <p className='sub'>⇁ 변경된 리포트 솔루션에 맞춰 마이그레이션 작업을 진행하였습니다.</p>
                            <br/>

                            긴급점검 제어 기능 작업
                            <p className='sub'>⇁ 인터넷뱅킹, 모바일뱅킹(앱), 모바일뱅킹(웹) 별 긴급점검 제어 기능을 분리하여 개발하였습니다.</p>
                            <p className='sub'>⇁ 긴급점검시 Interceptor 와 Server Session 을 활용하여 관리자는 우회 접속 및 테스트가 가능한 환경을 구성하였습니다.</p>
                            <br/>

                            이외의 약 30가지 서비스 화면 개발
                            <br/>
                        </div>
                        <p className='project-url-text'>자세한 개발내용 Notion : </p>
                            <a className='project-address' target="_blank" rel="noreferrer" href='https://app.notion.com/p/DB-3c6105feb9a2800b8fedf4b9bc08eccf?source=copy_link' >자세한 개발 내용 확인하기</a>
                    </div>
                </div>

                {/* KB국민은행 코어뱅킹 현대화(비대면) */}
                <div className="project-card">
                    <div className="project-card-img">
                        {/* <video className='project-video' src={`${process.env.PUBLIC_URL}/video/dbbank.mp4`} alt='KB국민은행 코어뱅킹 현대화(비대면)' controls/> */}
                        <div className='project-video' style={{width:'694.87px', height:'230px', textAlign:'center', paddingTop:'220px', fontSize:'25px', fontWeight:'bold'}}> - 프로젝트 진행중 -</div>
                    </div>
                    <div className="project-card-desc">
                        <h3 className='project-title' style={{fontSize:'30px', marginBottom:'0px'}}>KB국민은행 코어뱅킹 현대화(비대면)</h3>
                        <p className='project-period'>2026.09 ~ 2028.01</p>
                        <div className='project-detail'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Project;
