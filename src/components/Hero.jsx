import HeroImage from "../assets/images/Hero-img.png";
import {useGSAP} from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import {useRef} from "react";

const Hero = () => {

    gsap.registerPlugin(SplitText);

    const heroTitle = useRef(null)
    const heroPara = useRef(null)
    const heroBTN = useRef(null)
    const heroImage = useRef(null)

    useGSAP(()=> {
        const heroTl = gsap.timeline();
        const Title = new SplitText(heroTitle.current, {
            type: "chars"
        })

        heroTl.from(Title.chars, {
            y: 60,
            duration: 0.5,
            stagger: 0.1,
        }).from(heroPara.current, {
            x: 60,
            opacity: 0,
            duration: 1,
        }).from(heroBTN.current, {
            scale: 0,
            duration: 0.5,
        }).from(heroImage.current, {
            opacity: 0,
            y: -40,
            duration: 0.5,
        })

        gsap.to(heroImage.current, {
            y: "+=20",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: heroTl.duration(),
        });

        return () => {
            Title.revert()
        }

    })

  return (
    <section className="w-full h-screen flex items-center justify-center md:flex-row flex-col gap-4 sm:gap-6 md:gap-8">
      <div className="text md:w-1/2 md:h-full flex flex-col items-center justify-center h-1/2 bg-white w-full gap-6 text-center text-white overflow-hidden">
          <h1 className="text-slate-900 font-bold text-6xl hero-title overflow-hidden" ref={heroTitle}>NOXSTEP</h1>
          <p className="text-gray-600 text-lg hero-paragraph overflow-hidden" ref={heroPara}>Your Go to Place for high quality cheap footwear</p>
          <button className="bg-slate-900 px-4 py-2 rounded-2xl hero-btn hover:cursor-pointer hover:bg-slate-800" ref={heroBTN}>Shop Now</button>
      </div>
      <div className="image md:w-1/2 flex items-center justify-center h-1/2">
          <img src={HeroImage} alt="hero-img" className="hero-img drop-shadow-blue-500 drop-shadow-2xl" ref={heroImage} />
      </div>
    </section>
  );
};

export default Hero;
