"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./admin.module.css";
import RichTextEditor from "@/components/RichTextEditor";

interface Submission {
  _id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  contact?: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  services?: string;
  message?: string;
  text?: string;
  date?: string;
  createdAt?: string;
  pageUrl?: string;
  source?: string;
}

interface PortfolioItem {
  _id: string;
  title: string;
  image: string;
}

interface TestimonialItem {
  _id: string;
  name: string;
  testimonial: string;
  company?: string;
}

interface CategoryItem {
  _id: string;
  name: string;
}

interface MetaTagItem {
  _id: string;
  name: string;
  content: string;
}

interface BlogFormFields {
  title: string;
  SEOtitle: string;
  date: string;
  blogUrl: string;
  category: string;
  author: string;
  photo: string;
  video: string;
  tags: string;
  keywords: string;
  description: string;
  shortContent: string;
  content: string;
  arabicTitle: string;
  arabicDescription: string;
}

interface BlogItem {
  _id: string;
  title: string;
  SEOtitle?: string;
  date?: string;
  blogUrl?: string;
  category?: string;
  author?: string;
  photo?: string;
  video?: string;
  tags?: string;
  keywords?: string;
  description?: string;
  shortContent?: string;
  content?: string;
  arabicTitle?: string;
  arabicDescription?: string;
  createdAt?: string;
}

interface WhatsAppLead {
  _id: string;
  name: string;
  phone: string;
  source?: string;
  pageUrl?: string;
  createdAt?: string;
}

interface DashboardClientProps {
  user: { email: string; name: string };
  stats: {
    blogsCount: number;
    portfolioCount: number;
    testimonialsCount: number;
    submissionsCount: number;
    whatsappLeadsCount?: number;
    categoriesCount: number;
    metaTagsCount: number;
  };
  submissions: Submission[];
  whatsappLeads?: WhatsAppLead[];
  blogs: BlogItem[];
  categories: CategoryItem[];
  metaTags: MetaTagItem[];
  portfolios: PortfolioItem[];
  testimonials: TestimonialItem[];
  dbCluster?: string;
}

type TabType = "overview" | "submissions" | "whatsappLeads" | "blogs" | "categories" | "metaTags" | "portfolios" | "testimonials";

export default function DashboardClient({
  user,
  stats,
  submissions: initialSubmissions,
  whatsappLeads: initialWhatsappLeads = [],
  blogs: initialBlogs,
  categories: initialCategories,
  metaTags: initialMetaTags,
  portfolios,
  testimonials,
  dbCluster,
}: DashboardClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  
  // Lists state
  const [submissionsList, setSubmissionsList] = useState<Submission[]>(initialSubmissions);
  const [whatsappLeadsList, setWhatsappLeadsList] = useState<WhatsAppLead[]>(initialWhatsappLeads);
  const [blogsList, setBlogsList] = useState<BlogItem[]>(initialBlogs);
  const [categoriesList, setCategoriesList] = useState<CategoryItem[]>(initialCategories);
  const [metaTagsList, setMetaTagsList] = useState<MetaTagItem[]>(initialMetaTags);

  const [searchQuery, setSearchQuery] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  // Modals state
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [categoryFormName, setCategoryFormName] = useState("");

  const [showAddMetaModal, setShowAddMetaModal] = useState(false);
  const [showEditMetaModal, setShowEditMetaModal] = useState(false);
  const [selectedMetaTag, setSelectedMetaTag] = useState<MetaTagItem | null>(null);
  const [metaFormName, setMetaFormName] = useState("");
  const [metaFormContent, setMetaFormContent] = useState("");

  const [showAddBlogModal, setShowAddBlogModal] = useState(false);
  const [showEditBlogModal, setShowEditBlogModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  const initialBlogForm: BlogFormFields = {
    title: "",
    SEOtitle: "",
    date: "",
    blogUrl: "",
    category: "",
    author: "",
    photo: "",
    video: "",
    tags: "",
    keywords: "",
    description: "",
    shortContent: "",
    content: "",
    arabicTitle: "",
    arabicDescription: ""
  };
  const [blogForm, setBlogForm] = useState(initialBlogForm);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (response.ok) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleBlogFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "blogUrl") {
      const slugified = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumeric except space and hyphen
        .replace(/\s+/g, "-");        // replace spaces with hyphens
      setBlogForm(prev => ({ ...prev, [name]: slugified }));
    } else {
      setBlogForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // Submission Delete
  const handleDeleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/form-submit", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmissionsList((prev) => prev.filter((sub) => sub._id !== id));
      } else {
        alert(data.error || "Failed to delete submission");
      }
    } catch (err) {
      alert("Failed to delete submission. Server error.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteWhatsAppLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this WhatsApp lead?")) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/whatsapp-lead", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok) {
        setWhatsappLeadsList((prev) => prev.filter((lead) => lead._id !== id));
      } else {
        alert(data.error || "Failed to delete WhatsApp lead");
      }
    } catch (err) {
      alert("Server connection failed");
    } finally {
      setDeletingId(null);
    }
  };

  // Filter WhatsApp Leads
  const filteredWhatsappLeads = whatsappLeadsList.filter((lead) => {
    const query = searchQuery.toLowerCase();
    return (
      (lead.name && lead.name.toLowerCase().includes(query)) ||
      (lead.phone && lead.phone.toLowerCase().includes(query)) ||
      (lead.source && lead.source.toLowerCase().includes(query)) ||
      (lead.pageUrl && lead.pageUrl.toLowerCase().includes(query))
    );
  });

  // Categories Handlers
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryFormName.trim()) return;
    setActionLoading(true);
    try {
      const res = await fetch("/api/blogs/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: categoryFormName })
      });
      const data = await res.json();
      if (res.ok) {
        setCategoriesList(prev => [...prev, { _id: data.id, name: categoryFormName }]);
        setShowAddCategoryModal(false);
        setCategoryFormName("");
      } else {
        alert(data.error || "Failed to create category");
      }
    } catch (err) {
      alert("Server connection failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !categoryFormName.trim()) return;
    setActionLoading(true);
    try {
      const res = await fetch("/api/blogs/category", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedCategory._id, name: categoryFormName })
      });
      const data = await res.json();
      if (res.ok) {
        setCategoriesList(prev => prev.map(c => c._id === selectedCategory._id ? { ...c, name: categoryFormName } : c));
        setShowEditCategoryModal(false);
        setSelectedCategory(null);
        setCategoryFormName("");
      } else {
        alert(data.error || "Failed to update category");
      }
    } catch (err) {
      alert("Server connection failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      const res = await fetch("/api/blogs/category", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      const data = await res.json();
      if (res.ok) {
        setCategoriesList(prev => prev.filter(c => c._id !== id));
      } else {
        alert(data.error || "Failed to delete category");
      }
    } catch (err) {
      alert("Server connection failed");
    }
  };

  // Meta Tags Handlers
  const handleCreateMetaTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!metaFormName.trim() || !metaFormContent.trim()) return;
    setActionLoading(true);
    try {
      const res = await fetch("/api/meta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: metaFormName, content: metaFormContent })
      });
      const data = await res.json();
      if (res.ok) {
        setMetaTagsList(prev => [...prev, { _id: data.id, name: metaFormName, content: metaFormContent }]);
        setShowAddMetaModal(false);
        setMetaFormName("");
        setMetaFormContent("");
      } else {
        alert(data.error || "Failed to create meta tag");
      }
    } catch (err) {
      alert("Server connection failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdateMetaTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMetaTag || !metaFormName.trim() || !metaFormContent.trim()) return;
    setActionLoading(true);
    try {
      const res = await fetch("/api/meta", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedMetaTag._id, name: metaFormName, content: metaFormContent })
      });
      const data = await res.json();
      if (res.ok) {
        setMetaTagsList(prev => prev.map(m => m._id === selectedMetaTag._id ? { ...m, name: metaFormName, content: metaFormContent } : m));
        setShowEditMetaModal(false);
        setSelectedMetaTag(null);
        setMetaFormName("");
        setMetaFormContent("");
      } else {
        alert(data.error || "Failed to update meta tag");
      }
    } catch (err) {
      alert("Server connection failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteMetaTag = async (id: string) => {
    if (!confirm("Are you sure you want to delete this meta tag?")) return;
    try {
      const res = await fetch("/api/meta", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      const data = await res.json();
      if (res.ok) {
        setMetaTagsList(prev => prev.filter(m => m._id !== id));
      } else {
        alert(data.error || "Failed to delete meta tag");
      }
    } catch (err) {
      alert("Server connection failed");
    }
  };

  // Blogs Handlers
  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title.trim() || !blogForm.blogUrl.trim()) {
      alert("Title and Blog URL are required fields.");
      return;
    }
    setActionLoading(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogForm)
      });
      const data = await res.json();
      if (res.ok) {
        setBlogsList(prev => [{ ...blogForm, _id: data.id, createdAt: new Date().toISOString() }, ...prev]);
        setShowAddBlogModal(false);
        setBlogForm(initialBlogForm);
      } else {
        alert(data.error || "Failed to create blog");
      }
    } catch (err) {
      alert("Server connection failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleUpdateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBlog || !blogForm.title.trim() || !blogForm.blogUrl.trim()) return;
    setActionLoading(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedBlog._id, ...blogForm })
      });
      const data = await res.json();
      if (res.ok) {
        setBlogsList(prev => prev.map(b => b._id === selectedBlog._id ? { ...b, ...blogForm } : b));
        setShowEditBlogModal(false);
        setSelectedBlog(null);
        setBlogForm(initialBlogForm);
      } else {
        alert(data.error || "Failed to update blog");
      }
    } catch (err) {
      alert("Server connection failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      const res = await fetch("/api/blogs", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      const data = await res.json();
      if (res.ok) {
        setBlogsList(prev => prev.filter(b => b._id !== id));
      } else {
        alert(data.error || "Failed to delete blog");
      }
    } catch (err) {
      alert("Server connection failed");
    }
  };

  // Filter Submissions
  const filteredSubmissions = submissionsList.filter((sub) => {
    const query = searchQuery.toLowerCase();
    return (
      (sub.name && sub.name.toLowerCase().includes(query)) ||
      (sub.firstName && sub.firstName.toLowerCase().includes(query)) ||
      (sub.lastName && sub.lastName.toLowerCase().includes(query)) ||
      (sub.email && sub.email.toLowerCase().includes(query)) ||
      (sub.contact && sub.contact.toLowerCase().includes(query)) ||
      (sub.phone && sub.phone.toLowerCase().includes(query)) ||
      (sub.company && sub.company.toLowerCase().includes(query)) ||
      (sub.jobTitle && sub.jobTitle.toLowerCase().includes(query)) ||
      (sub.services && sub.services.toLowerCase().includes(query)) ||
      (sub.message && sub.message.toLowerCase().includes(query)) ||
      (sub.text && sub.text.toLowerCase().includes(query)) ||
      (sub.source && sub.source.toLowerCase().includes(query)) ||
      (sub.pageUrl && sub.pageUrl.toLowerCase().includes(query))
    );
  });

  return (
    <div className={styles.adminContainer}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoText}>McCOLLINS</div>
        </div>

        <nav className={styles.navMenu}>
          <div
            className={`${styles.navItem} ${activeTab === "overview" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Dashboard
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "submissions" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("submissions")}
          >
            Inquiries ({submissionsList.length})
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "whatsappLeads" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("whatsappLeads")}
          >
            WhatsApp Leads ({whatsappLeadsList.length})
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "blogs" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("blogs")}
          >
            Blogs ({blogsList.length})
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "categories" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("categories")}
          >
            Blog Categories ({categoriesList.length})
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "metaTags" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("metaTags")}
          >
            Meta Tags ({metaTagsList.length})
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "portfolios" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("portfolios")}
          >
            Portfolio ({portfolios.length})
          </div>
          <div
            className={`${styles.navItem} ${activeTab === "testimonials" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveTab("testimonials")}
          >
            Testimonials ({testimonials.length})
          </div>
        </nav>

        <div className={styles.userInfo}>
          <span className={styles.userName}>{user.name}</span>
          <span className={styles.userEmail}>{user.email}</span>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {activeTab === "overview" && "Dashboard Overview"}
            {activeTab === "submissions" && "Contact Inquiries"}
            {activeTab === "whatsappLeads" && "WhatsApp Leads"}
            {activeTab === "blogs" && "Manage Blogs"}
            {activeTab === "categories" && "Blog Categories"}
            {activeTab === "metaTags" && "Manage Meta Tags"}
            {activeTab === "portfolios" && "Manage Portfolio"}
            {activeTab === "testimonials" && "Testimonials"}
          </h1>
          <p className={styles.subtitle}>
            Welcome back, {user.name}. Replicating client database configurations.
          </p>
        </header>

        {/* Stats Grid */}
        <section className={styles.statsGrid}>
          <div
            className={`${styles.statCard} ${styles.statThemeYellow}`}
            onClick={() => setActiveTab("submissions")}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.statLabel}>Inquiries</span>
            <span className={styles.statValue}>{submissionsList.length}</span>
          </div>
          <div
            className={`${styles.statCard} ${styles.statThemeGreen}`}
            onClick={() => setActiveTab("whatsappLeads")}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.statLabel}>WhatsApp Leads</span>
            <span className={styles.statValue}>{whatsappLeadsList.length}</span>
          </div>
          <div
            className={`${styles.statCard} ${styles.statThemeBlue}`}
            onClick={() => setActiveTab("blogs")}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.statLabel}>Blogs</span>
            <span className={styles.statValue}>{blogsList.length}</span>
          </div>
          <div
            className={`${styles.statCard} ${styles.statThemePurple}`}
            onClick={() => setActiveTab("portfolios")}
            style={{ cursor: "pointer" }}
          >
            <span className={styles.statLabel}>Portfolio</span>
            <span className={styles.statValue}>{portfolios.length}</span>
          </div>
        </section>

        {/* Dynamic Content Views */}
        <section className={styles.contentCard}>
          {activeTab === "overview" && (
            <div>
              <h2 className={styles.cardTitle}>System Health & Database Connection</h2>
              <p style={{ lineHeight: "1.8", color: "#ccc" }}>
                Database connection status: <strong style={{ color: "#1dbb99" }}>Connected</strong>
                <br />
                Connected database cluster: <code>{dbCluster || "cluster0.0tyan04.mongodb.net"}</code>
                <br />
                Target database name: <code>MccollinsMedia</code>
              </p>
              <div style={{ marginTop: "25px" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "15px" }}>Quick Actions</h3>
                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                  <button
                    className={styles.logoutButton}
                    onClick={() => setActiveTab("submissions")}
                    style={{ width: "auto", padding: "10px 20px", background: "rgba(255,222,17,0.1)", border: "1px solid #ffde11", color: "#ffde11" }}
                  >
                    View Inquiries
                  </button>
                  <button
                    className={styles.logoutButton}
                    onClick={() => setActiveTab("blogs")}
                    style={{ width: "auto", padding: "10px 20px", background: "rgba(29,187,153,0.1)", border: "1px solid #1dbb99", color: "#1dbb99" }}
                  >
                    View Blogs
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "submissions" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px", flexWrap: "wrap", gap: "15px" }}>
                <h2 className={styles.cardTitle} style={{ margin: 0, border: "none", padding: 0 }}>
                  Contact Submissions ({filteredSubmissions.length})
                </h2>
                <input
                  type="text"
                  placeholder="Search inquiries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: "10px 15px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    color: "white",
                    width: "250px",
                  }}
                />
              </div>

              {/* Enhanced table layout to scroll horizontally & show all columns */}
              <div className={styles.horizontalScrollWrapper}>
                {filteredSubmissions.length > 0 ? (
                  <table className={`${styles.table} ${styles.horizontalScrollTable}`}>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>First Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Source</th>
                        <th>Page / Ad URL</th>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Services</th>
                        <th>How can we help you</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubmissions.map((sub) => (
                        <tr key={sub._id}>
                          <td style={{ whiteSpace: "nowrap", color: "#888" }}>
                            {sub.date ? new Date(sub.date).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }) : (sub.createdAt ? new Date(sub.createdAt).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }) : "N/A")}
                          </td>
                          <td style={{ fontWeight: "bold" }}>
                            {sub.firstName ? (sub.firstName + " " + (sub.lastName || "")) : (sub.name || "-")}
                          </td>
                          <td>{sub.contact || sub.phone || "-"}</td>
                          <td>
                            {sub.email && sub.email !== "-" ? (
                              <a href={`mailto:${sub.email}`} style={{ color: "#ffde11", textDecoration: "underline" }}>
                                {sub.email}
                              </a>
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>
                            {sub.source ? (
                              <span style={{
                                background: "rgba(37, 211, 102, 0.12)",
                                border: "1px solid rgba(37, 211, 102, 0.25)",
                                color: "#25D366",
                                padding: "4px 8px",
                                borderRadius: "6px",
                                fontSize: "12px",
                                whiteSpace: "nowrap"
                              }}>
                                {sub.source}
                              </span>
                            ) : "-"}
                          </td>
                          <td style={{ maxWidth: "250px", wordBreak: "break-all" }}>
                            {sub.pageUrl ? (
                              <a
                                href={sub.pageUrl.startsWith("http") ? sub.pageUrl : `https://${sub.pageUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#1dbb99", textDecoration: "underline", fontSize: "12px" }}
                              >
                                {sub.pageUrl}
                              </a>
                            ) : "-"}
                          </td>
                          <td>{sub.company ? <span className={styles.companyTag}>{sub.company}</span> : "-"}</td>
                          <td>{sub.jobTitle || "-"}</td>
                          <td>{sub.services || "-"}</td>
                          <td style={{ minWidth: "300px", color: "#ccc", paddingRight: "25px" }}>
                            {sub.text || sub.message || "-"}
                          </td>
                          <td>
                            <button
                              className={styles.deleteBtn}
                              disabled={deletingId === sub._id}
                              onClick={() => handleDeleteSubmission(sub._id)}
                            >
                              {deletingId === sub._id ? "Deleting..." : "Delete"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className={styles.noData}>No submissions found.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === "whatsappLeads" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px", flexWrap: "wrap", gap: "15px" }}>
                <h2 className={styles.cardTitle} style={{ margin: 0, border: "none", padding: 0 }}>
                  WhatsApp Leads ({filteredWhatsappLeads.length})
                </h2>
                <input
                  type="text"
                  placeholder="Search WhatsApp leads..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: "10px 15px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    color: "white",
                    width: "250px",
                  }}
                />
              </div>

              <div className={styles.horizontalScrollWrapper}>
                {filteredWhatsappLeads.length > 0 ? (
                  <table className={`${styles.table} ${styles.horizontalScrollTable}`}>
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Source</th>
                        <th>Page / Ad URL</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredWhatsappLeads.map((lead) => (
                        <tr key={lead._id}>
                          <td style={{ whiteSpace: "nowrap", color: "#888" }}>
                            {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }) : "N/A"}
                          </td>
                          <td style={{ fontWeight: "bold", color: "#25D366" }}>
                            {lead.name || "-"}
                          </td>
                          <td>
                            {lead.phone ? (
                              <a href={`tel:${lead.phone}`} style={{ color: "#ffffff", textDecoration: "underline" }}>
                                {lead.phone}
                              </a>
                            ) : "-"}
                          </td>
                          <td>
                            {lead.source ? (
                              <span style={{
                                background: "rgba(37, 211, 102, 0.12)",
                                border: "1px solid rgba(37, 211, 102, 0.25)",
                                color: "#25D366",
                                padding: "4px 8px",
                                borderRadius: "6px",
                                fontSize: "12px",
                                whiteSpace: "nowrap"
                              }}>
                                {lead.source}
                              </span>
                            ) : "-"}
                          </td>
                          <td style={{ maxWidth: "280px", wordBreak: "break-all" }}>
                            {lead.pageUrl ? (
                              <a
                                href={lead.pageUrl.startsWith("http") ? lead.pageUrl : `https://${lead.pageUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#1dbb99", textDecoration: "underline", fontSize: "12px" }}
                              >
                                {lead.pageUrl}
                              </a>
                            ) : "-"}
                          </td>
                          <td>
                            <button
                              className={styles.deleteBtn}
                              disabled={deletingId === lead._id}
                              onClick={() => handleDeleteWhatsAppLead(lead._id)}
                            >
                              {deletingId === lead._id ? "Deleting..." : "Delete"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className={styles.noData}>No WhatsApp leads found.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === "blogs" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                <h2 className={styles.cardTitle} style={{ margin: 0, border: "none", padding: 0 }}>
                  Blogs Database List
                </h2>
                <button className={styles.addBtn} onClick={() => { setBlogForm(initialBlogForm); setShowAddBlogModal(true); }}>
                  + Add New Blog
                </button>
              </div>

              <div className={styles.tableWrapper}>
                {blogsList.length > 0 ? (
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogsList.map((blog) => (
                        <tr key={blog._id}>
                          <td style={{ fontWeight: "bold", color: "#ffde11" }}>{blog.title}</td>
                          <td>{blog.category || "-"}</td>
                          <td>{blog.date || "-"}</td>
                          <td>{blog.author || "-"}</td>
                          <td style={{ whiteSpace: "nowrap" }}>
                            <button className={styles.editBtn} onClick={() => {
                              setSelectedBlog(blog);
                              setBlogForm({
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
                                arabicDescription: blog.arabicDescription || ""
                              });
                              setShowEditBlogModal(true);
                            }}>
                              Edit
                            </button>
                            <button className={styles.deleteBtn} onClick={() => handleDeleteBlog(blog._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className={styles.noData}>No blogs found in the database.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === "categories" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                <h2 className={styles.cardTitle} style={{ margin: 0, border: "none", padding: 0 }}>
                  Blog Categories
                </h2>
                <button className={styles.addBtn} onClick={() => { setCategoryFormName(""); setShowAddCategoryModal(true); }}>
                  + Add New Category
                </button>
              </div>

              <div className={styles.tableWrapper}>
                {categoriesList.length > 0 ? (
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>SI.No</th>
                        <th>Category Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoriesList.map((cat, index) => (
                        <tr key={cat._id}>
                          <td>{index + 1}</td>
                          <td style={{ fontWeight: "bold", color: "#ffde11" }}>{cat.name}</td>
                          <td>
                            <button className={styles.editBtn} onClick={() => {
                              setSelectedCategory(cat);
                              setCategoryFormName(cat.name);
                              setShowEditCategoryModal(true);
                            }}>
                              Edit
                            </button>
                            <button className={styles.deleteBtn} onClick={() => handleDeleteCategory(cat._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className={styles.noData}>No categories found in the database.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === "metaTags" && (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                <h2 className={styles.cardTitle} style={{ margin: 0, border: "none", padding: 0 }}>
                  Meta Tags Settings
                </h2>
                <button className={styles.addBtn} onClick={() => { setMetaFormName(""); setMetaFormContent(""); setShowAddMetaModal(true); }}>
                  + Add New Meta
                </button>
              </div>

              <div className={styles.tableWrapper}>
                {metaTagsList.length > 0 ? (
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>SI.No</th>
                        <th>Page URL</th>
                        <th>Meta Content Code</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metaTagsList.map((meta, index) => (
                        <tr key={meta._id}>
                          <td>{index + 1}</td>
                          <td style={{ fontWeight: "bold", color: "#ffde11" }}>{meta.name}</td>
                          <td style={{ maxWidth: "450px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#ccc" }}>
                            {meta.content}
                          </td>
                          <td>
                            <button className={styles.editBtn} onClick={() => {
                              setSelectedMetaTag(meta);
                              setMetaFormName(meta.name);
                              setMetaFormContent(meta.content);
                              setShowEditMetaModal(true);
                            }}>
                              Edit
                            </button>
                            <button className={styles.deleteBtn} onClick={() => handleDeleteMetaTag(meta._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className={styles.noData}>No meta configurations found.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === "portfolios" && (
            <div>
              <h2 className={styles.cardTitle}>Portfolio Items</h2>
              {portfolios.length > 0 ? (
                <div className={styles.gridList}>
                  {portfolios.map((item) => (
                    <div key={item._id} className={styles.gridItem}>
                      {item.image && (
                        <div style={{ position: "relative", width: "100%", height: "180px", background: "#111", borderRadius: "8px", overflow: "hidden" }}>
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </div>
                      )}
                      <div className={styles.gridItemTitle}>{item.title}</div>
                      <div className={styles.gridItemMeta}>ID: {item._id}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noData}>No portfolio items found.</div>
              )}
            </div>
          )}

          {activeTab === "testimonials" && (
            <div>
              <h2 className={styles.cardTitle}>Testimonials</h2>
              {testimonials.length > 0 ? (
                <div className={styles.gridList}>
                  {testimonials.map((item) => (
                    <div key={item._id} className={styles.gridItem}>
                      <div className={styles.testimonialText}>"{item.testimonial}"</div>
                      <div style={{ marginTop: "10px" }}>
                        <div className={styles.testimonialAuthor}>{item.name}</div>
                        {item.company && <div className={styles.testimonialCompany}>{item.company}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.noData}>No testimonials found.</div>
              )}
            </div>
          )}
        </section>
      </main>

      {/* --- CATEGORIES MODALS --- */}
      {showAddCategoryModal && (
        <div className={styles.modalOverlay}>
          <form className={styles.modalContainer} onSubmit={handleCreateCategory}>
            <div className={styles.modalHeader}>
              <h2>Add New Category</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowAddCategoryModal(false)}>×</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Category Name</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={categoryFormName}
                  onChange={(e) => setCategoryFormName(e.target.value)}
                  placeholder="e.g. Social Media"
                  required
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelBtn} onClick={() => setShowAddCategoryModal(false)}>Cancel</button>
              <button type="submit" className={styles.submitBtn} disabled={actionLoading}>
                {actionLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}

      {showEditCategoryModal && (
        <div className={styles.modalOverlay}>
          <form className={styles.modalContainer} onSubmit={handleUpdateCategory}>
            <div className={styles.modalHeader}>
              <h2>Edit Category</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowEditCategoryModal(false)}>×</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Category Name</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={categoryFormName}
                  onChange={(e) => setCategoryFormName(e.target.value)}
                  placeholder="e.g. Social Media"
                  required
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelBtn} onClick={() => setShowEditCategoryModal(false)}>Cancel</button>
              <button type="submit" className={styles.submitBtn} disabled={actionLoading}>
                {actionLoading ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- META TAGS MODALS --- */}
      {showAddMetaModal && (
        <div className={styles.modalOverlay}>
          <form className={styles.modalContainer} onSubmit={handleCreateMetaTag}>
            <div className={styles.modalHeader}>
              <h2>Add New Meta Configuration</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowAddMetaModal(false)}>×</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Page URL / Path</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={metaFormName}
                  onChange={(e) => setMetaFormName(e.target.value)}
                  placeholder="e.g. /about or /"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>HTML Head Tags Code</label>
                <textarea
                  className={styles.formTextarea}
                  value={metaFormContent}
                  onChange={(e) => setMetaFormContent(e.target.value)}
                  placeholder="e.g. <title>About - McCollins</title><meta name='description' content='...' />"
                  required
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelBtn} onClick={() => setShowAddMetaModal(false)}>Cancel</button>
              <button type="submit" className={styles.submitBtn} disabled={actionLoading}>
                {actionLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}

      {showEditMetaModal && (
        <div className={styles.modalOverlay}>
          <form className={styles.modalContainer} onSubmit={handleUpdateMetaTag}>
            <div className={styles.modalHeader}>
              <h2>Edit Meta Configuration</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowEditMetaModal(false)}>×</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Page URL / Path</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={metaFormName}
                  onChange={(e) => setMetaFormName(e.target.value)}
                  placeholder="e.g. /about or /"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>HTML Head Tags Code</label>
                <textarea
                  className={styles.formTextarea}
                  value={metaFormContent}
                  onChange={(e) => setMetaFormContent(e.target.value)}
                  placeholder="e.g. <title>About - McCollins</title><meta name='description' content='...' />"
                  required
                />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelBtn} onClick={() => setShowEditMetaModal(false)}>Cancel</button>
              <button type="submit" className={styles.submitBtn} disabled={actionLoading}>
                {actionLoading ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* --- BLOGS MODALS --- */}
      {showAddBlogModal && (
        <div className={styles.modalOverlay}>
          <form className={`${styles.modalContainer} ${styles.modalLarge}`} onSubmit={handleCreateBlog}>
            <div className={styles.modalHeader}>
              <h2>Add New Blog Story</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowAddBlogModal(false)}>×</button>
            </div>
            <div className={styles.modalBody}>
              {/* Row 1: Title, SEO Title, Date */}
              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Title *</label>
                  <input
                    type="text"
                    name="title"
                    className={styles.formInput}
                    value={blogForm.title}
                    onChange={handleBlogFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>SEO Title</label>
                  <input
                    type="text"
                    name="SEOtitle"
                    className={styles.formInput}
                    value={blogForm.SEOtitle}
                    onChange={handleBlogFormChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    className={styles.formInput}
                    value={blogForm.date}
                    onChange={handleBlogFormChange}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Blog URL, Category */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Blog URL *</label>
                  <input
                    type="text"
                    name="blogUrl"
                    className={styles.formInput}
                    value={blogForm.blogUrl}
                    onChange={handleBlogFormChange}
                    placeholder="e.g. ai-b2b-buyer-journey"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Category *</label>
                  <select
                    name="category"
                    className={styles.formSelect}
                    value={blogForm.category}
                    onChange={handleBlogFormChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categoriesList.map(c => (
                      <option key={c._id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Author, Photo, Video */}
              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Author</label>
                  <input
                    type="text"
                    name="author"
                    className={styles.formInput}
                    value={blogForm.author}
                    onChange={handleBlogFormChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.formInput}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const formData = new FormData();
                      formData.append("file", file);
                      try {
                        const res = await fetch("/api/upload", {
                          method: "POST",
                          body: formData,
                        });
                        const data = await res.json();
                        if (res.ok) {
                          setBlogForm(prev => ({ ...prev, photo: data.url }));
                        } else {
                          alert(data.error || "Failed to upload photo");
                        }
                      } catch (err) {
                        alert("Upload request failed");
                      }
                    }}
                  />
                  {blogForm.photo && (
                    <div style={{ fontSize: "0.8rem", color: "#ffde11", marginTop: "4px", wordBreak: "break-all" }}>
                      Current: {blogForm.photo}
                    </div>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Video</label>
                  <input
                    type="text"
                    name="video"
                    className={styles.formInput}
                    value={blogForm.video}
                    onChange={handleBlogFormChange}
                    placeholder="https://youtube.com/embed/..."
                  />
                </div>
              </div>

              {/* Row 4: Tags, Meta keywords */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Tags</label>
                  <input
                    type="text"
                    name="tags"
                    className={styles.formInput}
                    value={blogForm.tags}
                    onChange={handleBlogFormChange}
                    placeholder="e.g. AI Search, SEO, Growth"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Meta keywords</label>
                  <input
                    type="text"
                    name="keywords"
                    className={styles.formInput}
                    value={blogForm.keywords}
                    onChange={handleBlogFormChange}
                    placeholder="e.g. marketing, AI, GCC"
                  />
                </div>
              </div>

              {/* Row 5: Meta Description */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Meta Description</label>
                <textarea
                  name="description"
                  className={styles.formTextarea}
                  style={{ minHeight: "60px" }}
                  value={blogForm.description}
                  onChange={handleBlogFormChange}
                  placeholder="Summarize the article content for Search Engines"
                />
              </div>

              {/* Row 6: Short Content */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Short Content</label>
                <textarea
                  name="shortContent"
                  className={styles.formTextarea}
                  style={{ minHeight: "80px" }}
                  value={blogForm.shortContent}
                  onChange={handleBlogFormChange}
                  placeholder="Write a brief teaser introduction..."
                />
              </div>

              {/* Row 7: Content */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Content</label>
                <RichTextEditor
                  value={blogForm.content}
                  onChange={(val) => setBlogForm(prev => ({ ...prev, content: val }))}
                  placeholder="Write the full body content here..."
                />
              </div>

              {/* Row 8: Arabic Title, Arabic Description */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Arabic Title</label>
                  <input
                    type="text"
                    name="arabicTitle"
                    className={styles.formInput}
                    value={blogForm.arabicTitle}
                    onChange={handleBlogFormChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Arabic Description</label>
                  <input
                    type="text"
                    name="arabicDescription"
                    className={styles.formInput}
                    value={blogForm.arabicDescription}
                    onChange={handleBlogFormChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelBtn} onClick={() => setShowAddBlogModal(false)}>Cancel</button>
              <button type="submit" className={styles.submitBtn} disabled={actionLoading}>
                {actionLoading ? "Creating..." : "Create Blog"}
              </button>
            </div>
          </form>
        </div>
      )}

      {showEditBlogModal && (
        <div className={styles.modalOverlay}>
          <form className={`${styles.modalContainer} ${styles.modalLarge}`} onSubmit={handleUpdateBlog}>
            <div className={styles.modalHeader}>
              <h2>Edit Blog Story</h2>
              <button type="button" className={styles.closeBtn} onClick={() => setShowEditBlogModal(false)}>×</button>
            </div>
            <div className={styles.modalBody}>
              {/* Row 1: Title, SEO Title, Date */}
              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Title *</label>
                  <input
                    type="text"
                    name="title"
                    className={styles.formInput}
                    value={blogForm.title}
                    onChange={handleBlogFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>SEO Title</label>
                  <input
                    type="text"
                    name="SEOtitle"
                    className={styles.formInput}
                    value={blogForm.SEOtitle}
                    onChange={handleBlogFormChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Date *</label>
                  <input
                    type="date"
                    name="date"
                    className={styles.formInput}
                    value={blogForm.date}
                    onChange={handleBlogFormChange}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Blog URL, Category */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Blog URL *</label>
                  <input
                    type="text"
                    name="blogUrl"
                    className={styles.formInput}
                    value={blogForm.blogUrl}
                    onChange={handleBlogFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Category *</label>
                  <select
                    name="category"
                    className={styles.formSelect}
                    value={blogForm.category}
                    onChange={handleBlogFormChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categoriesList.map(c => (
                      <option key={c._id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Author, Photo, Video */}
              <div className={styles.formRowThree}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Author</label>
                  <input
                    type="text"
                    name="author"
                    className={styles.formInput}
                    value={blogForm.author}
                    onChange={handleBlogFormChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.formInput}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const formData = new FormData();
                      formData.append("file", file);
                      try {
                        const res = await fetch("/api/upload", {
                          method: "POST",
                          body: formData,
                        });
                        const data = await res.json();
                        if (res.ok) {
                          setBlogForm(prev => ({ ...prev, photo: data.url }));
                        } else {
                          alert(data.error || "Failed to upload photo");
                        }
                      } catch (err) {
                        alert("Upload request failed");
                      }
                    }}
                  />
                  {blogForm.photo && (
                    <div style={{ fontSize: "0.8rem", color: "#ffde11", marginTop: "4px", wordBreak: "break-all" }}>
                      Current: {blogForm.photo}
                    </div>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Video</label>
                  <input
                    type="text"
                    name="video"
                    className={styles.formInput}
                    value={blogForm.video}
                    onChange={handleBlogFormChange}
                  />
                </div>
              </div>

              {/* Row 4: Tags, Meta keywords */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Tags</label>
                  <input
                    type="text"
                    name="tags"
                    className={styles.formInput}
                    value={blogForm.tags}
                    onChange={handleBlogFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Meta keywords</label>
                  <input
                    type="text"
                    name="keywords"
                    className={styles.formInput}
                    value={blogForm.keywords}
                    onChange={handleBlogFormChange}
                  />
                </div>
              </div>

              {/* Row 5: Meta Description */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Meta Description</label>
                <textarea
                  name="description"
                  className={styles.formTextarea}
                  style={{ minHeight: "60px" }}
                  value={blogForm.description}
                  onChange={handleBlogFormChange}
                />
              </div>

              {/* Row 6: Short Content */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Short Content</label>
                <textarea
                  name="shortContent"
                  className={styles.formTextarea}
                  style={{ minHeight: "80px" }}
                  value={blogForm.shortContent}
                  onChange={handleBlogFormChange}
                />
              </div>

              {/* Row 7: Content */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Content</label>
                <RichTextEditor
                  value={blogForm.content}
                  onChange={(val) => setBlogForm(prev => ({ ...prev, content: val }))}
                />
              </div>

              {/* Row 8: Arabic Title, Arabic Description */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Arabic Title</label>
                  <input
                    type="text"
                    name="arabicTitle"
                    className={styles.formInput}
                    value={blogForm.arabicTitle}
                    onChange={handleBlogFormChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Arabic Description</label>
                  <input
                    type="text"
                    name="arabicDescription"
                    className={styles.formInput}
                    value={blogForm.arabicDescription}
                    onChange={handleBlogFormChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button type="button" className={styles.cancelBtn} onClick={() => setShowEditBlogModal(false)}>Cancel</button>
              <button type="submit" className={styles.submitBtn} disabled={actionLoading}>
                {actionLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
