//Navigation bar at top of page
import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import cartPic from "./cart.png";


const navbar = () => {
    return (
      <div>
        <Navbar className="navbar navbar-light" style={{ backgroundColor: "#008B8B" }}>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#recipes">Recipes</Nav.Link>
            <Nav.Link href="#history">History</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search for..." className="ml-auto p-2" />
            <Button variant="outline-info" style={{ color: "#004444"}}>Search</Button>
          </Form>
          <Navbar.Brand href="#cart" className ="p-2">
            <img
            alt="Cart"
            src={cartPic}
            width="30"
            height="30"
            />
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }

export default navbar;
