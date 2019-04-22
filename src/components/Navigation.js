import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            src="/c3ug_icon.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="C3UG logo"
                        />
                        {' Question of the Day'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/qotd">Today's Question</Nav.Link>
                        <Nav.Link href="/results">Results</Nav.Link>
                        <Nav.Link href="https://c3ug.ca">C3UG</Nav.Link>
                        <Nav.Link href="https://openntf.org">OpenNTF</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;