import { Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-16 pt-24 backdrop-blur-md bg-black/30 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-white">Women's Faith Forum</h3>
            <p className="text-white/80">Amplifying, connecting, and driving change</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://x.com/W_faith_forum"
              className="text-white hover:text-white/80"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white/60">&copy; 2024 Women's Faith Forum. All rights reserved.</p>
          <p className="text-white/60 mt-2">
            Contact:{" "}
            <a href="mailto:info@womensfaithforum.com" className="hover:text-white/80">
              info@womensfaithforum.com
            </a>
          </p>
        </div>
      </div>
      <div className="absolute bottom-2 left-4">
        <p className="text-[0.8125rem] text-white/40">
          powered by{" "}
          <a
            href="https://www.scailer.io"
            className="hover:text-white/60 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            scailer
          </a>
        </p>
      </div>
    </footer>
  )
}

