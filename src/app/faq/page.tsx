import styles from "../page.module.css";
import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      q: "Bagaimana cara booking Motoin Photobooth?",
      a: "Anda bisa langsung mengisi form di halaman Booking. Setelah itu, tim kami akan menghubungi Anda via WhatsApp untuk konfirmasi tanggal, ketersediaan, dan pembayaran."
    },
    {
      q: "Apakah bisa cek tanggal kosong?",
      a: "Tentu! Silakan isi form booking dengan tanggal yang Anda inginkan, kami akan segera mengonfirmasi apakah tanggal tersebut masih tersedia atau sudah full booked."
    },
    {
      q: "Apakah frame bisa custom?",
      a: "Ya! Mulai dari Standard Package, Anda bisa mendapatkan desain frame custom yang disesuaikan dengan tema acara Anda."
    },
    {
      q: "Apakah tersedia untuk acara di luar Bogor?",
      a: "Saat ini kami fokus melayani area Bogor, Jabodetabek, dan sekitarnya. Untuk area di luar itu, silakan hubungi kami untuk mendiskusikan biaya transportasi tambahan."
    },
    {
      q: "Berapa lama durasi layanan?",
      a: "Durasi mulai dari 2 jam (Basic Package) hingga 6 jam (Premium Package). Kami juga menyediakan Custom Package jika Anda butuh durasi yang lebih lama atau untuk event beberapa hari."
    },
    {
      q: "Apakah tersedia paket corporate atau wedding?",
      a: "Sangat tersedia! Premium Package kami sangat direkomendasikan untuk wedding dan corporate event karena mencakup setup premium dan event report."
    },
    {
      q: "Bagaimana sistem pembayaran?",
      a: "Setelah booking dikonfirmasi oleh admin, kami akan mengirimkan invoice. Pembayaran dilakukan via transfer bank (DP 50% untuk mengamankan tanggal, pelunasan H-3 acara)."
    },
    {
      q: "Apakah bisa kerja sama dengan café atau event organizer?",
      a: "Tentu bisa! Silakan kunjungi halaman Partnership untuk mengajukan proposal kerja sama, baik untuk Fixed Booth di café maupun kolaborasi event."
    }
  ];

  return (
    <main className={styles.main}>
      <div className="container" style={{ padding: "6rem 1rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="title" style={{ textAlign: "center", marginBottom: "3rem" }}>Frequently Asked Questions</h1>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: "var(--motoin-white)", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "1.125rem", color: "var(--motoin-black)", marginBottom: "0.5rem" }}>{faq.q}</h3>
              <p style={{ color: "var(--motoin-gray)", lineHeight: "1.6" }}>{faq.a}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <p style={{ marginBottom: "1rem", color: "var(--motoin-gray)" }}>Masih ada pertanyaan?</p>
          <Link href="/contact" className={styles.primaryBtn}>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </main>
  );
}
