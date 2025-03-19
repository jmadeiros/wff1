import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function EventsToDate() {
  const pastEvents = [
    {
      title: "National Hate Crime Awareness Week",
      date: "October 18, 2024",
      slug: "national-hate-crime-awareness-week",
    },
    {
      title: "Keeping Hatred off our Streets",
      date: "February 28, 2024",
      slug: "keeping-hatred-off-our-streets",
    },
    {
      title: "Interfaith Women's Conference 2023",
      date: "March 15, 2023",
      slug: "interfaith-womens-conference-2023",
    },
  ]

  return (
    <section className="py-16 backdrop-blur-md bg-black/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Events to Date</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white/80">{event.date}</p>
                {index !== 2 ? (
                  <Link href={`/events/${event.slug}`} className="text-blue-300 hover:text-blue-200 hover:underline">
                    Read More
                  </Link>
                ) : (
                  <span className="text-white/50">Coming soon</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/events" className="text-blue-300 hover:text-blue-200 hover:underline">
            View All Past Events
          </Link>
        </div>
      </div>
    </section>
  )
}

