import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillGithub,
 

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="text-center pt-4">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Feel free to <span className="yellow">connect</span> with me
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/MD-TANVIR7462"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.facebook.com/md.taijul.986/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/md-tajul-islam-tanvir-531682278/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
               
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social