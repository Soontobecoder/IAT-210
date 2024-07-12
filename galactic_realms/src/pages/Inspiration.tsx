import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export const Inspiration = () => {
  return (
    <Container fluid style={{ color: "white" }}>
      <Row className="mt-5">
        <h1>Inspiration</h1>
      </Row>

      <Row>
        <Col xs="2"></Col>
        <Col>
          <hr
            style={{
              height: "15px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
            }}
          />
        </Col>
        <Col xs="2"></Col>
      </Row>

      {/* Inspiration 1 : Carcasonne */}
      <Row className="mt-5" style={{ justifyContent: "center" }}>
        <Col xs="12" md="8">
          <Row>
            <Col xs="12" md="6">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://scootergirltoys.com/cdn/shop/products/CarcassonneBoardGame_1.jpg?v=1661191228"
                  alt="Card image"
                />
                <Card.ImgOverlay
                  style={{ fontSize: "18px", textAlign: "justify" }}
                >
                  <div style={{ backgroundColor: "gray", opacity: "0.6" }}>
                    <Card.Title style={{ textAlign: "center" }}>
                      Card title
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col xs="12" md="6">
              <Row>
                <h2> Carcasonne</h2>
              </Row>
              <Row>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
                </p>
              </Row>
              <Row>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Inspiration 2 */}
      <Row className="mt-5" style={{ justifyContent: "center" }}>
        <Col xs="12" md="8">
          <Row>
            <Col xs="12" md="6">
              <Row>
                <h2> Carcasonne</h2>
              </Row>
              <Row>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.
                </p>
              </Row>
              <Row>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </Row>
            </Col>
            <Col xs="12" md="6">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://scootergirltoys.com/cdn/shop/products/CarcassonneBoardGame_1.jpg?v=1661191228"
                  alt="Card image"
                />
                <Card.ImgOverlay
                  style={{ fontSize: "18px", textAlign: "justify" }}
                >
                  <div style={{ backgroundColor: "gray", opacity: "0.6" }}>
                    <Card.Title style={{ textAlign: "center" }}>
                      Card title
                    </Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
