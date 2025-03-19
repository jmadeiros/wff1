import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import WaveBackground from "@/components/layout/WaveBackground"
import { notFound } from "next/navigation"
import { getEventBySlug } from "@/lib/api/events"

export default async function EventPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const event = await getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen relative">
      <WaveBackground />
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/events" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to All Events
          </Link>

          <article className="bg-white/10 backdrop-blur-md p-8 rounded-lg">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
              <div className="text-white/70">
                <span>{event.date}</span>
                <span className="mx-2">•</span>
                <span>{event.location}</span>
              </div>
            </header>

            <div
              className="prose prose-invert prose-lg max-w-none text-white/90"
              dangerouslySetInnerHTML={{ __html: event.content || "" }}
            />
          </article>
        </div>
      </div>
    </main>
  )
}

