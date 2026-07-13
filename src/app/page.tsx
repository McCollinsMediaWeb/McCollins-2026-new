"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BRAND_ROW_1 = [
  { src: "/home-page-brands/Toshiba_logo 1.png", alt: "Toshiba" },
  { src: "/home-page-brands/Pioneer_logo 1.png", alt: "Pioneer" },
  { src: "/home-page-brands/costa-coffee-white.png.png", alt: "Costa Coffee" },
  { src: "/home-page-brands/mmi-white.png.png", alt: "MMI" },
  { src: "/home-page-brands/oak-berry-white.png.png", alt: "Oak Berry" },
  { src: "/home-page-brands/dxb-white.png.png", alt: "Dubai Airport Freezone" },
  { src: "/home-page-brands/fujifilm-white.png.png", alt: "Fujifilm" },
];

const BRAND_ROW_2 = [
  { src: "/home-page-brands/trader-vics-white.png.png", alt: "Trader Vic's" },
  { src: "/home-page-brands/wagamama-white.png.png", alt: "Wagamama" },
  { src: "/home-page-brands/rta-white.png.png", alt: "RTA" },
  { src: "/home-page-brands/energizer-white.png.png", alt: "Energizer" },
  { src: "/home-page-brands/damac-white.png.png", alt: "Damac" },
  { src: "/home-page-brands/trader-vics-white.png.png", alt: "Trader Vic's" },
  { src: "/home-page-brands/wagamama-white.png.png", alt: "Wagamama" },
];

const EXPERTISE_ITEMS = [
  { img: "/home-page-expertise/image2.jpg", titleFirst: "REAL", titleSecond: "Estate" },
  { img: "/home-page-expertise/image3.jpg", titleFirst: "LUXURY", titleSecond: "" },
  { img: "/home-page-expertise/image1.jpg", titleFirst: "FOOD &", titleSecond: "Beverage" },
  { img: "/home-page-expertise/image4.jpg", titleFirst: "TECHNOLOGY", titleSecond: "" },
  { img: "/home-page-expertise/image5.jpg", titleFirst: "STARTUPS", titleSecond: "" },
  { img: "/home-page-expertise/image6.png", titleFirst: "B2B", titleSecond: "" },
];

const WHY_CHOOSE_US_ITEMS = [
  {
    img: "/home-why-choose-us/image1.jpg",
    titleBold: "DATA-DRIVEN",
    titleItalic: "Approach",
    titleOrder: "bold-first",
    desc: "Fueling your brand's evolution with precision analytics and real-time market insights."
  },
  {
    img: "/home-why-choose-us/image2.jpg",
    titleItalic: "Creative &",
    titleBold: "INNOVATIVE",
    titleOrder: "italic-first",
    desc: "Transforming disruptive ideas into high-impact digital experiences across every continent."
  },
  {
    img: "/home-why-choose-us/image3.jpg",
    titleBold: "TRANSPARENT",
    titleItalic: "Reporting",
    titleOrder: "bold-first",
    desc: "Honest analytics and actionable insights to ensure your investment drives measurable impact."
  }
];

// sdf

const CORE_SERVICES = [
  {
    titleFirst: "Brand",
    titleSecond: "DEVELOPMENT",
    desc: "Crafting cohesive brand identities that resonate across cultures and command a global presence.",
    img: "/home-page-services/brand_development.png",
    url: "/services/brand-development"
  },
  {
    titleFirst: "Web",
    titleSecond: "DEVELOPMENT",
    desc: "Developing high-performance, responsive websites engineered to convert global audiences into loyal customers.",
    img: "/home-page-services/web_development.png",
    url: "/services/web-development"
  },
  {
    titleFirst: "Social",
    titleSecond: "MEDIA",
    desc: "Cultivating vibrant digital communities through culturally resonant content that sparks global engagement.",
    img: "/home-page-services/social_media.png",
    url: "/services/social-media-marketing"
  },
  {
    titleFirst: "Performance",
    titleSecond: "MARKETING",
    desc: "Accelerating your ROI through data-driven, cross-border campaigns engineered for maximum conversion and global scale.",
    img: "/home-page-services/performance_marketing.png",
    url: "/services/performance-marketing"
  },
  {
    titleFirst: "Marketing",
    titleSecond: "AUTOMATION",
    desc: "Driving sustainable growth through data-driven automation engineered for global consistency and local relevance.",
    img: "/home-page-services/marketing_automation.png",
    url: "/services/marketing-automation"
  },
  {
    titleFirst: "Content",
    titleSecond: "PRODUCTION",
    desc: "Blending cinematic storytelling with strategic intent to produce content that resonates locally and scales globally.",
    img: "/home-page-services/content_production.png",
    url: "/services/content-production"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const servicesTrackRef = useRef<HTMLDivElement>(null);
  const [activeExpertiseIndex, setActiveExpertiseIndex] = useState(0);
  const expertiseTrackRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, EXPERTISE_ITEMS.length - visibleCards);
    if (activeExpertiseIndex > maxIndex) {
      setActiveExpertiseIndex(maxIndex);
    }
  }, [visibleCards, activeExpertiseIndex]);

  const handlePrevService = () => {
    setActiveServiceIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextService = () => {
    setActiveServiceIndex((prev) => Math.min(CORE_SERVICES.length - 1, prev + 1));
  };

  const handlePrevExpertise = () => {
    setActiveExpertiseIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextExpertise = () => {
    setActiveExpertiseIndex((prev) => Math.min(Math.max(0, EXPERTISE_ITEMS.length - visibleCards), prev + 1));
  };

  const logoPaths = [
    "M183.042 70.2614C181.038 59.3462 170.848 52.2684 159.805 54.1019C151.021 55.5515 144.455 62.9277 143.944 72.0521V245.884H90.9881V69.7071C89.5384 62.9277 85.1467 57.4276 78.7511 54.9546C72.8672 52.7374 66.3437 53.5049 61.0567 57.3423C56.6224 60.5827 53.1688 65.6992 52.9982 72.0095V245.842H0L0.0852928 66.5093C1.2365 56.5321 3.62421 47.5783 8.57014 39.0935C18.6752 21.6548 36.0285 7.96827 56.0254 4.38674C77.7705 0.506741 101.264 4.85573 117.551 20.2904C126.761 12.4025 137.292 7.15819 149.06 4.81314C173.15 -0.00488067 195.449 4.68518 213.698 21.2285L219.71 27.283C230.668 39.5199 236.722 54.912 236.722 71.4979V186.107L236.85 245.842H183.042V70.2188V70.2614Z",
    "M371.199 181.332H421.937C417.588 198.856 408.336 213.907 395.459 225.419C361.392 255.99 309.886 255.478 276.544 224.14C242.562 192.162 239.961 139.505 271.257 104.329C290.742 82.5837 319.693 71.7964 349.027 75.9322V123.942C335 119.849 320.375 123.004 309.844 132.597C292.448 148.373 292.661 175.32 310.27 190.797C328.561 207.255 358.194 203.29 371.199 181.332Z",
    "M522.434 216.038C553.431 205.848 580.293 186.533 597.39 158.648L662.156 158.734C655.803 180.052 643.822 198.557 627.961 213.395C580.079 258.079 504.91 257.951 456.9 213.053L451.571 207.766C404.84 158.435 406.972 80.7073 456.516 34.19C482.568 9.33246 518.682 -3.0324 555.264 0.634408V58.7917C534.926 54.4853 513.992 60.1135 498.429 73.8001C482.866 87.4866 474.936 106.887 476.172 127.48C478.048 159.416 502.906 185.339 534.543 188.836C534.287 199.026 528.105 207.681 522.476 216.081L522.434 216.038Z",
    "M887.153 40.671C935.035 91.8784 929.492 171.653 877.048 216.507C824.604 261.362 751.354 255.861 705.604 207.852C669.106 169.521 661.048 111.577 687.099 64.7611C708.205 26.8565 748.071 2.34004 791.816 1.10356H799.747C829.764 1.91367 858.245 13.6389 880.374 33.8917L887.153 40.7137V40.671ZM853.044 167.091C873.595 140.698 872.785 103.945 851.637 78.5755C823.283 44.551 771.606 43.5703 742.016 76.4437C717.414 103.774 717.755 145.431 743.423 172.42C773.951 204.526 825.884 201.968 853.086 167.048L853.044 167.091Z",
    "M1076.04 193.483V245.926L983.129 245.841C970.85 244.647 960.446 239.573 951.705 231.302C941.686 221.794 935.674 209.344 935.418 195.231V3.23487L988.459 3.19226V176.854C988.203 185.126 995.707 192.63 1003.85 193.483H1075.99H1076.04Z",
    "M1167.71 193.526H1240.02V245.927H1150.95C1137.05 245.927 1124.6 240.128 1114.88 230.577C1105.92 221.751 1100.42 210.452 1099.57 197.747V3.32045H1152.36V59.5591V70.3463V177.025C1152.78 185.766 1159.14 192.417 1167.71 193.611V193.526Z",
    "M1313.83 3.23521H1261V245.884H1313.83V3.23521Z",
    "M1454.61 62.9272C1442.16 52.0973 1423.66 52.9074 1412.57 64.8885C1407.67 70.1755 1404.56 76.5285 1404.34 83.9474V245.799L1351.13 245.756L1351.22 81.9861C1352.16 65.3575 1357.27 49.9228 1367.29 36.8332C1383.88 15.2587 1406.69 2.9365 1434.27 3.06442C1446 3.10705 1457.13 4.89783 1467.87 9.67321C1485.57 17.5611 1500.06 31.1624 1509.15 48.2599C1514.99 59.2604 1517.5 70.9856 1518.01 83.4784V245.756H1465.14V84.8854C1464.68 76.1448 1461.14 68.6832 1454.53 62.8846L1454.61 62.9272Z",
    "M1607.17 246.097L1570.29 245.927L1541.59 245.756V193.397L1635.61 193.312C1641.96 193.312 1647.89 189.347 1651.43 184.443C1659.06 173.997 1655.35 159.842 1644.35 153.702C1640.56 151.57 1636.72 151.016 1632.33 150.931L1623.12 150.803L1616.64 150.504C1597.32 150.931 1579.07 143.981 1565.17 130.678C1557.5 123.344 1551.23 115.201 1547.14 105.223C1539.72 87.3157 1539.63 66.9351 1547.05 48.9421C1552.47 35.8951 1561.59 25.2358 1572.8 16.9215C1584.91 7.9677 1599.2 3.23494 1614.38 3.10703H1708.31V55.2524H1615.48C1609.09 55.8494 1604.01 58.2371 1599.79 63.0125C1594.38 69.1522 1593.01 78.1913 1596.6 85.9087C1599.84 92.9438 1607 98.1029 1615.31 98.2309L1634.93 98.4867C1658.59 98.7851 1679.18 109.572 1693.64 128.162C1703.23 140.484 1708.26 155.194 1708.39 170.842C1708.52 182.909 1706.39 194.335 1700.8 205.037C1696.15 213.991 1689.97 221.581 1682.38 228.232C1669.8 239.232 1654.37 245.585 1637.49 246.14H1607.17V246.097Z"
  ];

  const handleLogoMouseEnter = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const letters = svg.querySelectorAll(".homepage-hero__letter");
    if (!letters.length) return;

    gsap.killTweensOf(letters);

    gsap.timeline()
      .to(letters, {
        y: -30,
        duration: 0.35,
        stagger: 0.03,
        ease: "power3.out",
      })
      .to(letters, {
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: "elastic.out(1.1, 0.6)",
      }, "-=0.22");
  };

  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span
        key={i}
        className="word"
        style={{
          position: "relative",
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "bottom",
          marginRight: "0.25em",
        }}
      >
        <span
          className="word-child"
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          {word}
        </span>
      </span>
    ));
  };

  useGSAP(
    () => {
      const cover = coverRef.current;
      const content = contentRef.current;
      const svg = svgRef.current;
      if (!cover || !content || !svg) return;

      const letters = svg.querySelectorAll(".homepage-hero__letter");
      const subtitleBar = content.querySelector(".hero-subtitle-bar");

      // 1. Initial State Set
      gsap.set(letters, { y: 280, opacity: 0 });
      gsap.set(svg, { scale: 1.15 });

      // Create load timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // 2. Setup Scroll Animation on Complete
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: cover,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          });

          // Scale SVG down
          scrollTl.to(svg, {
            scale: 0.85,
            ease: "none",
          }, 0);

          // Staggered letters vertical push down
          letters.forEach((letter, index) => {
            const targetY = 50 + index * 15;
            scrollTl.to(letter, {
              y: targetY,
              ease: "none",
            }, 0);
          });

          // Translate subtitle bar slightly
          if (subtitleBar) {
            scrollTl.to(subtitleBar, {
              y: 25,
              ease: "none",
            }, 0);
          }

          // Parallax up and fade out of entire cover content
          scrollTl.to(content, {
            yPercent: -35,
            opacity: 0,
            ease: "none",
          }, 0);
        },
      });

      // Intro Reveal
      tl.to(letters, {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.05,
        ease: "power3.out",
      })
        .to(svg, {
          scale: 1,
          duration: 2,
          ease: "power3.out",
        }, "<");

      // Tagline/Subtitle bar fade in & slide up
      if (subtitleBar) {
        gsap.set(subtitleBar, { opacity: 0, y: 15 });
        tl.to(subtitleBar, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.6");
      }

      // 2. Video Parallax Scroll
      gsap.fromTo(".parallax-video",
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".video-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // 3. Services Section Animations
      const servicesTextChildren = containerRef.current?.querySelectorAll(".services-text .word-child");
      if (servicesTextChildren && servicesTextChildren.length > 0) {
        gsap.set(servicesTextChildren, { yPercent: 105 });

        gsap.to(servicesTextChildren, {
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          yPercent: 0,
          duration: 0.95,
          stagger: 0.018,
          ease: "power3.out",
        });
      }

      gsap.from(".services-divider", {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".services-footer", {
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // 4. Services Container Parallax Scroll
      const servicesContainer = containerRef.current?.querySelector(".services-container");
      if (servicesContainer) {
        gsap.fromTo(servicesContainer,
          { y: 80 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-section",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 5. Work Section Animations
      const workCards = containerRef.current?.querySelectorAll(".work-card");
      const eventListeners: Array<{
        element: Element;
        type: string;
        handler: any;
      }> = [];

      if (workCards && workCards.length > 0) {
        workCards.forEach((card) => {
          gsap.fromTo(card,
            { y: 50, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );

          // Cursor follow hover video box effect
          const hoverBox = card.querySelector(".hover-video-box");
          const video = card.querySelector(".hover-video-box video") as HTMLVideoElement;

          if (hoverBox && video) {
            // Set initial transforms for centering
            gsap.set(hoverBox, { xPercent: -50, yPercent: -50 });

            const onMouseEnter = (e: MouseEvent) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // Position box instantly to current cursor position
              gsap.set(hoverBox, { x, y });
              gsap.to(hoverBox, {
                opacity: 1,
                scale: 1,
                duration: 0.45,
                ease: "power3.out"
              });
              video.play().catch(() => { });
            };

            const onMouseMove = (e: MouseEvent) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              gsap.to(hoverBox, {
                x,
                y,
                duration: 0.6,
                ease: "power3.out",
                overwrite: "auto"
              });
            };

            const onMouseLeave = () => {
              gsap.to(hoverBox, {
                opacity: 0,
                scale: 0.6,
                duration: 0.4,
                ease: "power3.in"
              });
              video.pause();
            };

            card.addEventListener("mouseenter", onMouseEnter as any);
            card.addEventListener("mousemove", onMouseMove as any);
            card.addEventListener("mouseleave", onMouseLeave as any);

            eventListeners.push({ element: card, type: "mouseenter", handler: onMouseEnter });
            eventListeners.push({ element: card, type: "mousemove", handler: onMouseMove });
            eventListeners.push({ element: card, type: "mouseleave", handler: onMouseLeave });
          }
        });
      }

      // 6. Work Container Parallax Scroll
      const workContainer = containerRef.current?.querySelector(".work-container");
      if (workContainer) {
        gsap.fromTo(workContainer,
          { y: 80 },
          {
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: ".work-section",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // 7. Brands Horizontal Infinite Scroll
      gsap.to(".track-left", {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });

      gsap.fromTo(".track-right",
        { xPercent: -50 },
        {
          xPercent: 0,
          ease: "none",
          duration: 35,
          repeat: -1,
        }
      );

      // 8. Core Services Slider Reveal
      const servicesHeader = containerRef.current?.querySelector("." + styles.servicesControlsHeader);
      const servicesFooter = containerRef.current?.querySelector("." + styles.servicesControlsFooter);
      const serviceCards = containerRef.current?.querySelectorAll("." + styles.serviceCard);

      if (servicesHeader) {
        gsap.from(servicesHeader, {
          scrollTrigger: {
            trigger: ".services-slider-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      if (servicesFooter) {
        gsap.from(servicesFooter, {
          scrollTrigger: {
            trigger: ".services-slider-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "power3.out",
        });
      }

      if (serviceCards && serviceCards.length > 0) {
        serviceCards.forEach((card, index) => {
          gsap.from(card.children, {
            scrollTrigger: {
              trigger: ".services-slider-section",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
            delay: index * 0.12,
            ease: "power3.out",
            clearProps: "all",
          });
        });
      }

      // 9. Expertise Section Reveal
      const expertiseHeader = containerRef.current?.querySelector("." + styles.expertiseHeader);
      const expertiseCards = containerRef.current?.querySelectorAll("." + styles.expertiseCard);

      if (expertiseHeader) {
        gsap.from(expertiseHeader, {
          scrollTrigger: {
            trigger: ".expertise-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      if (expertiseCards && expertiseCards.length > 0) {
        expertiseCards.forEach((card, index) => {
          gsap.from(card.children, {
            scrollTrigger: {
              trigger: ".expertise-section",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
            delay: index * 0.12,
            ease: "power3.out",
            clearProps: "all",
          });
        });
      }

      // 10. Why Choose Us Reveal
      const whyChooseUsTitle = containerRef.current?.querySelector("." + styles.whyChooseUsTitle);
      const whyChooseUsCards = containerRef.current?.querySelectorAll("." + styles.whyChooseUsCard);

      if (whyChooseUsTitle) {
        gsap.from(whyChooseUsTitle, {
          scrollTrigger: {
            trigger: ".why-choose-us-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      if (whyChooseUsCards && whyChooseUsCards.length > 0) {
        whyChooseUsCards.forEach((card, index) => {
          gsap.from(card.children, {
            scrollTrigger: {
              trigger: ".why-choose-us-section",
              start: "top 80%",
              toggleActions: "play none none none",
            },
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
            delay: index * 0.12,
            ease: "power3.out",
            clearProps: "all",
          });
        });
      }

      return () => {
        eventListeners.forEach(({ element, type, handler }) => {
          element.removeEventListener(type, handler);
        });
      };
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const track = servicesTrackRef.current;
      if (!track) return;

      const firstCard = track.children[0] as HTMLElement;
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap) || 0;

      gsap.to(track, {
        x: -(cardWidth + gap) * activeServiceIndex,
        duration: 0.85,
        ease: "power3.out"
      });
    },
    { dependencies: [activeServiceIndex], scope: containerRef }
  );

  useGSAP(
    () => {
      const track = expertiseTrackRef.current;
      if (!track) return;

      const firstCard = track.children[0] as HTMLElement;
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap) || 0;

      gsap.to(track, {
        x: -(cardWidth + gap) * activeExpertiseIndex,
        duration: 0.85,
        ease: "power3.out"
      });
    },
    { dependencies: [activeExpertiseIndex], scope: containerRef }
  );

  return (
    <div ref={containerRef} className={styles.container}>
      {/* ================== STICKY HERO LANDING COVER ================== */}
      <div className={styles.homeHeroLanding} ref={coverRef}>
        <div className={styles.heroLandingContent} ref={contentRef}>
          <div className={styles.heroLogoTextWrapper}>
            <svg
              ref={svgRef}
              viewBox="0 0 1709 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.homepageHeroSvg}
              onMouseEnter={handleLogoMouseEnter}
            >
              {logoPaths.map((d, index) => (
                <path
                  key={`letter-${index}`}
                  className="homepage-hero__letter"
                  d={d}
                  fill="currentColor"
                  fillRule="evenodd"
                />
              ))}
            </svg>
          </div>
          <div className={`${styles.heroSubtitleBar} hero-subtitle-bar`}>
            <div className={`${styles.heroSubtitleCol} ${styles.left}`} style={{ display: 'flex', gap: '20px' }}>
              <div>
                <div>STRATEGY, PERFOMANCE</div>
                <div>GROWTH</div>
              </div>
              <div className={`${styles.heroSubtitleCol} ${styles.center}`}>
                <div>DIGITAL STRATEGY.</div>
                <div>GLOBAL SCALE.</div>
              </div>
            </div>
            <div className={`${styles.heroSubtitleCol} ${styles.center}`}>
              {/* <div>DIGITAL STRATEGY.</div>
              <div>GLOBAL SCALE.</div> */}
            </div>
            <div className={`${styles.heroSubtitleCol} ${styles.right}`}>
              <div>GET A FREE</div>
              <div>STRATEGY CALL</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== VIDEO PARALLAX SECTION ================== */}
      <section className={`${styles.videoSection} video-section`}>
        <video
          src="/herobannervideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={`${styles.videoElement} parallax-video`}
        />
        <div className={styles.videoOverlay}></div>
      </section>

      {/* ================== SERVICES DIRECTORY SECTION ================== */}
      <section className={`${styles.textSection} services-section`}>
        <div className={`${styles.textContainer} services-container`}>
          <h2 className={`${styles.servicesIntroText} services-text`}>
            {splitText("Witness the transformative impact of strategies engineered for global resonance and measurable ")}

            <span style={{ fontWeight: 400 }}>
              {splitText("market dominance.")}
            </span>{" "}

            <span
              className="word"
              style={{
                position: "relative",
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
              }}
            >
              <span
                className="word-child"
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <a href="/services" className={styles.italicUnderline}>
                  our services.
                </a>
              </span>
            </span>
          </h2>
        </div>
      </section>



      <section className={`${styles.servicesSection} services-section`}>
        <div className={`${styles.servicesContainer} services-container`}>
          <div className={`${styles.servicesFooter} services-footer`}>
            <div className={styles.footerTitle}>WHAT WE DO BEST</div>
            <div className={styles.footerRight}>
              <div className={styles.servicesGrid}>
                <div className={styles.servicesCol}>
                  <a href="/services/brand-development" className={styles.serviceListItem}>
                    <span className="roll-text">
                      <span className="roll-text-inner-dual">
                        <span className="roll-text-primary">
                          <span className="service-icon" />
                          <span>Brand Development</span>
                        </span>
                        <span className="roll-text-hover">
                          <span className="service-icon" />
                          <span>Brand Development</span>
                        </span>
                      </span>
                    </span>
                  </a>
                  <a href="/services/web-development" className={styles.serviceListItem}>
                    <span className="roll-text">
                      <span className="roll-text-inner-dual">
                        <span className="roll-text-primary">
                          <span className="service-icon" />
                          <span>Web</span>
                        </span>
                        <span className="roll-text-hover">
                          <span className="service-icon" />
                          <span>Web</span>
                        </span>
                      </span>
                    </span>
                  </a>
                  <a href="/services/performance-marketing" className={styles.serviceListItem}>
                    <span className="roll-text">
                      <span className="roll-text-inner-dual">
                        <span className="roll-text-primary">
                          <span className="service-icon" />
                          <span>Performance Marketing</span>
                        </span>
                        <span className="roll-text-hover">
                          <span className="service-icon" />
                          <span>Performance Marketing</span>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
                <div className={styles.servicesCol}>
                  <a href="/services/marketing-automation" className={styles.serviceListItem}>
                    <span className="roll-text">
                      <span className="roll-text-inner-dual">
                        <span className="roll-text-primary">
                          <span className="service-icon" />
                          <span>Marketing Automation</span>
                        </span>
                        <span className="roll-text-hover">
                          <span className="service-icon" />
                          <span>Marketing Automation</span>
                        </span>
                      </span>
                    </span>
                  </a>
                  <a href="/services/content-production" className={styles.serviceListItem}>
                    <span className="roll-text">
                      <span className="roll-text-inner-dual">
                        <span className="roll-text-primary">
                          <span className="service-icon" />
                          <span>Content Production</span>
                        </span>
                        <span className="roll-text-hover">
                          <span className="service-icon" />
                          <span>Content Production</span>
                        </span>
                      </span>
                    </span>
                  </a>
                  <a href="/services/social-media-management" className={styles.serviceListItem}>
                    <span className="roll-text">
                      <span className="roll-text-inner-dual">
                        <span className="roll-text-primary">
                          <span className="service-icon" />
                          <span>Social Media</span>
                        </span>
                        <span className="roll-text-hover">
                          <span className="service-icon" />
                          <span>Social Media</span>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <a href="/services" className={styles.allServicesButton}>
                <span className="dot-indicator"></span>
                <span className="roll-text">
                  <span className="roll-text-inner" data-text="ALL SERVICES">ALL SERVICES</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================== WORK SECTION ================== */}
      <section className={`${styles.workSection} work-section`}>
        <div className={`${styles.workContainer} work-container`}>
          <div className={styles.workHeader}>
            <div className={styles.workHeaderTitle}>OUR WORK</div>
            <a href="/works" className="roll-text">
              <span className="roll-text-inner" data-text="SEE THE WORK">SEE THE WORK</span>
            </a>
          </div>

          <div className={styles.workGrid}>
            {/* Pioneer Card (Full Width) */}
            <div className={`${styles.workCard} ${styles.fullWidthCard} work-card`} onClick={() => router.push("/case-study/pioneer")}>
              <div className={styles.workCardImageWrapper}>
                <Image
                  src="/works/pioneer.jpg"
                  alt="Pioneer Case Study"
                  fill
                  className={styles.workImage}
                />
                <div className={styles.viewBadge}>
                  <span>VIEW</span>
                </div>
              </div>
              <div className={`${styles.hoverVideoBox} hover-video-box`}>
                <div className={styles.hoverVideoInner}>
                  <span className={styles.hoverVideoTitle}>Case Study Pioneer</span>
                  <div className={styles.hoverVideoContainer}>
                    <video
                      src="/herobannervideo.mp4"
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Columns (LG and Benz) */}
            <div className={styles.workColumns}>
              {/* LG Card */}
              <div className={`${styles.workCard} work-card`} onClick={() => router.push("/case-study/lg")}>
                <div className={styles.workCardImageWrapper}>
                  <Image
                    src="/works/lg.jpg"
                    alt="LG Case Study"
                    fill
                    className={styles.workImage}
                  />
                  <div className={styles.viewBadge}>
                    <span>VIEW</span>
                  </div>
                </div>
                <div className={`${styles.hoverVideoBox} hover-video-box`}>
                  <div className={styles.hoverVideoInner}>
                    <span className={styles.hoverVideoTitle}>Case Study LG</span>
                    <div className={styles.hoverVideoContainer}>
                      <video
                        src="/herobannervideo.mp4"
                        loop
                        muted
                        playsInline
                        preload="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Benz Card */}
              <div className={`${styles.workCard} work-card`} onClick={() => router.push("/case-study/mercedes-benz")}>
                <div className={styles.workCardImageWrapper}>
                  <Image
                    src="/works/benz.jpg"
                    alt="Mercedes-Benz Case Study"
                    fill
                    className={styles.workImage}
                  />
                  <div className={styles.viewBadge}>
                    <span>VIEW</span>
                  </div>
                </div>
                <div className={`${styles.hoverVideoBox} hover-video-box`}>
                  <div className={styles.hoverVideoInner}>
                    <span className={styles.hoverVideoTitle}>Case Study Benz</span>
                    <div className={styles.hoverVideoContainer}>
                      <video
                        src="/herobannervideo.mp4"
                        loop
                        muted
                        playsInline
                        preload="auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================== BRANDS SECTION ================== */}
      <section className={`${styles.brandsSection} brands-section`}>
        <div className={styles.brandsRow}>
          <div className={`${styles.brandsTrack} track-left`}>
            <div className={styles.brandsList}>
              {BRAND_ROW_1.map((brand, i) => (
                <div key={`brand-1-${i}`} className={styles.brandLogoWrapper}>
                  <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                </div>
              ))}
            </div>
            <div className={styles.brandsList} aria-hidden="true">
              {BRAND_ROW_1.map((brand, i) => (
                <div key={`brand-1-dup-${i}`} className={styles.brandLogoWrapper}>
                  <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.brandsRow}>
          <div className={`${styles.brandsTrack} track-right`}>
            <div className={styles.brandsList}>
              {BRAND_ROW_2.map((brand, i) => (
                <div key={`brand-2-${i}`} className={styles.brandLogoWrapper}>
                  <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                </div>
              ))}
            </div>
            <div className={styles.brandsList} aria-hidden="true">
              {BRAND_ROW_2.map((brand, i) => (
                <div key={`brand-2-dup-${i}`} className={styles.brandLogoWrapper}>
                  <Image src={brand.src} alt={brand.alt} fill className={styles.brandLogo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== SERVICES SLIDER SECTION ================== */}
      <section className={`${styles.servicesSliderSection} services-slider-section`}>
        <div className={styles.servicesSliderContainer}>
          {/* Left Controls Column */}
          <div className={styles.servicesControlsCol}>
            <div className={styles.servicesControlsHeader}>
              <h2 className={styles.servicesSliderTitle}>
                <span className={styles.italicSerif}>Our</span>{" "}
                <span className={styles.boldDelight}>CORE Services</span>
              </h2>
            </div>
            <div className={styles.servicesControlsFooter}>
              <div className={styles.servicesSliderIndex}>
                {String(activeServiceIndex + 1).padStart(2, "0")} / {String(CORE_SERVICES.length).padStart(2, "0")}
              </div>
              <div className={styles.servicesSliderNavButtons}>
                <button
                  onClick={handlePrevService}
                  disabled={mounted ? (activeServiceIndex === 0) : undefined}
                  className={`${styles.servicesSliderArrowBtn} ${(mounted && activeServiceIndex === 0) ? styles.disabled : ""}`}
                  aria-label="Previous Service"
                >
                  ⟵
                </button>
                <button
                  onClick={handleNextService}
                  disabled={mounted ? (activeServiceIndex === CORE_SERVICES.length - 1) : undefined}
                  className={`${styles.servicesSliderArrowBtn} ${(mounted && activeServiceIndex === CORE_SERVICES.length - 1) ? styles.disabled : ""}`}
                  aria-label="Next Service"
                >
                  ⟶
                </button>
              </div>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className={styles.servicesCardsCol}>
            <div className={styles.servicesSliderViewport}>
              <div className={styles.servicesSliderTrack} ref={servicesTrackRef}>
                {CORE_SERVICES.map((service, i) => (
                  <div
                    key={`service-card-${i}`}
                    className={`${styles.serviceCard} ${i === activeServiceIndex ? styles.activeCard : ""}`}
                    onClick={() => router.push(service.url)}
                  >
                    <div className={styles.serviceCardImageWrapper}>
                      <Image
                        src={service.img}
                        alt={`${service.titleFirst} ${service.titleSecond}`}
                        fill
                        className={styles.serviceCardImage}
                      />
                    </div>
                    <div className={styles.serviceCardContent}>
                      <h3 className={styles.serviceCardTitle}>
                        <span className={styles.italicSerif}>{service.titleFirst}</span>{" "}
                        <span className={styles.boldDelight}>{service.titleSecond}</span>
                      </h3>
                      <p className={styles.serviceCardDesc}>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== EXPERTISE SECTION ================== */}
      <section className={`${styles.expertiseSection} expertise-section`}>
        <div className={styles.expertiseHeader}>
          <h2 className={styles.expertiseTitle}>EXPERTISE</h2>
          <div className={styles.expertiseNav}>
            <button
              onClick={handlePrevExpertise}
              disabled={mounted ? (activeExpertiseIndex === 0) : undefined}
              className={`${styles.expertiseNavBtn} ${(mounted && activeExpertiseIndex === 0) ? styles.disabled : ""}`}
              aria-label="Previous Expertise"
            >
              ⟵
            </button>
            <button
              onClick={handleNextExpertise}
              disabled={mounted ? (activeExpertiseIndex >= EXPERTISE_ITEMS.length - visibleCards) : undefined}
              className={`${styles.expertiseNavBtn} ${(mounted && activeExpertiseIndex >= EXPERTISE_ITEMS.length - visibleCards) ? styles.disabled : ""}`}
              aria-label="Next Expertise"
            >
              ⟶
            </button>
          </div>
        </div>

        <div className={styles.expertiseSliderViewport}>
          <div className={styles.expertiseSliderTrack} ref={expertiseTrackRef}>
            {EXPERTISE_ITEMS.map((item, i) => (
              <div key={`expertise-card-${i}`} className={styles.expertiseCard} onClick={() => router.push('/industry')}>
                <div className={styles.expertiseCardImageWrapper}>
                  <Image
                    src={item.img}
                    alt={`${item.titleFirst} ${item.titleSecond}`}
                    fill
                    className={styles.expertiseCardImage}
                  />
                </div>
                <h3 className={styles.expertiseCardTitle}>
                  <span className={styles.boldTitle}>{item.titleFirst}</span>{" "}
                  {item.titleSecond && <span className={styles.italicTitle}>{item.titleSecond}</span>}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================== WHY CHOOSE US SECTION ================== */}
      <section className={`${styles.whyChooseUsSection} why-choose-us-section`}>
        <h2 className={styles.whyChooseUsTitle}>
          <span className={styles.italicTitle}>Why</span>{" "}
          <span className={styles.boldTitle}>CHOOSE US</span>
        </h2>
        <div className={styles.whyChooseUsGrid}>
          {WHY_CHOOSE_US_ITEMS.map((item, i) => (
            <div key={`why-choose-us-${i}`} className={`${styles.whyChooseUsCard} why-choose-us-card`}>
              <div className={styles.whyChooseUsImageWrapper}>
                <Image
                  src={item.img}
                  alt={item.titleBold}
                  fill
                  className={styles.whyChooseUsImage}
                />
              </div>
              <div className={styles.whyChooseUsCardContent}>
                <h3 className={styles.whyChooseUsCardTitle}>
                  {item.titleOrder === "bold-first" ? (
                    <>
                      <span className={styles.boldTitle}>{item.titleBold}</span>{" "}
                      <span className={styles.italicTitle}>{item.titleItalic}</span>
                    </>
                  ) : (
                    <>
                      <span className={styles.italicTitle}>{item.titleItalic}</span>{" "}
                      <span className={styles.boldTitle}>{item.titleBold}</span>
                    </>
                  )}
                </h3>
                <p className={styles.whyChooseUsCardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
