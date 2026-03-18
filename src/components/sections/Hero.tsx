"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { useScrollParallax } from "@/hooks/useGSAP";

const wordRevealContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 40, rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const parallaxRef = useScrollParallax(".parallax-blob", -30);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const headingWords = ["להחזיר", "את"];
  const highlightWord = "השקט";
  const lastWord = "הביתה";

  return (
    <section
      ref={parallaxRef}
      className="animate-gradient relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-cream via-mint/10 to-rose/10"
    >
      {/* Decorative parallax elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="parallax-blob absolute top-20 left-10 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
        <div className="parallax-blob absolute bottom-20 right-10 h-96 w-96 rounded-full bg-rose/15 blur-3xl" />
        <div className="parallax-blob absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/10 blur-3xl" />
      </div>

      {/* Floating botanical SVG elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="animate-float absolute top-32 right-20 h-24 w-24 text-mint/20"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 C60 30, 80 30, 70 50 C60 70, 50 90, 50 90 C50 90, 40 70, 30 50 C20 30, 40 30, 50 10Z" />
        </svg>
        <svg
          className="animate-float-reverse absolute bottom-40 left-16 h-20 w-20 text-rose/15"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="35" />
          <circle cx="25" cy="30" r="18" />
          <circle cx="75" cy="30" r="18" />
        </svg>
        <svg
          className="animate-float-slow absolute top-1/3 left-1/4 h-16 w-16 text-mint/15"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 5 C55 25, 75 25, 65 45 C55 65, 50 95, 50 95 C50 95, 45 65, 35 45 C25 25, 45 25, 50 5Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-mint/30 px-4 py-2 text-sm font-medium text-warm-brown backdrop-blur-sm">
                <Image
                  src="/images/logo.png"
                  alt="קשב הלב"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                הילה בן גרא - מטפלת CBT
              </div>
            </motion.div>

            <motion.h1
              variants={wordRevealContainer}
              initial="hidden"
              animate="visible"
              className="font-display mb-6 text-4xl font-bold leading-tight text-warm-brown sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ perspective: "600px" }}
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordReveal}
                  className="ml-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                variants={wordReveal}
                className="relative ml-3 inline-block"
              >
                <span className="relative z-10">{highlightWord}</span>
                <motion.span
                  className="absolute bottom-2 right-0 left-0 z-0 h-3 bg-mint/40 sm:h-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  style={{ originX: 1 }}
                />
              </motion.span>
              <br />
              <motion.span
                variants={wordReveal}
                className="inline-block"
              >
                {lastWord}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-warm-brown/80 lg:mx-0"
            >
              טיפול CBT ממוקד תוצאות, עם שילוב ייחודי של ניסיון רב שנים כיועצת
              חינוכית בחטיבות ביניים וארגז כלים מעשי של מטפלת קוגניטיבית-התנהגותית.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <MagneticButton
                onClick={() => scrollTo("#youth")}
                className="shadow-elevated hover:shadow-elevated-hover w-full cursor-pointer rounded-full bg-mint px-8 py-4 text-base font-semibold text-warm-brown transition-all hover:bg-mint-dark sm:w-auto"
              >
                עבור הילד/ה שלי
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollTo("#adults")}
                className="w-full cursor-pointer rounded-full border-2 border-rose px-8 py-4 text-base font-semibold text-warm-brown transition-all hover:bg-rose/20 sm:w-auto"
              >
                עבורי (טיפול אישי/זוגי)
              </MagneticButton>
            </motion.div>
          </div>

          {/* Photo with animated conic gradient frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Animated gradient glow behind photo */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-mint/30 to-rose/20 blur-2xl" />

              {/* Rotating conic gradient border */}
              <div className="relative h-80 w-80 rounded-full p-1 sm:h-96 sm:w-96">
                <div
                  className="animate-conic-slow absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #B2D8C1, #E6A8A8, #FDF8F0, #8cbf9e, #d48a8a, #B2D8C1)",
                    padding: "3px",
                  }}
                />
                <div className="absolute inset-[3px] overflow-hidden rounded-full border-2 border-white bg-white">
                  <Image
                    src="/images/hila.png"
                    alt="הילה בן גרא - מטפלת CBT"
                    fill
                    className="object-cover object-[35%_20%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex justify-center pb-8"
        >
          <motion.button
            onClick={() => scrollTo("#authority")}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="rounded-full bg-white/60 p-3 text-warm-brown/50 shadow-md backdrop-blur-sm transition-colors hover:text-warm-brown"
            aria-label="גלול למטה"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
