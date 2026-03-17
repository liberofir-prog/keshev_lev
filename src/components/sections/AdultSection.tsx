"use client";

import { motion } from "framer-motion";
import { Brain, HeartHandshake, Target, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function AdultSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="adults" className="bg-gradient-to-b from-mint/10 to-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Infographic placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 flex justify-center lg:order-1"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose/20 to-mint/10 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-rose/30 bg-white p-8 shadow-lg">
                <div className="flex h-80 flex-col items-center justify-center text-center">
                  <Battery className="mb-4 h-20 w-20 text-rose/40" />
                  <p className="text-lg font-semibold text-warm-brown/40">
                    אינפוגרפיקת &quot;שחיקה&quot;
                  </p>
                  <p className="mt-2 text-sm text-warm-brown/30">
                    מקום לתמונה / איור
                  </p>
                </div>
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

            <h2 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
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
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-rose/20 bg-white/80 p-5 transition-all hover:border-rose/40 hover:shadow-md"
                >
                  <topic.icon className="mb-3 h-8 w-8 text-rose" />
                  <h3 className="mb-1 font-bold text-warm-brown">
                    {topic.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-brown/70">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <Button
                onClick={() => scrollTo("#contact")}
                size="lg"
                className="cursor-pointer rounded-full bg-rose px-8 py-6 text-base font-semibold text-warm-brown shadow-lg transition-all hover:bg-rose-dark hover:text-white hover:shadow-xl"
              >
                לשיחת היכרות - ללא עלות
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
