"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function BookingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    customerName: "",
    whatsapp: "",
    email: "",
    eventDate: "",
    eventTime: "",
    location: "",
    eventType: "Wedding",
    guestCount: "",
    packageId: "", // Will map to names for simple UI, or actual package IDs if fetched from DB
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Send data to API
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, guestCount: parseInt(formData.guestCount) })
      });
      if (res.ok) {
        router.push("/booking/success");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting booking");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.formContainer}>
          <h1 className="title" style={{ textAlign: "center" }}>Book Your Experience</h1>
          <p className="subtitle" style={{ textAlign: "center" }}>
            Fill out the form below and we will get back to you with availability and details.
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Full Name *</label>
              <input type="text" name="customerName" required value={formData.customerName} onChange={handleChange} />
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

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Event Date *</label>
                <input type="date" name="eventDate" required value={formData.eventDate} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label>Event Time *</label>
                <input type="time" name="eventTime" required value={formData.eventTime} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Event Location/Venue *</label>
              <input type="text" name="location" required value={formData.location} onChange={handleChange} />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Event Type *</label>
                <select name="eventType" required value={formData.eventType} onChange={handleChange}>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Campus Event">Campus Event</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Café/Brand Activation">Café/Brand Activation</option>
                  <option value="Other Event">Other Event</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Estimated Guests *</label>
                <input type="number" name="guestCount" required value={formData.guestCount} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Select Package *</label>
              <select name="packageId" required value={formData.packageId} onChange={handleChange}>
                <option value="" disabled>Select a package</option>
                <option value="Basic Package">Basic Package</option>
                <option value="Standard Package">Standard Package</option>
                <option value="Premium Package">Premium Package</option>
                <option value="Custom Package">Custom Package</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Additional Notes</label>
              <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
