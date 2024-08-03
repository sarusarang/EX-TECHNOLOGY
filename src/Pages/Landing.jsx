import React from 'react'
import Hero from '../Components/Hero'
import AboutUs from '../Components/AboutUs'
import Misson from '../Components/Misson'
import ContactUs from '../Components/ContactUs'
import Service from '../Components/Service'


function Landing() {

  return (

    <>


      <section>

       


        {/* hero */}
        <section id='home' className='pt-5'>


          <Hero />


        </section>


        <section id='about' className='w-100 p-5 mt-5'>

          <AboutUs />

        </section>

        <section id='vision' className='w-100 p-5 mt-5' style={{ backgroundColor: '#e4f3ff' }}>

          <Misson />

        </section>


        <section id='service' className='w-100 p-3 mt-5'>

          <Service />

        </section>

        <section id='contact' className='w-100 p-3 mt-5'>

          <ContactUs />

        </section>




      </section>






    </>



  )
}

export default Landing