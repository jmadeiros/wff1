import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import WaveBackground from "@/components/layout/WaveBackground"
import { notFound } from "next/navigation"
import { getEventBySlug } from "@/lib/api/events"
import { events } from "@/lib/events"
import Image from "next/image"

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

  const isHateCrimeEvent = resolvedParams.slug === "national-hate-crime-awareness-week"
  
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

            {isHateCrimeEvent ? (
              <div className="text-white text-lg">
                <div className="bg-gradient-to-b from-red-500 to-purple-600 py-6 px-4 -mx-4 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Event Overview</h2>
                  <p className="mb-6">The publication of new hate crime figures from the Home Office was the background for an event in parliament on 15th October, hosted by the Women's Faith Forum as part of National Hate Crime Awareness Week.</p>
                  
                  <p className="mb-6">Whilst hate crime overall had declined slightly this year, the figures showed the highest annual count in religious hate crime offences since the department began collecting data in 2012, driven by anti-Jewish and anti-Muslim hate crime.</p>
                </div>
                
                <div className="bg-gradient-to-b from-purple-600 to-blue-500 py-6 px-4 -mx-4 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Distinguished Attendees</h2>
                  <p className="mb-6">Hosted by Sarah Sackman KC MP, Solicitor General, and attended by Lord Khan, Minister for Faith, the event in parliament was attended by over 50 women of faith from civil society organisations and joined by 6 parliamentarians. It provided an opportunity to share lived experiences, initiatives, and the demands of civil society around faith-based hate crime.</p>
                  
                  <div className="my-8">
                    <img 
                      src="/images/events/national-hate-crime-awareness-week.jpg" 
                      alt="Women's Faith Forum members and parliamentarians at the National Hate Crime Awareness Week event"
                      className="w-full"
                    />
                  </div>
                  
                  <p className="mb-6">Ms Sackman told the meeting of the Women's Faith Forum that raising awareness of hate crime and the presence of the meeting in itself was an act of hope. Ms Sackman's call to the meeting was that the Britain represented in the forum should be the Britain we should want to be part of.</p>
                  
                  <p className="mb-6">She said, "I was inspired to join the incredible Women's Faith Forum & help set out this government's agenda for tackling Hate Crime. From education to law enforcement, you have a commitment from us to address the rise we've seen in religiously motivated attacks."</p>
                </div>
                
                <div className="bg-blue-500 py-6 px-4 -mx-4 mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Parliamentary Support</h2>
                  <p className="mb-6">The event was attended by parliamentarians from Jewish, Christian, Sikh and Muslim traditions and, additionally featured speakers from all faiths and none.</p>
                  
                  <p className="mb-6">Christine Jardine MP Lib Dem (Edinburgh West) and Spokesperson for Women and Equalities said that we are standing at a very difficult point in history with the explosion of Islamophobia and antisemitism. She urged the women to talk openly about it and to act in their communities. She also said the police need to be trusted to respond swiftly and that MPs must play their role by watching their words and setting a constructive tone for public debate.</p>
                  
                  <p className="mb-6">Laura Marks, co-founder of the Women's Faith Forum said, "The women of Britain are particularly vulnerable to hate crime and equally, hold the key to understanding ways to address it. The Women's Faith Forum allows the often unheard but highly effective voices of the women of the faith communities, to be heard by policy makers and to change the national narrative."</p>
                </div>
                
                <div className="bg-blue-500 py-6 px-4 -mx-4">
                  <h2 className="text-2xl font-semibold mb-4">Community Voices</h2>
                  <p className="mb-6">Kirith Entwistle MP, Labour (Bolton North East) encouraged members to keep putting themselves forward and to be proud of their faith identity. She urged the attendees to ensure that the fire of hate crime is not allowed to be ignited.</p>
                  
                  <p className="mb-6">Anna Dixon MP Labour (Shipley) spoke about Bradford's long and well-established history as a city of sanctuary following the race riots in 2001 and the formation of the Bradford Hate Crime Alliance.</p>
                  
                  <p className="mb-6">Other MPs attending and speaking were Preet Kaur Gill MP for Birmingham Edgbaston, who spoke movingly about her own experiences of hate crime, and Satvir Kaur MP for Southampton.</p>
                  
                  <p className="mb-6">Hadiya Masieh, Founder and Executive Director of The Groundswell Project, said: "As we map hatred, we must also map kindness. In the darkness of hate crime haters divide – we must unify. We must promote kindness at all costs."</p>
                  
                  <p className="mb-6">Rev'd Lucy Winkett, Priest, St James Piccadilly reflected on how this year marks the 30th year of the anniversary of the ordination of women in the CofE when there had been an explosion of hate against women and the role of women in leadership. She had felt vulnerable going out into the street with her collar on but she encouraged women in religious circles to keep on moving from the private to the public – to lead, to teach, to be visible – to promote compassion and inclusion. "We cannot leave the interpretation of our scriptures to others."</p>
                </div>
              </div>
            ) : (
              <div
                className="prose prose-invert prose-lg max-w-none text-white/90 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-16 [&>h2]:mb-8 [&>p]:mb-6 [&>img]:block [&>img]:max-w-full"
                dangerouslySetInnerHTML={{ __html: event.content || "" }}
              />
            )}
          </article>
        </div>
      </div>
    </main>
  )
}

