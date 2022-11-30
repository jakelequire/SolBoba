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

                    <Nav id="nav-group" >
                    {/* Brand Icons */}
                    <Container className="nav-icon-container"> 
                        <Nav.Link id="nav-icon" className="nav-icon" href={link.facebook}><Image className="fb-logo" src={icon.facebook} alt="" /></Nav.Link>
                        <Nav.Link id="nav-icon" className="nav-icon" href={link.instagram}><Image className="insta-logo" src={icon.instagram} alt="" /></Nav.Link>
                        <Nav.Link id="nav-icon" className="nav-icon" href={link.yelp}><Image className="yelp-logo" src={icon.yelp} alt="" /></Nav.Link>
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
                        <Nav.Link id="nav-link" className="nav-link" href={link.yelp}>Reviews</Nav.Link>
                        <Nav.Link id="nav-order" className="nav-link" href={link.uberEats}>ORDER ONLINE</Nav.Link>
                    </Container>
                    </Nav>

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

/*
    q: why can I not move the items in the navbar?
    a: because the navbar is a bootstrap component and it is not responsive
    q: how can I make the navbar responsive?
    a: I can make the navbar responsive by using the react-bootstrap component
    q: which component should I use?
    a: I should use the Nav component
    q: what tags do I need to replace with the react-bootstrap component?
    a: I need to replace the <nav> tag with the <Nav> component
    q: what line is there a <nav> tag?
    a: line 10
    q: on this current doc?
    a: yes
    q: on line 10 that is the start of the function, not a <nav> tag tho?
    a: yes, but the <nav> tag is on line 11
    q: I don't see anything on line 11, it is blank
    a: yes, but the <nav> tag is on line 12
*/