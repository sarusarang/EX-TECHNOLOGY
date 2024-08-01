import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import ContactUs from '../Components/ContactUs'


function Landing() {

  return (

    <>


      <section>




        <header className='p-2 shadow position-fixed w-100'>

          <Navbar>

            <Container>

              <Navbar.Brand href="/" className="Headline">EXTECHNOLOGY</Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Collapse className="justify-content-end">

                <Nav>

                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#service">Service</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#vision">Vision & Mission</Nav.Link>
                  <Nav.Link href="#contact">Contact Us</Nav.Link>

                </Nav>

              </Navbar.Collapse>

            </Container>

          </Navbar>

        </header>



        {/* hero */}
        <section id='home' className='pt-5'>


          <Hero />


        </section>


        <section id='about' className='w-100 p-5 mt-5'>

         <AboutUs/>

        </section>





      </section>






    </>



  )
}

export default Landing