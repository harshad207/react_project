import React from "react";
import "../about/about.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <>
      <div className="parent_div">
        <h2 className="text-center my-3">Our Team</h2>
        <div className="">
          <div className="card_div">
            <Card style={{ width: "18rem", height: "28rem" }}>
              <Card.Img variant="top" src="/mike.jpg" className="img" />
              <Card.Body>
                <Card.Title>
                  <b>mike</b>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build <br /> on the card title and
                  make up the <br /> bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", height: "28rem" }}>
              <Card.Img variant="top" src="/prople.jpg" className="img" />
              <Card.Body>
                <Card.Title>
                  <b>prople</b>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build <br /> on the card title and
                  make up the <br /> bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", height: "28rem" }}>
              <Card.Img variant="top" src="/vogel.jpg" className="img" />
              <Card.Body>
                <Card.Title>
                  <b>vogel</b>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build <br /> on the card title and
                  make up the <br /> bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", height: "28rem" }}>
              <Card.Img variant="top" src="/clse.jpg" className="img" />
              <Card.Body>
                <Card.Title>
                  <b>clse</b>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build <br /> on the card title and
                  make up the <br /> bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
