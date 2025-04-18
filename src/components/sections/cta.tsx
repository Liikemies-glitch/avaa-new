import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Valmis modernisoimaan kiinteistöhallintasi?"
      subtitle="Ota yhteyttä ja kerromme lisää AVAA-ratkaisusta."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center pt-4">
        <a
          href="https://share.hsforms.com/1QxGXqXqXQxGXqXqXQxGXqX"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          <Icons.logo className="h-6 w-6" />
          Varaa demo
        </a>
      </div>
    </Section>
  );
}
