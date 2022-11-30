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
                        <Nav.Link className="logo-image" >
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
    q: Why can't I move the items around in the nav-group container?
    a: The items are in a flexbox container, and the order of the items is determined by the order of the items in the HTML.
    q: how do I position nav-icon and nav-link?
    a: use flexbox to position the items in the container
    q: what properties do I need to use to position the items?
    a: use flexbox to position the items in the container
    q: what is the code for flexbox?
    a: display: flex;
    q: what is the name of the property i need to use display: flex;
    a: flex-direction
    q: what are the values for flex-direction?
    a: row, column, row-reverse, column-reverse
    q: what is the default value for flex-direction?
    a: row
    q: what is the id that I need to use flexbox for the nav-group container?
    a: nav-group
    q: i changed nav-group to flexbox and i cant change the position of the children
    a: you need to use flexbox properties to position the children
    q: what properties do I need to use?
    a: justify-content, align-items, align-content
    q: what are the values for justify-content?
    a: flex-start, flex-end, center, space-between, space-around, space-evenly
    q: what are the values for align-items?
    a: flex-start, flex-end, center, baseline, stretch
    q: what are the values for align-content?
    a: flex-start, flex-end, center, space-between, space-around, stretch
    q: what do I need to do to position the nav-icons to the right and nav-link to the left?
    a: use justify-content: flex-end and justify-content: flex-start
    q: I want to position the nav-icons to the right and nav-link to the left, but I want the nav-link to be centered vertically
    a: use justify-content: flex-end and justify-content: flex-start and align-items: center
    q: I turned the nav-group into a flexbox container, but the items wont reposition with justify-content: flex-end and justify-content: flex-start and align-items: center
    a: you need to use flexbox properties to position the children
    q: what properties do I need to use?
    a: justify-content, align-items, align-content
    q: I used the flexbox properties, but the items wont reposition with justify-content: flex-end and justify-content: flex-start and align-items: center
    a: you need to use flexbox properties to position the children
    q: which child do I need to use flexbox properties on?
    a: the children of the flexbox container
    q: the <Container> or <Nav.Link>?
    a: the <Nav.Link>
    q: I changed the flexbox properties of the children, <Nav.Link>, and it still isn't repositioning
    a: you need to use flexbox properties to position the children
    q: what is the HTML code for the flexbox properties?
    a: display: flex;
    q: what is the name of the child that needs to be flexbox?
    a: nav-icon
    q: nav-icon is a flexbox, is it not?
    a: no, it is not
    q: when you say nav-icon, are you talking about the <Nav.Link>?
    a: yes
    q: I changed the <Nav.Link> to flexbox, but it still isn't repositioning
    a: you need to use flexbox properties to position the children
    q: when you say nav-icon, does it matter if I use the className or the Id?
    a: no, it does not
    q: I put .nav-icon {display: flex;} in the CSS, but it still isn't repositioning
    a: you need to use flexbox properties to position the children
    q: it's written in the css that it is a flex
    a: you need to use flexbox properties to position the children
*/