import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Raportointi | AVAA.io",
  description: "Kattava raportointi ja analytiikka kiinteistöhallinnan tehostamiseen. Seuraa KPI-indikaattoreita ja tehosta päätöksentekoa.",
}

const features = [
  {
    title: "KPI-seuranta",
    description: "Seuraa tärkeitä suorituskykyindikaattoreita reaaliajassa. Visualisoi data selkeästi ja tehosta päätöksentekoa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Mukautuvat raportit",
    description: "Luo mukautuvia raportteja eri tarpeisiin. Vie raportit eri formaateissa ja jaa ne helposti.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Analytiikka",
    description: "Syväanalyysi datasta auttaa tunnistamaan trendejä ja mahdollisuudet. Tee datapohjaisia päätöksiä.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const benefits = [
  "Tehosta päätöksentekoa datapohjaisella analyysillä",
  "Seuraa suorituskykyä reaaliajassa",
  "Tunnista trendit ja mahdollisuudet",
  "Mukautuvat raportit eri tarpeisiin",
  "Automatisoidut raportit ja ilmoitukset",
  "Integraatiot muihin järjestelmiin",
]

export default function ReportingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Raportointi</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl">
            AVAA.io:n raportointi tarjoaa kattavan näkymän kiinteistöhallinnan toimintaan. Seuraa 
            suorituskykyä, tunnista trendit ja tee datapohjaisia päätöksiä tehokkaasti.
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
          <h2 className="text-2xl font-semibold mb-6">Raportoinnin edut</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Miten raportointi auttaa?</h2>
          <div className="space-y-4">
            <p>
              AVAA.io:n raportointi tarjoaa selkeän näkymän kiinteistöhallinnan toimintaan. KPI-seuranta 
              auttaa tunnistamaan ongelmat ajoissa ja tehostamaan toimintaa.
            </p>
            <p>
              Mukautuvat raportit mahdollistavat eri näkökulmien analysoinnin, ja syväanalyysi auttaa 
              tunnistamaan trendit ja mahdollisuudet. Automatisoidut raportit säästävät aikaa ja 
              varmistavat ajantasaisen tiedon.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Haluatko lisätietoja raportoinnista?</h2>
          <p className="text-gray-600 mb-8">
            Ota yhteyttä ja kerro tarpeistasi. Näytämme, miten AVAA.io voi auttaa juuri sinun yritystäsi.
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