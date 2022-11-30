import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import { link, icon } from '../pages/api/_media'

import logo from '../public/media/logo1.png'


function NavBar() {

    return (
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
    );
}

export default NavBar;