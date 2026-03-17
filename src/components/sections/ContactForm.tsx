"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
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
      // Error handling - could add toast notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-mint/10 to-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
              הילה מחכה להקשיב לכם
            </h2>
            <p className="text-lg text-warm-brown/70">
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
                className="rounded-3xl border border-mint/30 bg-white p-10 text-center shadow-lg"
              >
                <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-mint-dark" />
                <h3 className="mb-2 text-2xl font-bold text-warm-brown">
                  הפרטים נשלחו בהצלחה!
                </h3>
                <p className="text-warm-brown/70">
                  הילה תחזור אליכם בהקדם לשיחת היכרות קצרה
                </p>
                <Heart
                  className="mx-auto mt-6 h-8 w-8 text-rose"
                  fill="currentColor"
                />
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-3xl border border-mint/30 bg-white p-8 shadow-lg sm:p-10"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-warm-brown"
                    >
                      שם מלא
                    </Label>
                    <Input
                      id="name"
                      placeholder="הזינו את שמכם"
                      className="rounded-xl border-cream-dark bg-cream/50 py-6 text-warm-brown placeholder:text-warm-brown/40 focus:border-mint focus:ring-mint"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-warm-brown"
                    >
                      טלפון
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="050-0000000"
                      dir="ltr"
                      className="rounded-xl border-cream-dark bg-cream/50 py-6 text-right text-warm-brown placeholder:text-right placeholder:text-warm-brown/40 focus:border-mint focus:ring-mint"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Type */}
                  <div>
                    <Label className="mb-2 block text-sm font-medium text-warm-brown">
                      סוג הפנייה
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        setValue("type", value as "youth" | "adult", {
                          shouldValidate: true,
                        })
                      }
                    >
                      <SelectTrigger className="rounded-xl border-cream-dark bg-cream/50 py-6 text-warm-brown focus:border-mint focus:ring-mint">
                        <SelectValue placeholder="בחרו את סוג הפנייה" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="youth">
                          נוער והורים - עבור הילד/ה שלי
                        </SelectItem>
                        <SelectItem value="adult">
                          מבוגרים - טיפול אישי / זוגי
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.type && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.type.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="mt-8 w-full cursor-pointer rounded-full bg-mint py-6 text-base font-semibold text-warm-brown shadow-lg transition-all hover:bg-mint-dark hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="ml-2 h-5 w-5" />
                  )}
                  {isSubmitting ? "שולח..." : "שלחו פרטים"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
