"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./NavigationMenu.module.css";
import { usePathname } from "next/navigation";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function NavigationMenu({ isOpen, onClose }: NavigationMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();
  const pathname = usePathname();

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  useGSAP(() => {
    if (!overlayRef.current) return;

    // Initialize timeline
    tl.current = gsap.timeline({ paused: true });

    const overlay = overlayRef.current;
    const navLinks = overlay.querySelectorAll(".gsap-nav-link");
    const secondaryItems = overlay.querySelectorAll(".gsap-secondary");

    // Set initial states
    gsap.set(overlay, { autoAlpha: 0, yPercent: -100 });
    gsap.set(navLinks, { autoAlpha: 0, y: 40 });
    gsap.set(secondaryItems, { autoAlpha: 0, y: 20 });

    // Build timeline
    tl.current
      .to(overlay, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.8,
        ease: "power4.inOut",
      })
      .to(
        navLinks,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.3"
      )
      .to(
        secondaryItems,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, { scope: overlayRef, dependencies: [] });

  // Trigger animation based on isOpen prop
  useEffect(() => {
    if (isOpen && tl.current) {
      tl.current.play();
    } else if (!isOpen && tl.current) {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <div className={styles.menuOverlay} ref={overlayRef}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
          <svg
            className={styles.closeIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Center Content */}
      <div className={styles.centerContent}>
        {/* Left Side: Logo & Socials */}
        <div className={`${styles.leftSide} gsap-secondary`}>
          <div className={styles.logoWrapper}>
            <svg width="100%" height="100%" viewBox="0 0 251 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M197.497 81.6696C209.215 77.8174 219.37 70.5158 225.833 59.9744L250.317 60.0066C247.915 68.0658 243.386 75.0611 237.39 80.6703C219.289 97.5623 190.872 97.5139 172.723 80.5413L170.708 78.5427C153.043 59.8938 153.849 30.5101 172.578 12.925C182.426 3.52798 196.079 -1.14635 209.908 0.239827V22.2252C202.22 20.5973 194.306 22.7249 188.422 27.8989C182.539 33.0729 179.541 40.4067 180.009 48.1919C180.718 60.2645 190.115 70.0644 202.075 71.3861C201.978 75.2384 199.641 78.5105 197.513 81.6858L197.497 81.6696Z" fill="#F2F2F2"/>
              <path d="M140.324 67.0681H159.504C157.86 73.6927 154.363 79.3825 149.495 83.7345C136.616 95.2913 117.145 95.0979 104.541 83.2509C91.6946 71.1622 90.7114 51.2561 102.542 37.9584C109.908 29.7381 120.853 25.6601 131.942 27.2236V45.3728C126.639 43.8255 121.111 45.0182 117.129 48.6449C110.553 54.6086 110.634 64.7954 117.291 70.6464C124.205 76.8681 135.408 75.369 140.324 67.0681Z" fill="#F2F2F2"/>
              <path d="M69.196 26.1276C68.4385 22.0013 64.5862 19.3256 60.4115 20.0187C57.0912 20.5668 54.6089 23.3552 54.4155 26.8045V92.519H34.3965V25.918C33.8485 23.3552 32.1883 21.276 29.7706 20.3411C27.5462 19.5029 25.0801 19.7931 23.0815 21.2437C21.4052 22.4687 20.0996 24.4029 20.0351 26.7884V92.5028H0L0.0322436 24.7091C0.467439 20.9375 1.37007 17.5526 3.2398 14.3451C7.05985 7.75267 13.62 2.57869 21.1795 1.22475C29.3998 -0.242019 38.2811 1.40204 44.4383 7.23688C47.9198 4.25499 51.901 2.27245 56.3497 1.38594C65.4566 -0.435429 73.8865 1.33757 80.7851 7.59149L83.0578 9.88029C87.2002 14.5062 89.489 20.325 89.489 26.595V69.9211L89.5373 92.5028H69.196V26.1115V26.1276Z" fill="#F2F2F2"/>
            </svg>
          </div>
          <ul className={styles.socialsList}>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        {/* Right Side: Navigation Links */}
        <div className={styles.rightSide}>
          {NAV_LINKS.map((link, index) => (
            <div key={index} className={styles.navItemWrapper}>
              <Link href={link.href} className={`${styles.navLink} gsap-nav-link`} onClick={onClose}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={`${styles.footerArea} gsap-secondary`}>
        <div className={styles.footerLeft}>
          <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
          <Link href="/cookies" className={styles.footerLink}>Cookies Policy</Link>
          <Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link>
        </div>
        <div className={styles.footerRight}>
          <a href="mailto:info@mccollinsmedia.com" style={{color: 'inherit', textDecoration: 'none'}}>
            info@mccollinsmedia.com
          </a>
        </div>
      </div>
    </div>
  );
}
