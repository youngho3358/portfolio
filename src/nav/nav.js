import { useState } from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import {Routes, Route, Link} from 'react-router-dom';
import './nav.css';

export default function Nav1() {
    const [show, setShow] = useState(false);
    const [buttonShow, setButtonShow] = useState("block");
    const [firstProjectShow, setFirstProjectShow] = useState("none");
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
                    <p className='bodyList'>About me</p>
                    <p className='bodyList'>기술 스택</p>
                    <p className='bodyList'>프로젝트1</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                    <p className='bodyList'>프로젝트2</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                        <p className='projectDetail'>프로젝트 소개</p>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}