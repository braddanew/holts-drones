"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Animated background image */}
      <motion.div
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 6, ease: "easeOut" }} // was 2 seconds
  className="absolute inset-0 -z-10"
>
  <Image
    src="/hero-drones.jpg"
    alt="Drone flying over modern building"
    fill
    className="object-cover opacity-70"
    priority
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
</motion.div>

<motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 2, duration: 1.2, ease: "easeOut" }} // smoother delay
  className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
>
  Elevate Your Perspective
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 3, duration: 1.2, ease: "easeOut" }} // text follows smoothly
  className="text-lg md:text-xl mb-6 max-w-xl drop-shadow-md"
>
  Professional aerial photography, inspections, and real estate visuals
  across Fresno County.
</motion.p>

<motion.a
  href="#contact"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 4, duration: 1, ease: "easeOut" }} // button comes last
  className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-100 transition-colors"
>
  Start Your Project
</motion.a>

    </section>
  );
}
