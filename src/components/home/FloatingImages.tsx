"use client"

import Image from "next/image"

export default function FloatingImages() {
  return (
    <div className="absolute left-0 right-0 top-[20vh] h-[70vh] pointer-events-none overflow-hidden z-10">
      <div className="absolute top-[10%] left-[22%] w-[300px] animate-float-1 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WFF5.jpg-9CQt8kE9ffJXOR0beaZsbSqp5RIyTD.jpeg"
          alt="Women's Faith Forum meeting"
          width={400}
          height={300}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute top-[2%] right-[25%] w-[320px] animate-float-2 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WWF1.jpg-mDSJ2H4snJdJxo5v0t05HnB8d1leoP.jpeg"
          alt="Panel discussion"
          width={500}
          height={300}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute bottom-[16%] left-[27%] w-[300px] animate-float-3 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WWF%203.jpg-6iVUPcAHbPmQ8zmRmH3WofTZ6K1lhr.jpeg"
          alt="Speaker at Women's Faith Forum"
          width={350}
          height={450}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute top-[36%] left-[12%] w-[280px] animate-float-4 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wff%208.jpg-VjaROc5EiZb5bgJoS6Q6s4d7GziEUX.jpeg"
          alt="Group meeting"
          width={400}
          height={300}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute bottom-[10%] right-[27%] w-[290px] animate-float-5 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WWF%202.jpg-IcLE3qyQkvVJgSmmZHd4YENHQsmECD.jpeg"
          alt="Women's Faith Forum group discussion"
          width={400}
          height={300}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute top-[40%] right-[12%] w-[310px] animate-float-6 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WWF%204.jpg-58gILeypHljgGFuBdiyYkqh8t4I62t.jpeg"
          alt="Women's Faith Forum presentation"
          width={450}
          height={300}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute top-[1%] left-[40%] w-[280px] animate-float-1 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WF11.jpg-Xn2FRZG8gz7dgQMl6CN8anECUTuBP7.jpeg"
          alt="Parliamentary discussion"
          width={400}
          height={300}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute bottom-[33%] right-[38%] w-[300px] animate-float-2 will-change-transform">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WWF10.jpg-mNZtlqJtuXnFeqgOofD1MnYywDxRVt.jpeg"
          alt="Full room session"
          width={500}
          height={300}
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  )
}

