"use client"
import Type from './componets/Type'
import Myself from './componets/Myself'
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Particle from './componets/particle'
import astronout from '../../public/Assets/astronout.png'

export default function Home() {
  return (  
    <>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I M<strong className="main-name"> AJAYPAL SINGH RAWAT </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                src={astronout}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Myself />
    </>
  );
}
