"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Matti Virtanen",
    role: "Kiinteistöyhtiön toimitusjohtaja",
    img: "/testimonials/client1.jpg",
    description: (
      <p>
        AVAA-ratkaisu on mullistanut kiinteistöhallintamme kokonaan.
        <Highlight>
          Viestintä asukkaiden kanssa on nyt sujuvaa ja tehokasta.
        </Highlight>{" "}
        Suosittelen lämpimästi!
      </p>
    ),
  },
  {
    name: "Liisa Korhonen",
    role: "Kiinteistömanageri",
    img: "/testimonials/client2.jpg",
    description: (
      <p>
        AVAA:n digitaalinen alusta on tehostanut työtämme huomattavasti.
        <Highlight>Hallinnointi on nyt selkeää ja läpinäkyvää.</Highlight>{" "}
        Erinomainen työkalu nykyaikaiseen kiinteistöhallintaan.
      </p>
    ),
  },
  {
    name: "Jukka Mäkinen",
    role: "Isännöitsijä",
    img: "/testimonials/client3.jpg",
    description: (
      <p>
        AVAA:n ratkaisu on yksinkertaistanut päivittäistä työtämme merkittävästi.
        <Highlight>
          Asukaspalvelut ovat nyt korkealaatuisia ja tehokkaita.
        </Highlight>{" "}
        Todellinen apu työssämme.
      </p>
    ),
  },
  {
    name: "Anna Nieminen",
    role: "Kiinteistöyhtiön hallituksen jäsen",
    img: "/testimonials/client4.jpg",
    description: (
      <p>
        AVAA:n moderni alusta on nostanut kiinteistöhallintamme uudelle tasolle.
        <Highlight>
          Tietojen käsittely ja raportointi ovat nyt vaivattomia.
        </Highlight>{" "}
        Loistava investointi tulevaisuuteen.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section title="Asiakastarinat" subtitle="Mitä asiakkaamme sanovat AVAA-ratkaisusta">
      <Marquee
        className="py-4"
        pauseOnHover
        speed={30}
        gradient={false}
        containerClassName="overflow-hidden"
      >
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </Marquee>
    </Section>
  );
}
