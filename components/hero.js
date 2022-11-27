import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import { link, icon } from '../pages/api/_media'
import banner from '../public/media/trnsp-white.png'
import open_banner from '../public/media/trnsp-white-open.png'
import closed_banner from '../public/media/trnsp-white-closed.png'
import Link from 'next/link'
function Hero() {

    {/* Hero Banner switching from open - closed background image */}
    const currentHour = new Date().getHours()
    const hoursOpen = [12, 13, 14, 15, 16, 17, 18, 19, 20]
    let arrHour = hoursOpen.includes(currentHour)

    return (
        <div className="Container">
            {/* Navbar */}
            <Navbar className="navbar" bg="dark" variant="dark">
                <Container>
                    <Nav id="nav-group" >
                        <Nav.Link id="nav-link" href="/menu">Menu</Nav.Link>
                        <Nav.Link id="nav-link" href={link.yelp}>Reviews</Nav.Link>
                        <Nav.Link id="nav-order" href={link.uberEats}>ORDER ONLINE</Nav.Link>
                        {/* Sol Boba Logo*/}
                        <Navbar.Brand className="navbar-brand" href="/">
                            <div className="logo-image">
                                <Image className="img-fluid" src={icon.logo} alt="" />
                            </div>
                        </Navbar.Brand>
                        {/* Brand Icons */}
                        <Navbar.Brand className="navbar-icons">
                            <div className="icon-image">
                                <a href={link.facebook}> <Image className="fb-logo" src={icon.facebook} alt="" /></a>
                                <a href={link.instagram}> <Image className="insta-logo" src={icon.instagram} alt="" /></a>
                                <a href={link.yelp}> <Image className="yelp-logo" src={icon.yelp} alt="" /></a>
                            </div>
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>

            {/* Hero */}
            <div className="hero-wrapper">
                <div className="hero-img">
                    <Image priority src={arrHour === true ? open_banner : closed_banner} alt={banner} />
                </div>
            </div>
        </div>
    );
}

export default Hero;