# Design QA - Brand Development Abu Dhabi

- Source visual truth: `/Users/admin/Downloads/Branding Agency in Abu Dhabi · Desktop.pdf`
- Implementation: `http://localhost:3000/brand-development-dubai-and-abudhabi`
- Browser-rendered evidence: Codex in-app browser, tab 2, full-page capture (capture is held by the browser tool and has no filesystem path)
- Reference viewport: 1920 px desktop
- Source dimensions: 1920 x 10550 pt; inspected as a normalized 667 x 3663 px raster at 25 dpi
- Implementation dimensions: 1920 x 9882 px at device scale factor 1 for the primary comparison; an additional 1280 x 8823 px responsive capture was checked
- State: default page, closed FAQ; the first FAQ was also opened for interaction verification

**Findings**

- No actionable P0, P1, or P2 differences remain.
- Typography: the Delight and Playfair families, weights, casing, line height, italic accents, and hero hierarchy match the reference direction.
- Spacing and layout rhythm: hero split, client grid, services table, five-step row, regional positioning section, case-study hierarchy, FAQ, CTA, and footer follow the PDF composition. The implementation uses responsive constraints below the 1920 px source width.
- Colors and visual tokens: black, white, light-gray, electric-blue, and muted-gray tokens align with the source.
- Image quality and asset fidelity: all supplied visual assets are used directly. The Cleaning Superstore image was extracted from the supplied PDF at its original embedded resolution. No placeholder art remains.
- Copy and content: hero, CTAs, selected-client label, case-study heading, recognition strip, and FAQ copy match the supplied PDF.

**Full-view comparison evidence**

- The source PDF and browser full-page captures were opened and visually compared at the same desktop state.
- The implementation preserves the source's dark/light section cadence and reaches the same final CTA and oversized McCollins footer treatment.
- The sticky site header appears once in normal use; its additional placement inside a full-page browser capture is a capture artifact caused by fixed-position elements.

**Focused region comparison evidence**

- Hero: compared heading wrap, rating, intro copy, phone/WhatsApp actions, form fields, and glass object placement.
- Five-step section: compared card order, heights, imagery, serif titles, and alternating vertical rhythm.
- Case studies: compared Pioneer full-width lead image, VOSS/Mapei split, Cleaning Superstore banner, and awards strip.
- FAQ/CTA: compared spacing, rules, question order, plus controls, and final conversion block.

**Comparison history**

1. Initial capture found a mismatched hero, moving client marquees, missing Cleaning Superstore and recognition content, a white case-study section, and scroll-triggered content absent from full-page captures.
2. Updated the hero content and form, replaced marquees with the static client grid, added the missing source asset and recognition strip, rebuilt the case-study layout on black, and made key sections capture-safe.
3. The second capture found case-study cards too short and a duplicated footer tagline. Increased the portrait card depth, adjusted the Cleaning Superstore ratio, and applied a route-specific footer composition.
4. Final browser capture showed all major regions and source imagery, with no console errors. Project-specific ESLint checks passed. The production build compiled and passed TypeScript, then stopped during page-data collection because the repository's Mongo URI is not present in `.env.local`.

**Primary interactions tested**

- Project-budget select changes value.
- FAQ opens and exposes its answer.
- Phone, WhatsApp, case-study, see-all-work, and strategy-call controls are rendered as links.
- Browser console checked: no errors on the final fresh tab.

**Follow-up polish**

- P3: production reCAPTCHA cannot validate on localhost because the configured key is not valid for the local origin; the production-domain configuration is unchanged.

## Mobile refinement - 390 x 844

**Initial evidence**

- Captured the complete 390 px mobile page before the refinement.
- The capture exposed a desktop grid override pushing the included-services table off-canvas, loose vertical rhythm, an overly tall portrait crop for the Cleaning Superstore feature, a narrow recognition strip, and a large empty footer region.

**Fixes implemented**

- Rebuilt the mobile hero rhythm, paired the phone and WhatsApp actions, tightened the form, and repositioned the glass artwork.
- Restored the included-services table inside the viewport as a compact two-column grid.
- Rebalanced headings, card heights, gutters, body copy, and section padding across all mobile sections.
- Reframed the Cleaning Superstore feature as a landscape banner and expanded the recognition strip to the full content width.
- Improved FAQ touch spacing and CTA proportions.
- Added a route-specific compact mobile footer and forced its reveal content to remain visible without scroll-animation timing.

**Verification status**

- Project-specific ESLint checks passed.
- `git diff --check` passed.
- The final 390 px browser reload repeatedly timed out in the in-app browser after the edits, so a post-fix screenshot and console check could not be captured. The earlier desktop QA remains passed; the new mobile visual QA is blocked on browser capture.

final result: blocked
