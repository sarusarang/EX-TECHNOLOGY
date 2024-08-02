import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {



    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);



    return (




        <>


            <section className='p-5 container' style={{ borderTop: '1px solid #e8e5e5' }}>


                <div className='row ps-4 pt-3'>

                    <div className='col-md-6 about-head pt-5 mt-5'>

                        <h3 data-aos="fade-right" data-aos-duration="400">ABOUT US</h3>


                        <p data-aos="fade-left" data-aos-duration="400">The Extechnology is a dynamic technology firm specializing in the creation of Standard/ Dynamic websites,
                            e-commerce platforms, Chatbots, and mobile applications. With a commitment to innovation and excellence, extechnology
                            delivers tailored digital solutions that enhance user experiences and drive business growth. Their team of skilled developers and designers collaborates closely with clients to understand their unique needs, ensuring each project is executed with precision and creativity. Whether it's a sleek website, a robust e-commerce solution, or an engaging mobile app, extechnology
                            IT Company leverages the most advanced technologies to build digital products that stand out in the competitive market.</p>

                        <button className='btn btn-read'   data-aos="fade-up" data-aos-duration="400">Read More</button>


                    </div>


                    <div className='col-md-6' data-aos="zoom-in" data-aos-duration="400">

                        <img src="https://st4.depositphotos.com/26272580/31072/v/450/depositphotos_310724682-stock-illustration-contact-us-woman-with-headphones.jpg" className='img-fluid' alt="img" />

                    </div>

                </div>





            </section>

        </>




    )




}

export default AboutUs