import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Kiinteistöyhtiöt | AVAA.io",
  description: "Digitaalinen kiinteistöhallinta kiinteistöyhtiöille. Tehosta toimintaa ja paranna asukaskokemusta AVAA.io:n ratkaisuilla.",
}

const features = [
  {
    title: "Kiinteistöhallinta",
    description: "Hallitse kiinteistöjä ja asukkaita yhdessä paikassa. Seuraa huoltotehtäviä ja hallinnoi sopimuksia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Asukaspalvelut",
    description: "Tarjoa asukkaillesi digitaalisia palveluja. Hallitse huoltopyyntöjä ja viestintää helposti.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Raportointi",
    description: "Saat kattavat raportit toiminnasta ja suorituskyvystä. Tee datapohjaisia päätöksiä.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const benefits = [
  "Tehokas kiinteistöhallinta",
  "Parannettu asukaskokemus",
  "Selkeä viestintä",
  "Kattava raportointi",
  "Mobiilisovellus",
  "Integraatiot muihin järjestelmiin",
]

export default function PropertyCompaniesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Kiinteistöyhtiöt</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl">
            AVAA.io tarjoaa kiinteistöyhtiöille kattavan digitaalisen ratkaisun kiinteistöhallintaan. 
            Tehosta toimintaa ja paranna asukaskokemusta modernilla teknologialla.
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
          <h2 className="text-2xl font-semibold mb-6">Kiinteistöyhtiöiden edut</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Miten AVAA.io auttaa kiinteistöyhtiöitä?</h2>
          <div className="space-y-4">
            <p>
              AVAA.io:n ratkaisu tarjoaa kiinteistöyhtiöille modernin työkalun kiinteistöjen hallintaan. 
              Järjestelmä tehostaa toimintaa, parantaa asukaskokemusta ja vähentää hallinnollista työtä.
            </p>
            <p>
              Digitaaliset palvelut mahdollistavat huoltopyyntöjen hallinnan, selkeän viestinnän ja 
              lisäpalvelujen tarjoamisen. Kattava raportointi auttaa tekemään datapohjaisia päätöksiä 
              ja seurata suorituskykyä.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Haluatko lisätietoja kiinteistöyhtiöiden ratkaisuista?</h2>
          <p className="text-gray-600 mb-8">
            Ota yhteyttä ja kerro tarpeistasi. Näytämme, miten AVAA.io voi auttaa juuri sinun kiinteistöyhtiötäsi.
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