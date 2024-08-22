import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'


function Header() {


    const [expanded, setExpanded] = useState(false);

    const handleNavClick = () => {
        setExpanded(false); // Collapse the navbar
    };


    return (


        <>

            <header className='p-1 shadow position-fixed w-100'>


                <Navbar expand="lg" className="header" collapseOnSelect expanded={expanded}>

                    <Container className='contain'>


                        <div className='nav-logo'>

                            <a href="/">

                                <img src="/NAV LOGO.png" className='img-fluid' alt="" />

                            </a>

                        </div>



                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />


                        <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


                            <Nav className=" navigation">


                                <Nav.Link href="/" onClick={handleNavClick} >Home</Nav.Link>

                                <Nav.Link href="#about" onClick={handleNavClick} >About Us</Nav.Link>

                                <Nav.Link href="#vision" onClick={handleNavClick} >Vison & Mission</Nav.Link>

                                <Nav.Link href="#contact" onClick={handleNavClick} >Contact Us</Nav.Link>


                            </Nav>


                        </Navbar.Collapse>


                    </Container>


                </Navbar>




            </header>


        </>




    )
}

export default Header