import { forwardRef } from 'react';
import './../css/archiving.css';

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