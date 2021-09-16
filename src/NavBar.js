import React from "react";
import { NavDropdown, Navbar, Button, Nav, Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            className="justify-content-start"
          ></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link href="https://leverageedu.com/leverage-tv">
                <img
                  className="tvLogo"
                  src="https://leverageedunew.s3.amazonaws.com/tv-icon.svg"
                  alt="Tv"
                />
                Leverage TV
              </Nav.Link>
              <Nav.Link href="https://leverageedu.com/scholarships">
                Scholarships
              </Nav.Link>

              <NavDropdown title="Finance" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">
                  International Money Transfer
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Loans</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="How we help" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">
                  For School Students
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  For University Students
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  For Working Professionals
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Destinations" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Study in USA</NavDropdown.Item>
                <NavDropdown.Item href="/">Study in Australia</NavDropdown.Item>
                <NavDropdown.Item href="/">Study in UK</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Study in New Zealand
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Study in China</NavDropdown.Item>
                <NavDropdown.Item href="/">Study in Germany</NavDropdown.Item>
                <NavDropdown.Item href="/">Study in Russia</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Tests" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">GMAT</NavDropdown.Item>
                <NavDropdown.Item href="/">IELTS</NavDropdown.Item>
                <NavDropdown.Item href="/">GRE</NavDropdown.Item>
                <NavDropdown.Item href="/">SAT</NavDropdown.Item>
                <NavDropdown.Item href="/">TOEFL</NavDropdown.Item>
                <NavDropdown.Item href="/">ACT</NavDropdown.Item>
                <NavDropdown.Item href="/">PTE</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="/">eBooks</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Cost of Living Calculator
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <Navbar.Collapse className="justify-content-end"> */}
        <BsSearch className="search-icon" />
        <Button variant="primary" className="login-btn">
          Login
        </Button>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};

export default NavBar;
