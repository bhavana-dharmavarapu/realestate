import React, { useEffect, useState } from 'react'
import Button from './Button';
import Data from '../../data.json'
import { HashLink as Link } from "react-router-hash-link";


const Header = (props) => {
    const data = props.data
    const button = Data.filter((item) => item.id === 0)


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 700);    //background color should be changed after 900px;
      }

      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    }, []);


   
  return (
    <>
      {data.map((getData) => (
           <div className={`header-container ${scrolled ? "scrolled" : "hero-bg"}`}  >
           <img src = {getData.logo} alt = {getData.alt} className='logo'/>
            <nav className='header-list'>
                <ul>
                <li> <Link smooth to = "#about-us"> About Us </Link></li>
                <li> <Link smooth to = "#features"> Features </Link></li>
                <li> <Link smooth to = "#specifications"> Specifications </Link></li> 
                <li> <Link smooth to="#visual-highlights">Visual Highlights</Link> </li>
                </ul>
            </nav>
            
            <Link smooth to = "#form"> <Button data = {button}/> </Link>
            
        </div>
        
      ))}
    </>
  )
}

export default Header
