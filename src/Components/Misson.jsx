import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Misson() {



    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);



    return (



        <>


            <section className='container pt-5 mb-5 mt-5'>


                <div className='row pt-5'>


                    <div className='col-md-6 vision-img' data-aos="zoom-in" data-aos-duration="400">

                        <img src="https://img.freepik.com/premium-vector/gradient-our-mission-concept-illustrated_23-2149081667.jpg" className='img-fluid' alt="" />

                    </div>


                    <div className='col-md-6 pt-3 mission'>


                        <h3  data-aos="fade-right" data-aos-duration="400">OUR MISSION & VISION</h3>

                        <p data-aos="fade-left" data-aos-duration="400">Extechnology aims to empower businesses by providing the most advanced IT solutions and exceptional service,
                            ensuring our clients achieve operational efficiency, security, and innovation. We are committed to
                            delivering tailored technology services that drive business success and foster long-term partnerships.

                        </p>

                        <p  data-aos="fade-left" data-aos-duration="400">
                            A future where businesses of all sizes leverage advanced IT solutions to overcome challenges, achieve
                            their goals, and stay ahead in a rapidly evolving digital landscape. We aspire to be a trusted leader in
                            the IT services industry, recognized for our innovation, reliability, and dedication to client success.</p>


                            <button className='btn btn-read'  data-aos="fade-up" data-aos-duration="400">Read More</button>


                    </div>

                </div>



            </section>


        </>



    )



}

export default Misson