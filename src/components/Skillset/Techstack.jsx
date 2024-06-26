import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import { DiJavascript1, DiReact, DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { SiMongoosedotws } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const Techstack = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the duration of animations in milliseconds
      // Only animate elements once
    });
  }, []);
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="py-5"
    >
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="zoom-in"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <SiHtml5 /> <p className="fs-6">HTML</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <SiCss3 /> <p className="fs-5">Css</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <DiJavascript1 /> <p className="fs-6">Javascript</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror=""
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <SiTypescript /> <p className="fs-6">Typescript</p>
      </Col>

   

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <SiExpress /> <p className="fs-6">Express Js</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <DiReact /> <p className="fs-6">React Js</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror=""
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <SiNextdotjs /> <p className="fs-6">Next JS</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror=""
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <SiRedux /> <p className="fs-6">Redux</p>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <SiMongodb /> <p className="fs-6">Mongodb</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <SiMongoosedotws /> <p className="fs-6">Mongoose</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <SiTailwindcss /> <p className="fs-6">Tailwindcss</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <DiNodejs /> <p className="fs-6">Node js</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <SiFirebase /> <p className="fs-6">Firebase</p>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <SiBootstrap /> <p className="fs-6">Bootstrap</p>
      </Col>
   

 
  

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror=""
        data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <TbBrandFramerMotion /> <p className="fs-6">Framer Motion</p>
      </Col>
    </Row>
  );
};

export default Techstack;
