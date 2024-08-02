import React from 'react'

function Footer() {
    return (


        <>




            <footer className="text-white text-center p-5" style={{ backgroundColor: '#0a0f43' }}>

                <div className="container p-5">

                    <section className="mb-4">

                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f fa-xl text-white"></i
                        ></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><i className="fa-brands fa-x-twitter fa-xl text-white"></i></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google fa-xl text-white"></i
                        ></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram fa-xl text-white"></i
                        ></a>


                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in fa-xl text-white"></i
                        ></a>


                    </section>




                    <section className="mb-5">


                        <p className='mb-4'>
                            Extechnology delivers tailored digital solutions that enhance user experiences and drive Your business growth.
                        </p>




                    </section>



                    <section className="mb-4 ">

                        <div className="row justify-content-center">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <i className="fa-solid fa-location-dot mb-2" style={{ fontSize: '2rem', color: "#ff8a1d" }}></i>

                                <p>KINFRA Advanced Technology Park
                                    Ramanattukara Kozhikode
                                </p>

                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <i className="fa-solid fa-phone-flip mb-2" style={{ fontSize: '2rem', color: '#ff8a1d' }}></i>

                                <a href="https://wa.me/+919656123466" className='nav-link'>+91 9656123466</a>

                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <i className="fa-solid fa-envelope mb-1" style={{ fontSize: '2rem', color: '#ff8a1d' }}></i>

                                <a href="mailto:info@extechnology.in" className='nav-link'>info@extechnology.in</a>

                            </div>

                        </div>

                    </section>

                </div>


                <div className='foot-logo m-auto'>

                    <img src="/EX-TECHNOLOGY-LOGO.-01-removebg-preview.png" className='img-fluid' alt="" />

                </div>


                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 All Rights Reserved By extechnology.in
                </div>

            </footer>

        </>



    )
}

export default Footer