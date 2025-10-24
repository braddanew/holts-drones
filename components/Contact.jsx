"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("");

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
          <button type="submit" className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition">
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
          <p className="text-sm text-gray-600">View our aerial portfolio above</p>
        </div>


        <footer className="mt-12 text-sm text-gray-500">
          © 2025 Holt's Drones | FAA Certified Aerial Services | Central Valley, CA
        </footer>
      </motion.div>
    </section>
  );
}




