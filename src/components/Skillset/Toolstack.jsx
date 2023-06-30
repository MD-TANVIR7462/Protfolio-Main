import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiVisualstudiocode,
  SiGithub,
  SiCanva,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const Toolstack = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the duration of animations in milliseconds
      // Only animate elements once
    });
  }, []);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} data-aos="fade-right"


      data-aos-duration="1000"
      data-aos-once="false"
   >
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in"



        data-aos-duration="1000"
        data-aos-easing="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        <SiVisualstudiocode />  <p className="fs-6">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in"



        data-aos-duration="1000"
        data-aos-easing="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        <SiGithub /> <p className="fs-6">Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in"



        data-aos-duration="1000"
        data-aos-easing="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        <SiVercel /> <p className="fs-6">Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in"



        data-aos-duration="1000"
        data-aos-easing="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        <SiNetlify /> <p className="fs-6">Netlify</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="zoom-in"



        data-aos-duration="1000"
        data-aos-easing="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
        <SiCanva /> <p className="fs-6">Canva</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
