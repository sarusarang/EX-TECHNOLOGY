import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


function Header() {


    return (


        <>

            <header className='p-2 shadow position-fixed w-100'>

                <Navbar>

                    <Container>

                        <Navbar.Brand href="/" className="Headline col-md-5">

                            <div className='head-logo'>

                                <img src="/NAV LOGO.png" className='img-fluid' alt="logo" />

                            </div>



                        </Navbar.Brand>


                        <Navbar.Toggle />

                        <Navbar.Collapse className="justify-content-end col-md-7">

                            <Nav>

                                <Nav.Link href="/" className='me-4'>Home</Nav.Link>
                                <Nav.Link href="#about" className='me-4'>About Us</Nav.Link>
                                <Nav.Link href="#vision" className='me-4'>Vision & Mission</Nav.Link>
                                <Nav.Link href="#service" className='me-4'>Service</Nav.Link>
                                <Nav.Link href="#contact" className='me-4'>Contact Us</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>

                    </Container>

                </Navbar>

            </header>


        </>




    )
}

export default Header