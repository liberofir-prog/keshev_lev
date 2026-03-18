"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, HeartHandshake, Target, Battery } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { useScrollParallax } from "@/hooks/useGSAP";

const topics = [
  {
    icon: Battery,
    title: "שחיקה בקריירה",
    description: "זיהוי דפוסי שחיקה, הצבת גבולות בריאים, וחזרה לתפקוד מלא",
  },
  {
    icon: Brain,
    title: "ניהול עומס מנטלי",
    description:
      "כלים קוגניטיביים להפחתת מחשבות טורדניות ולחץ יומיומי",
  },
  {
    icon: HeartHandshake,
    title: "שיפור מערכות יחסים",
    description:
      "תקשורת אפקטיבית בזוגיות ובמשפחה - להבין ולהיות מובן/ת",
  },
  {
    icon: Target,
    title: "מיקוד ובהירות",
    description:
      "קבלת החלטות מושכלת, סדר עדיפויות, ומעבר מהרגשה של תקיעות לפעולה",
  },
];

function TopicCard({ topic, index }: { topic: (typeof topics)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      className="rounded-2xl border border-rose/20 bg-white/80 p-5 transition-all duration-300 hover:border-rose/40 hover:-translate-y-1 shadow-elevated hover:shadow-elevated-hover"
    >
      <topic.icon className="mb-3 h-8 w-8 text-rose" />
      <h3 className="mb-1 font-bold text-warm-brown">{topic.title}</h3>
      <p className="text-sm leading-relaxed text-warm-brown/70">
        {topic.description}
      </p>
    </motion.div>
  );
}

export default function AdultSection() {
  const parallaxRef = useScrollParallax(".parallax-adult-img", -40);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="adults"
      ref={parallaxRef}
      className="bg-gradient-to-b from-mint/10 to-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 flex justify-center lg:order-1"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose/20 to-mint/10 blur-xl" />
              <div className="parallax-adult-img relative overflow-hidden rounded-3xl border border-rose/30 bg-white shadow-elevated">
                <Image
                  src="/images/keshev_ad.png"
                  alt="טיפול CBT למבוגרים"
                  width={500}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose/20 px-4 py-2 text-sm font-medium text-rose-dark">
              <Brain className="h-4 w-4" />
              מסלול מבוגרים וזוגיות
            </div>

            <h2 className="font-display mb-4 text-3xl font-bold text-warm-brown sm:text-4xl md:text-5xl">
              מרגישים שחוקים?
              <br />
              <span className="text-rose-dark">יש דרך אחרת</span>
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-warm-brown/70">
              עומס בעבודה, קשיים בזוגיות, תחושה שהכל נערם. טיפול CBT נותן כלים
              מעשיים - לא &quot;חפירות&quot; אלא שיטות מוכחות שעובדות מהר ומשנות
              את איכות החיים.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {topics.map((topic, index) => (
                <TopicCard key={topic.title} topic={topic} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <MagneticButton
                onClick={() => scrollTo("#contact")}
                className="shadow-elevated hover:shadow-elevated-hover cursor-pointer rounded-full bg-rose px-8 py-4 text-base font-semibold text-warm-brown transition-all hover:bg-rose-dark hover:text-white"
              >
                לשיחת היכרות - ללא עלות
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
