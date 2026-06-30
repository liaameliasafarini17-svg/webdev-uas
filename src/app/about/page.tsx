import styles from "../page.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className="container" style={{ padding: "6rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="title" style={{ textAlign: "center", marginBottom: "2rem" }}>About Motoin Photobooth</h1>
        
        <p className="subtitle" style={{ textAlign: "center", marginBottom: "4rem" }}>
          Motoin Photobooth hadir untuk membuat setiap momen menjadi lebih hidup, menyenangkan, dan mudah dikenang. 
          Dengan konsep photobooth yang portable, modern, dan customizable, Motoin membantu berbagai acara menciptakan 
          pengalaman foto yang interaktif dan shareable.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <section>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--motoin-black)" }}>Our Story</h2>
            <p style={{ lineHeight: "1.8", color: "var(--motoin-gray)" }}>
              Started in Bogor, Motoin Photobooth was born from the idea that every event deserves a special touch. 
              We noticed that guests love taking home physical and digital memories, but traditional photobooths were 
              often bulky or lacked modern aesthetics. We designed Motoin to be flexible, premium, and most importantly, fun!
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--motoin-black)" }}>Our Mission</h2>
            <p style={{ lineHeight: "1.8", color: "var(--motoin-gray)" }}>
              Our mission is simple: <strong>"Bringing fun to every moment with our portable photobooth."</strong> 
              We strive to provide top-notch service, high-quality prints, and seamless digital integration for all kinds of events.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--motoin-black)" }}>Our Services</h2>
            <p style={{ lineHeight: "1.8", color: "var(--motoin-gray)" }}>
              We cater to Weddings, Birthdays, Graduations, Campus Events, Corporate Gatherings, and Café Activations. 
              Our setup is fully customizable to match your event's theme and branding.
            </p>
          </section>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/contact" className={styles.primaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
