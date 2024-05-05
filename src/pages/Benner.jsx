



import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Types from '../components/Home/Type';





const Benner = () => {
  return (
    <section id='home'>
      <Container fluid className="home-section" >
     
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header ">
              <h1 style={{ paddingBottom: 10 }} className=" text-center text-md-start ">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-start name  text-center text-md-start ">
                I'M
                <strong className="main-name "> Md TAJUL ISLAM TANVIR</strong>
              </h1>

              <div className=' ' >
                <Types />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className='image_div'>
            
              <img
                src="https://i.ibb.co/hFx7HRw/Md-Tajul-Islam-Tanvir-2-Photoroom-png-Photoroom.png"
                alt="home pic"
                className="img-fluid img"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}

export default Benner