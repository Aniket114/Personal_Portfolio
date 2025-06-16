import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-slate-100 py-20 px-6 sm:px-8 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-6"
        >
          Contact Me
        </motion.h2>

        <p className="text-slate-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
          Let's work together! You can contact me directly via email or submit the form below.
        </p>

        <form
          action="https://formspree.io/f/xgvyyryj"
          method="POST"
          className="bg-slate-800 rounded-lg p-6 md:p-8 text-left shadow-md space-y-4 max-w-xl mx-auto"
        >
          {/* Honeypot spam protection */}
          <input type="text" name="_gotcha" className="hidden" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-slate-700 text-white rounded outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-slate-700 text-white rounded outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 bg-slate-700 text-white rounded outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full w-full transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-slate-400 space-y-2 text-sm sm:text-base">
          <p>
            Email:{" "}
            <a href="mailto:anibhabh@gmail.com" className="text-emerald-400 hover:underline">
              anibhabh@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/Aniket114" className="text-emerald-400 hover:underline">
              github.com/Aniket114
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/aniket-bhambhoriya"
              className="text-emerald-400 hover:underline"
            >
              linkedin.com/in/aniket-bhambhoriya
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
