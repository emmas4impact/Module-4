import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";


class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="md" bg="dark"  variant="dark">
                    <Navbar.Brand href="#home">
                    {this.props.title} - Striving for Food
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#home">Menu</Nav.Link>
                        <Nav.Link href="#link">Reservation</Nav.Link>
                        <Nav.Link href="#link">Our Location</Nav.Link>
                    
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
            
            </div> 
        )
    }
    
    
    
}
export default NavBar