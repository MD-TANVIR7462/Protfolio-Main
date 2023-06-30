import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const Abouts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const resumeLink = () => {
    window.open("https://drive.google.com/file/d/1f8eXEB7NzP9-uXosEdq_yUnbS49pBCjj/view?usp=sharing", "_blank")
  }

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      data-aos="fade-right"


      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <Container>
        <Row className="d-flex align-items-center justify-center ">

          <Col md={8} className="home-about-description ">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
           <i>
           <p className="home-about-body">
              Hi, my name is <span className="yellow">Md TAJUL ISLAM TANVIR</span> and I'm from 
              <span className="yellow"> CHITTAGONG, Bangladesh.</span>
              <br />
              <br />

              As a <b className="yellow">MERN-Stack</b> developer, I enjoy tacking new challenges
              and I continuously expanding my skills.
              <br />
              <br />
              I'm proficient in <b className="yellow">Javascript</b>.
              <br />
              <br />
              I have a passion for working with <b className="yellow">Node.js, MongoDB</b>, and
              <i>
                <b className="yellow"> modern Javascript libraries and frameworks </b>
           
               like
            
                <b className="yellow"> React.js</b>
              </i>
              <br />
              <br />
              I am also interested in building new{" "}
              <i>
                <b className="yellow">Web Technologies and Products</b>
              </i>
              , as well as exploring areas related to{" "}
              <b className="yellow">Artificial Intelligence.</b>
              <br />
            </p>
           </i>
         <button onClick={resumeLink} className=" btn-primary">DownLoad Resume</button>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src="https://i.ibb.co/2W6vGF4/IMG-8114-2-1.jpg" className="img-fluid w-100 h-75 rounded   " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Abouts;
