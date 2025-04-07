import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tuki | AVAA.io",
  description: "Kattava tuki ja oppaat AVAA.io:n palveluihin. Löydä vastaukset yleisiin kysymyksiin ja ota yhteyttä tukeen.",
}

const faqs = [
  {
    question: "Miten voin aloittaa AVAA.io:n käytön?",
    answer: "Aloitus on helppo! Ota yhteyttä meille, ja järjestämme sinulle esittelyn järjestelmästä. Koulutamme sinut ja tiimisi järjestelmän käyttöön ja autamme käyttöönotossa.",
  },
  {
    question: "Miten huoltopyyntöjen hallinta toimii?",
    answer: "Huoltopyyntöjen hallinta on yksinkertaista. Asukkaat voivat tehdä pyyntöjä mobiilisovelluksella, ja huoltoyhtiö voi hallita niitä selkeästi järjestelmässä. Voit seurata pyyntöjen tilannetta reaaliajassa.",
  },
  {
    question: "Miten viestintä toimii järjestelmässä?",
    answer: "Viestintä toimii kahden suuntaisesti. Voit lähettää ilmoituksia asukkaille, ja he voivat vastata niihin. Kaikki viestit tallentuvat järjestelmään, joten viestintähistoria on aina saatavilla.",
  },
  {
    question: "Miten raportointi toimii?",
    answer: "Raportointi on kattavaa ja mukautuvaa. Voit luoda erilaisia raportteja toiminnasta ja suorituskyvystä. Raportit voidaan viedä eri formaateissa ja jakaa helposti.",
  },
  {
    question: "Miten mobiilisovellus toimii?",
    answer: "Mobiilisovellus on saatavilla iOS- ja Android-laitteille. Se mahdollistaa huoltopyyntöjen tekemisen, viestinnän ja palveluiden tilauksen. Sovellus on helppokäyttöinen ja toimii offline-tilassa.",
  },
  {
    question: "Miten integraatiot toimivat?",
    answer: "AVAA.io tarjoaa useita valmiita integraatioita muihin järjestelmiin. Lisäksi voimme kehittää mukautettuja integraatioita tarpeidesi mukaan. API-dokumentaatio on saatavilla kehittäjille.",
  },
]

const supportChannels = [
  {
    title: "Sähköpostituki",
    description: "Vastaanotamme sähköpostiviestejä maanantaista perjantaihin klo 9-17.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Puhelintuki",
    description: "Puhelintuki on saatavilla maanantaista perjantaihin klo 9-17.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Chat-tuki",
    description: "Chat-tuki on saatavilla maanantaista perjantaihin klo 9-17.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
]

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tuki</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl">
            Olemme täällä auttamassa sinua AVAA.io:n käytössä. Löydä vastaukset yleisiin kysymyksiin 
            tai ota yhteyttä tukeen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">{channel.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
              <p className="text-gray-600">{channel.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Yleiset kysymykset</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4">Koulutus ja oppaat</h2>
          <div className="space-y-4">
            <p>
              Tarjoamme kattavia koulutuksia ja oppaita AVAA.io:n käyttöön. Koulutukset voidaan 
              järjestää etänä tai paikan päällä, ja ne voidaan räätälöidä juuri sinun tarpeidesi mukaan.
            </p>
            <p>
              Oppaat ovat saatavilla järjestelmän käyttöön ja eri ominaisuuksiin. Voit myös pyytää 
              mukautettuja oppaita erityistarpeisiisi.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Tarvitsetko apua?</h2>
          <p className="text-gray-600 mb-8">
            Ota yhteyttä ja kerro tarpeistasi. Autamme sinua mielellämme.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Ota yhteyttä
          </a>
        </div>
      </div>
    </div>
  )
} 