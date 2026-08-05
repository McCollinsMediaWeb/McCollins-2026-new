"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function TiptapInnerEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "editor-link",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "editor-image",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write content...",
        emptyEditorClass: "is-editor-empty",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      // Sync change back, treat empty paragraph as empty string
      onChange(html === "<p></p>" || html === "" ? "" : html);
    },
  });

  // Sync value changes from parent (external updates)
  useEffect(() => {
    if (!editor) return;
    const currentHtml = editor.getHTML();
    if (value !== currentHtml && (value || currentHtml !== "<p></p>")) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!editor) {
    return null;
  }

  // Formatting helpers
  const toggleBold = () => editor.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.chain().focus().toggleItalic().run();
  const toggleUnderline = () => editor.chain().focus().toggleUnderline().run();
  const toggleStrike = () => editor.chain().focus().toggleStrike().run();
  
  const setParagraph = () => editor.chain().focus().setParagraph().run();
  const toggleHeading = (level: 1 | 2 | 3) => editor.chain().focus().toggleHeading({ level }).run();

  const toggleBulletList = () => editor.chain().focus().toggleBulletList().run();
  const toggleOrderedList = () => editor.chain().focus().toggleOrderedList().run();

  const setTextAlign = (align: "left" | "center" | "right" | "justify") => 
    editor.chain().focus().setTextAlign(align).run();

  const undo = () => editor.chain().focus().undo().run();
  const redo = () => editor.chain().focus().redo().run();

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter Link URL:", previousUrl || "https://");

    if (url === null) return; // Cancelled
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const addImage = () => {
    const input = document.createElement("input");
    input.type = "input"; // We create an element of type file
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    
    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (res.ok && data.url) {
          editor.chain().focus().setImage({ src: data.url }).run();
        } else {
          alert(data.error || "Failed to upload image.");
        }
      } catch (err) {
        console.error("Image upload failed:", err);
        alert("An error occurred during image upload.");
      }
    };
    input.click();
  };

  return (
    <div style={containerStyle}>
      {/* CSS overrides for TipTap (ProseMirror) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ProseMirror {
          min-height: 250px;
          max-height: 600px;
          overflow-y: auto;
          outline: none;
          padding: 16px;
          font-family: inherit;
          color: #ffffff;
          background: #141414;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
          height: 0;
        }
        .ProseMirror p {
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .ProseMirror h1 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }
        .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }
        .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }
        .ProseMirror ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 12px;
        }
        .ProseMirror ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 12px;
        }
        .ProseMirror li {
          margin-bottom: 4px;
        }
        .ProseMirror a.editor-link {
          color: #3b82f6;
          text-decoration: underline;
          cursor: pointer;
        }
        .ProseMirror a.editor-link:hover {
          color: #60a5fa;
        }
        .ProseMirror img.editor-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 16px 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .tiptap-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          color: #d1d5db;
          background: transparent;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.15s ease;
          padding: 6px;
        }
        .tiptap-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }
        .tiptap-btn.is-active {
          background: #3b82f6;
          color: #ffffff;
        }
        .tiptap-divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.12);
          margin: 0 6px;
          align-self: center;
        }
      ` }} />

      {/* Modern, dark styled Toolbar */}
      <div style={toolbarStyle}>
        {/* Undo / Redo */}
        <button
          type="button"
          onClick={undo}
          disabled={!editor.can().undo()}
          className="tiptap-btn"
          title="Undo"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7v6h6" />
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
          </svg>
        </button>
        <button
          type="button"
          onClick={redo}
          disabled={!editor.can().redo()}
          className="tiptap-btn"
          title="Redo"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 7v6h-6" />
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
          </svg>
        </button>

        <div className="tiptap-divider" />

        {/* Text Formats */}
        <button
          type="button"
          onClick={toggleBold}
          className={`tiptap-btn ${editor.isActive("bold") ? "is-active" : ""}`}
          title="Bold"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={toggleItalic}
          className={`tiptap-btn ${editor.isActive("italic") ? "is-active" : ""}`}
          title="Italic"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="4" x2="10" y2="4" />
            <line x1="14" y1="20" x2="5" y2="20" />
            <line x1="15" y1="4" x2="9" y2="20" />
          </svg>
        </button>
        <button
          type="button"
          onClick={toggleUnderline}
          className={`tiptap-btn ${editor.isActive("underline") ? "is-active" : ""}`}
          title="Underline"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
            <line x1="4" y1="20" x2="20" y2="20" />
          </svg>
        </button>
        <button
          type="button"
          onClick={toggleStrike}
          className={`tiptap-btn ${editor.isActive("strike") ? "is-active" : ""}`}
          title="Strikethrough"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <path d="M16 6A5 5 0 0 0 8 9h8a5 5 0 0 1-8 3" />
          </svg>
        </button>

        <div className="tiptap-divider" />

        {/* Headings & Blocks */}
        <button
          type="button"
          onClick={setParagraph}
          className={`tiptap-btn ${editor.isActive("paragraph") ? "is-active" : ""}`}
          style={{ width: "auto", fontSize: "12px", fontWeight: "600", padding: "0 6px" }}
          title="Paragraph"
        >
          P
        </button>
        <button
          type="button"
          onClick={() => toggleHeading(1)}
          className={`tiptap-btn ${editor.isActive("heading", { level: 1 }) ? "is-active" : ""}`}
          style={{ width: "auto", fontSize: "12px", fontWeight: "700", padding: "0 6px" }}
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => toggleHeading(2)}
          className={`tiptap-btn ${editor.isActive("heading", { level: 2 }) ? "is-active" : ""}`}
          style={{ width: "auto", fontSize: "12px", fontWeight: "700", padding: "0 6px" }}
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => toggleHeading(3)}
          className={`tiptap-btn ${editor.isActive("heading", { level: 3 }) ? "is-active" : ""}`}
          style={{ width: "auto", fontSize: "12px", fontWeight: "700", padding: "0 6px" }}
          title="Heading 3"
        >
          H3
        </button>

        <div className="tiptap-divider" />

        {/* Lists */}
        <button
          type="button"
          onClick={toggleBulletList}
          className={`tiptap-btn ${editor.isActive("bulletList") ? "is-active" : ""}`}
          title="Bullet List"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={toggleOrderedList}
          className={`tiptap-btn ${editor.isActive("orderedList") ? "is-active" : ""}`}
          title="Ordered List"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="10" y1="6" x2="21" y2="6" />
            <line x1="10" y1="12" x2="21" y2="12" />
            <line x1="10" y1="18" x2="21" y2="18" />
            <path d="M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3a1 1 0 0 0-2 0" />
          </svg>
        </button>

        <div className="tiptap-divider" />

        {/* Alignments */}
        <button
          type="button"
          onClick={() => setTextAlign("left")}
          className={`tiptap-btn ${editor.isActive({ textAlign: "left" }) ? "is-active" : ""}`}
          title="Align Left"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="17" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="15" y1="18" x2="3" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setTextAlign("center")}
          className={`tiptap-btn ${editor.isActive({ textAlign: "center" }) ? "is-active" : ""}`}
          title="Align Center"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="10" x2="6" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="18" y1="18" x2="6" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setTextAlign("right")}
          className={`tiptap-btn ${editor.isActive({ textAlign: "right" }) ? "is-active" : ""}`}
          title="Align Right"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" y1="10" x2="7" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="9" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => setTextAlign("justify")}
          className={`tiptap-btn ${editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}`}
          title="Align Justify"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="21" y1="10" x2="3" y2="10" />
            <line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="3" y2="14" />
            <line x1="21" y1="18" x2="3" y2="18" />
          </svg>
        </button>

        <div className="tiptap-divider" />

        {/* Links & Media */}
        <button
          type="button"
          onClick={setLink}
          className={`tiptap-btn ${editor.isActive("link") ? "is-active" : ""}`}
          title="Insert/Edit Link"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </button>
        <button
          type="button"
          onClick={addImage}
          className={`tiptap-btn ${editor.isActive("image") ? "is-active" : ""}`}
          title="Upload Image"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </button>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} />
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "8px",
  overflow: "hidden",
  background: "#141414",
  display: "flex",
  flexDirection: "column",
  color: "#ffffff",
};

const toolbarStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  alignItems: "center",
  background: "#1f2937",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  padding: "6px 12px",
};
