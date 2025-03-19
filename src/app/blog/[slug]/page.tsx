import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import WaveBackground from "@/components/layout/WaveBackground"
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib/api/blog"

interface BlogPostParams {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen relative">
      <WaveBackground />
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to All Publications
          </Link>

          <article className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{post.title}</h1>
              <div className="text-white/70">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </header>

            <div
              className="prose prose-invert prose-lg max-w-none text-white/90"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </article>
        </div>
      </div>
    </main>
  )
}

