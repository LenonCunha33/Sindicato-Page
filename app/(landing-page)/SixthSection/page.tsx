'use client'

import React from "react";
import Slider from "react-infinite-logo-slider";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/logo/logo-15.svg", alt: "Logo 15" },
  { src: "/images/logo/logo-13.svg", alt: "Logo 13" },
  { src: "/images/logo/logo-16.svg", alt: "Logo 16" },
  { src: "/images/logo/logo-17.svg", alt: "Logo 17" },
  { src: "/images/logo/logo-18.svg", alt: "Logo 18" },
  { src: "/images/logo/logo-19.svg", alt: "Logo 19" },
  { src: "/images/logo/logo-14.svg", alt: "Logo 14" },
  { src: "/images/logo/logo-13.svg", alt: "Logo 13" },
  { src: "/images/logo/logo-15.svg", alt: "Logo 15" },
  { src: "/images/logo/logo-13.svg", alt: "Logo 13" },
  { src: "/images/logo/logo-12.svg", alt: "Logo 12" },
  { src: "/images/logo/logo-14.svg", alt: "Logo 14" },
];

const SixthSection = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <Slider width="200px" duration={40} pauseOnHover blurBorders>
          {logos.map((logo, index) => (
            <Slider.Slide key={index}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                className="w-20 h-20 object-contain cursor-pointer transition-transform duration-300 hover:scale-110 hover:brightness-110 hover:drop-shadow-md hover:!text-red-400"
              />
            </Slider.Slide>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default SixthSection;
