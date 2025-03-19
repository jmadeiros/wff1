"use client"

import React from "react"
import Image from "next/image"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setIsVisible(false)
        } else {
          // if scroll up show the navbar
          setIsVisible(true)
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const aboutItems = [
    {
      title: "Our Mission",
      description: "Ensuring the voices of women are better heard amongst policy makers.",
      href: "#about",
    },
    {
      title: "Common Ground",
      description: "Focusing on shared faith and gender rather than differences between faiths.",
      href: "#about",
    },
    {
      title: "Community Impact",
      description: "Supporting communities through empathetic and collaborative approaches.",
      href: "#about",
    },
  ]

  const eventItems = [
    {
      title: "Events to Date",
      description: "Browse through our successful past events like National Hate Crime Awareness Week.",
      href: "#events",
    },
    {
      title: "Upcoming Events",
      description: "Join our future events such as Women, Interfaith Dialogue and Global Conflicts.",
      href: "#events",
    },
    {
      title: "Past Conferences",
      description: "Learn about our previous interfaith conferences and gatherings.",
      href: "#events",
    },
  ]

  const publicationItems = [
    {
      title: "Interfaith Articles",
      description: "Read our insights on interfaith dialogue and women's roles in faith communities.",
      href: "#publications",
    },
    {
      title: "Policy Papers",
      description: "Explore our publications on faith communities and policy making.",
      href: "#publications",
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-start max-w-full w-full mx-auto px-6">
        <Link href="/" className="w-60 h-auto opacity-80 hover:opacity-100 transition-opacity -ml-16 -mt-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20%281%29-Photoroom-ju2Rm36oxVa9U3lWME0OA7WxsCmvCV.png"
            alt="Women's Faith Forum"
            width={240}
            height={300}
            className="w-full h-auto filter invert brightness-200 object-cover object-left"
            style={{ clipPath: "inset(0 25% 0 0)" }} // This crops 25% from the right side
          />
        </Link>
        <NavigationMenu className="-mt-1">
          <NavigationMenuList className="flex items-center pt-3">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/30 backdrop-blur-md">
                <ul className="grid gap-2 p-4 md:w-[350px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/20 to-purple-900/20 p-4 no-underline outline-none focus:shadow-md"
                        href="#about"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection("about")
                        }}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Women's Faith Forum</div>
                        <p className="text-sm leading-tight text-white/90">
                          A group of women from major faiths working together to ensure women's voices are heard in
                          policy making.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {aboutItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href.replace("#", ""))
                      }}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/30 backdrop-blur-md">
                <ul className="grid gap-2 p-4 md:w-[350px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/20 to-red-900/20 p-4 no-underline outline-none focus:shadow-md"
                        href="#events"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection("events")
                        }}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Our Events</div>
                        <p className="text-sm leading-tight text-white/90">
                          Join our community gatherings, workshops, and conferences designed to bring women of faith
                          together.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {eventItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href.replace("#", ""))
                      }}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10">
                Publications
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-black/30 backdrop-blur-md">
                <ul className="grid gap-2 p-4 md:w-[350px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-purple-900/20 p-4 no-underline outline-none focus:shadow-md"
                        href="#publications"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection("publications")
                        }}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Our Publications</div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore our collection of articles, research papers, and insights from women of different
                          faiths.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {publicationItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href.replace("#", ""))
                      }}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className={cn(navigationMenuTriggerStyle(), "text-white bg-transparent hover:bg-white/10")}>
                    Contact
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 backdrop-blur-md bg-black/30 border-white/20 shadow-lg">
                  <div className="space-y-4 p-2">
                    <h3 className="font-medium text-lg text-white">Contact Us</h3>
                    <div className="space-y-2">
                      <p className="text-white/90">
                        Email:{" "}
                        <a href="mailto:info@womensfaithforum.com" className="text-blue-300 hover:text-blue-200">
                          info@womensfaithforum.com
                        </a>
                      </p>
                      <p className="text-white/90">
                        Twitter:{" "}
                        <a
                          href="https://x.com/W_faith_forum"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-200"
                        >
                          @W_faith_forum
                        </a>
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-sm text-white/70">
                        For general enquiries or to get involved with our initiatives, please don't hesitate to reach
                        out.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-0.5 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-white focus:bg-white/10 focus:text-white",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-white/70">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

