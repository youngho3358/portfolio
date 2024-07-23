import { useState } from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import {Routes, Route, Link} from 'react-router-dom';
import './nav.css';

export default function Nav1() {
    const [show, setShow] = useState(false);
    const [buttonShow, setButtonShow] = useState("block");
    const [firstProjectShow, setFirstProjectShow] = useState(false);
    const [secondProjectShow, setSecondProjectShow] = useState(false);
    
    const handleClose = () => {setShow(false); setButtonShow("block");}
    const handleShow = () => {setShow(true); setButtonShow("none");}

    return (
        <div>
            <Button show={buttonShow} onClick={handleShow} style={{
                    display:buttonShow,
                    
                }} className='mockCha'>
                목  차
            </Button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='title'>JYH's Portfolio</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className='bodyList' onClick={() => {
                        const aboutMe = document.getElementById('aboutMe');
                        aboutMe.scrollIntoView({behavior : 'smooth'});
                    }}>About me</p>
                    <p className='bodyList' onClick={() => {
                        const skillBox = document.getElementById('skillBox');
                        skillBox.scrollIntoView({ behavior: 'smooth' });
                    }}>기술 스택</p>
                    <p className='bodyList' onClick={() => setFirstProjectShow(!firstProjectShow)}>프로젝트1</p>
                    <div className={`projectDetailList1 ${firstProjectShow ? 'show' : ''}`}>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                    </div>
                    <p className='bodyList' onClick={() => setSecondProjectShow(!secondProjectShow)}>프로젝트2</p>
                    <div className={`projectDetailList2 ${secondProjectShow ? 'show' : ''}`}>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}