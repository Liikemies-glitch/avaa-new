import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  {
    name: "Kiinteistöliitto",
    logo: "/partners/kiinteistoliitto.svg"
  },
  {
    name: "RAKLI",
    logo: "/partners/rakli.svg"
  },
  {
    name: "Isännöintiliitto",
    logo: "/partners/isannointiliitto.svg"
  },
  {
    name: "Kiinteistötyönantajat",
    logo: "/partners/kiinteistotyonantajat.svg"
  },
  {
    name: "SKVL",
    logo: "/partners/skvl.svg"
  }
];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          YHTEISTYÖKUMPPANIMME
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((company, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={company.logo}
                className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
                alt={company.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
