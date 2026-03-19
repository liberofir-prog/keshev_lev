"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Wave divider at top */}
      <SectionDivider variant="gentle" fillColor="#8B7355" />

      <div className="bg-gradient-to-b from-warm-brown to-warm-brown/90 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="קשב הלב"
                width={180}
                height={72}
                className="h-18 w-auto brightness-0 invert"
              />
              <span className="text-sm text-white/70">| הילה בן גרא</span>
            </div>

            {/* Contact info */}
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="tel:+972000000000"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm" dir="ltr">
                  050-000-0000
                </span>
              </a>
              <a
                href="mailto:hila@keshev.co.il"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">hila@keshev.co.il</span>
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>
              &copy; {new Date().getFullYear()} קשב הלב - הילה בן גרא. כל
              הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
