"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Expose lenis globally for interactive click handlers
    if (lenisRef.current?.lenis) {
      (window as unknown as { lenis: unknown }).lenis = lenisRef.current.lenis;
    }
  });

  useEffect(() => {
    // If there is an anchor hash in the URL on initial navigation / change, scroll to it, otherwise reset to top
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        const timeoutId = setTimeout(() => {
          lenisRef.current?.lenis?.scrollTo(target as HTMLElement, { offset: -100, duration: 1.2 });
        }, 120);
        return () => clearTimeout(timeoutId);
      }
    }

    // Next.js can preserve the previous route's position when the new page is
    // already visible. Reset both Lenis and the native scroll position so they
    // cannot restore different values during a client-side route change.
    lenisRef.current?.lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    // Global delegated click listener for hash links to guarantee smooth scrolling with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a[href*="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        if (lenisRef.current?.lenis) {
          lenisRef.current.lenis.scrollTo(target as HTMLElement, { offset: -100, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, []);

  useEffect(() => {
    // Sync Lenis scroll animations to the GSAP ticker
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  if (pathname.startsWith("/admin") || pathname === "/mccollins-brazil-proposal") {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
