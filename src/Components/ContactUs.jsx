import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function ContactUs() {


    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);


    return (



        <>


            <section className='container p-5 mt-5 mb-5 contact' style={{ borderTop: '1px solid #e8e5e5' }}>

                <h3 className='text-center' data-aos="fade-up" data-aos-duration="400">CONTACT US</h3>

                <div className="row">



                    <div className="col-md-6" data-aos="fade-right" data-aos-duration="400">

                        <form className='p-4'>


                            <input type="text" placeholder='Name' className='form-control mb-3 ' />

                            <input type="text" placeholder='Phone Number' className='form-control mb-3' />

                            <input type="text" placeholder='Email' className='form-control mb-3' />

                            <textarea name="" placeholder='Message' className='form-control' id=""></textarea>

                            <button className='btn btn-success mt-3 ' style={{width:'35%'}}>Send</button>


                        </form>


                    </div>

                    <div className="col-md-6 p-4" data-aos="fade-left" data-aos-duration="400">


                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4421418201214!2d75.85261257481112!3d11.179565288994771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651be1190a97d%3A0xbde6ecee8d0fdb1c!2sKINFRA%20Advanced%20Technology%20Park%2C%20Ramanattukara!5e1!3m2!1sen!2sin!4v1722576935488!5m2!1sen!2sin" width="600" height="280" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                    </div>


                </div>



            </section>



        </>



    )



}

export default ContactUs