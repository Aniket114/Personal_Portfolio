import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-slate-100 py-20 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
        >
          I'm <span className="text-emerald-400 font-medium">Aniket Bhambhoriya</span>, a passionate MERN Stack Developer
          with hands-on experience building full-stack web applications. I enjoy crafting
          responsive, scalable, and user-friendly products using technologies like React,
          Node.js, Express, and MongoDB.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
        >
          I love solving real-world problems with clean code and modern UI/UX. Currently open to freelance
          and full-time developer opportunities where I can grow and contribute meaningfully to impactful products.
        </motion.p>
      </div>
    </section>
  );
}
