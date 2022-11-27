import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'

import logo from '../public/media/logo1.png'
import fbIcon from '../public/media/facebook-icon.png'
import instaIcon from '../public/media/instagram-icon.png'
import yelpIcon from '../public/media/yelp-icon.png'
import banner from '../public/media/trnsp-white.png'
import open_banner from '../public/media/trnsp-white-open.png'
import closed_banner from '../public/media/trnsp-white-closed.png'

function Hero() {
    const link = {
        facebook: 'https://www.facebook.com/SolBobaTacoma/',
        instagram: 'https://www.instagram.com/sol_boba/',
        yelp: 'https://www.yelp.com/biz/sol-boba-lakewood'
    }
    {/* Hero Banner switching from open - closed background image */}
    const currentHour = new Date().getHours()
    const hoursOpen = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let arrHour = hoursOpen.includes(currentHour)

    return (
        <div className="Container">
            {/* Navbar */}
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <Nav id="nav-group" >
                        <Nav.Link id="nav-link" href="/menu">Menu</Nav.Link>
                        <Nav.Link id="nav-link" href="#features">Reviews</Nav.Link>
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
                                <a href={link.facebook}> <Image className="fb-logo" src={fbIcon} alt="" /></a>
                                <a href={link.instagram}> <Image className="insta-logo" src={instaIcon} alt="" /></a>
                                <a href={link.yelp}> <Image className="yelp-logo" src={yelpIcon} alt="" /></a>
                            </div>
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>

            {/* Hero */}
            <div className="hero-wrapper">
                <div className="hero-img">
                    <Image src={arrHour === true ? open_banner : closed_banner} alt={banner} />
                </div>
            </div>
        </div>
    );
}

export default Hero;