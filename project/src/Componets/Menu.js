import React from "react"
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function Menu(){
    return (
        <Navbar bg="primary" variant="dark" className="justify-content-between">
            <Navbar.Brand href="/">Market Istambul</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/alta">Register</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/new">New Product</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default Menu
