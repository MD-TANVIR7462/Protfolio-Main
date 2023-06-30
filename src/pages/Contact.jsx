import React from 'react'
import { Container } from "react-bootstrap";

import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
   <div className='contact' id='contace' >
   <h1 className='text-white text-center pt-5 pb-3'>CONTACT <span className='yellow'>ME </span></h1>
    <Container >

<ContactForm />
<Social />
</Container>
</div >
  )
}

export default Contact