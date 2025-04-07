import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { Building2, Home, MessageSquare, Settings, Users } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Kiinteistöhallinta",
    content: "Hallinnoi kiinteistöjäsi tehokkaasti ja modernisti.",
    image: "/dashboard.png",
    icon: <Building2 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Asukaspalvelut",
    content: "Tarjoa asukkaillesi korkealaatuisia palveluja ja viestintää.",
    image: "/dashboard.png",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Viestintä",
    content: "Pysy yhteydessä asukkaisiin ja hallinnoi viestintää keskitetysti.",
    image: "/dashboard.png",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Hallinnointi",
    content: "Hallinnoi kiinteistöjäsi ja niiden palveluita tehokkaasti.",
    image: "/dashboard.png",
    icon: <Settings className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Palvelut" subtitle="Modernisoi kiinteistöhallintasi AVAA-ratkaisulla">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
