import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import WaveBackground from "@/components/layout/WaveBackground"
import { notFound } from "next/navigation"
import { getEventBySlug } from "@/lib/api/events"
import { events } from "@/lib/events"

// Generate static params for all events
export async function generateStaticParams() {
  // Generate params for all event slugs
  return Object.keys(events).map(slug => ({
    slug
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function EventPage({ params }: PageProps) {
  const resolvedParams = await params
  
  if (!resolvedParams?.slug) {
    notFound()
  }

  const event = await getEventBySlug(resolvedParams.slug)

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
              <div className="text-white/70 mb-2">
                <span>{event.date}</span>
                <span className="mx-2">•</span>
                <span>{event.location}</span>
              </div>
              <h1 className="text-3xl font-bold text-white">{event.title}</h1>
            </header>

            <div
              className="prose prose-invert prose-lg max-w-none text-white/90 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-16 [&>h2]:mb-8 [&>p]:mb-6 [&>img]:block [&>img]:max-w-full"
              dangerouslySetInnerHTML={{ __html: event.content || "" }}
            />
          </article>
        </div>
      </div>
    </main>
  )
}

