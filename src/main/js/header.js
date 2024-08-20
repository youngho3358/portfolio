import './../css/header.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #333;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderTitle = styled.p`
  font-size: 24px;
`;

const Nav = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.p`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;


const Header = ({onAboutMeClick, onSkillsClick, onArchivingClick, onProjectClick, onActivitiesClick}) => {
  
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 850);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
      {
        isScrolled ? (
          <>  
            <HeaderContainer>
              <div className="header_container2">
                <div className="header2">
                  <p className="header_title2">JYH's Portfolio</p>
                  <div className="nav">
                    <p className="nav_item2" onClick={onAboutMeClick}>About Me</p>
                    <p className="nav_item2" onClick={onSkillsClick}>Skills</p>
                    <p className="nav_item2" onClick={onArchivingClick}>Archiving</p>
                    <p className="nav_item2" onClick={onProjectClick}>Project</p>
                    <p className="nav_item2" onClick={onActivitiesClick}>Activities</p>
                  </div>
                </div>
              </div>
            </HeaderContainer>
          </>
        ) : (
          <>
            <div className="header_container">
              <div className="header">
                <p className="header_title">JYH's Portfolio</p>
                <div className="nav">
                  <p className="nav_item" onClick={onAboutMeClick}>About Me</p>
                  <p className="nav_item" onClick={onSkillsClick}>Skills</p>
                  <p className="nav_item" onClick={onArchivingClick}>Archiving</p>
                  <p className="nav_item" onClick={onProjectClick}>Project</p>
                  <p className="nav_item" onClick={onActivitiesClick}>Activities</p>
                </div>
              </div>
            </div>
          </>
        )
      }
      {/* <div className="header_container">
        <div className="header">
          <p className="header_title">KJH's Portfolio</p>
          <div className="nav">
            <p className="nav_item" onClick={onAboutMeClick}>About Me</p>
            <p className="nav_item" onClick={onSkillsClick}>Skills</p>
            <p className="nav_item" onClick={onArchivingClick}>Archiving</p>
            <p className="nav_item" onClick={onProjectClick}>Project</p>
            <p className="nav_item" onClick={onActivitiesClick}>Activities</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Header;
