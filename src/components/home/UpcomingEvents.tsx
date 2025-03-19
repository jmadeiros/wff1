"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      title: "Women, Interfaith Dialogue and Global Conflicts",
      date: "March 24, 2025",
      location: "Virtual Event",
      description:
        "The overarching theme of the conference is to explore how global conflicts impact local community relations and the pivotal role women play in addressing these challenges. As leaders in the field of interfaith dialogue and community cohesion, women bring a wealth of experience, knowledge, and unique perspective to this conversation.\n\nThis conference provides an opportunity to showcase how women, through interfaith and multifaith collaborations, are creating spaces for dialogue, reconciliation, and sustained peace—particularly in the face of polarization and social division.",
    },
  ]

  return (
    <section className="py-16 pt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">{event.date}</p>
                <p className="text-white/80">The University of Birmingham</p>
                <div className="flex flex-col space-y-3">
                  <ReadMoreButton event={event} />
                  <InterestButton event={event} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReadMoreButton({ event }: { event: { title: string; description: string } }) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          className="text-blue-300 hover:text-blue-200 hover:underline p-0 h-auto font-normal justify-start"
        >
          Read More
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 backdrop-blur-md bg-black/80 border-white/20 text-white/90 shadow-lg">
        <div className="space-y-2">
          <h4 className="font-medium text-lg text-white">{event.title}</h4>
          <div className="text-sm text-white/90">
            {event.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function InterestButton({ event }: { event: { title: string; date: string; location: string; description: string } }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, you would send this data to your backend
    console.log("Registered interest for event:", event.title, "with email:", email)

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Auto close after successful submission after 3 seconds
    setTimeout(() => {
      if (isSubmitted) {
        setOpen(false)
        // Reset form after closing
        setTimeout(() => {
          setIsSubmitted(false)
          setEmail("")
        }, 300)
      }
    }, 3000)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset form when closing
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 300)
    }
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button className="bg-transparent text-white hover:bg-white/10 border-none">I'm Interested</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 backdrop-blur-md bg-black/30 border-white/20 shadow-lg" sideOffset={5}>
        {isSubmitted ? (
          <div className="flex flex-col items-center py-4">
            <div className="rounded-full bg-green-500/20 p-3 mb-4">
              <Check className="h-6 w-6 text-green-400" />
            </div>
            <p className="text-center text-white/90 font-medium">
              Thank you for your interest! We'll send you updates about this event.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-lg text-white">{event.title}</h4>
              <p className="text-sm text-white/70">
                Register your interest for this event and we'll keep you updated with details.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/90">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-white/10 hover:bg-white/20 text-white">
                {isSubmitting ? "Submitting..." : "Register your interest"}
              </Button>
            </form>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

