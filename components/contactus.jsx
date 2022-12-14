import Container from 'react-bootstrap/Container';

function ContactUs() {

    return (
        <Container className="contact-us-wrapper">
            <div className="contact-items">
                <Container className="contact-us-container">
                    <div className="contact-wrapper">
                        <div className="contact-header">
                            <h1 className="contact-h">Contact Us</h1>
                            <p className="contact-p">
                            We value your feedback and are always happy to help with any questions or concerns you may have. Whether you want to share your      thoughts on our products or services, or just want to say hello, we'd love to hear from you. Contact us today and let us     know how    we can assist you!
                            </p>
                        </div>
                    </div>
                </Container>

                <Container className="form-container">
                    <form>
                        <span className="f-items">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </span>
                        <span className="f-items">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" />
                        </span>
                        <span className="f-items">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" />
                        </span>
                        <span className="f-items">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" cols="30" />
                        </span>
                        <button className="submit-btn" type="submit">Submit</button>
                    </form>
                </Container>
            </div>
        </Container>
    );
}

export default ContactUs;