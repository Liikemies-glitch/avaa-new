import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Asukkaat | AVAA.io",
  description: "Digitaaliset palvelut asukkaille. Hallitse huoltopyyntöjä, viestintää ja palveluja helposti AVAA.io:n mobiilisovelluksella.",
}

const features = [
  {
    title: "Huoltopyyntöjen hallinta",
    description: "Tee huoltopyyntöjä helposti mobiilisovelluksella. Seuraa pyyntöjen tilannetta reaaliajassa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Viestintä",
    description: "Pysy ajan tasalla tärkeistä asioista. Vastaanota ilmoituksia ja viestejä kiinteistöyhtiöltä.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Palvelut",
    description: "Tilaa lisäpalveluja kuten siivous- ja pesulapalvelut. Hallitse tilauksia ja maksuja.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const benefits = [
  "Helppo huoltopyyntöjen tekeminen",
  "Selkeä viestintä kiinteistöyhtiön kanssa",
  "Lisäpalvelujen tilaus",
  "Reaaliaikainen tilannekuva",
  "Mobiilisovellus",
  "Yksinkertainen käyttöliittymä",
]

export default function ResidentsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Asukkaat</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl">
            AVAA.io tarjoaa asukkaille kattavan digitaalisen ratkaisun arjen helpottamiseen. 
            Hallitse huoltopyyntöjä, viestintää ja palveluja helposti mobiilisovelluksella.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Asukkaiden edut</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-4">Miten AVAA.io auttaa asukkaita?</h2>
          <div className="space-y-4">
            <p>
              AVAA.io:n mobiilisovellus tekee asukkaiden arjesta helpompaa. Huoltopyyntöjen tekeminen 
              ja seuranta onnistuu nopeasti ja helposti, ja viestintä kiinteistöyhtiön kanssa on selkeää.
            </p>
            <p>
              Lisäpalvelujen tilaus ja maksaminen on yksinkertaista, ja reaaliaikainen tilannekuva 
              pitää asukkaat ajan tasalla tärkeistä asioista. Yksinkertainen käyttöliittymä tekee 
              palveluiden käytöstä miellyttävää.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Haluatko lisätietoja asukaspalveluista?</h2>
          <p className="text-gray-600 mb-8">
            Ota yhteyttä ja kerro tarpeistasi. Näytämme, miten AVAA.io voi auttaa juuri sinua.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Pyydä esittely
          </a>
        </div>
      </div>
    </div>
  )
} 