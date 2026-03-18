"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "אחרי שלושה מפגשים עם הילה, הבן שלי חזר לדבר איתנו. היא נתנה לנו כלים שעבדו מהיום הראשון - בלי שהוא בכלל היה צריך להגיע.",
    author: "ר.כ",
    role: "אמא למתבגר בן 14",
    type: "parent",
  },
  {
    text: "הגעתי שחוקה לגמרי מהעבודה. הילה לימדה אותי להציב גבולות בלי רגשות אשמה. תוך חודשיים חזרתי להרגיש שאני שולטת בחיים שלי.",
    author: "מ.ל",
    role: "מנהלת צוות, בת 38",
    type: "adult",
  },
  {
    text: "הילה הבינה את הבת שלנו בצורה שאף אחד לא הצליח לפני כן. הגישה של ׳הדלת האחורית׳ שינתה את כל האווירה בבית.",
    author: "ד.ש",
    role: "הורים לנערה בת 15",
    type: "parent",
  },
  {
    text: "חשבתי שטיפול זה חפירות ארוכות. הילה הפתיעה אותי - כל מפגש קיבלתי כלי מעשי שיכולתי להשתמש בו מיד. זוגיות שלנו השתפרה משמעותית.",
    author: "א.ג",
    role: "בן 42, טיפול זוגי",
    type: "adult",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-cream to-mint/10 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display mb-4 text-3xl font-bold text-warm-brown sm:text-4xl md:text-5xl">
            מה אומרים מי שכבר עברו את הדרך
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-warm-brown/70">
            הורים, מבוגרים וזוגות שחוו שינוי אמיתי
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1,
              }}
              className={`relative overflow-hidden rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 shadow-elevated hover:shadow-elevated-hover ${
                testimonial.type === "parent"
                  ? "border-mint/30"
                  : "border-rose/30"
              }`}
            >
              {/* Large decorative quotation mark */}
              <span
                className={`font-display pointer-events-none absolute -top-4 right-4 text-[120px] leading-none select-none ${
                  testimonial.type === "parent"
                    ? "text-mint/[0.07]"
                    : "text-rose/[0.07]"
                }`}
              >
                &ldquo;
              </span>

              <div className="relative">
                <p className="mb-6 text-base leading-relaxed text-warm-brown/80">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-warm-brown">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-warm-brown/60">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-amber-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
