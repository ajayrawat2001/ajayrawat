"use client"
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../componets/particle";
// import Techstack from "./TechStack";
import Aboutcard from "../componets/AboutCard";
import ajayrawat from "../../../public/Assets/Ajayrawat.jpeg";

import Tilt from "react-parallax-tilt";
import Image from "next/image";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          >
            <Tilt>
              <Image
                src={ajayrawat}
                alt="about"
                className="img-fluid rounded-circle"
              />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        {/* <Techstack /> */}
      </Container>
    </Container>
  );
}

export default About;
