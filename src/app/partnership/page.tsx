"use client";

import { useState } from "react";
import styles from "../booking/page.module.css"; // Reuse booking form styles

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    whatsapp: "",
    email: "",
    partnershipType: "Fixed Booth Partnership",
    location: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/partnerships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main className={styles.main}>
        <div className="container" style={{ textAlign: "center", padding: "4rem 1rem" }}>
          <h1 className="title">Proposal Submitted!</h1>
          <p className="subtitle">
            Thank you for your interest in partnering with Motoin Photobooth. Our team will review your proposal and contact you soon.
          </p>
          <a href="https://wa.me/6281234567890?text=Hello%20Motoin,%20let's%20discuss%20partnership!" className={styles.submitBtn} style={{textDecoration:"none", display:"inline-block", marginTop:"1rem"}}>
            Discuss Partnership on WhatsApp
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.formContainer}>
          <h1 className="title" style={{ textAlign: "center" }}>Let’s Create Memorable Experiences Together</h1>
          <p className="subtitle" style={{ textAlign: "center" }}>
            Partner with Motoin Photobooth to bring interactive photo experiences to your venue, event, or campaign.
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Your Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Brand / Company Name *</label>
                <input type="text" name="brandName" required value={formData.brandName} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>WhatsApp Number *</label>
                <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Partnership Type *</label>
              <select name="partnershipType" required value={formData.partnershipType} onChange={handleChange}>
                <option value="Fixed Booth Partnership">Fixed Booth Partnership (Café/Venue)</option>
                <option value="Event Collaboration">Event Collaboration</option>
                <option value="Sponsorship Partnership">Sponsorship Partnership</option>
                <option value="Brand Activation">Brand Activation</option>
                <option value="Campus & Community Partnership">Campus & Community Partnership</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Location / Venue Details *</label>
              <input type="text" name="location" required value={formData.location} onChange={handleChange} />
            </div>

            <div className={styles.formGroup}>
              <label>Partnership Details / Proposal Description</label>
              <textarea name="description" rows={5} value={formData.description} onChange={handleChange} placeholder="Tell us more about your event/venue and how we can collaborate..."></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
              {isSubmitting ? "Submitting..." : "Submit Partnership Proposal"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
