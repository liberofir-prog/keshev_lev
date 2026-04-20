import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

const TYPE_LABELS: Record<string, string> = {
  youth: "נוער והורים",
  adult: "מבוגרים / זוגי",
  other: "אחר",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactFormSchema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "קשב הלב <noreply@keshev-lev.co.il>",
      to: "Hilabg79@gmail.com",
      subject: `פנייה חדשה מהאתר — ${validated.name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 500px;">
          <h2 style="color: #7FB5A0;">פנייה חדשה מאתר קשב הלב</h2>
          <p><strong>שם:</strong> ${validated.name}</p>
          <p><strong>טלפון:</strong> ${validated.phone}</p>
          <p><strong>סוג פנייה:</strong> ${TYPE_LABELS[validated.type] ?? validated.type}</p>
          ${validated.message ? `<p><strong>הודעה:</strong> ${validated.message}</p>` : ""}
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 }
    );
  }
}
