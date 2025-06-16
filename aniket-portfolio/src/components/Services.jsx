import { motion } from "framer-motion";
import { CodeIcon, LayoutIcon, ServerIcon } from "lucide-react";

const services = [
  {
    icon: <CodeIcon size={36} className="text-emerald-400 mb-4" />,
    title: "Full Stack Web Development",
    desc: "End-to-end MERN stack apps with clean UI, API integration, auth, and database support.",
  },
  {
    icon: <LayoutIcon size={36} className="text-emerald-400 mb-4" />,
    title: "Frontend UI/UX",
    desc: "Modern, responsive UIs with React and Tailwind CSS. Smooth animations and mobile-friendly design.",
  },
  {
    icon: <ServerIcon size={36} className="text-emerald-400 mb-4" />,
    title: "Backend API & Auth",
    desc: "Secure RESTful APIs, JWT-based auth, MongoDB integration, and scalable backend design.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-800 text-slate-100 py-20 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-12"
        >
          Services I Offer
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 p-8 rounded-xl border border-slate-700 shadow-xl text-center flex flex-col items-center justify-between h-full"
            >
              <div>{service.icon}</div>
              <h3 className="text-xl font-bold text-emerald-300 mb-3 mt-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
