import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-slate-900 shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-emerald-400"
        >
          Aniket Bhambhoriya
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-slate-300 font-medium text-base">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-emerald-400 transition duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-emerald-400 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu List */}
      {isOpen && (
        <ul className="md:hidden bg-slate-800 px-6 pb-4 pt-2 space-y-2 text-slate-300 text-center text-base font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block hover:text-emerald-400 transition"
                onClick={() => setIsOpen(false)} // Close on click
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
