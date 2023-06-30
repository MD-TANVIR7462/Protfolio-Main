import React from "react";
import { Container } from "react-bootstrap";


import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";

import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container  className="about-section" id="skill">
     
      <Container c>
        <h1 className=" text-center py-3">
          Professional <strong className="yellow ">Skills </strong>
        </h1>

        <Techstack />

        <h1 className="text-center">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

     
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset