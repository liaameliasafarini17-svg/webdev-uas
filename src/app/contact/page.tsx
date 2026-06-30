"use client";

import styles from "../booking/page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        
        <div>
          <h1 className="title">Get In Touch</h1>
          <p className="subtitle">
            Have a question or want to collaborate? We'd love to hear from you!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
            <div>
              <h3 style={{ fontSize: "1.125rem", color: "var(--motoin-black)", marginBottom: "0.5rem" }}>Service Area</h3>
              <p style={{ color: "var(--motoin-gray)" }}>Bogor, Jabodetabek, dan sekitarnya</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.125rem", color: "var(--motoin-black)", marginBottom: "0.5rem" }}>Email</h3>
              <p style={{ color: "var(--motoin-gray)" }}>hello@motoinphotobooth.com</p>
            </div>
            <div>
              <h3 style={{ fontSize: "1.125rem", color: "var(--motoin-black)", marginBottom: "0.5rem" }}>Social Media</h3>
              <p style={{ color: "var(--motoin-gray)" }}>Instagram: @motoin.photobooth</p>
            </div>
            
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className={styles.submitBtn} style={{ textDecoration: "none", textAlign: "center", marginTop: "1rem", maxWidth: "250px" }}>
              Chat via WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.formContainer} style={{ margin: 0, width: "100%" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Send a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" required />
            </div>
            <div className={styles.formGroup}>
              <label>WhatsApp</label>
              <input type="tel" required />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea rows={4} required></textarea>
            </div>
            <button type="button" onClick={() => alert("Message sent! We'll get back to you soon.")} className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
