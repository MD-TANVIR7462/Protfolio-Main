import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import Aos from "aos";

const Github = () => {
  useEffect(()=>{
    Aos.init({
      
    })
  },[])
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} data-aos="zoom-in"
      

    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <h1 className="text-center" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="MD-TANVIR7462"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
