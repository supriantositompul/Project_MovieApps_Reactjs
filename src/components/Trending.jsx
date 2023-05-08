import {Card, Row, Container, Col, Image} from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">TRENDING</h1>
                <br />
                <Row>
                    <Col md={4} className="movieImage" id="trending">
                        <Card className="bg-dark text-center text-white movieImage">
                            <Image
                                src={duneImage}
                                alt="Dune Movies"
                                className="images"/>
                            <Card.Title className="text-center">Dune</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins</Card.Text>
                        </Card>
                    </Col>
                      <Col  md={4} className="movieImage">
                        <Card className="bg-dark text-center text-white movieImage">
                            <Image
                                src={jokerImage}
                                alt="Joker Movies"
                                className="images"
                                />
                            <Card.Title className="text-center">Joker</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins</Card.Text>
                        </Card>
                    </Col>
                      <Col  md={4} className="movieImage">
                        <Card className="bg-dark text-center text-white movieImage">
                            <Image
                                src={morbiusImage}
                                alt="Morbius Movies"
                                className="images"
                                />
                            <Card.Title className="text-center">Morbius</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieImage">
                        <Card className="bg-dark text-center text-white movieImage">
                            <Image
                                src={duneImage}
                                alt="Dune Movies"
                                className="images"/>
                            <Card.Title className="text-center">Dune</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieImage">
                        <Card className="bg-dark text-center text-white movieImage">
                            <Image
                                src={duneImage}
                                alt="Dune Movies"
                                className="images"/>
                            <Card.Title className="text-center">Dune</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieImage">
                        <Card className="bg-dark text-center text-white movieImage">
                            <Image
                                src={duneImage}
                                alt="Dune Movies"
                                className="images"/>
                            <Card.Title className="text-center">Dune</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Trending