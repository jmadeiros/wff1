export interface Submission {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export interface BlogPost {
  title: string
  author: string
  date: string
  slug: string
  excerpt: string
  content?: string
}

export interface Event {
  title: string
  date: string
  location: string
  slug: string
  excerpt?: string
  description?: string
  content?: string
}

