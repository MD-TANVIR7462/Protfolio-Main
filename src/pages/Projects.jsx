

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGlobe, FaServer, FaCode } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { IconContext } from "react-icons";

const Projects = () => {
  const projects = [
        {
          name: "Dance World",
          image: "https://i.ibb.co/GcLS6vw/Screenshot-41.png",
          features:
            "Dance World - A dynamic and interactive website for a dance summer school, Ignite your passion for dance and embark on an unforgettable journey of self-expression.",
          link: "https://dance-world-c2149.web.app/",
          server: "https://github.com/MD-TANVIR7462/Dance-world-server",
          client: "https://github.com/MD-TANVIR7462/Dance--World-client",
        },
        {
          name: "Toy Land",
          image: "https://i.ibb.co/28Z3Wtw/Screenshot-43.png",
          features:
            "an Online Toy Store Website, Implemented a responsive design approach, ensuring seamless browsing and purchasing across desktop and mobile devices.",
          link: "https://toy-land-c50d6.web.app/",
          server: "https://github.com/MD-TANVIR7462/Toyland-server",
          client: "https://github.com/MD-TANVIR7462/Toyland-Client-main",
        },
        {
          name: "Indian Cafe",
          image: "https://i.ibb.co/ydztbdF/Screenshot-39.png",
          features:
            "an Online Recipe Management System. Implemented user authentication and authorization features, ensuring secure access to personal recipe collections and enabling social sharing capabilities",
          link: "https://assignment-10-34514.web.app/",
          server: "https://github.com/MD-TANVIR7462/indian-cafe-server",
          client: "https://github.com/MD-TANVIR7462/Indian-Cafe-client",
        },
      ]

  const handleVisitClick = (link) => {
    window.open(link, "_blank");
  };

  const handleServerClick = (link) => {
    window.open(link, "_blank");
  };

  const handleClientClick = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
      once: false,
      anchorPlacement: "top-center",
    });
  }, []);

  return (
    <div id="project" className="pt-5">
      <h1 className="text-center text-white pb-5">
        My <span className="yellow">Projects</span>
      </h1>
      <Container>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col
              key={index}
              sm={6}
              md={4}
              className="mb-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
            >
              <Card className="text-center project-card">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.features}</Card.Text>
                  <div className="" >
                    <Button
                      variant="primary"
                      onClick={() => handleVisitClick(project.link)}
                      className="mx-2 text-light project-button"
                    >
                      <IconContext.Provider
                        value={{ style: { verticalAlign: "middle" } }}
                      >
                        <FaGlobe />
                      </IconContext.Provider>{" "}
                      Visit
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => handleServerClick(project.server)}
                      className="project-button"
                    >
                      <IconContext.Provider
                        value={{ style: { verticalAlign: "middle" } }}
                      >
                        <FaServer />
                      </IconContext.Provider>{" "}
                      Server
                    </Button>
                    <Button
                      variant="info"
                      className="mx-2  mt-2 mt-md-0 text-light "
                      onClick={() => handleClientClick(project.client)}
                    >
                      <IconContext.Provider
                        value={{ style: { verticalAlign: "middle" } }}
                      >
                        <FaCode />
                      </IconContext.Provider>{" "}
                      Client
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;


