import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Publications() {
  const articles = [
    {
      title: "Women of Faith have Human Rights Too",
      author: "Dr Jagbir Jhutti-Johal OBE",
      slug: "women-of-faith-have-human-rights-too",
    },
    {
      title: "Women's Interfaith Work 'More Important Than Ever' Says Yvette Cooper",
      author: "Gaby Wine",
      slug: "womens-interfaith-work-more-important-than-ever",
    },
    {
      title: "Interfaith Week – How an MP can get the most out of it without tripping up",
      author: "Women's Faith Forum",
      slug: "interfaith-week",
    },
  ]

  return (
    <section className="py-16 pt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Publications & Articles</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white/80">By {article.author}</p>
                <Link href={`/blog/${article.slug}`} className="text-blue-300 hover:text-blue-200 hover:underline">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-blue-300 hover:text-blue-200 hover:underline">
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  )
}

