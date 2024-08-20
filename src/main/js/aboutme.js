import './../css/aboutme.css';
import React, { forwardRef } from 'react';
import { IoPerson } from "react-icons/io5";
import { IoCalendarClear } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

const Aboutme = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="aboutme-section" className="aboutme-container">
      <div className="aboutme-title">
        <div>ABOUT ME</div>
        <div className='face-section'>
          <img className='face' alt='증명사진' src={`${process.env.PUBLIC_URL}/img/face/white_face.jpeg`}/>
          <p className='introduce'>안녕하세요.<br/> 꾸준함을 무기로 성장해나가는 전영호 입니다.</p>
        </div>
      </div>

      <div className='aboutme-grid'>
        <div className="aboutme-item">
          <div className="icon"><IoPerson size={50} /></div>
          <div> 
            <div className="label">이름</div>
            <div className="value">&nbsp;전영호</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><IoCalendarClear size={50} /></div>
          <div> 
            <div className="label">생년월일</div>
            <div className="value">&nbsp;&nbsp;96.12.31</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><FaMapMarkerAlt size={50} /></div>
          <div> 
            <div className="label">주소지</div>
            <div className="value">&nbsp;경기도 군포시 산본동</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><IoCall size={50} /></div>
          <div>
            <div className="label">연락처</div>
            <div className="value">&nbsp;&nbsp;010-2962-3358</div>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><MdEmail size={50} /></div>
          <div> 
            <div className="label">이메일</div>
            <a className='mail' href='mailto:youngho3358@gmail.com'>&nbsp;youngho3358@gmail.com</a>
          </div>
        </div>

        <div className="aboutme-item">
          <div className="icon"><BsFillPencilFill size={50} /></div>
          <div> 
            <div className="label">학력</div>
            <div className="value">&nbsp;수원대학교 - 행정학과(수료)</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Aboutme;