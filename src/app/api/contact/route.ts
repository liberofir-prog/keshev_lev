import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// TODO: Replace with your actual endpoint URL
const EXTERNAL_ENDPOINT = process.env.CONTACT_ENDPOINT_URL || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactFormSchema.parse(body);

    if (EXTERNAL_ENDPOINT) {
      await fetch(EXTERNAL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 }
    );
  }
}
