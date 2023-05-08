import { Navbar, Container, Nav } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">Netflix</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">Trending</Nav.Link>
                    <Nav.Link href="#hero">Hero</Nav.Link>
                    <Nav.Link href="#movies">Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation