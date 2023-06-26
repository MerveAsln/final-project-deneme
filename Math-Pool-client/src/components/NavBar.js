import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="nav-container">
      <Navbar color="light" light expand="md">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="nav-left">
            <img
              className="logoMain"
              src="https://www.kindpng.com/picc/m/579-5794129_mp-logo-hd-png-transparent-png.png"
            ></img>
          </div>

          <div className="nav-right">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="">
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to="/about"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    About
                  </NavLink>
                </NavItem>
                {isAuthenticated && (
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Home
                    </NavLink>
                  </NavItem>
                )}
                {isAuthenticated && (
                  <NavItem>
                    <NavLink
                      tag={RouterNavLink}
                      to="/article-api"
                      exact
                      activeClassName="router-link-exact-active"
                    >
                      Articles
                    </NavLink>
                  </NavItem>
                )}
                {isAuthenticated && (
                  <>
                    {" "}
                    <NavItem>
                      <NavLink
                        tag={RouterNavLink}
                        to="/all-questions"
                        exact
                        activeClassName="router-link-exact-active"
                      >
                        Questions
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        {/* <DropdownMenu>
            Subject
            <DropdownItem tag={Link} to="/math">Math</DropdownItem>
            <DropdownItem tag={Link} to="/geometry">Geometry</DropdownItem>
          </DropdownMenu> */}
                        <NavDropdown
                          id="nav-dropdown-dark-example"
                          title="Subject"
                          menuVariant="dark"
                        >
                          <DropdownItem className="">
                            <Link tag={Link} to="/math">
                              Math
                            </Link>
                          </DropdownItem>

                          <DropdownItem>
                            <Link tag={Link} to="/geometry">
                              Geometry
                            </Link>
                          </DropdownItem>
                        </NavDropdown>
                      </NavLink>
                    </NavItem>
                  </>
                )}

                {isAuthenticated && (
                  <div class="d-flex  " role="search">
                    <input
                      class="form-control me-2 "
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-dark" type="submit">
                      search
                    </button>
                  </div>
                )}
              </Nav>
              <Nav className="d-none d-md-block" navbar>
                {!isAuthenticated && (
                  <NavItem>
                    <Button
                      id="qsLoginBtn"
                      color="primary"
                      className="btn-margin"
                      onClick={() => loginWithRedirect()}
                    >
                      Log in
                    </Button>
                  </NavItem>
                )}
                {isAuthenticated && (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret id="profileDropDown">
                      <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile rounded-circle"
                        width="50"
                      />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>{user.name}</DropdownItem>
                      <DropdownItem
                        tag={RouterNavLink}
                        to="/profile"
                        className="dropdown-profile"
                        activeClassName="router-link-exact-active"
                      >
                        <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                      </DropdownItem>
                      <DropdownItem
                        id="qsLogoutBtn"
                        onClick={() => logoutWithRedirect()}
                      >
                        <FontAwesomeIcon icon="power-off" className="mr-3" />{" "}
                        Log out
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </Nav>
              {!isAuthenticated && (
                <Nav className="d-md-none" navbar>
                  <NavItem>
                    <Button
                      id="qsLoginBtn"
                      color="primary"
                      block
                      onClick={() => loginWithRedirect({})}
                    >
                      Log in
                    </Button>
                  </NavItem>
                </Nav>
              )}
              {isAuthenticated && (
                <Nav
                  className="d-md-none justify-content-between"
                  navbar
                  style={{ minHeight: 170 }}
                >
                  <NavItem>
                    <span className="user-info">
                      <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile d-inline-block rounded-circle mr-3"
                        width="50"
                      />
                      <h6 className="d-inline-block">{user.name}</h6>
                    </span>
                  </NavItem>
                  <NavItem>
                    <FontAwesomeIcon icon="user" className="mr-3" />
                    <RouterNavLink
                      to="/profile"
                      activeClassName="router-link-exact-active"
                    >
                      Profile
                    </RouterNavLink>
                  </NavItem>
                  <NavItem>
                    <FontAwesomeIcon icon="power-off" className="mr-3" />
                    <RouterNavLink
                      to="#"
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      Log out
                    </RouterNavLink>
                  </NavItem>
                </Nav>
              )}
            </Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
