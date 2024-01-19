
import { Col, Row } from "react-bootstrap";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux, TbBrandReactNative } from "react-icons/tb";

import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,

} from "react-icons/di";
import { FaSass } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 color="#407cff" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="yellow" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 color="#f44336" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap color="a15ef1" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="skyblue" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux color="#a15ef1" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript color="skyblue" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass color="#e74b66" />
      </Col>
    </Row>
  );
}

export default Techstack;
