import Blog from "@/components/sections/blog";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Logos from "@/components/sections/logos";
import Testimonials from "@/components/sections/testimonials";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Logos />
      <Features />
      <TestimonialsCarousel />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
