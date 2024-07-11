import MainImage from "../components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export const Home = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#1B1B1D",
        color: "white",
        justifyContent: "center",
        padding: "0",
      }}
    >
      {/* Carousel section */}

      <MainImage />

      {/* About section */}
      <Row style={{ backgroundColor: "#444950" }}>
        <Col className="mt-4">
          <h1>About</h1>
        </Col>
        <Row className="mt-2 mb-4" sm="auto">
          <Col md="2"></Col>
          <Col sm="12" md="4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
          <Col md="4">
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Row>

      {/* Image section */}
      <Row className="mb-4">
        <Col md="1"></Col>
        <Col className="mt-4 ">
          <Image
            src="https://static.dnschecker.org/og-images/image-to-text-converter.png"
            fluid
          />
        </Col>
        <Col md="1"></Col>
      </Row>

      {/* 3 Main pillars section */}
      <Row style={{ backgroundColor: "#444950" }}>
        <Col className="mt-4">
          <h1>3 main pillars</h1>
        </Col>
        <div className="mt-5 mr-5 ml-5">
          <Row style={{ justifyContent: "center" }}>
            <Col sm="12" md="3">
              <Row>
                <h2>What</h2>
              </Row>
              <Row>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Row>
            </Col>
            <Col sm="12" md="3">
              <Row>
                <h2>Why</h2>
              </Row>
              <Row>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Row>
            </Col>
            <Col sm="12" md="3">
              <Row>
                <h2>How</h2>
              </Row>
              <Row>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </Row>

      {/* Backstory section */}
      <div>
        <Row>
          <Col className="mt-4">
            <h1>Backstory</h1>
          </Col>
        </Row>
        <Row>
          <Col md="1"></Col>
          <Col className="mt-4 ">
            <p style={{ textAlign: "justify" }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </Col>
          <Col md="1" className="mb-4"></Col>
        </Row>
      </div>
    </Container>
  );
};
