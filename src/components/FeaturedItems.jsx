import React from 'react'
import products from "../constants/products.js";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FeaturedItems = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.from('.card', {
            scrollTrigger: {
                trigger: '.items',
                start: "top 80%",
                end: "bottom top",
            },
            opacity: 0,
            y: 20,
            ease: "bounce",
            duration: 1,
            stagger: 0.5,
        })
    });

    return (
        <section className="mt-5 text-center p-4">
            <h1 className="text-white mb-6 text-3xl">Featured Items</h1>
            <div className="items grid md:grid-cols-4 gap-6 items-top">
                {products.map((product) => (
                    <div key={product.id} className="card bg-white flex md:flex-col justify-center items-center rounded-2xl md:rounded-none overflow-hidden">
                        <div className="w-full h-56 md:h-64 grow">
                            <img src={product.img_path} alt={product.alt_text} className="w-full h-full block object-cover object-center" />
                        </div>
                        <div className="Texts w-1/2 flex flex-col justify-center items-center rounded-2xl gap-2 p-1">
                            <h2 className="text-blue-950 text-2xl">{product.name}</h2>
                            <div className="flex gap-3 items-center md:gap-10">
                                <span className="text-3xl">{product.price}</span>
                                <span className="text-sm text-gray-600 md:text-lg">{product.category}</span>
                            </div>
                            <button className="bg-slate-900 text-white px-2 py-1 rounded-lg hover:bg-slate-800 hover:cursor-pointer mt-2 mb-2 md:px-4 md:py-2">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default FeaturedItems
