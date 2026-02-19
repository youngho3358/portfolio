import './../css/header.css';
import React, { useEffect, useState } from 'react';

const Header = ({ isMobile, onAboutMeClick, onSkillsClick, onArchivingClick, onProjectClick, onActivitiesClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 850);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  const navItems = [
    { label: 'About Me', onClick: onAboutMeClick },
    { label: 'Skills', onClick: onSkillsClick },
    { label: 'Archiving', onClick: onArchivingClick },
    { label: 'Projects', onClick: onProjectClick },
    { label: 'Activities', onClick: onActivitiesClick },
  ];

  const headerContainerClass = isScrolled ? 'header_container2' : 'header_container';
  const headerClass = isScrolled ? 'header2' : 'header';
  const headerTitleClass = isScrolled ? 'header_title2' : 'header_title';
  const navItemClass = isScrolled ? 'nav_item2' : 'nav_item';

  const handleNavClick = (handler) => {
    handler();
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  if (isMobile) {
    return (
      <div className={headerContainerClass}>
        <div className={`${headerClass} mobile-header`}>
          <div className="mobile-header-row">
            <p className={headerTitleClass}>JYH&apos;s Portfolio</p>
            <button
              type="button"
              className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          {isMenuOpen && (
            <div className="mobile-nav">
              {navItems.map((item) => (
                <p
                  key={item.label}
                  className={`${navItemClass} mobile-nav-item`}
                  onClick={() => handleNavClick(item.onClick)}
                >
                  {item.label}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={headerContainerClass}>
      <div className={headerClass}>
        <p className={headerTitleClass}>JYH&apos;s Portfolio</p>
        <div className="nav">
          {navItems.map((item) => (
            <p key={item.label} className={navItemClass} onClick={() => item.onClick()}>
              {item.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
