import React, { useEffect, useState } from 'react';
import Button from './Button';
import Data from '../../data.json';
import { HashLink as Link } from "react-router-hash-link";


const Header = (props) => {
  const data = props.data;
  const button = Data.filter((item) => item.id === 0);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };




  return (
    <>
      {data.map((getData) => (
        <div className={`header-container ${scrolled ? "scrolled" : "hero-bg"}`} >
          <img src={getData.logo} alt={getData.alt} className="logo" />

          {/* Desktop Nav */}
          <nav className="header-list">
            <ul>
              <li><Link smooth to="#about-us">About Us</Link></li>
              <li><Link smooth to="#features">Features</Link></li>
              <li><Link smooth to="#specifications">Specifications</Link></li>
              <li><Link smooth to="#visual-highlights">Visual Highlights</Link></li>
            </ul>
          </nav>

          <Link smooth to="#form" className='contact-btn'> <Button data={button} /> </Link>






    {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}> ☰ </div>

    {/* Mobile Nav Dropdown */}
    {menuOpen && (
    <>
    <div className="backdrop" onClick={toggleMenu}> </div>

    <div className="mobile-nav">
      <div className="close-icon" onClick={toggleMenu}> × </div>
      <ul>
        <li><Link smooth to="#about-us" onClick={toggleMenu}>About Us</Link></li>
        <li><Link smooth to="#features" onClick={toggleMenu}>Features</Link></li>
        <li><Link smooth to="#specifications" onClick={toggleMenu}>Specifications</Link></li>
        <li><Link smooth to="#visual-highlights" onClick={toggleMenu}>Visual Highlights</Link></li>
      </ul>

      <Link smooth to="#form" onClick={toggleMenu}> <Button data={button} /> </Link>
    </div>
  </>
)}

        </div>
      ))}
    </>
  );
};

export default Header;
