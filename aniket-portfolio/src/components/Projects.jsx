import { motion } from "framer-motion";

const projects = [
  {
    title: "MedTrack",
    desc: "A medicine tracker app with reminders, medicine info, safety tips, and calendar view.",
    tech: "React, Node.js, Express, MongoDB, Tailwind",
    github: "https://github.com/Aniket114/MedTrack",
    live: "https://med-track-nine.vercel.app",
  },
  {
    title: "Blog Website",
    desc: "A full-stack blog platform with CRUD, authentication, and JWT.",
    tech: "React, Node.js, Express, MongoDB, Tailwind",
    github: "https://github.com/Aniket114/BlogWebsite",
    live: "https://blog-website-flax-eta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-slate-100 py-20 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-emerald-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-slate-300 text-base leading-relaxed">
                  {project.desc}
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  <span className="font-semibold text-slate-300">Tech:</span>{" "}
                  {project.tech}
                </p>
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm hover:bg-emerald-600 transition"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-slate-500 text-slate-300 rounded-full text-sm hover:bg-slate-800 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
