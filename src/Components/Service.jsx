import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Service() {



    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Tittle, SetTittle] = useState("")

    const [Dis, SetDis] = useState("")


    const handleChange = (data)=>{


        if(data == "WEB"){

            handleShow()

            SetDis("We are pioneers in the development and delivery of high-quality standard websites. Our team crafts visually appealing, user-friendly sites tailored to meet your business needs. From design to deployment, we ensure a seamless process, providing robust, responsive websites that enhance your online presence and drive engagement and growth.We are pioneers in the development and delivery of high-quality standard websites. Our team crafts visually appealing, user-friendly sites tailored to meet your business needs. From design to deployment, we ensure a seamless process, providing robust, responsive websites that enhance your online presence and drive engagement and growth.")

            SetTittle("WEB & E-COMMERCE PLATFORM")

        }
        if(data == "MOB"){

            handleShow()
            SetTittle("MOBILE APPLICATIONS")
            SetDis("We are pioneers in the development and delivery of high-quality standard websites. Our team crafts visually appealing, user-friendly sites tailored to meet your business needs. From design to deployment, we ensure a seamless process, providing robust, responsive websites that enhance your online presence and drive engagement and growth.")

        }
        if(data == "BOT"){

            handleShow()
            SetTittle("WHATS/CHATBOTS WEB")
            SetDis("Extechnology has a very finest talent in WhatsApp/ Web Chatbot development, offering sophisticated solutions perfect to enhance user engagement and streamline customer interactions. leverage advanced AI and machine learning capabilities to create intelligent chatbots that deliver personalized experiences and automate routine tasks efficiently. extechnology approach emphasizes user-centric design and seamless integration with existing systems, ensuring smooth deployment and optimal performance. We prioritize client satisfaction by providing scalable, reliable chatbot solutions that meet specific business needs and contribute to increased operational efficiency. With a commitment to innovation and quality, extechnologies stand out for delivering transformative digital experiences through their chatbot development services.")

        }


    }



    return (



        <>

            <section className='container-fluid p-4 mt-5 mb-5 service'>

                <h3 className='text-center' data-aos="fade-up" data-aos-duration="400">OUR SERVICES</h3>

                <div className='row pt-5 justify-content-center'>


                    <div className='col-md-3 inner-box shadow border hover' data-aos="fade-right" data-aos-duration="400" onClick={()=>{handleChange("WEB")}}>

                        <i className="fa-solid fa-laptop-code mb-3 fa-bounce"></i>

                        <h5>WEB/E-COMMERCE PLATFORMS</h5>

                    </div>



                    <div className='col-md-3 inner-box shadow border hover' data-aos="fade-up" data-aos-duration="400" onClick={()=>{handleChange("MOB")}}>

                        <i class="fa-solid fa-mobile-screen mb-3 fa-bounce"></i>

                        <h5>MOBILE APPLICATIONS</h5>

                    </div>



                    <div className='col-md-3 inner-box shadow border hover' data-aos="fade-left" data-aos-duration="400" onClick={()=>{handleChange("BOT")}}>

                        <i class="fa-solid fa-robot mb-3 fa-bounce"></i>

                        <h5>WHATSAPP/CHATBOTS WEB</h5>

                    </div>


                </div>



                





                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    animation={true}
                    size='xl'
                   
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontWeight:'700'}}>{Tittle}</Modal.Title>
                    </Modal.Header>


                    <Modal.Body className='p-5' style={{fontStyle:'italic' , fontWeight:'500'}}>
                        {Dis}
                    </Modal.Body>

                </Modal>



            </section>



        </>



    )
}

export default Service