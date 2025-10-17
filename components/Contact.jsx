"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Configure EmailJS with actual service credentials
    // Replace these placeholders with your EmailJS service details
    emailjs
      .sendForm(
        "service_holtsdrones", // Replace with your EmailJS service ID
        "template_contact", // Replace with your EmailJS template ID
        form.current,
        "your_public_key_here" // Replace with your EmailJS public key
      )
      .then(() => {
        // Send confirmation email to client
        emailjs.sendForm(
          "service_holtsdrones", // Replace with your EmailJS service ID
          "template_confirmation", // Replace with your confirmation template ID
          form.current,
          "your_public_key_here" // Replace with your EmailJS public key
        );
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="py-20 bg-lightgray text-center relative">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-lg">
          Have a project in mind or need aerial footage? Let’s connect!
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-4 text-left max-w-md mx-auto">
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            name="reply_to"
            type="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button type="submit" className="bg-accent text-white py-3 rounded-md hover:bg-navy transition">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600 font-semibold">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 font-semibold">❌ Failed to send. Try again.</p>
        )}

        <div className="mt-10 flex flex-col items-center">
          <a href="#portfolio" className="block">
            <img src="/qr.svg" alt="QR Code" className="w-28 mb-3" />
          </a>
          <p className="text-sm text-gray-600">Scan to view aerial portfolio</p>
        </div>

        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowModal(true)}
            className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition"
          >
            Book Consultation
          </motion.button>
        </div>

        <footer className="mt-12 text-sm text-gray-500">
          © 2025 Holt’s Drones | FAA Certified Aerial Services | Fresno, CA
        </footer>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl p-8 w-[90%] max-w-md text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Book a Consultation</h3>
              <p className="mb-6 text-gray-600">
                Schedule a free consultation to discuss your aerial project.
              </p>
              <a
                href="https://calendly.com/yourusername/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-5 py-3 rounded-md font-semibold hover:bg-navy transition"
              >
                Open Booking Calendar
              </a>
              <div className="mt-6">
                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-navy text-sm">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}




