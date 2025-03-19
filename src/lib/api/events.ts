import { Event } from "@/types"
import { events } from "@/lib/events"

// Get all events
export async function getEvents(): Promise<Event[]> {
  return Object.values(events)
}

// Get a single event by slug
export async function getEventBySlug(slug: string): Promise<Event | null> {
  return events[slug] || null
} 