"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Aerial Portfolio</h2>
        <p className="text-lg text-gray-600">
          Explore a sample of our precision aerial imaging projects.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={`${p.title}-${i}`}
            className="relative group overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Image
              src={p.img}
              alt={p.title}
              width={400}
              height={256}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xl font-semibold transition">
              {p.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}







