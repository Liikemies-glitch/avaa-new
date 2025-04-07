import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Hinnoittelu | AVAA.io",
  description: "Selkeä ja joustava hinnoittelu eri tarpeisiin. Valitse juuri sinulle sopiva paketti AVAA.io:n palveluista.",
}

const plans = [
  {
    name: "Perus",
    price: "99",
    description: "Sopii pienille kiinteistöyhtiöille",
    features: [
      "Peruskiinteistöhallinta",
      "Asukaspalvelut",
      "Huoltopyyntöjen hallinta",
      "Viestintä",
      "Mobiilisovellus",
      "Sähköpostituki",
    ],
  },
  {
    name: "Professional",
    price: "199",
    description: "Sopii keskikokoisille kiinteistöyhtiöille",
    features: [
      "Kaikki Perus-paketin ominaisuudet",
      "Edistyneet raportit",
      "KPI-seuranta",
      "Integraatiot",
      "Prioriteettituki",
      "Koulutus",
    ],
  },
  {
    name: "Enterprise",
    price: "399",
    description: "Sopii suurille kiinteistöyhtiöille",
    features: [
      "Kaikki Professional-paketin ominaisuudet",
      "Mukautuvat ratkaisut",
      "API-integraatiot",
      "Dedikoidut yhteyshenkilöt",
      "24/7 tuki",
      "SLA-sopimus",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Hinnoittelu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Valitse juuri sinulle sopiva paketti. Kaikki paketit sisältävät perusominaisuudet, 
            ja voit lisätä tarpeidesi mukaan lisäpalveluja.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                index === 1 ? "ring-2 ring-blue-600" : ""
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">€/kk</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full py-3 px-4 text-center rounded-md ${
                    index === 1
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Ota yhteyttä
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Lisäpalvelut</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Koulutus</h3>
              <ul className="space-y-2">
                <li>Peruskoulutus: 499€/päivä</li>
                <li>Jatkokoulutus: 299€/päivä</li>
                <li>Ryhmäkoulutus: 799€/päivä</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Integraatiot</h3>
              <ul className="space-y-2">
                <li>API-integraatio: 999€/kpl</li>
                <li>Mukautettu integraatio: 1499€/kpl</li>
                <li>Integraation ylläpito: 199€/kk</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Haluatko lisätietoja hinnoittelusta?</h2>
          <p className="text-gray-600 mb-8">
            Ota yhteyttä ja kerro tarpeistasi. Suunnittelemme juuri sinulle sopivan ratkaisun.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Pyydä tarjous
          </a>
        </div>
      </div>
    </div>
  )
} 