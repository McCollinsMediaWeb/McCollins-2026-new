"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLightMode = pathname === "/about" || pathname === "/services" || pathname === "/works";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""} ${isLightMode ? "light-theme" : ""}`}>
      <div className="header-container">
        {/* Left: SVG Logo */}
        <Link href="/" className="logo-link" aria-label="McCollins Home">
          <svg
            width="112"
            height="17"
            viewBox="0 0 112 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header-logo"
          >
            <path
              d="M24.5016 12.1084L24.4269 12.2197C23.9386 12.9687 23.1117 13.4131 22.2205 13.4131C20.7607 13.4131 19.5739 12.227 19.5739 10.7689C19.5739 9.31312 20.7607 8.12627 22.2205 8.12627C22.383 8.12627 22.5511 8.13927 22.7193 8.17664L23.0174 8.23188V5.06614L22.794 5.04421C22.6039 5.02715 22.409 5.01172 22.2205 5.01172C19.0442 5.01172 16.4609 7.59662 16.4609 10.7689C16.4609 13.9427 19.0442 16.526 22.2205 16.526C24.738 16.526 27.0036 14.8404 27.7307 12.4277L27.8265 12.1084H24.5016Z"
              fill="currentColor"
            />
            <path
              d="M3.46711 16.3946H0V4.83646C0 3.57082 0.45248 2.48308 1.35256 1.57487C2.25427 0.665854 3.34445 0.210938 4.62065 0.210938C5.88792 0.210938 6.92773 0.598429 7.74658 1.36854C8.6223 0.598429 9.70191 0.210938 10.9797 0.210938C12.2429 0.210938 13.3315 0.665854 14.2397 1.57487C15.1504 2.48308 15.6036 3.57082 15.6036 4.83646V16.3946H12.0902V4.83646C12.0902 4.49528 11.9586 4.19714 11.6962 3.94532C11.4355 3.68942 11.1268 3.56432 10.7742 3.56432C10.4022 3.56432 10.0935 3.68942 9.8457 3.94532C9.60118 4.19714 9.47608 4.49528 9.47608 4.83646V16.3946H6.01059V4.83646C6.01059 4.49528 5.88792 4.19714 5.63853 3.94532C5.39157 3.68942 5.09344 3.56432 4.74088 3.56432C4.39726 3.56432 4.104 3.68942 3.84567 3.94532C3.59628 4.19714 3.46711 4.49528 3.46711 4.83646V16.3946Z"
              fill="currentColor"
            />
            <path
              d="M61.75 0.210938H65.2171V11.7715C65.2171 12.0932 65.3333 12.3686 65.5681 12.5904C65.7979 12.8154 66.0668 12.925 66.3755 12.925H70.997V16.3946H65.2171C64.2805 16.3946 63.4681 16.055 62.7784 15.3792C62.0961 14.6984 61.75 13.8836 61.75 12.925V0.210938Z"
              fill="currentColor"
            />
            <path
              d="M72.5859 0.210938H76.0514V11.7715C76.0514 12.0932 76.1676 12.3686 76.3975 12.5904C76.629 12.8154 76.8987 12.925 77.205 12.925H81.8329V16.3946H76.0514C75.1123 16.3946 74.2975 16.055 73.6103 15.3792C72.9255 14.6984 72.5859 13.8836 72.5859 12.925V0.210938Z"
              fill="currentColor"
            />
            <path
              d="M83.2422 0.210938H86.7077V16.3946H83.2422V0.210938Z"
              fill="currentColor"
            />
            <path
              d="M91.9186 16.3946H88.4531V5.7138C88.4531 4.20364 88.9877 2.90957 90.0583 1.82833C91.1306 0.751151 92.4223 0.210938 93.9308 0.210938C95.441 0.210938 96.7366 0.751151 97.8179 1.82833C98.8926 2.90957 99.4296 4.20364 99.4296 5.7138V16.3946H95.9665V5.7138C95.9665 5.15815 95.7651 4.68131 95.3621 4.28C94.9633 3.87789 94.484 3.67805 93.9308 3.67805C93.3768 3.67805 92.904 3.87789 92.5075 4.28C92.1176 4.68131 91.9186 5.15815 91.9186 5.7138V16.3946Z"
              fill="currentColor"
            />
            <path
              d="M111.998 0.210938V3.67805H105.936C105.538 3.67805 105.194 3.82103 104.909 4.10779C104.625 4.39211 104.485 4.73573 104.485 5.13622C104.485 5.53671 104.625 5.87384 104.909 6.15247C105.194 6.4303 105.538 6.56596 105.936 6.56596L107.07 6.58952C108.445 6.58952 109.605 7.07612 110.562 8.03713C111.521 8.99814 111.998 10.1517 111.998 11.4888C111.998 12.8332 111.516 13.9892 110.553 14.9608C109.588 15.9307 108.428 16.4165 107.07 16.4165L101.016 16.3946V12.925H107.07C107.475 12.925 107.813 12.7869 108.101 12.5091C108.384 12.2337 108.528 11.8942 108.528 11.4888C108.528 11.0908 108.384 10.7536 108.101 10.4758C107.813 10.1996 107.475 10.0599 107.07 10.0599L105.936 10.0355C104.566 10.0355 103.403 9.55623 102.447 8.59115C101.495 7.63176 101.016 6.47823 101.016 5.13622C101.016 3.79422 101.497 2.63824 102.458 1.66667C103.425 0.699161 104.583 0.210938 105.936 0.210938H111.998Z"
              fill="currentColor"
            />
            <path
              d="M52.5254 0.0703125C48.0161 0.0703125 44.3516 3.73889 44.3516 8.24581C44.3516 12.7536 48.0161 16.4221 52.5254 16.4221C57.0372 16.4221 60.7018 12.7536 60.7018 8.24581C60.7018 3.73889 57.0372 0.0703125 52.5254 0.0703125V0.0703125ZM52.5254 13.0184C49.8967 13.0184 47.7529 10.877 47.7529 8.24581C47.7529 5.61461 49.8967 3.47406 52.5254 3.47406C55.1591 3.47406 57.298 5.61461 57.298 8.24581C57.298 10.877 55.1591 13.0184 52.5254 13.0184Z"
              fill="currentColor"
            />
            <path
              d="M43.6749 10.5882H39.4238C38.7951 11.641 37.3328 13.4818 34.4059 14.4428C34.4059 14.4428 35.2597 13.3835 35.2492 12.602C33.0777 12.3502 31.3872 10.5005 31.3872 8.22587C31.3872 5.78069 33.3336 3.80018 35.7374 3.80018C36.0412 3.80018 36.3345 3.82861 36.6196 3.88954V0.0430546C36.3499 0.0170594 36.0769 0 35.7983 0C31.2581 0 27.5781 3.67914 27.5781 8.21775C27.5781 12.758 31.2581 16.442 35.7983 16.442C39.5181 16.442 42.657 13.9749 43.6749 10.5882Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav className="desktop-nav">
          <Link href="/about" className="nav-link">
            <span className="roll-text">
              <span className="roll-text-inner" data-text="ABOUT">ABOUT</span>
            </span>
          </Link>
          <Link href="/services" className="nav-link">
            <span className="roll-text">
              <span className="roll-text-inner" data-text="SERVICES">SERVICES</span>
            </span>
          </Link>
          <Link href="/works" className="nav-link">
            <span className="roll-text">
              <span className="roll-text-inner" data-text="WORK">WORK</span>
            </span>
          </Link>
        </nav>

        {/* Right: CTA & Hamburger Menu */}
        <div className="header-actions">
          <Link href="/contact" className="cta-button">
            <span className="dot-indicator"></span>
            <span className="cta-text">
              <span className="cta-text-inner" data-text="LET'S TALK">LET'S TALK</span>
            </span>
          </Link>

          <button
            className={`hamburger-menu ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </button>
        </div>
      </div>

      {/* Full Screen Navigation Menu Overlay */}
      <NavigationMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
