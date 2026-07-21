import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import styles from "./page.module.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "600", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Metro Brazil × McCollins Media — Growth Proposal",
  description:
    "Growth proposal prepared for Metro Brazil, July 2026. Brand strategy, performance media, content and creator partnerships.",
};

export default function ProposalPage() {
  return (
    <div
      className={`${styles.proposalBody} ${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      style={{
        // Set the CSS variables for fonts so the style sheet can read them
        // @ts-ignore
        "--font-fraunces": fraunces.style.fontFamily,
        "--font-inter": inter.style.fontFamily,
        "--font-ibm-plex-mono": ibmPlexMono.style.fontFamily,
      }}
    >
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.wrap}>
          <span className={styles.brand}>Metro Brazil × McCollins Media</span>
          <span className={styles.links}>
            <a href="#market">Market</a>
            <a href="#landscape">Landscape</a>
            <a href="#funnel">Funnel</a>
            <a href="#crm">Email &amp; WhatsApp</a>
            <a href="#creators">Creators</a>
            <a href="#plan">Plan</a>
          </span>
        </div>
      </nav>

      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.mono}>Growth proposal · Prepared for Metro Brazil · July 2026</div>
          <h1>You{"'"}ve built the hard part. Now let{"'"}s build the demand.</h1>
          <p className={styles.lede}>
            Supply chain, a Dubai fulfilment hub, seven bilingual storefronts and a customer base across the GCC —
            that{"'"}s the part most brands never get right. What{"'"}s missing is a funnel built around the one thing that
            decides every shapewear purchase: fit.
          </p>
          <div className={styles.sig}>
            A proposal from McCollins Media — brand strategy, performance media, content and creator partnerships. Dubai.
          </div>
        </div>
      </header>

      {/* SECTION 1: MARKET */}
      <section id="market">
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>01 — The market</div>
          <h2>Three markets, three different plays</h2>
          <p className={styles.sub}>
            Metro Brazil already sells across the GCC, but Saudi, the UAE and Kuwait behave differently — in size, in
            growth rate, in how people pay and in what makes them buy. Treating them as one region is the most common and
            most expensive mistake in GCC e-commerce.
          </p>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <span className={styles.mono}>Saudi Arabia · Priority</span>
              <h3>Scale and momentum</h3>
              <p>
                <strong>~15% CAGR toward $27B by 2029.</strong> The largest and fastest-moving e-commerce market in the
                region, with retail overall projected to reach around $54B by 2028 under Vision 2030.
              </p>
              <p>
                Snapchat and TikTok dominate discovery, Arabic-first creative is non-negotiable, and Tabby and Tamara now
                shape how a SAR 500 basket is judged. This is where the volume is.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.mono}>UAE · Margin</span>
              <h3>Highest value per customer</h3>
              <p>
                <strong>~$12.3B in 2026, forecast to reach ~$21B by 2031.</strong> Smaller in population, larger in basket
                size and repeat rate, with among the highest digital commerce penetration in the world.
              </p>
              <p>
                Delivery expectations are brutal — Noon now runs dark stores covering most urban households with delivery
                windows measured in minutes. Convenience is table stakes; brand and fit are the differentiators.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.mono}>Kuwait · Efficiency</span>
              <h3>Small, dense, loyal</h3>
              <p>
                <strong>~$1.95B in 2026, growing steadily toward ~$2.5B by 2031.</strong> Slower headline growth because
                adoption is already near-complete — internet penetration exceeds 99%.
              </p>
              <p>
                Fashion is the largest online category and influence travels fast through tight social networks. Low media
                cost, high creator efficiency, strong repeat behaviour. An underrated profit market.
              </p>
            </div>
          </div>

          <div className={styles.grid2} style={{ marginTop: "22px" }}>
            <div className={styles.card}>
              <span className={styles.mono}>The category itself</span>
              <h3>A focused pond inside a large lake</h3>
              <p>
                The Saudi shapewear and stocking market is projected to pass <strong>$7M by 2028</strong>. Share alone won
                {"'"}t carry the growth plan — the strategy has to widen the category through occasion (bridal, post-partum,
                everyday, sport) rather than compete for a fixed slice.
              </p>
              <p>That{"'"}s why the funnel below is built around occasions and fit rather than around product lines.</p>
            </div>
            <div className={styles.card}>
              <span className={styles.mono}>Retail</span>
              <h3>Showrooms as fitting rooms</h3>
              <p>
                The planned Riyadh and Jeddah stores solve the category{"'"}s core friction: trying it on. Treated as a fit
                channel rather than purely a sales channel, they lift online conversion across the whole Saudi market — and
                give creators a physical setting to film in.
              </p>
            </div>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "13.5px", marginTop: "20px" }}>
            Market figures are drawn from published third-party forecasts. Estimates vary between research houses; we work
            to ranges rather than single points and reconcile them against your own sales data.
          </p>
        </div>
      </section>

      {/* SECTION 2: LANDSCAPE */}
      <section id="landscape">
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>02 — The landscape</div>
          <h2>Four layers of competition, not one list</h2>
          <p className={styles.sub}>
            The brands taking sales from Metro Brazil aren{"'"}t all competing on the same thing. Each layer takes a different
            part of the customer{"'"}s decision — which means each needs a different answer.
          </p>

          <div className={styles.layer}>
            <div>
              <h3>Global brand</h3>
              <div className={styles.who}>SKIMS · Spanx</div>
            </div>
            <p>
              They own category fame and the trust that comes with department-store distribution. SKIMS in particular is
              stocked regionally with two-hour delivery in Dubai. They win the customer who already knows what she{"'"}s going
              to search for.
            </p>
          </div>
          <div className={styles.layer}>
            <div>
              <h3>Performance DTC</h3>
              <div className={styles.who}>Shapellx · Honeylove · Feelingirl · Sculptshe</div>
            </div>
            <p>
              The closest competitors in practice. Same compression-and-confidence positioning, heavy creator seeding,
              permanent promotion. They bid on the same impressions and they set the price anchor the customer arrives with.
            </p>
          </div>
          <div className={styles.layer}>
            <div>
              <h3>Marketplaces</h3>
              <div className={styles.who}>Namshi · Noon · Amazon · Ounass</div>
            </div>
            <p>
              They own search intent, delivery speed and price comparison. This is where the customer goes to check after
              someone else{"'"}s advertising has done the educating — which is exactly why the funnel needs to close before
              she leaves.
            </p>
          </div>
          <div className={styles.layer}>
            <div>
              <h3>Direct &amp; informal</h3>
              <div className={styles.who}>Latin brands going direct · Arabic-language resellers</div>
            </div>
            <p>
              Supplier brands can sell direct into the region, and Arabic-language Instagram and WhatsApp sellers compete on
              familiarity and speed. They{"'"}re small individually and significant in aggregate.
            </p>
          </div>

          <div style={{ marginTop: "40px" }} className={styles.pull}>
            <p>
              SKIMS owns fame. Namshi owns choice. The cross-border brands own price. Nobody owns fit — and nobody owns it in
              Arabic.
            </p>
            <span>The position available to Metro Brazil</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: POSITION */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>03 — The position</div>
          <h2>The shapewear that actually fits you</h2>
          <p className={styles.sub}>
            This is a marketing position, not a product change — which is why it can be built and proven inside a single
            quarter.
          </p>
          <div className={styles.grid2}>
            <div className={styles.card}>
              <span className={styles.mono}>Why fit</span>
              <h3>It{"'"}s the decision and the cost</h3>
              <p>
                Compression shapewear carries the highest size-return rate in apparel. Every wrong size is two shipments, a
                refund and usually a lost customer. Solve fit before checkout and the same media spend produces more revenue
                and fewer returns.
              </p>
              <p>
                It{"'"}s also the objection that stops the purchase in the first place. Removing it lifts conversion and
                margin at the same time — rare in performance marketing.
              </p>
            </div>
            <div className={styles.card}>
              <span className={styles.mono}>Why Arabic-first</span>
              <h3>Made in market, not translated</h3>
              <p>
                Saudi shoppers respond to Khaleeji-dialect creative, local creators, Snapchat, and payment they recognise.
                Translated campaigns read corporate and underperform against creative conceived in Arabic from the start.
              </p>
              <p>
                Combined with Brazilian manufacturing heritage, this gives a story no regional competitor and no
                cross-border DTC brand can copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FUNNEL */}
      <section id="funnel">
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>04 — The funnel</div>
          <h2>Five stages, each with one job</h2>
          <p className={styles.sub}>
            A funnel is simply the path from the first time someone sees you to the moment she recommends you — and the
            measurable drop-off between each step. Most brands spend at the top and lose the customer in the middle. We
            build the middle first.
          </p>

          <div className={styles.grid2} style={{ marginBottom: "34px" }}>
            <div className={styles.card}>
              <span className={styles.mono}>How it works</span>
              <h3>Fix the leaks before turning up the tap</h3>
              <p>
                If 100 people see an ad and 3 buy, doubling the media budget doubles the cost of the 97 who didn{"'"}t.
                Improving the middle of the funnel — the moment fit, price and trust get resolved — raises the return on
                every dirham already being spent, before a single extra impression is bought.
              </p>
              <p>
                That{"'"}s the order of work: diagnose the drop-offs, fix qualification and conversion, then scale reach
                against creative that has already proven it converts.
              </p>
            </div>
            <div className={styles.card}>
              <span className={styles.mono}>How we hold it</span>
              <h3>One number per stage</h3>
              <p>
                Every stage below carries a single target metric, so performance is never a debate about impressions. Reach
                is measured in qualified impressions, engage in click-through, qualify in quiz completion, convert in
                conversion rate and payback period, repeat in returning-customer share.
              </p>
              <p>
                These are our working benchmarks for a premium GCC e-commerce brand. We calibrate them against your actual
                data in the first two weeks and commit to the agreed figures in the scope of work.
              </p>
            </div>
          </div>

          {/* STAGE 1 */}
          <div className={styles.stage}>
            <div className={`${styles.bar} ${styles.f1} ${styles.w1}`}>
              <span className={styles.s}>Stage 01</span>
              <span className={styles.t}>Reach</span>
              <span className={styles.m}>8M qualified impressions / month</span>
            </div>
            <div className={styles.body}>
              <ul>
                <li>
                  Creative built on fabric, movement and silhouette — designed to perform inside the platform rules that
                  govern this category rather than run into them.
                </li>
                <li>Arabic-first Snapchat and TikTok for Saudi; Meta and Google for the UAE, Kuwait and Qatar.</li>
                <li>
                  Creator whitelisting: paid delivered through creator handles for higher trust and stronger cost-per-thousand.
                </li>
                <li>Arabic category SEO to intercept the search demand currently landing on marketplaces.</li>
              </ul>
            </div>
          </div>

          {/* STAGE 2 */}
          <div className={styles.stage}>
            <div className={`${styles.bar} ${styles.f2} ${styles.w2}`}>
              <span className={styles.s}>Stage 02</span>
              <span className={styles.t}>Engage</span>
              <span className={styles.m}>2.5–3.5% click-through · CPC under SAR 1.6</span>
            </div>
            <div className={styles.body}>
              <ul>
                <li>Occasion-led hooks rather than product shots: under an abaya, for a wedding, post-partum, all-day comfort.</li>
                <li>Creator content that ends on a fit question, not a product page.</li>
                <li>
                  Khaleeji-dialect UGC as the primary creative source — it consistently outperforms polished brand film in this
                  category.
                </li>
              </ul>
            </div>
          </div>

          {/* STAGE 3 */}
          <div className={styles.stage}>
            <div className={`${styles.bar} ${styles.f3} ${styles.w3}`}>
              <span className={styles.s}>Stage 03</span>
              <span className={styles.t}>Qualify</span>
              <span className={styles.m}>40% quiz completion · 3× conversion on quiz-led sessions</span>
            </div>
            <div className={styles.body}>
              <ul>
                <li>
                  The existing product quiz becomes a fit consultation: body goal, occasion, compression level, size — ending
                  in one recommendation, not a grid.
                </li>
                <li>
                  WhatsApp opt-in captured at the quiz, building an owned channel that outperforms email across the GCC.
                </li>
                <li>
                  A human fit advisor for anyone still hesitating — and the natural on-ramp to the Riyadh and Jeddah showrooms.
                </li>
              </ul>
            </div>
          </div>

          {/* STAGE 4 */}
          <div className={styles.stage}>
            <div className={`${styles.bar} ${styles.f4} ${styles.w4}`}>
              <span className={styles.s}>Stage 04</span>
              <span className={styles.t}>Convert</span>
              <span className={styles.m}>2.8–3.5% conversion · AOV SAR 420+ · payback under 60 days</span>
            </div>
            <div className={styles.body}>
              <ul>
                <li>
                  Free first exchange, stated prominently. It removes the category{"'"}s biggest objection and costs less than
                  the abandoned cart.
                </li>
                <li>Tabby and Tamara framing on the product page: a SAR 540 bodysuit reads as SAR 135 × 4.</li>
                <li>
                  Bundles built on fit logic rather than discount logic — the everyday set, the occasion set. Same basket lift,
                  protected margin.
                </li>
                <li>WhatsApp cart recovery within the hour, leading with fit help rather than a discount code.</li>
              </ul>
            </div>
          </div>

          {/* STAGE 5 */}
          <div className={styles.stage}>
            <div className={`${styles.bar} ${styles.f5} ${styles.w5}`}>
              <span className={styles.s}>Stage 05</span>
              <span className={styles.t}>Repeat</span>
              <span className={styles.m}>30% repeat within 180 days · 15% of revenue from advocacy</span>
            </div>
            <div className={styles.body}>
              <ul>
                <li>
                  VIP, Affiliate and Ambassador consolidated into one tiered programme with real attribution — customer,
                  advocate, ambassador.
                </li>
                <li>Day-14 review and re-order prompt; day-45 cross-sell from waist into bodysuits and sportswear.</li>
                <li>App-exclusive drops to drive installs, because app buyers repeat at materially higher rates than web.</li>
                <li>Referral in Arabic, shared over WhatsApp — the region{"'"}s real social graph.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OWNED CHANNELS */}
      <section id="crm">
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>05 — Owned channels</div>
          <h2>Email and WhatsApp: the revenue you already paid for</h2>
          <p className={styles.sub}>
            Paid media rents attention. Email and WhatsApp own it. For a brand with over a million customers on record,
            these two channels are the fastest route to revenue that doesn{"'"}t carry an acquisition cost — and in this
            region, WhatsApp is the one that does the heavy lifting.
          </p>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <span className={styles.mono}>WhatsApp — the primary channel</span>
              <h3>Where GCC customers actually reply</h3>
              <p>
                Across the Gulf, WhatsApp consistently outperforms email on open and response rates by a wide margin. Metro
                Brazil already runs support on WhatsApp around the clock — the opportunity is to turn a service line into a
                revenue channel.
              </p>
              <ul>
                <li>
                  <strong>Fit consultation:</strong> the quiz hands off to WhatsApp, where an advisor closes the hesitant
                  buyer. Highest-value conversation in the funnel.
                </li>
                <li>
                  <strong>Cart recovery:</strong> a message within the hour that leads with fit help, and only later with an
                  incentive.
                </li>
                <li>
                  <strong>Post-purchase care:</strong> how to wear it, how to wash it, how to size the next one — the sequence
                  that prevents returns.
                </li>
                <li>
                  <strong>Re-order and restock:</strong> broadcast lists segmented by product and size, not by country.
                </li>
                <li>
                  <strong>Occasion triggers:</strong> Ramadan, Eid, wedding season, back-to-work — timed to the calendar that
                  actually governs GCC spending.
                </li>
              </ul>
              <p style={{ marginBottom: 0, color: "var(--muted)", fontSize: "14px" }}>
                Built on a compliant business API with opt-in captured at the quiz and at checkout, so the list is permissioned
                from day one.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.mono}>Email — the margin channel</span>
              <h3>Depth, education and lifetime value</h3>
              <p>
                Email carries what WhatsApp can{"'"}t: longer-form education, lookbooks, the Brazilian manufacturing story,
                and the segmentation that raises average order value over time.
              </p>
              <ul>
                <li>
                  <strong>Welcome and fit series:</strong> five messages that teach compression levels and set the expectation
                  that fit is solved here, not guessed.
                </li>
                <li>
                  <strong>Browse and cart abandonment:</strong> triggered from on-site behaviour, in Arabic or English by
                  preference.
                </li>
                <li>
                  <strong>Post-purchase flow:</strong> day 3 care, day 14 review request, day 45 cross-sell into a second
                  category.
                </li>
                <li>
                  <strong>Win-back:</strong> lapsed at 120 and 240 days, segmented by what she bought and what size she kept.
                </li>
                <li>
                  <strong>VIP tier communications:</strong> early access and app-exclusive drops as the reward, rather than
                  another discount.
                </li>
              </ul>
              <p style={{ marginBottom: 0, color: "var(--muted)", fontSize: "14px" }}>
                Fully bilingual with RTL-correct templates — Arabic emails designed in Arabic, not mirrored from English.
              </p>
            </div>
          </div>

          <div className={styles.grid3} style={{ marginTop: "22px" }}>
            <div className={styles.card}>
              <h3>One customer, one view</h3>
              <p>
                Site, apps, WhatsApp, email and the loyalty programme reporting into a single customer record — so a message
                is never sent to someone who bought yesterday, and size history informs every recommendation.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Automation, not blasts</h3>
              <p>
                Behaviour-triggered flows do the majority of the work quietly in the background. Campaigns sit on top for
                launches and occasions, not as the engine itself.
              </p>
            </div>
            <div className={styles.card}>
              <h3>What good looks like</h3>
              <p>
                For a brand at this stage, owned channels should carry <strong>20–30% of total revenue</strong> within two to
                three quarters. That{"'"}s revenue with no media cost attached to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CREATORS */}
      <section id="creators">
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>06 — Creators</div>
          <h2>Four tiers, four different jobs</h2>
          <p className={styles.sub}>
            Shapewear is a trust purchase in a modest-fashion market. Reach is the least valuable thing a creator gives you
            — demonstrated credibility is the asset. Only one of these four tiers is about awareness.
          </p>

          <table>
            <thead>
              <tr>
                <th style={{ width: "18%" }}>Tier</th>
                <th style={{ width: "22%" }}>Who</th>
                <th>The job they do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Anchor</strong>
                  <br />
                  <span className={styles.mono} style={{ color: "var(--muted)" }}>
                    1–2 per year
                  </span>
                </td>
                <td>Regional talent with GCC-wide recognition</td>
                <td>
                  Category legitimacy and press. A campaign face for Ramadan, Eid and the showroom launches — the permission
                  that makes every tier below work harder.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Authority</strong>
                  <br />
                  <span className={styles.mono} style={{ color: "var(--muted)" }}>
                    8–12 per quarter
                  </span>
                </td>
                <td>Bridal stylists, personal shoppers, physiotherapists, post-partum and fitness voices</td>
                <td>
                  The conversion tier. They answer {"\""}will this work for my body, under this outfit{"\""} with genuine
                  expertise — consistently the strongest return in the category.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Community</strong>
                  <br />
                  <span className={styles.mono} style={{ color: "var(--muted)" }}>
                    40–60 per quarter
                  </span>
                </td>
                <td>Khaleeji micro-creators, Saudi and Kuwait weighted</td>
                <td>
                  Volume of authentic, dialect-correct content. This is the creative engine — most of the winning paid ads
                  will originate here.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Advocates</strong>
                  <br />
                  <span className={styles.mono} style={{ color: "var(--muted)" }}>
                    Always on
                  </span>
                </td>
                <td>Real customers from the VIP base</td>
                <td>
                  Reviews, referrals and honest results inside owned channels. The lowest-cost acquisition in the entire
                  programme.
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.grid2} style={{ marginTop: "34px" }}>
            <div className={styles.card}>
              <span className={styles.mono}>Content pillars</span>
              <ul>
                <li>
                  <strong>Under the outfit</strong> — abaya, kaftan, evening, bridal. Occasion first, always.
                </li>
                <li>
                  <strong>The fit test</strong> — one creator, three compression levels, an honest verdict.
                </li>
                <li>
                  <strong>Body seasons</strong> — post-partum, post-surgery, weight change, handled with care.
                </li>
                <li>
                  <strong>Made in Brazil</strong> — fabric technology and compression engineering. The one story nobody can
                  copy.
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <span className={styles.mono}>How we measure it</span>
              <ul>
                <li>Cost per acquired customer by tier — not impressions, not engagement rate.</li>
                <li>Incrementality testing: a matched creator cohort held out one month per quarter.</li>
                <li>Creative win-rate: the share of seeded content strong enough to run as paid.</li>
                <li>90-day customer value of creator-acquired buyers versus paid social.</li>
                <li>Paid usage rights on every contract, and cultural review on every Saudi asset.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: PLAN */}
      <section id="plan">
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>07 — The plan</div>
          <h2>What the first 90 days look like</h2>
          <p className={styles.sub}>Diagnose, build, then scale — in that order. Nothing gets scaled until it{"'"}s proven.</p>

          <div className={styles.phase}>
            <div className={styles.mono}>Days 1–30</div>
            <h3>Diagnose and stop the leaks</h3>
            <p>
              Full funnel and analytics audit. Advertising account health review. The fit quiz rebuilt with WhatsApp
              capture. Free-first-exchange messaging live across the site. VIP, Affiliate and Ambassador consolidated into
              a single tier map.
            </p>
          </div>
          <div className={styles.phase}>
            <div className={styles.mono}>Days 31–60</div>
            <h3>Build the engine</h3>
            <p>
              A creative system with 20+ concepts designed for this category{"'"}s constraints. Forty Saudi creators seeded.
              Whitelisting live on Snapchat and TikTok. WhatsApp lifecycle flows for cart recovery, post-purchase and
              re-order.
            </p>
          </div>
          <div className={styles.phase}>
            <div className={styles.mono}>Days 61–90</div>
            <h3>Scale what proved out</h3>
            <p>
              Authority tier activated ahead of the next occasion peak. App retention push. Paid scaled only against
              validated creative. First incrementality read, delivered with a growth dashboard covering acquisition cost,
              payback and repeat rate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: TEAM */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.mono} ${styles.eyebrow}`}>08 — The team</div>
          <h2>Why McCollins Media</h2>
          <p className={styles.sub}>
            A digital brand activation agency headquartered in Dubai Media City, building performance-led work across the
            UAE, Saudi Arabia, Kuwait, Qatar, Bahrain and Oman since 2013 — with a complete in-house team.
          </p>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Everything in-house</h3>
              <p>
                Brand development, web, performance marketing, SEO, marketing automation, content production, social and
                Google Ads under one roof. The funnel and the content that feeds it are built by the same team, and held to
                the same numbers.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Platform partners</h3>
              <p>
                Official partnerships with Google, Snapchat and TikTok — the three platforms that decide whether a shapewear
                campaign runs or gets rejected in this region — plus Baidu and Yandex for international expansion.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Arabic-first by default</h3>
              <p>
                Creative conceived in Arabic and produced in market, not translated after the fact. A multicultural Dubai
                team that builds for the Khaleeji shopper rather than adapting work made for somewhere else.
              </p>
            </div>
          </div>

          <div className={styles.grid2} style={{ marginTop: "22px" }}>
            <div className={styles.card}>
              <span className={styles.mono}>Retail &amp; group experience</span>
              <h3>We know how GCC retail actually operates</h3>
              <p>
                Work with <strong>Binhendi Enterprises</strong> and the <strong>Al-Futtaim Group</strong> has given us a
                working understanding of the regional retail segment from the inside — how brand portfolios, distribution,
                seasonal trade calendars and omnichannel retail decisions get made here.
              </p>
              <p style={{ marginBottom: 0 }}>
                That matters for Metro Brazil specifically as the Riyadh and Jeddah showrooms come online and the business
                moves from pure e-commerce to omnichannel.
              </p>
            </div>
            <div className={styles.card}>
              <span className={styles.mono}>Selected brands</span>
              <h3>Fifteen years of regional work</h3>
              <p>
                Toshiba · Pioneer · Fujifilm · Costa Coffee · Wagamama · Trader Vic{"'"}s · MMI · Energizer · DAMAC · VOSS ·
                Mapei · Dubai Airports Freezone · Roads and Transport Authority
              </p>
              <p style={{ marginBottom: 0, color: "var(--muted)", fontSize: "14px" }}>
                Across retail, luxury, F&amp;B, real estate, technology and government — including regulated and restricted
                categories where creative has to clear approval before it can perform.
              </p>
            </div>
          </div>

          <div className={styles.pull} style={{ marginTop: "34px" }}>
            <p>Give us 90 days on fit and creators, and we{"'"}ll hand you a growth story with the numbers to back it.</p>
            <span>Next step — a working session on the data</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className={styles.wrap}>
          <p>
            <strong>About the figures.</strong> Market sizing for Saudi Arabia, the UAE and Kuwait is drawn from published
            third-party forecasts; estimates vary between research houses, so we work to ranges and reconcile them against
            your own sales data. Performance targets are McCollins Media working benchmarks for a premium GCC e-commerce
            brand and are calibrated against client data before being committed to a scope of work.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>McCollins Media</strong> · Dubai, United Arab Emirates
          </p>
        </div>
      </footer>
    </div>
  );
}
