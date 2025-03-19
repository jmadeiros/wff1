import Link from "next/link"
import WaveBackground from "@/components/layout/WaveBackground"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { Event } from "@/types"

// This would typically come from a database or CMS
const pastEvents: Event[] = [
  {
    title: "National Hate Crime Awareness Week",
    date: "October 18, 2024",
    location: "Parliament, London, UK",
    slug: "national-hate-crime-awareness-week",
    excerpt:
      "The publication of new hate crime figures from the Home Office was the background for an event in parliament hosted by the Women's Faith Forum as part of National Hate Crime Awareness Week. Attended by Sarah Sackman KC MP, Lord Khan, and over 50 women of faith, the event provided a platform to share experiences and initiatives around faith-based hate crime.",
  },
  {
    title: "Keeping Hatred off our Streets",
    date: "February 28, 2024",
    location: "Houses of Parliament, London, UK",
    slug: "keeping-hatred-off-our-streets",
    excerpt:
      "The Women's Faith Forum's inaugural event at the Houses of Parliament brought together women from diverse faith backgrounds to address the rise of Islamophobia and antisemitism in the UK. Hosted by MP Marsha de Cordova and featuring Shadow Home Secretary Yvette Cooper, the event focused on how women of faith can help heal divisions and combat hate.",
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen relative">
      <WaveBackground />
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/#events" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8">
            <span className="mr-1">←</span>
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-white mb-8">Past Events</h1>

          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">
                    <Link href={`/events/${event.slug}`} className="hover:text-blue-200 transition-colors">
                      {event.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-white/70">
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <span>{event.location}</span>
                  </div>
                  <p className="text-white/90">{event.excerpt}</p>
                  <Link
                    href={`/events/${event.slug}`}
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

