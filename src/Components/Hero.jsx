import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {


    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);


    return (



        <>


            <section className='hero p-'>

                <div className='container'>

                    <div className='row  ps-0 pt-4'>

                        <div className='col-md-6 pt-5' style={{marginTop:'6rem'}} data-aos="fade-up" data-aos-duration="1000">


                            <h1>Empower your business <br /> with perfect IT solutions</h1>



                            <p className='mt-3' >With 15 years of expertise in branding and advertisement, exmedia has established a strong market presence.
                                To expand service the extechnology offering is dedicated to delivering advanced IT solutions, including web
                                development, e-commerce platforms, Web &
                                WhatsApp Chatbots, and Mobile applications, ensuring comprehensive support of our client's digital needs.</p>


                            <a href="#contact" className='btn btn-contact'>CONTACT US</a>

                        </div>


                        <div className='col-md-6 ps-5' data-aos="zoom-in" data-aos-duration="1000">

                            <img src="/WALL.png" className='' alt="img" style={{width:'110%'}} />

                        </div>

                    </div>

                </div>


                <div className='box d-flex justify-content-center align-items-center w-100 '>


                    <div className='inner-box shadow col-md-3' data-aos="fade-right"  data-aos-duration="400">

                        <i className="fa-solid fa-laptop-code mb-3 fa-bounce"></i>

                        <h5>WEB/E-COMMERCE PLATFORMS</h5>

                    </div>



                    <div className='inner-box shadow col-md-3' data-aos="fade-up"  data-aos-duration="400">

                        <i class="fa-solid fa-mobile-screen mb-3 fa-bounce"></i>

                        <h5>MOBILE APPLICATIONS</h5>

                    </div>

                    <div className='inner-box shadow col-md-3' data-aos="fade-left"  data-aos-duration="400">

                    <i class="fa-solid fa-robot mb-3 fa-bounce"></i>

                        <h5>WHATSAPP / CHATBOTS WEB</h5>

                    </div>


                </div>


            </section>





        </>




    )
}

export default Hero