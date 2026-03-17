import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import YouthSection from "@/components/sections/YouthSection";
import AdultSection from "@/components/sections/AdultSection";
import CbtMethod from "@/components/sections/CbtMethod";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export default function Home() {
  return (
    <>
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <YouthSection />
        <AdultSection />
        <CbtMethod />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
