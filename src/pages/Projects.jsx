import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import "./DataCard.css";
const Projects = () => {
  const projects = [
    {
      name: "Charitiaus",
      image: "https://i.ibb.co/b2Nyrjd/Charitiaus.png",
      features:
        "Charitious is a web platform designed to facilitate donations and community engagement for various charitable causes.",
      link: "https://charitiaus.netlify.app/",
      server: "https://github.com/MD-TANVIR7462/Charitious_Server",
      client: "https://github.com/MD-TANVIR7462/Charitious_Client",
    },
    {
      name: "Swift Mart",
      image: "https://i.ibb.co/pzXK9Dm/Swift-Mart.png",
      features:
        "Swift Mart is a Ecommerce Website where users can Buy Any Product and The admin can add or remove any product and ETC..Admin Email : testing@gmail.com || Pass: Test@T .",
      link: "https://ecommerce-project-7462.web.app/",
      server: "https://github.com/MD-TANVIR7462/Ecommerce-project-server",
      client: "https://github.com/MD-TANVIR7462/Economic-project-client",
    },
    {
      name: "Suds Cart",
      image: "https://i.ibb.co/HrtKkYx/Sudscart.png",
      features:
        "SudsCart - Your Ultimate Destination for Dishwashing Essentials!.",
      link: "https://diswashing-app.vercel.app/",
      server: "https://github.com/MD-TANVIR7462/sudsCart_server",
      client: "https://github.com/MD-TANVIR7462/SudsCart_client",
    },

    {
      name: "Toy Land",
      image:
        "https://i.ibb.co/QHmyHkH/White-Colorful-Soft-Photo-Grid-Layout-Mockup-Frame-Set-Moodboard-Photo-Collage-2.png",
      features:
        "an Online Toy Store Website, Implemented a responsive design approach, ensuring seamless browsing and purchasing across desktop and mobile devices.",
      link: "https://toy-land12.netlify.app/",
      server: "https://github.com/MD-TANVIR7462/Toyland-server",
      client: "https://github.com/MD-TANVIR7462/Toyland-Client-main",
    },
    {
      name: "Indian Cafe",
      image:
        "https://i.ibb.co/xGcqrP3/White-Colorful-Soft-Photo-Grid-Layout-Mockup-Frame-Set-Moodboard-Photo-Collage-3.png",
      features:
        "an Online Recipe Management System. Implemented user authentication and authorization features, ensuring secure access to personal recipe collections and enabling social sharing capabilities",
      link: "https://assignment-10-34514.web.app/",
      server: "https://github.com/MD-TANVIR7462/indian-cafe-server",
      client: "https://github.com/MD-TANVIR7462/Indian-Cafe-client",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      mirror: true,
      once: false,
      anchorPlacement: "top-center",
    });
  }, []);
  const [hovered, setHovered] = useState(false);
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
              <div
                className={`data-card ${hovered ? "hovered" : ""}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="image-container">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="card-content">
                  <h2>{project.name}</h2>
                  <p>{project.features}</p>

                  <div className="github-links">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </a>
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Server
                    </a>
                    <a
                      href={project.client}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
