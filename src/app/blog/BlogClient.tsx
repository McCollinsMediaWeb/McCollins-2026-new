"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";

interface Article {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  tags: string;
  theme: "dark" | "light";
  blogUrl: string;
  photo?: string;
}

interface BlogClientProps {
  initialBlogs: any[];
}

const CATEGORIES = [
  "All",
  "AI Search",
  "SEO / GEO / AEO",
  "Automation",
  "Social Media",
  "Branding",
  "GCC Growth",
];

export default function BlogClient({ initialBlogs }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const POSTS_PER_PAGE = 6;

  // Transform backend blogs into displayable Articles
  const articles: Article[] = initialBlogs.map((blog, index) => {
    const wordCount = (blog.content || "").trim().split(/\s+/).length;
    const readTimeVal = Math.max(3, Math.ceil(wordCount / 200));
    const themeVal = index % 3 === 0 ? "light" : "dark";

    return {
      id: blog.id || blog._id,
      number: (index + 1).toString().padStart(2, "0"),
      category: blog.category || "Marketing",
      title: blog.title || "Untitled Blog Story",
      description: blog.shortContent || blog.description || "Read our latest thoughts and insights from the team.",
      readTime: `${readTimeVal} min read`,
      tags: blog.tags || "MCC Insights",
      theme: themeVal,
      blogUrl: blog.blogUrl || "",
      photo: blog.photo || ""
    };
  });

  // Featured Article is always the latest one (index 0) if it matches selection
  const latestArticle = articles[0];
  const hasArticles = articles.length > 0;

  const showFeatured = hasArticles && (
    selectedCategory === "All" || 
    selectedCategory.toLowerCase() === latestArticle.category.toLowerCase()
  );

  // Filter latest thinking articles (excluding the featured one)
  const filteredGridArticles = articles.filter((article, index) => {
    if (index === 0 && hasArticles) return false; // Exclude featured article from grid list

    if (selectedCategory === "All") return true;

    if (selectedCategory === "SEO / GEO / AEO") {
      const lower = article.category.toLowerCase();
      return ["seo", "geo", "aeo", "ai citations", "positioning"].some(cat => lower.includes(cat));
    }

    return article.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const handleCardClick = (blogUrl: string, id: string) => {
    // Navigate using blogUrl slug if present, otherwise ID
    const path = blogUrl ? `/blog/${blogUrl}` : `/blog/${id}`;
    router.push(path);
  };

  const totalPages = Math.ceil(filteredGridArticles.length / POSTS_PER_PAGE);
  const paginatedArticles = filteredGridArticles.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className={styles.blogContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>MCC INSIGHTS / AI SEARCH, SOCIAL & GROWTH</span>
          <h1 className={styles.heroHeading}>
            Marketing clarity for the AI-shaped buyer journey.
          </h1>
          <p className={styles.heroDesc}>
            A premium blog hub for UAE and GCC brands navigating AI discovery, SEO, AEO, GEO, content systems, creator strategy, automation, and digital growth.
          </p>
          <a href="/contact" className={styles.strategistBtn}>
            Talk to a strategist
          </a>
        </div>

        {/* Hero Banner Featured card (Right Column) */}
        {hasArticles && (
          <div 
            className={styles.featuredCard} 
            onClick={() => handleCardClick(latestArticle.blogUrl, latestArticle.id)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.featuredCardNumber}>01</div>
            <span className={styles.featuredCardTag}>LATEST INSIGHT</span>
            <h2 className={styles.featuredCardTitle}>
              {latestArticle.title}
            </h2>
            <p className={styles.featuredCardDesc}>
              {latestArticle.description}
            </p>
            <div className={styles.visibilityBadge}>
              {latestArticle.category}
            </div>
          </div>
        )}
      </section>

      {/* Explorer / Category Section */}
      <section className={styles.exploreSection}>
        <div className={styles.exploreContainer}>
          <h2 className={styles.exploreTitle}>Explore by decision moment</h2>
          <p className={styles.exploreDesc}>
            Built for buyers who search, compare, ask AI, check LinkedIn, and then shortlist.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.filterPillsRow}>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`${styles.filterPill} ${selectedCategory === category ? styles.activePill : ""}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article Card (01) */}
          {showFeatured && (
            <div 
              className={styles.articleCard}
              onClick={() => handleCardClick(latestArticle.blogUrl, latestArticle.id)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.cardGraphicBox}>
                {latestArticle.photo ? (
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      src={latestArticle.photo}
                      alt={latestArticle.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  <div>
                    <div className={styles.graphicLine}></div>
                    <div className={styles.graphicTitle}>{latestArticle.category.toUpperCase()}</div>
                    <div className={styles.graphicSubtext}>{latestArticle.tags}</div>
                  </div>
                )}
              </div>

              <div className={styles.cardContentBox}>
                <div>
                  <span className={styles.cardBadge}>Featured</span>
                  <h3 className={styles.cardTitle}>{latestArticle.title}</h3>
                  <p className={styles.cardDesc}>
                    {latestArticle.description}
                  </p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.cardMeta}>
                    {latestArticle.category} &bull; {latestArticle.readTime} &bull; {latestArticle.tags}
                  </span>
                  <button className={styles.readBtn}>Read article</button>
                </div>
              </div>
            </div>
          )}

          {/* Latest Thinking Section */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Latest thinking</h2>
            <p className={styles.sectionDesc}>
              A structured library of our stories and guides fetched live from the backend.
            </p>
          </div>

          {/* Vertical Cards Grid */}
          <div className={styles.gridList}>
            {paginatedArticles.length > 0 ? (
              paginatedArticles.map((article) => (
                <div 
                  key={article.id} 
                  className={styles.gridCard}
                  onClick={() => handleCardClick(article.blogUrl, article.id)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Card top graphic block */}
                  <div className={`${styles.cardTopBlock} ${article.theme === "dark" ? styles.cardTopBlockDark : styles.cardTopBlockLight}`}>
                    {article.photo ? (
                      <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <Image
                          src={article.photo}
                          alt={article.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ) : (
                      <>
                        <div className={styles.topBlockLine}></div>
                        <div className={styles.topBlockNumber}>{article.number}</div>
                      </>
                    )}
                  </div>

                  {/* Card content body */}
                  <div className={styles.cardBody}>
                    <div>
                      <span className={styles.cardBodyTag}>{article.category}</span>
                      <h3 className={styles.cardBodyTitle}>{article.title}</h3>
                      <p className={styles.cardBodyDesc}>{article.description}</p>
                    </div>

                    <div className={styles.cardBodyFooter}>
                      <span className={styles.cardBodyMeta}>
                        {article.readTime} &bull; {article.tags}
                      </span>
                      <span className={styles.cardBodyArrow}>↗</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noData}>No articles found in this category.</div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button 
                className={styles.pageBtn} 
                onClick={() => {
                  setCurrentPage(prev => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
              >
                &larr; Prev
              </button>
              
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`${styles.pageBtn} ${currentPage === index + 1 ? styles.activePageBtn : ""}`}
                  onClick={() => {
                    setCurrentPage(index + 1);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                className={styles.pageBtn} 
                onClick={() => {
                  setCurrentPage(prev => Math.min(prev + 1, totalPages));
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
              >
                Next &rarr;
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
