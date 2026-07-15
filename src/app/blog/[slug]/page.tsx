import React from "react";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>;
}

function renderBlogContent(content: string) {
  if (!content) return null;
  try {
    const raw = JSON.parse(content);
    if (raw && Array.isArray(raw.blocks)) {
      return raw.blocks.map((block: any, idx: number) => {
        if (!block.text || !block.text.trim()) return null;
        if (block.type === 'header-one') return <h1 key={idx} className={styles.contentH1}>{block.text}</h1>;
        if (block.type === 'header-two') return <h2 key={idx} className={styles.contentH2}>{block.text}</h2>;
        if (block.type === 'header-three') return <h3 key={idx} className={styles.contentH3}>{block.text}</h3>;
        if (block.type === 'unordered-list-item') return <li key={idx} className={styles.contentLi}>{block.text}</li>;
        return <p key={idx} className={styles.contentParagraph}>{block.text}</p>;
      });
    }
  } catch (e) {
    // Treat as plain text / HTML string
  }
  return <div className={styles.htmlContent} dangerouslySetInnerHTML={{ __html: content }} />;
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;
  const client = await clientPromise;
  const db = client.db("MccollinsMedia");

  // Query blog by blogUrl (slug) first, then try ObjectId
  let blog = await db.collection("blogs").findOne({ blogUrl: slug });
  if (!blog) {
    try {
      blog = await db.collection("blogs").findOne({ _id: new ObjectId(slug) });
    } catch (err) {
      // Ignore conversion errors
    }
  }

  if (!blog) {
    notFound();
  }

  // Query recent posts (excluding current post)
  const recentPostsData = await db
    .collection("blogs")
    .find({ _id: { $ne: blog._id } })
    .sort({ createdAt: -1, date: -1 })
    .limit(5)
    .toArray();

  const recentPosts = recentPostsData.map((rp) => ({
    id: rp._id.toString(),
    title: rp.title || "",
    blogUrl: rp.blogUrl || "",
    date: rp.date || (rp.createdAt ? new Date(rp.createdAt).toLocaleDateString() : ""),
    photo: rp.photo || ""
  }));

  const blogDate = blog.date || (blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "N/A");

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link> &gt; <Link href="/blog">Insights</Link> &gt; <span>{blog.title}</span>
        </nav>

        {/* Hero Section */}
        <header className={styles.header}>
          <span className={styles.categoryBadge}>{blog.category || "General"}</span>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.metaRow}>
            {blog.author && <span className={styles.metaItem}>By <strong>{blog.author}</strong></span>}
            <span className={styles.metaItem}>Published: <strong>{blogDate}</strong></span>
          </div>
        </header>

        {/* Layout Column: Side-by-side details */}
        <div className={styles.contentLayout}>
          {/* Main article body */}
          <article className={styles.mainArticle}>
            {/* Banner image */}
            {blog.photo && (
              <div className={styles.bannerWrapper}>
                <Image
                  src={blog.photo}
                  alt={blog.title}
                  fill
                  priority
                  className={styles.bannerImage}
                />
              </div>
            )}

            {/* Video embed if present */}
            {blog.video && (
              <div className={styles.videoWrapper}>
                <iframe
                  src={blog.video.replace("watch?v=", "embed/")}
                  title="Blog Video Embed"
                  allowFullScreen
                  className={styles.videoIFrame}
                />
              </div>
            )}

            {/* Rendered content */}
            <div className={styles.contentBody}>
              {renderBlogContent(blog.content || blog.shortContent || "")}
            </div>
          </article>

          {/* Sidebar: Recent posts */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Recent Insights</h3>
              <div className={styles.recentList}>
                {recentPosts.length > 0 ? (
                  recentPosts.map((rp) => (
                    <Link key={rp.id} href={rp.blogUrl ? `/blog/${rp.blogUrl}` : `/blog/${rp.id}`} className={styles.recentItem}>
                      {rp.photo && (
                        <div className={styles.recentThumb}>
                          <Image
                            src={rp.photo}
                            alt={rp.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      )}
                      <div className={styles.recentDetails}>
                        <span className={styles.recentDate}>{rp.date}</span>
                        <h4 className={styles.recentItemTitle}>{rp.title}</h4>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className={styles.noRecent}>No recent articles found.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
