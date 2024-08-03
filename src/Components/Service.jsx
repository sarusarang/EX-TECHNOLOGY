import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

function Service() {



    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);


    // Modal 1
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Modal 2
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    // Modal 3
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return (



        <>

            <section className='container-fluid p-4 mt-5 mb-5 service'>

                <h3 className='text-center' data-aos="fade-up" data-aos-duration="400">OUR SERVICES</h3>

                <div className='row pt-5 justify-content-center'>


                    <div className='col-md-3 inner-box shadow border hover' data-aos="fade-right" data-aos-duration="400" onClick={handleShow}>

                        <i className="fa-solid fa-laptop-code mb-3 fa-bounce"></i>

                        <h5>WEB / E-COMMERCE PLATFORMS</h5>

                    </div>



                    <div className='col-md-3 inner-box shadow border hover' data-aos="fade-up" data-aos-duration="400" onClick={handleShow1}>

                        <i class="fa-solid fa-mobile-screen mb-3 fa-bounce"></i>

                        <h5>MOBILE APPLICATIONS</h5>

                    </div>



                    <div className='col-md-3 inner-box shadow border hover' data-aos="fade-left" data-aos-duration="400" onClick={handleShow2}>

                        <i class="fa-solid fa-robot mb-3 fa-bounce"></i>

                        <h5>WHATSAPP/CHATBOTS WEB</h5>

                    </div>


                </div>



                {/* Modal1 */}
                <Modal

                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    fullscreen={true}
                >





                    <Modal.Body>


                        <div className='container'>


                            <section>

                                <div className='row'>

                                    <div className='col-md-6 pt-5 modal-head' style={{ marginTop: '8rem' }}>

                                        <h3>WEB / E-COMMERCE PLATFORMS</h3>

                                        <p>We are pioneers in the development and delivery of high-quality standard websites. Our team crafts visually appealing, user-friendly sites tailored to meet your business needs. From design to deployment, we ensure a seamless process, providing robust, responsive websites that enhance your online presence and drive engagement and growth. <br />
                                            Extechnology excels in developing and delivering e-commerce websites that drive sales and enhance customer experiences. We create secure, scalable, and user-friendly platforms tailored to your business needs. From design to launch, our solutions ensure seamless transactions, intuitive navigation, and robust performance, empowering your online store to thrive.
                                        </p>


                                    </div>


                                    <div className='col-md-6'>

                                        <img src="https://img.freepik.com/free-vector/website-interface-development-planning-develops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development-concept-illustration_335657-1762.jpg" className='img-fluid' alt="" />

                                    </div>

                                </div>

                            </section>

                        </div>

                    </Modal.Body>


                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>



                </Modal>



                {/* Modal2 */}
                <Modal

                    show={show1}
                    onHide={handleClose1}
                    backdrop="static"
                    keyboard={false}
                    fullscreen={true}

                >

                    <Modal.Body>

                        <div className='container'>


                            <section>

                                <div className='row'>

                                    <div className='col-md-6 pt-5 modal-head' style={{ marginTop: '8rem' }}>

                                        <h3>MOBILE APPLICATIONS</h3>

                                        <p>Creating innovative solutions suitable to meet diverse client needs. They excel in developing user-centric apps across Android, iOS, and other platforms, leveraging advanced technologies to deliver effective performance and intuitive user interfaces.
                                            Their development process emphasizes thorough market research and user feedback integration, ensuring each app is not only functional but also aligns with user expectations. extechnologies is committed to customer satisfaction, prioritizing transparency and communication throughout the development lifecycle. We maintain a strong focus on quality assurance, conducting rigorous testing to guarantee reliability and usability. Their dedication to excellence ensures clients receive powerful, scalable mobile applications that drive engagement and achieve business objectives effectively.</p>

                                    </div>


                                    <div className='col-md-6'>

                                        <img src="https://img.freepik.com/premium-vector/mobile-app-development-illustration-concept-with-characters-smartphone-program-coding_269730-90.jpg" className='img-fluid' alt="" />

                                    </div>

                                </div>

                            </section>

                        </div>

                    </Modal.Body>



                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>

                    </Modal.Footer>



                </Modal>





                {/* Modal3 */}
                <Modal

                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                    fullscreen={true}

                >

                    <Modal.Body>

                        <div className='container'>


                            <section>

                                <div className='row'>

                                    <div className='col-md-6 pt-5 modal-head' style={{ marginTop: '8rem' }}>

                                        <h3>WHATSAPP / CHATBOTS WEB</h3>


                                        <p>Extechnology has a very finest talent in WhatsApp/ Web Chatbot development, offering sophisticated solutions perfect to enhance user engagement and streamline customer interactions. leverage advanced AI and machine learning capabilities to create intelligent chatbots that deliver personalized experiences and automate routine tasks efficiently. extechnology approach emphasizes user-centric design and seamless integration with existing systems, ensuring smooth deployment and optimal performance.
                                             We prioritize client satisfaction by providing scalable, reliable chatbot solutions that meet specific business needs and contribute to increased operational efficiency. With a commitment to innovation and quality, extechnologies stand out for delivering transformative digital experiences through their chatbot development services.</p>


                                    </div>


                                    <div className='col-md-6 mt-5 pt-5'>

                                        <img src="https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg" className='img-fluid' alt="" />

                                    </div>

                                </div>

                            </section>

                        </div>

                    </Modal.Body>



                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>

                    </Modal.Footer>



                </Modal>












            </section>



        </>



    )
}

export default Service