"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ArabMarketsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".arab-title-reveal", {
      scrollTrigger: {
        trigger: ".arab-title-reveal",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".arab-block-reveal", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });

    gsap.from(".arab-img-reveal", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
      scale: 0.95,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section className={styles.arabMarketsSection} ref={containerRef}>
      <h2 className={`${styles.arabTitle} arab-title-reveal`}>
        <strong>Understanding the</strong> <br />
        <strong>ARAB</strong> <span>Markets</span>
      </h2>

      <div className={styles.arabGrid}>
        {/* Left Column */}
        <div>
          <div className={`${styles.arabTextBlock} arab-block-reveal`}>
            <div className={styles.arabBlockHeader}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="17" height="17" fill="url(#pattern0_418_307)"/><defs><pattern id="pattern0_418_307" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_418_307" transform="scale(0.0526316)"/></pattern><image id="image0_418_307" width="19" height="19" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuZGlkOjcyNzc2QzM4MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyNzc2QzM5MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzI3NzZDMzYxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzI3NzZDMzcxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TmCyfAAAAuElEQVR42qzUQQ7CIBAF0D/QxC03kY1Jd17FI3Rh9x7AxF7Bk4g7j+EV3AvT2liTRqoZ4K9ISB7DkIHwTt0+HUBbJIevCgVTFKumhYduNMP8vQyCJcIptkeSkzctW8XhMmAmq2cxiIGHuGfRihhnYnQibAm6HfVO9JoS6CcmhRaxFCiKpUJfWA40w3KhD1YCGrFS0DjoGr4DUSKkHDhMU34n27BZVcENla1TK5rlBdZ7f8j9z3oBBgBXV3obotSOeQAAAABJRU5ErkJggg=="/></defs></svg>
              <h3 className={styles.arabBlockTitle}>
                <span className={styles.titleItalic}>Cultural</span> INTELLIGENCE
              </h3>
            </div>
            <p className={styles.arabBlockText}>
              We understand the subtle cues - colors, symbols, language, and typography - that carry deep meaning within Arab societies. Our designs avoid generic global templates and instead draw from cultural codes that inspire trust and familiarity.
            </p>
          </div>

          <div className={`${styles.arabTextBlock} arab-block-reveal`}>
            <div className={styles.arabBlockHeader}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="17" height="17" fill="url(#pattern0_418_307)"/><defs><pattern id="pattern0_418_307" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_418_307" transform="scale(0.0526316)"/></pattern><image id="image0_418_307" width="19" height="19" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuZGlkOjcyNzc2QzM4MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyNzc2QzM5MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzI3NzZDMzYxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzI3NzZDMzcxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TmCyfAAAAuElEQVR42qzUQQ7CIBAF0D/QxC03kY1Jd17FI3Rh9x7AxF7Bk4g7j+EV3AvT2liTRqoZ4K9ISB7DkIHwTt0+HUBbJIevCgVTFKumhYduNMP8vQyCJcIptkeSkzctW8XhMmAmq2cxiIGHuGfRihhnYnQibAm6HfVO9JoS6CcmhRaxFCiKpUJfWA40w3KhD1YCGrFS0DjoGr4DUSKkHDhMU34n27BZVcENla1TK5rlBdZ7f8j9z3oBBgBXV3obotSOeQAAAABJRU5ErkJggg=="/></defs></svg>
              <h3 className={styles.arabBlockTitle}>
                GENERATIONAL <span className={styles.titleItalic}>Dynamics</span>
              </h3>
            </div>
            <p className={styles.arabBlockText}>
              The Arab consumer is both rooted in tradition and ambitious for the future. From heritage-conscious Baby Boomers to Gen Z digital natives, our strategies are calibrated to speak fluently across generations.
            </p>
          </div>

          <div className={`${styles.arabImageWrapper} arab-img-reveal`} style={{ marginTop: "60px" }}>
            <Image 
              src="/brand-development/7579d3a985c6cd942c1d1a299904f79e6337f9d5.jpg"
              alt="Arab Man Supermarket"
              width={800}
              height={500}
              className={styles.arabImage}
              style={{ objectPosition: "center 75%" }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className={`${styles.arabImageWrapper} arab-img-reveal`} style={{ marginBottom: "60px" }}>
            <Image 
              src="/brand-development/e86a321fecf44762b57483e73504022703c4c986.jpg"
              alt="Arab Region Map"
              width={800}
              height={500}
              className={styles.arabImage}
            />
          </div>

          <div className={`${styles.arabTextBlock} arab-block-reveal`}>
            <div className={styles.arabBlockHeader}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="17" height="17" fill="url(#pattern0_418_307)"/><defs><pattern id="pattern0_418_307" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_418_307" transform="scale(0.0526316)"/></pattern><image id="image0_418_307" width="19" height="19" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuZGlkOjcyNzc2QzM4MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyNzc2QzM5MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzI3NzZDMzYxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzI3NzZDMzcxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TmCyfAAAAuElEQVR42qzUQQ7CIBAF0D/QxC03kY1Jd17FI3Rh9x7AxF7Bk4g7j+EV3AvT2liTRqoZ4K9ISB7DkIHwTt0+HUBbJIevCgVTFKumhYduNMP8vQyCJcIptkeSkzctW8XhMmAmq2cxiIGHuGfRihhnYnQibAm6HfVO9JoS6CcmhRaxFCiKpUJfWA40w3KhD1YCGrFS0DjoGr4DUSKkHDhMU34n27BZVcENla1TK5rlBdZ7f8j9z3oBBgBXV3obotSOeQAAAABJRU5ErkJggg=="/></defs></svg>
              <h3 className={styles.arabBlockTitle}>
                <span className={styles.titleItalic}>Market</span> ASPIRATIONS
              </h3>
            </div>
            <p className={styles.arabBlockText}>
              Across the GCC and wider Middle East, luxury, innovation, and lifestyle drive consumer decisions. We position brands to align with these aspirations - ensuring they are not just seen, but desired.
            </p>
          </div>

          <div className={`${styles.arabTextBlock} arab-block-reveal`}>
            <div className={styles.arabBlockHeader}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="17" height="17" fill="url(#pattern0_418_307)"/><defs><pattern id="pattern0_418_307" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_418_307" transform="scale(0.0526316)"/></pattern><image id="image0_418_307" width="19" height="19" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuZGlkOjcyNzc2QzM4MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyNzc2QzM5MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzI3NzZDMzYxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzI3NzZDMzcxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TmCyfAAAAuElEQVR42qzUQQ7CIBAF0D/QxC03kY1Jd17FI3Rh9x7AxF7Bk4g7j+EV3AvT2liTRqoZ4K9ISB7DkIHwTt0+HUBbJIevCgVTFKumhYduNMP8vQyCJcIptkeSkzctW8XhMmAmq2cxiIGHuGfRihhnYnQibAm6HfVO9JoS6CcmhRaxFCiKpUJfWA40w3KhD1YCGrFS0DjoGr4DUSKkHDhMU34n27BZVcENla1TK5rlBdZ7f8j9z3oBBgBXV3obotSOeQAAAABJRU5ErkJggg=="/></defs></svg>
              <h3 className={styles.arabBlockTitle}>
                <span className={styles.titleItalic}>Language</span> &amp; COMMUNICATION
              </h3>
            </div>
            <p className={styles.arabBlockText}>
              Arabic is not just a language, but an identity marker. We craft bilingual and culturally adaptive messaging systems that preserve brand prestige while ensuring clarity and resonance.
            </p>
          </div>

          <div className={`${styles.arabTextBlock} arab-block-reveal`}>
            <div className={styles.arabBlockHeader}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="17" height="17" fill="url(#pattern0_418_307)"/><defs><pattern id="pattern0_418_307" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_418_307" transform="scale(0.0526316)"/></pattern><image id="image0_418_307" width="19" height="19" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuZGlkOjcyNzc2QzM4MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjcyNzc2QzM5MTkxRjExRjE4QzUwRjhCRUExNkJFNUQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzI3NzZDMzYxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzI3NzZDMzcxOTFGMTFGMThDNTBGOEJFQTE2QkU1RDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TmCyfAAAAuElEQVR42qzUQQ7CIBAF0D/QxC03kY1Jd17FI3Rh9x7AxF7Bk4g7j+EV3AvT2liTRqoZ4K9ISB7DkIHwTt0+HUBbJIevCgVTFKumhYduNMP8vQyCJcIptkeSkzctW8XhMmAmq2cxiIGHuGfRihhnYnQibAm6HfVO9JoS6CcmhRaxFCiKpUJfWA40w3KhD1YCGrFS0DjoGr4DUSKkHDhMU34n27BZVcENla1TK5rlBdZ7f8j9z3oBBgBXV3obotSOeQAAAABJRU5ErkJggg=="/></defs></svg>
              <h3 className={styles.arabBlockTitle}>
                <span className={styles.titleItalic}>The</span> MCCOLLINS EDGE
              </h3>
            </div>
            <p className={styles.arabBlockText}>
              With over 15 years of regional expertise, we have helped global and local brands thrive by translating business objectives into culturally powerful brand narratives. We don&apos;t just enter the Arab market - we make brands belong to it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
