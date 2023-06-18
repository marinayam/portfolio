import React, { useState, useEffect } from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import { logo } from "../../assets";
import githubIcon from '../../assets/github-icon.svg'
import './navbar.css';

  const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled ] =useState(false);

  // スクロールで背景色を表示
  useEffect(() => {
    const onScroll = () =>{
      if (window.scrollY > 50){
        seScrolled(true);
      } else{
        seScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  // アクティブリンクの色変更
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
            onclick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            onclick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            onclick={() => onUpdateActiveLink('projects')} >
              Projects
            </Nav.Link>
          </Nav> 
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='home'><img src={githubIcon} alt='' /></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
              <span>contact</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;