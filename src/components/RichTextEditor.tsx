"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TiptapInnerEditor = dynamic(
  () => import("./TiptapInnerEditor"),
  { 
    ssr: false,
    loading: () => (
      <div 
        style={{ 
          minHeight: "250px", 
          background: "#141414", 
          border: "1px solid rgba(255, 255, 255, 0.08)", 
          borderRadius: "8px" 
        }} 
      />
    )
  }
);

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export default function RichTextEditor(props: RichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div 
        style={{ 
          minHeight: "250px", 
          background: "#141414", 
          border: "1px solid rgba(255, 255, 255, 0.08)", 
          borderRadius: "8px" 
        }} 
      />
    );
  }

  return <TiptapInnerEditor {...props} />;
}
