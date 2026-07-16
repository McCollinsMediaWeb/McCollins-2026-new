import React from "react";
import clientPromise from "@/lib/mongodb";
import BlogClient from "./BlogClient";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | McCollins Media",
  description: "Latest digital marketing insights, strategies, SEO tips and social media trends from McCollins Media.",
  alternates: {
    canonical: "https://www.mccollinsmedia.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function BlogPage() {
  const client = await clientPromise;
  const db = client.db("MccollinsMedia");

  // Query live blogs from database
  const blogsData = await db.collection("blogs").find({}).toArray();

  const blogs = blogsData.map((blog) => ({
    id: blog._id.toString(),
    title: blog.title || "",
    SEOtitle: blog.SEOtitle || "",
    date: blog.date || "",
    blogUrl: blog.blogUrl || "",
    category: blog.category || "",
    author: blog.author || "",
    photo: blog.photo || "",
    video: blog.video || "",
    tags: blog.tags || "",
    keywords: blog.keywords || "",
    description: blog.description || "",
    shortContent: blog.shortContent || "",
    content: blog.content || "",
    createdAt: blog.createdAt ? new Date(blog.createdAt).toISOString() : undefined,
  }));

  // Sort blogs: latest first (checking both date and createdAt)
  blogs.sort((a, b) => {
    const dateA = new Date(a.date || a.createdAt || 0).getTime();
    const dateB = new Date(b.date || b.createdAt || 0).getTime();
    return dateB - dateA;
  });

  return <BlogClient initialBlogs={blogs} />;
}
