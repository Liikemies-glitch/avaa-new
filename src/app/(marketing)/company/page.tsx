import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yritys | AVAA.io",
  description: "AVAA.io - Your trusted partner in digital solutions",
}

export default function CompanyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tietoa AVAA.io:sta</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6">
            AVAA.io on suomalainen teknologia-alan yritys, joka erikoistuu digitaalisiin ratkaisuihin ja palveluihin.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Visiomme</h2>
          <p className="mb-6">
            Pyrimme olemaan luotettava kumppani digitaalisessa murroksessa, tarjoten innovatiivisia ratkaisuja, jotka auttavat yrityksiä menestymään digitaalisessa ympäristössä.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Arvomme</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Asiakaslähtöisyys</li>
            <li>Innovatiivisuus</li>
            <li>Luotettavuus</li>
            <li>Yhteistyö</li>
            <li>Jatkuva kehitys</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Tiimimme</h2>
          <p className="mb-6">
            Tiimimme koostuu kokeneista ammattilaisista, jotka yhdistävät teknologian osaamisen liiketoiminnan ymmärrykseen. Meillä on vahva kokemus digitaalisten ratkaisujen suunnittelusta ja toteutuksesta.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Yhteystiedot</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2">
              <strong>Osoite:</strong> [Yrityksen osoite]
            </p>
            <p className="mb-2">
              <strong>Puhelin:</strong> [Puhelinnumero]
            </p>
            <p className="mb-2">
              <strong>Sähköposti:</strong> info@avaa.io
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 