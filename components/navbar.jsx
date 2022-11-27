import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image'
import { link, icon } from '../pages/api/_media'

import logo from '../public/media/logo1.png'


function NavBar() {

    return (
        <Navbar className="navbar" bg="dark" variant="dark">
            <Container>
                <Nav id="nav-group" >
                    <Nav.Link id="nav-link" href="#features">Menu</Nav.Link>
                    <Nav.Link id="nav-link" href={link.yelp}>Reviews</Nav.Link>
                    <Nav.Link id="nav-order" href={link.uberEats}>ORDER ONLINE</Nav.Link>
                    {/* Sol Boba Logo*/}
                    <Navbar.Brand className="navbar-brand" href="/">
                        <div className="logo-image">
                            <Image className="img-fluid" src={icon.logo} alt="" />
                        </div>
                    </Navbar.Brand>
                    {/* Brand Icons ++ NOTE TO SELF: TRANSLATE IMAGES SLIGHTLY*/}
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
    );
}

export default NavBar;