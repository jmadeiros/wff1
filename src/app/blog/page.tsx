import Link from "next/link"
import WaveBackground from "@/components/layout/WaveBackground"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { BlogPost } from "@/types"

// This would typically come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    title: "Women of Faith have Human Rights Too",
    author: "Dr Jagbir Jhutti-Johal OBE",
    date: "December 2024",
    slug: "women-of-faith-have-human-rights-too",
    excerpt:
      "Violence against women is a human rights violation and knows no national, cultural or faith barriers. The International Day for the Elimination of Violence against Women launched sixteen days of activism ending on International Human Rights Day. Women of faith are sometimes even doubly persecuted, firstly for being women and secondly within the traditions of their own faith groups.",
  },
  {
    title: "Women's Interfaith Work 'More Important Than Ever' Says Yvette Cooper",
    author: "Gaby Wine",
    date: "March 2024",
    slug: "womens-interfaith-work-more-important-than-ever",
    excerpt:
      "Shadow home secretary Yvette Cooper has said that women's interfaith work was now 'more important than ever'. Addressing the inaugural parliamentary Women's Faith Forum event, the MP said: 'Being here and being together is so important at a time when antisemitism is at a record high, and Islamophobia has trebled [since October 7].'",
  },
  {
    title: "Interfaith Week – How an MP can get the most out of it without tripping up",
    author: "Women's Faith Forum",
    date: "November 2024",
    slug: "interfaith-week",
    excerpt:
      "In all corners of the UK, the country's diverse and vibrant faith communities play a critical role in national life. MPs will be acutely aware of the huge contributions to society that faith and interfaith groups make on a daily basis...",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen relative">
      <WaveBackground />
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/#publications" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
            <span className="mr-1">←</span>
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Publications & Articles</h1>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-200 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-white/70">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <p className="text-white/90">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-300 hover:text-blue-200 hover:underline inline-block"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

