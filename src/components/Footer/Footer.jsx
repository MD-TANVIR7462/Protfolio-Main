import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <span>Dedicated to creating impactful solutions!</span>
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
            <img src="https://i.ibb.co/ctVw5cN/letter-t-icon-png-5.png" className="img-fluid logo" alt="brand" />
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
              
                  <AiFillGithub />
             
              </li>
              <li className="social-icons">
                
                  <AiOutlineTwitter />
              
              </li>
              <li className="social-icons">
                
                  <FaLinkedinIn />
              
              </li>
              <li className="social-icons">
              
                  <AiFillInstagram />
           
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer