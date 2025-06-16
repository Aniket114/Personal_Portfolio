import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "Core Java",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-800 text-slate-100 py-20 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-700 text-emerald-300 px-4 py-3 rounded-lg shadow-md text-base sm:text-lg font-semibold text-center cursor-default hover:shadow-lg transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
