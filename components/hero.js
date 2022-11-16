import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'

import logo from '../public/media/logo1.png'
import fbIcon from '../public/media/fb-logo.png'
import instaIcon from '../public/media/instaLogo.png'
import yelpIcon from '../public/media/Yelp_Logo.png'
import banner from '../public/media/trnsp-white.png'

function Hero() {
    const fbLink = 'https://www.facebook.com/SolBobaTacoma/'
    const yelpLink = 'https://www.yelp.com/biz/sol-boba-lakewood'
    const instaLink = 'https://www.instagram.com/sol_boba/'
    return (
        <div className="Container">
            {/* Navbar */}
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <Nav id="nav-group" >
                        <Nav.Link id="nav-link" href="#features">Menu</Nav.Link>
                        <Nav.Link id="nav-link" href="#features">Location</Nav.Link>
                        <Nav.Link id="nav-order" qhref="#pricing">ORDER ONLINE</Nav.Link>
                        {/* Sol Boba Logo*/}
                        <Navbar.Brand className="navbar-brand" href="/">
                            <div className="logo-image">
                                <Image className="img-fluid" src={logo} alt="" />
                            </div>
                        </Navbar.Brand>
                        {/* Brand Icons ++ NOTE TO SELF: TRANSLATE IMAGES SLIGHTLY*/}
                        <Navbar.Brand className="navbar-icons">
                            <div className="icon-image">
                                <a href={fbLink}> <Image className="fb-logo" src={fbIcon} alt="" /></a>
                                <a href={instaLink}> <Image className="insta-logo" src={instaIcon} alt="" /></a>
                                <a href={yelpLink}> <Image className="yelp-logo" src={yelpIcon} alt="" /></a>
                            </div>
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>

            {/* Hero */}
            <div className="hero-wrapper">
                <div className="hero-img">
                    <Image src={banner} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;