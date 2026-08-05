import { useState } from 'react';
import styles from './Navbar.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const [showHamburgerMenu,setShowHamburgerMenu]=useState(false)

  return (
    <>
      <nav className={`${styles.Nav__section} sticky flex flex-row items-center justify-between px-[10%] mt-5 mx-[1.5%]`}>
        {/* Logo part */}
        <div className='flex flex-col justify-center items-center'>
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.58334 20.7204C2.58334 19.9441 2.75514 19.1736 3.21045 18.5452C4.54991 16.6949 8.18336 12.9167 15.5 12.9167C22.8173 12.9167 26.4501 16.6955 27.7896 18.5452C28.2449 19.1736 28.4167 19.9441 28.4167 20.7204C28.4167 22.0764 27.878 23.3769 26.9191 24.3358C25.9602 25.2947 24.6597 25.8334 23.3036 25.8334H7.69641C6.34034 25.8334 5.03981 25.2947 4.08093 24.3358C3.12204 23.3769 2.58334 22.0764 2.58334 20.7204V20.7204Z" stroke="black" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
            <path d="M7.75 5.8125V8.39583" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M9.04169 14.2084V16.7917" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M23.25 5.8125V8.39583" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M21.9583 14.2084V16.7917" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M15.5 4.52087V8.39587" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M15.5 12.9167V18.0834" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M25.8334 16.432C23.8351 14.7122 20.5427 12.9167 15.5 12.9167C10.4574 12.9167 7.1649 14.7115 5.16669 16.432" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p className={` ${styles.Nav_logo__p} text-center `}>Grandma’s<br />Bakery</p>
        </div>
        {/* Navbar-Links */}
        <div>
          {/* wideScreens */}
          <ul className={`${styles.nav_links__ul}  flex-row gap-8`}>
            <li className={`${styles.nav_links__li}`}>Home</li>
            <li className={`${styles.nav_links__li}`}>About</li>
            <li className={`${styles.nav_links__li}`}>Menu</li>
            <li className={`${styles.nav_links__li}`}>Contact</li>
          </ul>
          {/* Hamburger */}
          <button className={`${styles.hamburgerMenu__button}`} onClick={()=>{setShowHamburgerMenu(true)}}><GiHamburgerMenu style={{ width: "30px", height: "30px" }} /></button>

        </div>

      </nav>
      <div className={`${styles.hamburgerMenu__div}`} style={{ width: showHamburgerMenu ? '30%' : '0',minWidth: showHamburgerMenu? 'fit-content' : '0' }} >
        <button className={`${styles.hamburgerMenu_close__button}`} onClick={()=>{setShowHamburgerMenu(false)}}>
          &times;
        </button>
        <a href='#' className={`${styles.hamburgerMenu__a}`}>Home</a>
        <a href='#' className={`${styles.hamburgerMenu__a}`}>About</a>
        <a href='#' className={`${styles.hamburgerMenu__a}`}>Menu</a>
        <a href='#' className={`${styles.hamburgerMenu__a}`}>Contact</a>
      </div>
    </>
  )
}
