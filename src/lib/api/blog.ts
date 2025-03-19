import { BlogPost } from "@/types"
import { blogPosts } from "@/lib/blog"

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  return Object.values(blogPosts)
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPosts[slug] || null
} 