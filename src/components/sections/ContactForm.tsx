"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Heart, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import MagneticButton from "@/components/MagneticButton";

function FloatingInput({
  id,
  label,
  type = "text",
  dir,
  error,
  register,
}: {
  id: string;
  label: string;
  type?: string;
  dir?: string;
  error?: string;
  register: ReturnType<typeof useForm<ContactFormData>>["register"];
}) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        dir={dir}
        placeholder=" "
        className={`peer w-full rounded-xl border bg-cream/50 px-4 pt-6 pb-2 text-warm-brown transition-all duration-300 placeholder-transparent focus:border-mint focus:ring-2 focus:ring-mint/30 focus:outline-none ${
          error ? "border-red-400" : "border-cream-dark"
        } ${dir === "ltr" ? "text-right" : ""}`}
        {...register(id as keyof ContactFormData)}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute right-4 top-2 text-xs font-medium text-warm-brown-text/80 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-mint-dark"
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

function AnimatedCheckmark() {
  return (
    <svg
      className="mx-auto mb-4 h-20 w-20"
      viewBox="0 0 60 60"
      fill="none"
    >
      <motion.circle
        cx="30"
        cy="30"
        r="27"
        stroke="#8cbf9e"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.path
        d="M18 30 L26 38 L42 22"
        stroke="#8cbf9e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
      />
    </svg>
  );
}

function FloatingHearts() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-rose/60"
          initial={{
            x: `${20 + Math.random() * 60}%`,
            y: "100%",
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: "-20%",
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 0.8],
            rotate: [0, (Math.random() - 0.5) * 40],
          }}
          transition={{
            duration: 2 + Math.random() * 1.5,
            delay: 0.3 + i * 0.2,
            ease: "easeOut",
          }}
        >
          <Heart className="h-5 w-5" fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch {
      // Error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-mint/10 to-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="font-display mb-4 text-3xl font-bold text-warm-brown sm:text-4xl md:text-5xl">
              הילה מחכה להקשיב לכם
            </h2>
            <p className="text-lg text-warm-brown-text">
              השאירו פרטים לשיחת היכרות קצרה וללא התחייבות
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-3xl border border-mint/30 bg-white p-10 text-center shadow-floating"
              >
                <FloatingHearts />
                <AnimatedCheckmark />
                <h3 className="font-display mb-2 text-2xl font-bold text-warm-brown">
                  הפרטים נשלחו בהצלחה!
                </h3>
                <p className="text-warm-brown-text">
                  הילה תחזור אליכם בהקדם לשיחת היכרות קצרה
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-3xl border border-mint/30 bg-white p-8 shadow-floating sm:p-10"
              >
                <div className="space-y-6">
                  <FloatingInput
                    id="name"
                    label="שם מלא"
                    register={register}
                    error={errors.name?.message}
                  />

                  <FloatingInput
                    id="phone"
                    label="טלפון"
                    type="tel"
                    dir="ltr"
                    register={register}
                    error={errors.phone?.message}
                  />

                  {/* Type */}
                  <div className="relative">
                    <select
                      id="type"
                      defaultValue=""
                      className={`peer w-full appearance-none rounded-xl border bg-cream/50 px-4 pt-6 pb-2 text-warm-brown transition-all duration-300 focus:border-mint focus:ring-2 focus:ring-mint/30 focus:outline-none ${
                        errors.type ? "border-red-400" : "border-cream-dark"
                      }`}
                      {...register("type")}
                    >
                      <option value="" disabled>
                        בחרו את סוג הפנייה
                      </option>
                      <option value="youth">נוער והורים - עבור הילד/ה שלי</option>
                      <option value="adult">מבוגרים - טיפול אישי / זוגי</option>
                      <option value="other">אחר</option>
                    </select>
                    <label
                      htmlFor="type"
                      className="pointer-events-none absolute right-4 top-2 text-xs font-medium text-warm-brown-text/80"
                    >
                      סוג הפנייה
                    </label>
                    {errors.type && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.type.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={3}
                      placeholder=" "
                      className="peer w-full rounded-xl border border-cream-dark bg-cream/50 px-4 pt-6 pb-2 text-warm-brown transition-all duration-300 placeholder-transparent focus:border-mint focus:ring-2 focus:ring-mint/30 focus:outline-none resize-none"
                      {...register("message")}
                    />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute right-4 top-2 text-xs font-medium text-warm-brown-text/80 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-mint-dark"
                    >
                      ספר/י לנו במה נוכל לסייע (אופציונלי)
                    </label>
                  </div>
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="shadow-elevated hover:shadow-elevated-hover mt-8 w-full cursor-pointer rounded-full bg-mint py-4 text-base font-semibold text-warm-brown transition-all hover:bg-mint-dark disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="ml-2 inline h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="ml-2 inline h-5 w-5" />
                  )}
                  {isSubmitting ? "שולח..." : "שלחו פרטים"}
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
