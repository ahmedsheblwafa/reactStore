import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { logUserOut } from "../Redux/actions/userLogged"
const MyNavbar = () => {
    const user = useSelector(state => state.userLogged)
    const dispatch = useDispatch()
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink className="navbar-brand" to="/">React-Store</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="products">Products</NavLink>
                            <NavLink className="nav-link" to="contactus">contact us</NavLink>

                            {user ? <NavDropdown title={user.userName} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => { dispatch(logUserOut()) }} href="#action/3.4">
                                    logout
                                </NavDropdown.Item>
                            </NavDropdown> : <NavLink className="nav-link" to="loginform" >login</NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default MyNavbar;