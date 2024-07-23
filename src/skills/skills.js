import {Container, Row, Col} from 'react-bootstrap';
import './skills.css';


export default function Skills() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div id='skillBox' className='skillBox'>SKILLS</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}