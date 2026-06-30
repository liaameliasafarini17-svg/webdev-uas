import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container fade-in">
          <h1 className={styles.heroTitle}>
            Book Your Photobooth Experience in Just a Few Clicks
          </h1>
          <p className={styles.heroSubtitle}>
            Make every event more fun, memorable, and shareable with Motoin Photobooth.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/booking" className={styles.primaryBtn}>Book Now</Link>
            <Link href="/packages" className={styles.secondaryBtn}>View Packages</Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section container">
        <h2 className="title" style={{ textAlign: "center" }}>Our Services</h2>
        <div className={styles.highlightsGrid}>
          {[
            "Portable Photobooth",
            "Custom Frame Design",
            "Unlimited Photo Session",
            "Instant Digital Gallery",
            "Event & Café Activation"
          ].map((item, index) => (
            <div key={index} className={styles.highlightCard}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Motoin? */}
      <section className={styles.whyChooseUs}>
        <div className="container">
          <h2 className="title" style={{ color: "var(--motoin-white)", textAlign: "center" }}>
            Why Choose Motoin?
          </h2>
          <ul className={styles.featureList}>
            <li>✨ Fun & interactive experience</li>
            <li>🎨 Customizable design</li>
            <li>📅 Easy booking</li>
            <li>🎉 Suitable for personal, campus, corporate, and café events</li>
            <li>🤝 Friendly team and reliable service</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section container" style={{ textAlign: "center" }}>
        <h2 className="title">Ready to make your event more memorable?</h2>
        <p className="subtitle">Secure your date today before we are fully booked!</p>
        <Link href="/booking" className={styles.primaryBtn}>Book Now</Link>
      </section>
    </main>
  );
}
