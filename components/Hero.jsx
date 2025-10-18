"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Animated background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/final5.jpg"
          alt="Holt's Drones - Professional aerial services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      </motion.div>

      {/* Main Content */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.2, ease: "easeOut" }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg"
      >
        Holt's Drones
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1.2, ease: "easeOut" }}
        className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl drop-shadow-md px-4"
      >
        Professional aerial photography, inspections, and real estate visuals
        across Fresno County.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 4, duration: 1, ease: "easeOut" }}
        className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-100 transition-colors text-lg drop-shadow-lg hover:scale-105 transform transition-transform"
      >
        Start Your Project
      </motion.a>

    </section>
  );
}
