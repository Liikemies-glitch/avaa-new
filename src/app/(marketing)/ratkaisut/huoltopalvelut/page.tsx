import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Huoltopalvelut | AVAA.io",
  description: "Digitaalinen huoltotyön hallinta. Tehosta huoltotehtäviä ja paranna asiakaspalvelua AVAA.io:n ratkaisuilla.",
}

const features = [
  {
    title: "Työtehtävien hallinta",
    description: "Hallitse huoltotehtäviä tehokkaasti. Jaa työt työntekijöille ja seuraa etenemistä reaaliajassa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "Asiakaspalvelu",
    description: "Paranna asiakaspalvelua tehokkaalla viestinnällä. Hallitse huoltopyyntöjä ja ilmoituksia.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: "Raportointi",
    description: "Saat kattavat raportit työtehtävistä ja suorituskyvystä. Tee datapohjaisia päätöksiä.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const benefits = [
  "Tehokas työtehtävien hallinta",
  "Parannettu asiakaspalvelu",
  "Selkeä viestintä",
  "Kattava raportointi",
  "Mobiilisovellus työntekijöille",
  "Integraatiot muihin järjestelmiin",
]

export default function MaintenanceServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Huoltopalvelut</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl">
            AVAA.io tarjoaa huoltoyhtiöille kattavan digitaalisen ratkaisun työtehtävien hallintaan. 
            Tehosta toimintaa ja paranna asiakaspalvelua modernilla teknologialla.
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
          <h2 className="text-2xl font-semibold mb-6">Huoltoyhtiöiden edut</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Miten AVAA.io auttaa huoltoyhtiöitä?</h2>
          <div className="space-y-4">
            <p>
              AVAA.io:n ratkaisu tarjoaa huoltoyhtiöille modernin työkalun työtehtävien hallintaan. 
              Järjestelmä tehostaa toimintaa, parantaa asiakaspalvelua ja vähentää hallinnollista työtä.
            </p>
            <p>
              Digitaaliset palvelut mahdollistavat huoltopyyntöjen hallinnan, selkeän viestinnän ja 
              työtehtävien seurannan. Kattava raportointi auttaa tekemään datapohjaisia päätöksiä 
              ja seurata suorituskykyä.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Haluatko lisätietoja huoltoyhtiöiden ratkaisuista?</h2>
          <p className="text-gray-600 mb-8">
            Ota yhteyttä ja kerro tarpeistasi. Näytämme, miten AVAA.io voi auttaa juuri sinun huoltoyhtiötäsi.
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