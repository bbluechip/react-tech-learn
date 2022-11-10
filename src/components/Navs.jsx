import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { LoginContext } from "../context/LoginProvider";

function Navs() {
  const { user, setUser } = useContext(LoginContext);
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            <Image
              width={"200px"}
              src="https://media-exp1.licdn.com/dms/image/C4E1BAQEtdkRSItgl3Q/company-background_10000/0/1564366560958?e=2147483647&v=beta&t=G_dIjtLTFj5Oz5HimC3FuCkY3uDL-paMwFvy3GvEPJ8"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/people">
              People
            </Link>

            {!user.email ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <Link
                className="nav-link"
                to="/login"
                onClick={() => setUser({ email: "", password: "" })}
              >
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
