import React, { useEffect } from 'react'
import "./About.css"
import apic from "../Images/About/apic.png"
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className='about_us' >
                <span id='as' data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000" transition-duration="4000ms">About Us</span>
                <div className="about"  >



                    <span className="intro" data-aos="slide-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" transition-duration="4000ms" >
                        <p>CySecOps aims to empower business growth for SaaS and E-commerce startups like you, through cutting-edge cybersecurity solutions. Using advanced AI-powered technologies and industry best practices we safeguard your digital assets against today's deadliest cyber threats. Our team of cybersecurity experts are trained to provide comprehensive risk management, vulnerability testing, cybersecurity compliance, awareness training and managed web, cloud and application security services. We work as your partner to ensure that your business stays safe online.</p>
                        <br />
                        <div class="wrap">
                            <button class="button">Services</button>
                        </div>

                    </span>

                    <span className="pics" data-aos="slide-left" data-aos-duration="2000" >
                        <img src={apic} alt="" />
                    </span>


                </div>
            </div>
        </>
    )
}

export default About
