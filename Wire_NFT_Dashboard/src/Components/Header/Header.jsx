import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Navbar} from "react-bootstrap";
import NavDropdown from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from   "react-icons/ai";
import "./Header.css";

function CollapsibleExample() {
  return (
    <Navbar className="nev" collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand  className="home">
          <Link to="/">
            <img src="./Assets/logo-3.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle>
          <AiOutlineMenu className="text-white"></AiOutlineMenu>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto alna">
            <Nav.Link  className="hxn text-white">
              <Link to="/" className="Styelnone">Home</Link>
            </Nav.Link>
            <Nav.Link href="/About_main" className="hxn text-white">
              <Link to="/About_main" className="Styelnone">About</Link>
            </Nav.Link>
            {/* <Nav.Link href="#explore" className="hxn text-white">
              <Link to="/Explore_main" className="Styelnone">Explore</Link>
            </Nav.Link> */}
            <Nav.Link href="#how_to_play" className="hxn text-white">
              <Link to="/How_to_play_main" className="Styelnone">How To Play</Link>
            </Nav.Link>
            <Nav.Link href="#tokenomics" className="hxn text-white">
              <Link to="/Tokenomics_main" className="Styelnone">Tokenomics</Link>
            </Nav.Link>
            <Nav.Link  className="hxn text-white">
            <Link to="/OTP" className="Styelnone">
              Mint
              </Link>
            </Nav.Link>
            <Nav.Link href="https://keen-croissant-bc5ca8.netlify.app/Items/horse_racing" className="hxn text-white">
              Marketplace
            </Nav.Link>
          </Nav>
          <Nav className="mt-2 emn">
            <Nav.Link href="#login" className="text-white">
              <Link to="/Login_main" className="Styelnone">
                <span className="wallet">
                  <FaWallet></FaWallet>
                </span>
                Login
              </Link>
            </Nav.Link>
            <Nav.Link href="#register" className="text-white">
              <Link to="/Register_main" className="Styelnone">
                <span className="wallet">
                  <FaWallet></FaWallet>
                </span>
                Register
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
            <Link to="/Login_main" className="Styelnone">
              <img src="./Assets/metamask.png" width="40px" alt="" />
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
