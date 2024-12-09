import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./back.css";
import phone from "../assests/phn.png";
import email from "../assests/email.png";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import instagram from "../assests/instagram.png";
function TextLinkExample() {
  return (
    <div    className="d-lg-block d-md-block d-none">
    <div className="backg " >
    <Container >
    <Row className="justify-content-md-center">
      <Col lg={2} md={9} sm={10} xs={12} style={{"padding":"13px"}}  ><a  href="tel:+91986678788" style={{"textDecoration":"none","color":'white'}}><img src={phone} width={25} alt='phone-icon' />+91 98666 78788</a></Col>
     <Col lg={8} md={4} style={{"padding":"10px"}} ><a href="mailto:vbenterprises42@gmail.com" style={{"color":"white"}}><img src={email} alt='email-icon' style={{"paddingRight":"10px"}} ></img>vbenterprises42@gmail.com</a></Col>
      <Col  lg={2} md={3} sm={2} xs={12} style={{"paddingLeft":"50px"}}> <img src={facebook} alt='facebook-link' style={{"paddingRight":"10px"}}></img><img src={twitter} alt='twitter-icon' ></img><img  src={instagram} alt='instagram-icon'></img></Col>
    </Row>
  </Container>
  </div>
  </div>
  );
}

export default TextLinkExample;