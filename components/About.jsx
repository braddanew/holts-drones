"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const services = [
    {
      icon: "🏠",
      title: "Real Estate Photography",
      description: "Stunning aerial shots that showcase properties from unique perspectives, helping realtors close deals faster.",
      image: "/site-images/realestateinspection.jpg"
    },
    {
      icon: "🏗️",
      title: "Construction Progress",
      description: "Regular aerial monitoring of construction sites to track progress and identify potential issues early.",
      image: "/site-images/constructionsite2.jpg"
    },
    {
      icon: "🌾",
      title: "Agricultural Mapping",
      description: "Precision crop monitoring, field analysis, and yield assessment using advanced drone technology.",
      image: "/site-images/agriculture field (1).jpg"
    },
    {
      icon: "🔍",
      title: "Roof Inspections",
      description: "Safe, efficient roof surveys for insurance claims, maintenance planning, and damage assessment.",
      image: "/site-images/Roof Inspections (2).jpg"
    },
    {
      icon: "💒",
      title: "Event Coverage",
      description: "Capture special moments from above - weddings, parties, and celebrations with unique aerial perspectives.",
      image: "/site-images/wedding party (2).jpg"
    },
    {
      icon: "📊",
      title: "General Aerial Imaging",
      description: "High-precision aerial photography and videography for any property or location overview needs.",
      image: "/site-images/Drone Over Suburban Neighborhood.png"
    }
  ];

  const certifications = [
    { title: "FAA Part 107 Certified", description: "Licensed commercial drone pilot" },
    { title: "Insured & Bonded", description: "Full liability coverage for all operations" },
    { title: "5+ Years Experience", description: "Extensive aerial photography expertise" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-navy mb-8 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
              Holt's Drones?
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're Fresno's premier FAA-certified aerial services provider, delivering 
            professional drone photography and videography with unmatched precision and reliability.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500" />
                
                {/* Subtle overlay pattern */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent" />
                </div>
              </div>
              
              {/* Enhanced Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end text-white">
                <motion.div 
                  className="text-5xl mb-4 drop-shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-black mb-4 drop-shadow-lg">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed text-base font-medium drop-shadow-md">{service.description}</p>
                
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
              
              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: "linear-gradient(145deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
                transform: "translateZ(-1px)"
              }} />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Certifications */}
        <motion.div
          className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent transform -skew-y-1" />
          </div>
          
          <div className="relative z-10 text-center mb-12">
            <motion.h3 
              className="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Professional{" "}
              <span className="bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h3>
            <motion.p 
              className="text-gray-200 text-xl md:text-2xl font-medium max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Trusted by businesses and individuals throughout Central California
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-orange-500/20 to-teal-500/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/20 group-hover:shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl font-bold text-orange-400">✓</span>
                </motion.div>
                <h4 className="text-2xl font-black mb-3 drop-shadow-lg">{cert.title}</h4>
                <p className="text-gray-200 text-lg font-medium">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to elevate your project with professional aerial services?
          </motion.p>
          <motion.a
            href="#contact"
            className="group relative inline-block bg-gradient-to-r from-orange-500 to-teal-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}



