import React from "react";
import HeroImage from "../assets/images/Hero-img.png";
import {useGSAP} from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

const Hero = () => {

    gsap.registerPlugin(SplitText);

    useGSAP(()=> {
        const heroTl = gsap.timeline();
        const Title = new SplitText(".hero-title", {
            type: "chars"
        })

        heroTl.from(Title.chars, {
            y: 60,
            duration: 0.5,
            stagger: 0.1,
        }).from('.hero-paragraph', {
            x: 60,
            opacity: 0,
            duration: 1,
        }).from('.hero-btn', {
            scale: 0,
            duration: 0.5,
        }).from('.hero-img', {
            opacity: 0,
            y: -40,
            duration: 0.5,
        })

        gsap.to(".hero-img", {
            y: "+=20",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: heroTl.duration(),
        });
    })

  return (
    <section className="w-full h-screen flex items-center justify-center md:flex-row flex-col gap-4 sm:gap-6 md:gap-8">
      <div className="text md:w-1/2 md:h-full flex flex-col items-center justify-center h-1/2 bg-white w-full gap-6 text-center text-white overflow-hidden">
          <h1 className="text-slate-900 font-bold text-6xl hero-title overflow-hidden">NOXSTEP</h1>
          <p className="text-gray-600 text-lg hero-paragraph overflow-hidden">Your Go to Place for high quality cheap footwear</p>
          <button className="bg-slate-900 px-4 py-2 rounded-2xl hero-btn hover:cursor-pointer hover:bg-slate-800">Shop Now</button>
      </div>
      <div className="image md:w-1/2 flex items-center justify-center h-1/2">
          <img src={HeroImage} alt="hero-img" className="hero-img drop-shadow-blue-500 drop-shadow-2xl" />
      </div>
    </section>
  );
};

export default Hero;
