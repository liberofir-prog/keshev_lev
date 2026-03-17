"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "M.A בייעוץ חינוכי",
    description: "תואר שני בייעוץ חינוכי עם התמחות בגיל ההתבגרות",
  },
  {
    icon: Award,
    title: "מטפלת CBT מוסמכת",
    description: "הסמכה בטיפול קוגניטיבי-התנהגותי ממוקד תוצאות",
  },
  {
    icon: Clock,
    title: "ניסיון רב שנים",
    description: "יועצת חינוכית מומחית בחטיבות ביניים - מכירה את עולם הנוער מבפנים",
  },
  {
    icon: Users,
    title: "מאות משפחות",
    description: "ליווי הורים, מתבגרים, מבוגרים וזוגות לשינוי משמעותי",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Authority() {
  return (
    <section id="authority" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
            למה דווקא הילה?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-warm-brown/70">
            שילוב ייחודי של סמכות בשטח וכלים מעשיים - הילה מביאה את הניסיון
            המערכתי מבית הספר ישירות לקליניקה
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {credentials.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group rounded-2xl border border-mint/30 bg-cream/50 p-8 text-center transition-all hover:border-mint hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-mint/20 transition-colors group-hover:bg-mint/40">
                <item.icon className="h-8 w-8 text-mint-dark" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-warm-brown">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-warm-brown/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
