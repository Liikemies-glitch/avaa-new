import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Mikä on AVAA-ratkaisu?",
    answer: "AVAA on moderni kiinteistöhallinnan digitaalinen alusta, joka tehostaa kiinteistöyhtiöiden ja isännöitsijöiden työtä. Ratkaisu tarjoaa kattavat työkalut kiinteistöjen hallintaan, asukaspalveluihin ja viestintään.",
  },
  {
    question: "Miten AVAA-ratkaisu tehostaa kiinteistöhallintaa?",
    answer: "AVAA-ratkaisu automatisoi monia hallinnollisia tehtäviä, keskittää tietojen käsittelyn ja tarjoaa selkeät työkalut kiinteistöjen seurantaan. Tämä vapauttaa aikaa strategiselle työlle ja parantaa palvelun laatua.",
  },
  {
    question: "Onko AVAA-ratkaisu helppo ottaa käyttöön?",
    answer: "Kyllä, AVAA-ratkaisu on suunniteltu helppokäyttöiseksi ja nopeasti käyttöönotettavaksi. Tarjoamme kattavan käyttöönoton ja koulutuksen varmistaaksemme, että saat kaiken irti ratkaisusta.",
  },
  {
    question: "Miten AVAA-ratkaisu parantaa asukaspalveluja?",
    answer: "Ratkaisu mahdollistaa nopean ja tehokkaan viestinnän asukkaiden kanssa, automaattisen vikailmoitusten käsittelyn ja selkeän palvelupyyntöjen seurannan. Asukkaat voivat myös itse seurata palvelupyyntöjensä tilaa.",
  },
  {
    question: "Mitä raportointimahdollisuuksia AVAA-ratkaisu tarjoaa?",
    answer: "AVAA-ratkaisu tarjoaa kattavat raportointityökalut, joiden avulla voit seurata kiinteistöjen tilaa, kustannuksia ja palveluja. Raportit ovat mukautettavia ja automaattisesti päivittyviä.",
  },
];

export default function FAQ() {
  return (
    <Section title="UKK" subtitle="Usein kysytyt kysymykset">
      <div className="mx-auto my-12 md:max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={faq.question}
              className="w-full border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h4 className="mb-12 text-center text-sm font-medium tracking-tight text-foreground/80">
        Sinulla on vielä kysymyksiä? Ota yhteyttä sähköpostitse{" "}
        <a href="mailto:info@avaa.io" className="underline">
          info@avaa.io
        </a>
      </h4>
    </Section>
  );
}
