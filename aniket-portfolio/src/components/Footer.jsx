export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 py-6 px-4 sm:px-8 md:px-16 text-center text-sm">
      <div className="max-w-7xl mx-auto">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-emerald-400 font-medium hover:underline cursor-pointer">
            Aniket Bhambhoriya
          </span>{" "}
          · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
