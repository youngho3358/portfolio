import { Navigate, useNavigate } from 'react-router-dom';
import './../css/activities.css';
import { forwardRef } from 'react';

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
                <div className="activities-card" onClick={() => { window.location.href = 'https://www.kgitbank.co.kr/jobtraining/sub.php?seq=20100' }}>
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
                        <img src={`${process.env.PUBLIC_URL}/img/activities/inflearn.png`} alt='coding apple react' />
                    </div>
                    <div className="activities-description">
                        인프런 강의 수료<br/>
                        <ul className='activities-list'>
                            <a href='https://www.inflearn.com/course/ORM-JPA-Basic'><li>자바 ORM 표준 JPA 프로그래밍 - 기본편 (김영한) 수료</li></a>
                            <a href='https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-%ED%99%9C%EC%9A%A9-1'><li>실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발 (김영한) 수료</li></a>
                            <a href='https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-JPA-%EC%8B%A4%EC%A0%84'><li>실전! 스프링 데이터 JPA (김영한) 수료</li></a>
                            <a href='https://www.inflearn.com/course/querydsl-%EC%8B%A4%EC%A0%84'><li>실전! Querydsl (김영한) 수료</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Activities;
