import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blogi | AVAA.io",
  description: "Ajankohtaisia artikkeleita ja vinkkejä isännöintijärjestelmän käytöstä, kiinteistönhallinnan parhaista käytännöistä sekä asukaskokemuksen parantamisesta.",
}

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Isännöintijärjestelmän käyttöönotto - Vinkkejä onnistuneeseen toteutukseen",
    excerpt: "Opas isännöintijärjestelmän käyttöönottoon ja parhaat käytännöt kiinteistönhallinnan digitalisointiin.",
    date: "2024-04-07",
    category: "Isännöinti",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Asukaskokemuksen parantaminen digitaalisilla ratkaisuilla",
    excerpt: "Miten digitaaliset työkalut voivat parantaa asukkaiden kokemusta ja tehostaa kiinteistönhallintaa.",
    date: "2024-04-01",
    category: "Asukaskokemus",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Huoltoyhtiöiden digitalisointi - TarmoPro:n tarina",
    excerpt: "Tutustu kuinka TarmoPro auttaa huoltoyhtiöitä tehostamaan toimintaansa digitaalisilla ratkaisuilla.",
    date: "2024-03-25",
    category: "Huoltoyhtiöt",
    readTime: "6 min",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blogi</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl">
            Tervetuloa AVAA.io:n blogiin! Täältä löydät ajankohtaisia artikkeleita ja vinkkejä isännöintijärjestelmän käytöstä, 
            kiinteistönhallinnan parhaista käytännöistä sekä asukaskokemuksen parantamisesta.
          </p>
        </div>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">{post.readTime} lukuaika</span>
                </div>
                
                <h2 className="text-2xl font-semibold mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Lue lisää
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
