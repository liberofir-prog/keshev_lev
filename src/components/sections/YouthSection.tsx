"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  MessageCircleHeart,
  Brain,
  Sparkles,
  BookOpen,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const topics = [
  {
    icon: ShieldAlert,
    title: "חרדה ולחץ",
    description:
      "כלים מעשיים להתמודדות עם חרדות חברתיות, חרדת בחינות ולחץ יומיומי בגיל ההתבגרות",
  },
  {
    icon: Brain,
    title: "קשיי קשב וריכוז",
    description:
      "שיטות CBT מוכחות לשיפור מיקוד, ארגון וניהול זמן - משלימות טיפול תרופתי או עומדות בפני עצמן",
  },
  {
    icon: MessageCircleHeart,
    title: "קשיים חברתיים ורגשיים",
    description:
      "בניית ביטחון עצמי, ניהול כעסים, שיפור מיומנויות תקשורת עם בני גיל ועם המשפחה",
  },
  {
    icon: BookOpen,
    title: "סרבנות וקשיים לימודיים",
    description:
      "טיפול בשורש הבעיה - מוטיבציה, תסכול, ופערים רגשיים שמשפיעים על התפקוד הלימודי",
  },
  {
    icon: Users,
    title: "הדרכת הורים",
    description:
      'גישת "הדלת האחורית" - כלים להורים להתחיל שינוי בבית, גם כשהמתבגר/ת עדיין לא מוכן/ה להגיע',
  },
  {
    icon: Sparkles,
    title: "דימוי עצמי וזהות",
    description:
      "ליווי מתבגרים בגיבוש זהות, התמודדות עם לחצים חברתיים ובניית חוסן נפשי",
  },
];

export default function YouthSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="youth"
      className="bg-gradient-to-b from-white to-mint/10 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-mint/20 px-4 py-2 text-sm font-medium text-mint-dark">
            <Users className="h-4 w-4" />
            מסלול נוער והורים
          </div>

          <h2 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
            לגדול זה לא פשוט.
            <br />
            <span className="text-mint-dark">
              אבל אפשר לעשות את זה אחרת
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-warm-brown/70">
            גיל ההתבגרות מלווה באתגרים רגשיים, חברתיים ולימודיים. טיפול CBT
            נותן למתבגרים ולהורים כלים מעשיים ומבוססי מחקר להתמודדות יעילה -
            קצר מועד וממוקד תוצאות.
          </p>
        </motion.div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Topics grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {topics.map((topic, index) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-mint/20 bg-white/80 p-5 transition-all hover:border-mint/40 hover:shadow-md"
                >
                  <topic.icon className="mb-3 h-8 w-8 text-mint-dark" />
                  <h3 className="mb-1 font-bold text-warm-brown">
                    {topic.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-brown/70">
                    {topic.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Atmosphere image — starts at subtitle level */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-mint/20 to-rose/10 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-mint/30 bg-white shadow-lg">
                <Image
                  src="/images/keshev_youth.png"
                  alt="טיפול CBT לנוער"
                  width={500}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
              {/* CTA button pinned to bottom-left of image */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex justify-center lg:absolute lg:mt-0 lg:-top-20 lg:-left-16 lg:z-10"
              >
                <Button
                  onClick={() => scrollTo("#contact")}
                  size="lg"
                  className="cursor-pointer rounded-full bg-mint px-6 py-5 text-sm font-semibold text-warm-brown shadow-lg transition-all hover:bg-mint-dark hover:text-white hover:shadow-xl"
                >
                  לשיחת היכרות - ללא עלות
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
