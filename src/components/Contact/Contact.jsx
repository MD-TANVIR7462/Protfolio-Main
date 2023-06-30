import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setDone(false)
    setNotDone(false)
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true)
    } else {



      emailjs
        .sendForm(
          "service_odhw4vg",
          "template_9erpf17",
          form.current,
          "2aYDMqc5GqdZH5wT2"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };




  useEffect(() => {
    Aos.init({
      duration: 5000,
    })
  }, [])

  return (
    <div  className='ownBorder' 
    data-aos="zoom-in"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    
    >
      <Container style={{ paddingTop: '50px' }}>
       
       
      
        <Row className="">
      <Col md={6}
       data-aos="fade-right" 
      
      data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center"
      
      >
        <Tilt>
          <img
            src="https://i.ibb.co/fFVpNkS/about.png"
            alt="home pic"
            className="own img-fluid"
      
          />
        </Tilt>
      </Col>
      <Col
        md={6}
        className="c-right d-flex align-items-center"
     
      >
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
          <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
          <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
          <span className="not-done">{notDone && 'Please, fill all the input field'}</span>
          <button type="submit" class=" btn-primary" disabled={done}>
            Send
          </button>
          <span className="done">
            {done &&
              'Message sent successfully'}
          </span>
        </form>
      </Col>
    </Row>
      </Container>
    </div>
  )
}

export default Contact