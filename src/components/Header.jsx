import { useState, useEffect } from 'react';
import '../../styles/components/Header.css';
import '../../styles/components/MobileNav.css';
import { useTheme } from '../context/theme';

export function Header() {
  const {theme, setTheme} = useTheme();
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [barsDisplay, setBarsDisplay] = useState('header__bars unclicked');
  const [navCloseDisplay, setNavCloseDisplay] = useState('header__nav-close clicked');
  const [showMobileNav, setShowMobileNav] = useState('mobile-nav unshow');

  const updateManu = () => {
    if(!isMenuClicked){
      setBarsDisplay('header__bars clicked');
      setNavCloseDisplay('header__nav-close unclicked');
      setShowMobileNav('mobile-nav show');
    }
    else {
      setBarsDisplay('header__bars unclicked');
      setNavCloseDisplay('header__nav-close clicked');
      setShowMobileNav('mobile-nav unshow');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.toggle('light');
    if(document.body.classList.contains('light')){
      localStorage.setItem('theme', 'light');
    } else{
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  }, [theme]);

  return(
    <header>
      <nav className='header container'>
        <ul className='header__menu'>
          <li>
            <a className='header__link' href='#about'>About</a>
          </li>
          <li>
            <a className='header__link' href='#featured'>Work</a>
          </li>
          <li>
            <a className='header__link' href='#contact'>Contact</a>
          </li>
          <li className='header__line'></li>
          <li>
            <button onClick={toggleTheme} className='header__sun'>
              <svg 
                xmlns='http://www.w3.org/2000/svg' 
                fillRule='none' 
                viewBox='0 0 24 24' 
                strokeWidth='1.5' 
                stroke='currentColor' >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
              </svg>
            </button>
          </li>
          <li>
            <a className='header__resume btn' href='/CV-Carlos-Guillermo-Baldracco.pdf'>Resume</a>
          </li>
        </ul>
        <button className={barsDisplay} onClick={updateManu}>
          <svg 
            xmlns='http://www.w3.org/2000/svg' 
            viewBox='0 0 24 24' 
            fill='currentColor' >
            <path 
              fillRule='evenodd' 
              d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z' 
              clipRule='evenodd' />
          </svg>
        </button>
      </nav>
      <nav className={showMobileNav}>
        <ul className='mobile-nav__menu'>
          <li>
            <a href='#about' className='mobile-nav__link'>About</a>
          </li>
          <li>
            <a href='#featured' className='mobile-nav__link'>Work</a>
          </li>
          <li>
            <a href='#contact' className='mobile-nav__link'>Contact</a>
          </li>
          <li className='mobile-nav__line'></li>
          <li>
            <button onClick={toggleTheme} className='mobile-nav__sun'>
              <svg 
                xmlns='http://www.w3.org/2000/svg' 
                fillRule='none' 
                viewBox='0 0 24 24' 
                strokeWidth='1.5' 
                stroke='currentColor' >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
              </svg>
            </button>
          </li>
          <li>
            <a className='mobile-nav__resume btn' href='/CV-Carlos-Guillermo-Baldracco.pdf' target='_blank'>Resume</a>
          </li>
          <li>
            <button className={navCloseDisplay} onClick={updateManu}>
              <svg 
                xmlns='http://www.w3.org/2000/svg' 
                fill='none' 
                viewBox='0 0 24 24' 
                strokeWidth='1.5' 
                stroke='currentColor' >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}