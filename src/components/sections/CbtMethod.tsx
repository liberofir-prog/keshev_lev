"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Mountain, Search, ChevronDown, Zap } from "lucide-react";

const methods = [
  {
    id: "efrat",
    icon: Lightbulb,
    title: 'מודל אפר"ת',
    subtitle: "אירוע → פירוש → רגש → תגובה",
    description:
      'מודל אפר"ת (ABCDE) מלמד לזהות את הקשר בין מחשבות לרגשות. במקום להגיב אוטומטית, לומדים לזהות את הפירוש שאנחנו נותנים לאירוע - ולשנות אותו. כלי פשוט ועוצמתי שמביא לשינוי מיידי.',
    color: "mint",
  },
  {
    id: "hills",
    icon: Mountain,
    title: "שיטת הגבעות הקטנות",
    subtitle: "צעדים קטנים לשינוי גדול",
    description:
      "במקום לנסות לטפס על ההר כולו בבת אחת, מחלקים את האתגר לגבעות קטנות ונגישות. כל גבעה היא הצלחה שבונה ביטחון ומוטיבציה להמשך. שיטה שמתאימה במיוחד למתבגרים ולמבוגרים שחשים מוצפים.",
    color: "rose",
  },
  {
    id: "evidence",
    icon: Search,
    title: "בחינת ראיות",
    subtitle: "מה באמת קורה כאן?",
    description:
      "טכניקה קוגניטיבית מרכזית - ללמוד לבדוק את המחשבות שלנו כמו חוקר. במקום לקבל מחשבות שליליות כעובדה, בוחנים את הראיות בעד ונגד. מפתח חשיבה מאוזנת ומציאותית.",
    color: "mint",
  },
];

export default function CbtMethod() {
  const [openId, setOpenId] = useState<string | null>("efrat");

  return (
    <section id="method" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cream-dark px-4 py-2 text-sm font-medium text-warm-brown">
            <Zap className="h-4 w-4 text-warm-brown" />
            הגישה הטיפולית
          </div>

          <h2 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
            CBT - קצר מועד, ממוקד תוצאות, מעשי
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-warm-brown/70">
            טיפול קוגניטיבי-התנהגותי (CBT) הוא הגישה הטיפולית המבוססת מחקר ביותר
            בעולם. הנה הכלים שהילה משתמשת בהם:
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl">
          {methods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() =>
                  setOpenId(openId === method.id ? null : method.id)
                }
                className={`flex w-full items-center gap-4 rounded-2xl border-2 p-5 text-right transition-all ${
                  openId === method.id
                    ? method.color === "mint"
                      ? "border-mint bg-mint/10"
                      : "border-rose bg-rose/10"
                    : "border-transparent bg-cream/80 hover:bg-cream"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    method.color === "mint" ? "bg-mint/30" : "bg-rose/30"
                  }`}
                >
                  <method.icon
                    className={`h-6 w-6 ${
                      method.color === "mint"
                        ? "text-mint-dark"
                        : "text-rose-dark"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-warm-brown">
                    {method.title}
                  </h3>
                  <p className="text-sm text-warm-brown/60">
                    {method.subtitle}
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-warm-brown/40 transition-transform ${
                    openId === method.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openId === method.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pt-4 pb-6 text-base leading-relaxed text-warm-brown/80">
                      {method.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
