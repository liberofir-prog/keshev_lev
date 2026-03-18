import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "נא להזין שם מלא"),
  phone: z
    .string()
    .min(9, "נא להזין מספר טלפון תקין")
    .regex(/^[\d\-+() ]+$/, "מספר טלפון לא תקין"),
  type: z.enum(["youth", "adult", "other"], {
    message: "נא לבחור סוג פנייה",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
