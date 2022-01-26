import { Link } from 'react-router-dom'

export default function NavBar() {
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles-list">Articles</Link>
                </li>
            </ul>
        </nav>


    <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    )
}