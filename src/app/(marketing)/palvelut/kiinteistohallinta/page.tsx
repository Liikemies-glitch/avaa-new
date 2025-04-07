import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Kiinteistöhallinta | AVAA.io",
  description: "Tehosta kiinteistöjen hallintaa ja seurantaa AVAA.io:n digitaalisella kiinteistöhallintajärjestelmällä.",
}

const features = [
  {
    title: "Kiinteistöjen hallinta",
    description: "Hallitse kiinteistöjä ja niiden tietoja keskitetysti. Seuraa huoltotehtäviä ja hallinnoi sopimuksia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Huoltotehtävät",
    description: "Hallinnoi huoltotehtäviä tehokkaasti. Seuraa työtilauksia ja varmista laadukas toteutus.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Raportointi",
    description: "Saat kattavat raportit kiinteistöjen tilasta ja toiminnasta. Tee datapohjaisia päätöksiä.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const benefits = [
  "Tehokas kiinteistöjen hallinta",
  "Selkeä huoltotehtävien seuranta",
  "Kattava raportointi",
  "Integraatiot muihin järjestelmiin",
  "Mobiilisovellus",
  "Reaaliaikainen tilannekuva",
]

export default function PropertyManagementPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Kiinteistöhallinta</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl">
            AVAA.io:n kiinteistöhallintajärjestelmä tarjoaa kattavan ratkaisun kiinteistöjen hallintaan. 
            Tehosta toimintaa, paranna seurantaa ja vähennä hallinnollista työtä modernilla teknologialla.
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
          <h2 className="text-2xl font-semibold mb-6">Kiinteistöhallinnan edut</h2>
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

        <div>
          <h2 className="text-2xl font-semibold mb-4">Miten kiinteistöhallintajärjestelmä auttaa?</h2>
          <div className="space-y-4">
            <p>
              AVAA.io:n kiinteistöhallintajärjestelmä tarjoaa modernin työkalun kiinteistöjen hallintaan. 
              Järjestelmä tehostaa toimintaa, parantaa seurantaa ja vähentää hallinnollista työtä.
            </p>
            <p>
              Digitaaliset palvelut mahdollistavat huoltotehtävien hallinnan, selkeän viestinnän ja 
              lisäpalvelujen tarjoamisen. Kattava raportointi auttaa tekemään datapohjaisia päätöksiä 
              ja seurata suorituskykyä.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Haluatko lisätietoja kiinteistöhallinnasta?</h2>
          <p className="text-gray-600 mb-8">
            Ota yhteyttä ja kerro tarpeistasi. Näytämme, miten AVAA.io voi auttaa juuri sinun kiinteistösi hallinnassa.
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