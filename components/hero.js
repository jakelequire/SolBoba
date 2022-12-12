import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import Link from 'next/link'
import { Dropdown } from 'react-bootstrap';
import React, { useState, useEffect} from 'react';

import { link, icon } from '../pages/api/_media'
import banner from '../public/media/trnsp-white.png'
import open_banner from '../public/media/trnsp-white-open.png'
import closed_banner from '../public/media/trnsp-white-closed.png'

function Hero() {

    const [menuOpen, setMenuOpen] = useState(false)


    
    return (
        <div className="Container">
            {/* Navbar */}

            <Navbar className="navbar" bg="dark" variant="dark">
                <Nav id="nav-group" >
                    {/* Mobile Dropdown Menu */}
                    <div key="dropdown-1" className="mobile-menu">
                        <button className="navbar-toggler" id="menu-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {menuOpen && (
                            <div className="dropdown-menu">
                                <a href="">Menu</a>
                                <a href="">Contact Us</a>
                                <a href="">Reviews</a>
                                <a href="">Order Online</a>
                            </div>
                        )}
                        
                        <Container className="mobile-logo-container">
                            <Nav.Link className="mobile-logo-image" href="/">
                                <Image className="img-fluid" src={icon.logo} alt="" />
                            </Nav.Link>
                        </Container>
                    </div>
                    
                    
                    {/* Desktop Navbar */}
                    <Container className="nav-icon-container"> 
                        <Nav.Link id="nav-icon" className="nav-icon" href={link.facebook}>
                            <Image className="fb-logo" src={icon.facebook} alt="" />
                        </Nav.Link>
                        <Nav.Link id="nav-icon" className="nav-icon" href={link.instagram}>
                            <Image className="insta-logo" src={icon.instagram} alt="" />
                        </Nav.Link>
                        <Nav.Link id="nav-icon" className="nav-icon" href={link.yelp}>
                            <Image className="yelp-logo" src={icon.yelp} alt="" />
                        </Nav.Link>
                    </Container>
                            {/* Logo */}
                    <Container className="nav-logo-container">
                        <Nav.Link className="logo-image" href="/">
                            <Image className="img-fluid" src={icon.logo} alt="" />
                        </Nav.Link>
                    </Container>
                            {/* Site Links */}
                    <Container className="nav-links-container">
                        <Nav.Link id="nav-link" className="nav-link" href="/menu">Menu</Nav.Link>
                        <Nav.Link id="nav-link" className="nav-link" href="/contact">Contact Us</Nav.Link>
                        <Nav.Link id="nav-link" className="nav-link" href={link.yelp}>Reviews</Nav.Link>
                        <Nav.Link id="nav-order" className="nav-link" href={link.uberEats}>ORDER ONLINE</Nav.Link>
                    </Container>
                </Nav>
            </Navbar>
            
            {/* Hero */}
            <div className="hero-wrapper">
                <div className="hero-img">
                    <Image priority src={banner} alt="Sol Boba Banner" />
                    {/* <Image priority src={arrHour === true ? open_banner : closed_banner} alt={banner} /> */}
                </div>
            </div>
        </div>
    );
}

export default Hero;
