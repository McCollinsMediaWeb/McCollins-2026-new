import React from "react";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import DashboardClient from "./DashboardClient";

export default async function AdminDashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/admin/login");
  }

  const client = await clientPromise;
  const db = client.db("MccollinsMedia");

  // Fetch blogs data
  const blogsData = await db.collection("blogs").find({}).toArray();
  const blogs = blogsData.map((blog) => ({
    _id: blog._id.toString(),
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
    arabicTitle: blog.arabicTitle || "",
    arabicDescription: blog.arabicDescription || "",
    createdAt: blog.createdAt ? new Date(blog.createdAt).toISOString() : undefined,
  }));

  // Fetch blogs categories data
  const categoriesData = await db.collection("blogs-category").find({}).toArray();
  const categories = categoriesData.map((cat) => ({
    _id: cat._id.toString(),
    name: cat.name || "",
  }));

  // Fetch meta tags data
  const metaTagsData = await db.collection("meta").find({}).toArray();
  const metaTags = metaTagsData.map((meta) => ({
    _id: meta._id.toString(),
    name: meta.name || "",
    content: meta.content || "",
  }));

  // Fetch portfolios data
  const portfoliosData = await db.collection("portfolio").find({}).toArray();
  const portfolios = portfoliosData.map((item) => ({
    _id: item._id.toString(),
    title: item.title || "Untitled Portfolio",
    image: item.image || "",
  }));

  // Fetch testimonials data
  const testimonialsData = await db.collection("testimonials").find({}).toArray();
  const testimonials = testimonialsData.map((item) => ({
    _id: item._id.toString(),
    name: item.name || "Anonymous",
    testimonial: item.testimonial || item.statement || "",
    company: item.company || "",
  }));

  // Fetch contact form submissions
  const submissionsData = await db
    .collection("formSubmit")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
  const submissions = submissionsData.map((sub) => ({
    _id: sub._id.toString(),
    name: sub.name || "",
    firstName: sub.firstName || "",
    lastName: sub.lastName || "",
    email: sub.email || "",
    contact: sub.contact || "",
    phone: sub.phone || "",
    company: sub.company || "",
    jobTitle: sub.jobTitle || "",
    services: sub.services || "",
    message: sub.message || "",
    text: sub.text || "",
    date: sub.date ? new Date(sub.date).toISOString() : undefined,
    createdAt: sub.createdAt ? new Date(sub.createdAt).toISOString() : undefined,
  }));

  // Sort submissions: latest first (checking both date and createdAt)
  submissions.sort((a, b) => {
    const dateA = new Date(a.date || a.createdAt || 0).getTime();
    const dateB = new Date(b.date || b.createdAt || 0).getTime();
    return dateB - dateA;
  });

  const stats = {
    blogsCount: blogs.length,
    portfolioCount: portfolios.length,
    testimonialsCount: testimonials.length,
    submissionsCount: submissions.length,
    categoriesCount: categories.length,
    metaTagsCount: metaTags.length,
  };

  const user = {
    email: (session.email as string) || "",
    name: (session.name as string) || "Admin",
  };

  // Parse cluster domain from MONGODB_URI
  const mongoUri = process.env.MONGODB_URI || "";
  let dbCluster = "";
  try {
    const match = mongoUri.match(/@([^/\\?#\s]+)/);
    if (match && match[1]) {
      dbCluster = match[1];
    }
  } catch (e) {
    // Ignore parsing errors
  }

  return (
    <DashboardClient
      user={user}
      stats={stats}
      submissions={submissions}
      blogs={blogs}
      categories={categories}
      metaTags={metaTags}
      portfolios={portfolios}
      testimonials={testimonials}
      dbCluster={dbCluster}
    />
  );
}
