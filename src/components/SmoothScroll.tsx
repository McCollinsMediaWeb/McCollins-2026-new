"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

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

  if (pathname.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
