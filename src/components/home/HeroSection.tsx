"use client"

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="flex flex-col items-center min-h-screen px-4">
      <div className="mt-[25vh] md:mt-[30vh] relative z-50">
        <h1 className="text-8xl font-bold mb-5 text-white text-center relative">
          <span className="relative z-50">Women's</span>
          <br />
          <span className="relative z-50">Faith Forum</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-2xl -z-10"></div>
        </h1>
        <p className="text-2xl mb-8 max-w-2xl mx-auto text-white/90 text-center relative z-50">
          Amplifying, connecting, and driving change
        </p>
      </div>
    </section>
  )
}

