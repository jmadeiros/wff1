import WaveBackground from "@/components/layout/WaveBackground"
import FloatingImages from "@/components/home/FloatingImages"
import Header from "@/components/layout/Header"
import HeroSection from "@/components/home/HeroSection"
import WhoWeAre from "@/components/home/WhoWeAre"
import EventsToDate from "@/components/home/EventsToDate"
import UpcomingEvents from "@/components/home/UpcomingEvents"
import Publications from "@/components/home/Publications"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <WaveBackground />
      <div className="relative min-h-screen">
        <FloatingImages />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <div id="about" className="pt-0">
            <WhoWeAre />
          </div>
          <div id="events">
            <UpcomingEvents />
            <EventsToDate />
          </div>
          <div id="publications">
            <Publications />
          </div>
          <div id="contact">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}

