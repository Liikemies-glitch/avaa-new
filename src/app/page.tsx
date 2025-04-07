import { cn } from "@/lib/utils";
import { Check, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Blog from "@/components/sections/blog";
import Footer from "@/components/sections/footer";
import Logos from "@/components/sections/logos";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
