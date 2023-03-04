import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import logo from "../Images/Home/logo.png"
import a from "../Images/Home/net.mp4"
import Typed from 'react-typed';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section className='Home' >



            <video src={a} autoPlay loop muted />





            <div className="constent">
                <Navbar />


                <div className='header-top'>

                    <span className='talk' data-aos="slide-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" transition-duration="4000ms">
                        One Stop <br /> Solutions For All <br /> Your Cyber <br /> Needs.

                        {/* <Typed
                            strings={["One Stop <br /> Solutions For All <br /> Your Cyber <br /> Needs."]}
                            typeSpeed={140} backSpeed={50} loop
                        /> */}
                    </span>







                    <span className='logo' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000" transition-duration="4000ms">
                        <img src={logo} alt="" id='imgi' />
                    </span>

                </div>
            </div>




            <a id='btn' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get Started    </a>


        </section>



    )
}

export default Home
