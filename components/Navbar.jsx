"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-40 transition-colors ${scrolled ? "bg-white/90 backdrop-blur shadow" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-bold text-navy">Holt’s Drones</a>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#portfolio" className="hover:text-accent">Portfolio</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}




