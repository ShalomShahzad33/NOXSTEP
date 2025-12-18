import React, {useRef} from 'react'
import AboutImg from '../assets/images/about-us.jpg';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

const About = () => {

    gsap.registerPlugin(ScrollTrigger);

    const aboutSection = useRef(null);
    const aboutPara = useRef(null);
    const aboutImageSection = useRef(null);
    const aboutImageOverlay = useRef(null);

    useGSAP(()=>{

        const aboutText = new SplitText(aboutPara.current, {
            type: "words"
        })

        const aboutImgTL = gsap.timeline({
            scrollTrigger: {
                trigger: aboutImageSection.current,
                start: "top 40%",
                end: "bottom top",
            }
        })

        aboutImgTL.from(aboutImageSection.current, {
            x: "-150%",
            duration: 1,
            ease: "power1.inOut",
        }).to('.overlay', {
            x: "100%",
            duration: 1,
            ease: "power1.inOut",
        })

        gsap.from(aboutText.words, {
            scrollTrigger: {
                trigger: aboutSection.current,
                start: "top 80%",
                end: "bottom bottom",
                scrub: true,
            },
            opacity: 0,
            rotate: "25",
            duration: 1,
            stagger: 0.2,
        })

    })

    return (
        <section className="about h-screen w-full md:p-4 text-center flex flex-col md:flex-row md:gap-4" ref={aboutSection}>
            <div className="Text w-full h-1/2 gap-4 md:w-1/2 md:h-full bg-white p-4 md:rounded-md flex flex-col justify-center items-center">
                <h1 className="text-3xl">About Us</h1>
                <p className="text-md md:text-lg about-para" ref={aboutPara}>At NOXSTEP, we believe movement is more than motion — it’s mindset. Built at the intersection of performance and design, our shoes are crafted for those who move with purpose, confidence, and style. From the streets to everyday life, every pair is engineered for comfort, durability, and bold expression. We don’t chase trends — we create essentials that keep up with you, step after step.</p>
            </div>
            <div className="img w-full h-1/2 md:w-1/2 md:h-full overflow-hidden md:rounded-md relative">
                <div className="about_image_section overflow-hidden" ref={aboutImageSection}>
                    <div className="overlay absolute bg-blue-400 top-0 bottom-0 left-0 right-0" ref={aboutImageOverlay}></div>
                    <img src={AboutImg} alt="about-img"/>
                </div>
            </div>
        </section>
    )
}
export default About
