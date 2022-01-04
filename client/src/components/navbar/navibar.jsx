import React from "react";
import 'react-bootstrap';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer"


const Navibar = () =>{
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Users56</Navbar.Brand >
                    <Nav className="justify-content-end">
                        { !isAuth &&
                            <Button variant="primary"  size="lg" className="m-sm-2">
                                <NavLink to="/login" style={{color: 'white', textDecoration: 'none'}}>
                                    Log in
                                </NavLink>
                            </Button>
                        }
                        { !isAuth &&
                            <Button variant="primary"  size="lg" className="m-sm-2">
                                <NavLink to="/registration" style={{color: 'white', textDecoration: 'none'}}>
                                    Registration
                                </NavLink>
                            </Button>
                        }
                        { isAuth &&
                            <Button onClick={() => dispatch(logout())}  variant="primary"  size="lg" className="m-sm-2">
                                    Log out
                            </Button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )}
export default Navibar;
