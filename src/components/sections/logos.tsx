import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  {
    name: "Hatki",
    logo: "https://avaa.io/hs-fs/hubfs/cropped-logo_vaaka_valkoinen_sininen.png?width=216&height=50&name=cropped-logo_vaaka_valkoinen_sininen.png"
  },
  {
    name: "Virta Isännöinti",
    logo: "https://avaa.io/hs-fs/hubfs/virtalogo_kelt.png?width=207&height=60&name=virtalogo_kelt.png"
  },
  {
    name: "Vaasan Asumisoikeus",
    logo: "https://avaa.io/hs-fs/hubfs/Screenshot%202024-05-21%20at%2023.06.46.png?width=202&height=48&name=Screenshot%202024-05-21%20at%2023.06.46.png"
  },
  {
    name: "ISYK",
    logo: "https://avaa.io/hs-fs/hubfs/isyk-vihrea-1.png?width=131&height=46&name=isyk-vihrea-1.png"
  },
  {
    name: "Pohjanmaan Kiinteistöpalvelut",
    logo: "https://avaa.io/hubfs/pohjanmaan-kiinteistopalvelut.svg"
  },
  {
    name: "MHT Isännöinti",
    logo: "https://avaa.io/hs-fs/hubfs/Screenshot%202024-05-16%20at%200.49.36.png?width=293&height=50&name=Screenshot%202024-05-16%20at%200.49.36.png"
  },
  {
    name: "LTT",
    logo: "https://avaa.io/hubfs/LTT.svg"
  },
  {
    name: "Skipa",
    logo: "https://avaa.io/hs-fs/hubfs/image001%20(1).png?width=182&height=56&name=image001%20(1).png"
  },
  {
    name: "Isännöinti Honka",
    logo: "https://avaa.io/hs-fs/hubfs/Is%C3%A4nn%C3%B6inti%20Honka%20Oy%20tiivis%20logo_HR.png?width=180&height=119&name=Is%C3%A4nn%C3%B6inti%20Honka%20Oy%20tiivis%20logo_HR.png"
  },
  {
    name: "Tilikasi",
    logo: "https://avaa.io/hs-fs/hubfs/tilikasi-oy-10.png?width=250&height=125&name=tilikasi-oy-10.png"
  },
  {
    name: "Korpilahden Tili",
    logo: "https://avaa.io/hs-fs/hubfs/logo%20(22).jpg?width=250&height=101&name=logo%20(22).jpg"
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
              <div key={idx} className="py-2">
                <img
                  src={company.logo}
                  className="h-12 w-auto dark:brightness-0 dark:invert grayscale opacity-30 hover:opacity-100 transition-opacity"
                  alt={company.name}
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
