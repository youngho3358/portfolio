import './../css/activities.css';
import { forwardRef, useEffect, useState } from 'react';

const Activities = forwardRef((props, ref) => {
    const handleInnerLinkClick = (event) => {
        event.stopPropagation();
    };

    const CMC_IMG_LIST = [
        `${process.env.PUBLIC_URL}/img/activities/CMC_18th.png`,
        `${process.env.PUBLIC_URL}/img/activities/CMC_19th.png`
    ];

    /**
     * CMC 출석앱 이미지 fade out, fade in 처리 시작
     */
    const [cmcImgIndex, setCmcImgIndex] = useState(0);
    const [cmcImgFade, setCmcImgFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCmcImgFade(true); // 페이드아웃 시작

            setTimeout(() => {
                setCmcImgIndex(prev => (prev + 1) % CMC_IMG_LIST.length);
                setCmcImgFade(false); // 페이드인 시작
            }, 300);
        }, 3000); // 3초마다 이미지 전환
        return () => clearInterval(interval);
    }, []);
    /**
     * CMC 출석앱 이미지 fade out, fade in 처리 종료
     */

    return (
        <div ref={ref} className="activities-container">
            <div className="activities-header">
                <div>ACTIVITIES</div>
            </div>
            <div className="activities-content">
                <div className="activities-card" onClick={() => { window.open('http://www.kgitbank.kr/', '_blank') }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/itbank.png`} alt='itbank' />
                    </div>
                    <div className="activities-description">
                        KG IT뱅크 - 단과 과목 수료<br />
                        <ul className='activities-list'>
                            <li>IT기초</li>
                            <li>네트워크 기초(CCNA)</li>
                            <li>리눅스1</li>
                            <li>리눅스2</li>
                            <li>JAVA 프로그램 기초</li>
                            <li>JAVA 프로그램 활용</li>
                            <li>JSP</li>
                            <li>Spring Framework</li>
                        </ul>
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.open('https://www.kgitbank.co.kr/jobtraining/sub.php?seq=20100', '_blank') }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/itbank.png`} alt='itbank' />
                    </div>
                    <div className="activities-description">
                        KG IT뱅크 - 핀테크 서비스를 위한 풀스택 개발자 양성 과정 수료<br />
                        <label>2024.01.31 ~ 2024.08.02</label>
                    </div>
                </div>
                <div className="activities-card">
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/inflearn.png`} alt='inflearn' />
                    </div>
                    <div className="activities-description">
                        인프런 강의 수료<br/>
                        <ul className='activities-list'>
                            <li>
                                <a href='https://www.inflearn.com/course/ORM-JPA-Basic' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>자바 ORM 표준 JPA 프로그래밍 - 기본편 (김영한) 수료</a>
                            </li>
                            <li>
                                <a href='https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-%ED%99%9C%EC%9A%A9-1' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발 (김영한) 수료</a>
                            </li>
                            <li>
                                <a href='https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-JPA-%EC%8B%A4%EC%A0%84' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>실전! 스프링 데이터 JPA (김영한) 수료</a>
                            </li>
                            <li>
                                <a href='https://www.inflearn.com/course/querydsl-%EC%8B%A4%EC%A0%84' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>실전! Querydsl (김영한) 수료</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.open('https://cmc.makeus.in/', '_blank') }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/CMC_17th.png`} alt='CMC' />
                    </div>
                    <div className="activities-description">
                        수익형 앱런칭 동아리 CMC 17기 Server Challenger 수료<br />
                        <label>2025.05.10 ~ 2025.08.30</label>
                        <ul className='activities-list'>
                            <li>
                                너디너리 해커톤 8th 수료 - <a href='https://drive.google.com/file/d/1yiWYWHhoATEy4p-PnrXT9xCvX1FJCdCm/view?usp=drive_link' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>증명서 보기</a>
                            </li>
                            <li>
                                Runcombi 앱 런칭 - <a href='https://github.com/Central-MakeUs/RunCombi_Server' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>Repository 보기</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.open('https://cmc.makeus.in/', '_blank') }}>
                    <div className="activities-img">
                        <img className={`project-video project-mobile-fit fade-image${cmcImgFade? ' hide' : ''}`} src={CMC_IMG_LIST[cmcImgIndex]} alt='runcombi'/>
                    </div>
                    <div className="activities-description">
                        수익형 앱런칭 동아리 CMC 18기, 19기 Server Lead 활동<br />
                        <label>2025.10.01 ~ 2026.08.29</label>
                        <ul className='activities-list'>
                            <li>
                                <a href='https://www.instagram.com/p/DP8kuAZkkmy/?img_index=1&igsh=enpiamIwbmZ1aGF5' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>17기 회고 및 18기 Lead 각오 Instagram 게시물 보기</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="activities-card" onClick={() => { window.open('https://cmc.makeus.in/', '_blank') }}>
                    <div className="activities-img">
                        <img src={`${process.env.PUBLIC_URL}/img/activities/CMC_18th.png`} alt='CMC' />
                    </div>
                    <div className="activities-description">
                        수익형 앱런칭 동아리 CMC 20기 총괄 Head Lead 활동<br />
                        <label>2025.11.14 ~ 2027.03.</label>
                        {/* <ul className='activities-list'>
                            <li>
                                <a href='https://www.instagram.com/p/DP8kuAZkkmy/?img_index=1&igsh=enpiamIwbmZ1aGF5' target='_blank' rel='noopener noreferrer' onClick={handleInnerLinkClick}>17기 회고 및 18기 Lead 각오 Instagram 게시물 보기</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Activities;
