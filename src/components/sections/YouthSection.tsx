"use client";

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
          className="mb-14 text-center"
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

        {/* Topics grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-mint/20 bg-white/80 p-6 transition-all hover:border-mint/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/15 transition-colors group-hover:bg-mint/30">
                <topic.icon className="h-6 w-6 text-mint-dark" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-warm-brown">
                {topic.title}
              </h3>
              <p className="text-sm leading-relaxed text-warm-brown/70">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            onClick={() => scrollTo("#contact")}
            size="lg"
            className="cursor-pointer rounded-full bg-mint px-8 py-6 text-base font-semibold text-warm-brown shadow-lg transition-all hover:bg-mint-dark hover:shadow-xl"
          >
            לשיחת היכרות - ללא עלות
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
