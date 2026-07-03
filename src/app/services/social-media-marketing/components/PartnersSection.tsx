"use client";

import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function PartnersSection() {
  const logos = [
    "41bea16f4d84a34e45f96c17f750e2db39b4bab5.png",
    "3c2a7264d14f6a2a91fbf9a7fc2c4ab705a1cf7e.png",
    "7a67e920f6e3739048d9b01460972b81695c146c.png",
    "77ee9e30134ec59085b9630b0579f1b50866b4ec.png",
    "89ae8d978dd740c5333f4e5277ec547c54682926.png",
    "702e161d584d700a1939c8e7a1780c7d86c294f5.png",
    "890ffc860894d0de45b80ffc259841c60c890353.png",
    "311297f49c2ef648a9b50500fec6b49e1d350184.png",
    "dd7982cbe6dea600ae85133034ba16efdd766fdd.png",
    "e613516e2fb4684ffeb22ff7431b127f98b95062.png"
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersHeader}>
        <h2 className={styles.partnersTitle}>
          <span className={styles.partnersTitleItalic}>Our</span> <span className={styles.partnersTitleStrong}>PARTNERS</span>
        </h2>
        <p className={styles.partnersSubtitle}>
          In an industry that emphasizes inputs, we promise to deliver outputs!
        </p>
      </div>

      <div className={styles.marqueeContainer}>
        {/* Row 1 */}
        <div className={styles.marqueeTrack}>
          {[...logos.slice(0, 5), ...logos.slice(0, 5), ...logos.slice(0, 5)].map((filename, idx) => (
            <div key={`row1-${idx}`} className={styles.partnerLogoWrapper}>
              <Image 
                src={`/social-media-marketing/${filename}`}
                alt={`Partner Logo ${idx}`}
                width={160}
                height={80}
                className={styles.partnerLogo}
              />
            </div>
          ))}
        </div>
        
        {/* Row 2 */}
        <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}>
          {[...logos.slice(5, 10), ...logos.slice(5, 10), ...logos.slice(5, 10)].map((filename, idx) => (
            <div key={`row2-${idx}`} className={styles.partnerLogoWrapper}>
              <Image 
                src={`/social-media-marketing/${filename}`}
                alt={`Partner Logo ${idx + 5}`}
                width={160}
                height={80}
                className={styles.partnerLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
