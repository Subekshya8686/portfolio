import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    // Changed min-h-[80vh] to w-full, and reduced vertical padding from py-20 to pt-12 pb-6
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 flex-col"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center"
        >
          <span className="relative flex h-3 w-3 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-emerald-400 tracking-wide uppercase">
            Available for new projects
          </span>
        </motion.div>

        {/* Main Title Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-zinc-100"
        >
          Building modern <br />
          {/* Re-added text-transparent to make sure the gradient renders properly */}
          <span className="bg-linear-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text inline-block">
            web & mobile apps.
          </span>
        </motion.h1>

        {/* Subtitle / Bio Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal mx-auto text-center"
        >
          Frontend & Mobile Developer focused on React, React Native,
          TypeScript, and crafting refined digital experiences.
        </motion.p>
        {/* Call to Actions (CTAs) */}
        <motion.div
          variants={itemVariants}
          className="pt-2 flex flex-wrap gap-4 items-center justify-center"
        >
          <Link
            to="/experience"
            className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-medium rounded-lg text-sm transition-all duration-200 shadow-lg shadow-zinc-950/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            View My Work
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 font-medium rounded-lg text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
