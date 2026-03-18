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
import SectionDivider from "@/components/SectionDivider";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <Analytics />
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="wave" fillColor="#FFFFFF" />
        <Authority />
        <SectionDivider variant="curve" fillColor="#F8FBF9" />
        <YouthSection />
        <SectionDivider variant="gentle" fillColor="#FAFCF8" />
        <AdultSection />
        <SectionDivider variant="wave" fillColor="#FFFFFF" />
        <CbtMethod />
        <SectionDivider variant="curve" fillColor="#FDF8F0" />
        <Testimonials />
        <SectionDivider variant="gentle" fillColor="#F5FAF7" />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
