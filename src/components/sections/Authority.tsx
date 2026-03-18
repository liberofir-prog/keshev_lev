"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Clock, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "M.A בייעוץ חינוכי",
    description: "תואר שני בייעוץ חינוכי עם התמחות בגיל ההתבגרות",
    hasCounter: false,
  },
  {
    icon: Award,
    title: "מטפלת CBT מוסמכת",
    description: "הסמכה בטיפול קוגניטיבי-התנהגותי ממוקד תוצאות",
    hasCounter: false,
  },
  {
    icon: Clock,
    title: "ניסיון רב שנים",
    description: "יועצת חינוכית מומחית בחטיבות ביניים - מכירה את עולם הנוער מבפנים",
    hasCounter: false,
  },
  {
    icon: Users,
    title: "מאות משפחות",
    description: "ליווי הורים, מתבגרים, מבוגרים וזוגות לשינוי משמעותי",
    hasCounter: true,
    counterTarget: 500,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{count}+</span>;
}

function CredentialCard({
  item,
}: {
  item: (typeof credentials)[0];
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group rounded-2xl border border-mint/30 bg-cream/50 p-8 text-center transition-all duration-300 hover:border-mint hover:-translate-y-1 shadow-elevated hover:shadow-elevated-hover"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-mint/20 transition-colors group-hover:bg-mint/40">
        <item.icon className="h-8 w-8 text-mint-dark" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-warm-brown">
        {item.hasCounter && item.counterTarget ? (
          <AnimatedCounter target={item.counterTarget} />
        ) : (
          item.title
        )}
        {item.hasCounter && " משפחות"}
      </h3>
      <p className="text-sm leading-relaxed text-warm-brown/70">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function Authority() {
  return (
    <section id="authority" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 pt-8 text-center"
        >
          <h2 className="font-display mb-4 text-3xl font-bold text-warm-brown sm:text-4xl md:text-5xl">
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
            <CredentialCard key={item.title} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
