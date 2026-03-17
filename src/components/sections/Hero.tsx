"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-cream via-cream to-mint/20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-rose/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/10 blur-3xl" />
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-mint/30 px-4 py-2 text-sm font-medium text-warm-brown">
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-4xl font-extrabold leading-tight text-warm-brown sm:text-5xl lg:text-6xl"
            >
              להחזיר את{" "}
              <span className="relative">
                <span className="relative z-10">השקט</span>
                <span className="absolute bottom-2 right-0 left-0 z-0 h-3 bg-mint/40" />
              </span>{" "}
              הביתה
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-warm-brown/80 lg:mx-0"
            >
              טיפול CBT ממוקד תוצאות, עם שילוב ייחודי של ניסיון רב שנים כיועצת
              חינוכית בחטיבות ביניים וארגז כלים מעשי של מטפלת קוגניטיבית-התנהגותית.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollTo("#youth")}
                size="lg"
                className="w-full cursor-pointer rounded-full bg-mint px-8 py-6 text-base font-semibold text-warm-brown shadow-lg transition-all hover:bg-mint-dark hover:shadow-xl sm:w-auto"
              >
                עבור הילד/ה שלי
              </Button>
              <Button
                onClick={() => scrollTo("#adults")}
                size="lg"
                variant="outline"
                className="w-full cursor-pointer rounded-full border-2 border-rose px-8 py-6 text-base font-semibold text-warm-brown transition-all hover:bg-rose/20 sm:w-auto"
              >
                עבורי (טיפול אישי/זוגי)
              </Button>
            </motion.div>
          </div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-mint/40 to-rose/30 blur-2xl" />
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white shadow-2xl sm:h-96 sm:w-96">
                <Image
                  src="/images/hila.png"
                  alt="הילה בן גרא - מטפלת CBT"
                  fill
                  className="object-cover object-[35%_20%]"
                  priority
                />
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
            className="rounded-full bg-white/60 p-3 text-warm-brown/50 shadow-md transition-colors hover:text-warm-brown"
            aria-label="גלול למטה"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
