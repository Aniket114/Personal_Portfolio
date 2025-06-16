import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 pt-24 px-6 sm:px-10 md:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-10 md:gap-16">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 leading-tight"
          >
            Hi, I'm Aniket Bhambhoriya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-md mx-auto md:mx-0"
          >
            MERN Stack Developer | I build clean & modern full-stack apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1roLDNFBFwDMtqAgt2mEyRLkwZMYibMJj/view?usp=sharing"
              target="_blank"
              className="border border-emerald-500 text-emerald-400 px-6 py-2 rounded-full hover:bg-slate-800 transition"
            >
              View Resume
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Aniket"
            className="w-64 sm:w-72 md:w-80 h-auto object-cover rounded-full border-4 border-emerald-500 shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
