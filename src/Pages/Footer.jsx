import React from 'react'

function Footer() {
    return (


        <>




            <footer className="text-white text-center p-3" style={{ backgroundColor: '#0a0f43' }}>

                <div className="container p-5">

                    <section className="mb-4">

                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="https://www.facebook.com/exmedia/" target='_blank' role="button"
                        ><i className="fab fa-facebook-f fa-xl text-white"></i
                        ></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="https://x.com/exmedia_" target='_blank'role="button"
                        ><i className="fa-brands fa-x-twitter fa-xl text-white"></i></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="https://www.instagram.com/exmedia_1/" target='_blank' role="button"
                        ><i className="fab fa-instagram fa-xl text-white"></i
                        ></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="https://www.linkedin.com/company/exmedia1/posts/?feedView=all" target='_blank' role="button"
                        ><i className="fab fa-linkedin-in fa-xl text-white"></i
                        ></a>



                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" target='_blank' role="button"
                        ><i class="fa-brands fa-pinterest fa-xl text-white"></i></a>



                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="https://www.youtube.com/@exmedia-" target='_blank' role="button"
                        ><i class="fa-brands fa-youtube fa-xl text-white"></i></a>





                    </section>




                    <section className="mb-5">


                        <p className='mb-4'>
                            Extechnology delivers tailored digital solutions that enhance user experiences and drive Your business growth.
                        </p>




                    </section>



                    <section className="mb-4 ">

                        <div className="row justify-content-center">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <i className="fa-solid fa-location-dot mb-2" style={{ fontSize: '2rem', color: "#fff" }}></i>

                                <p>KINFRA Advanced Technology Park
                                    Ramanattukara Kozhikode
                                </p>

                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <i className="fa-solid fa-phone-flip mb-2" style={{ fontSize: '2rem', color: '#fff' }}></i>

                                <a href="https://wa.me/+919656123466" target='_blank' className='nav-link'>+91 9656123466</a>

                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <i className="fa-solid fa-envelope mb-1" style={{ fontSize: '2rem', color: '#fff' }}></i>

                                <a href="mailto:info@extechnology.in" target='_blank' className='nav-link'>info@extechnology.in</a>

                            </div>

                        </div>

                    </section>

                </div>


                <div className='foot-logo m-auto'>

                    <img src="/EX-TECHNOLOGY-LOGO.-01-removebg-preview.png" className='img-fluid' alt="" />

                </div>


                <div className="text-center p-3" >
                    © 2024 All Rights Reserved By extechnology.in
                </div>

            </footer>

        </>



    )
}

export default Footer