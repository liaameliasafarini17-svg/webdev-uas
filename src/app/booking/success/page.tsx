import Link from "next/link";
import styles from "../page.module.css";

export default function BookingSuccessPage() {
  const whatsappNumber = "6281234567890"; // Example WhatsApp number
  const message = encodeURIComponent("Hello Motoin Photobooth! I have submitted a booking request via the website and would like to confirm my date.");

  return (
    <main className={styles.main}>
      <div className="container" style={{ textAlign: "center", maxWidth: "600px", padding: "4rem 1rem" }}>
        <h1 className="title">Booking Submitted!</h1>
        <p className="subtitle">
          Thank you! Your booking request has been received. Our status is currently <strong>Pending Confirmation</strong>. 
          Our team will contact you shortly to confirm availability, package details, and payment.
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.submitBtn}
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Chat Admin on WhatsApp
          </a>
          
          <Link href="/" style={{ color: "var(--motoin-red)", fontWeight: "600" }}>
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
