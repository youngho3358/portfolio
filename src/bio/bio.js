import {Container, Row, Col} from 'react-bootstrap';
import './bio.css';

export default function Bio() {
    return(
        <div>
            <Container>
                <Row>
                    <Col sm={6} className='leftBio'>
                        <p className='aboutMe'>👨‍💻 ABOUT ME</p>
                        <p className='bioTextTitle'>" 소통을 좋아하는 사람 친화적 개발자 전영호입니다. "</p>
                        <p className='bioText'>
                            안녕하세요. Java 백엔드 개발자 전영호입니다.<br/>

                        </p>
                        <p></p>
                    </Col>
                    <Col sm={5} className='rightBio'>
                        <p className='contact'>CONTACT</p>

                        <p className='contactList'>
                            <span className='contactInfo'>Phone</span>
                            <span className='font-pretendard'>010-2962-3358</span>
                        </p>
                        <p className='contactList'>
                            <span className='contactInfo'>Email</span>
                            <a href='mailto:youngho3358@gmail.com' className='font-pretendard'>youngho3358@gmail.com</a>
                        </p>
                        <p className='contactList'>
                            <span className='contactInfo'>Instagram</span>
                            <a href='https://www.instagram.com/0_ho_96' className='font-pretendard'>0_ho_96</a>
                        </p>
                        <p className='contactList'>
                            <span className='contactInfo'>Blog</span>
                            <a href='https://youngho3358.tistory.com' className='font-pretendard'>https://youngho3358.tistory.com</a>
                        </p>
                        <p className='contactList'>
                            <span className='contactInfo'>GitHub</span>
                            <a href='https://www.github.com/youngho3358' className='font-pretendard'>https://www.github.com/youngho3358</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}