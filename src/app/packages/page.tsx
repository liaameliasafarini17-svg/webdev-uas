import Link from "next/link";
import styles from "./page.module.css";

export default function PackagesPage() {
  const packages = [
    {
      title: "Basic Package",
      subtitle: "For small & intimate events",
      includes: [
        "2 Hours Photobooth Session",
        "Digital Photos Only",
        "Basic Frame Design",
        "Standard Props",
      ],
      price: "Start from Rp 1.500.000",
      recommended: false,
    },
    {
      title: "Standard Package",
      subtitle: "For campus, birthday & community events",
      includes: [
        "4 Hours Photobooth Session",
        "Custom Frame Design",
        "Online Digital Gallery",
        "Premium Props",
        "1 Operator & 1 Assistant",
      ],
      price: "Start from Rp 2.500.000",
      recommended: true,
    },
    {
      title: "Premium Package",
      subtitle: "For wedding, corporate & brand activation",
      includes: [
        "Unlimited Session (up to 6 Hours)",
        "Premium Setup & Backdrop",
        "Custom Branding UI",
        "Online Digital Gallery",
        "Event Analytic Report",
      ],
      price: "Start from Rp 4.500.000",
      recommended: false,
    },
    {
      title: "Custom Package",
      subtitle: "For multi-day events or special needs",
      includes: [
        "Flexible Duration",
        "Custom Booth Design",
        "Data Collection (Email/WhatsApp)",
        "Social Media Integration",
        "Dedicated Account Manager",
      ],
      price: "Contact Us for Pricing",
      recommended: false,
    }
  ];

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="title">Our Packages</h1>
          <p className="subtitle">Find the perfect photobooth package for your next event.</p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, idx) => (
            <div key={idx} className={`${styles.card} ${pkg.recommended ? styles.recommended : ''}`}>
              {pkg.recommended && <div className={styles.badge}>Most Popular</div>}
              <h2>{pkg.title}</h2>
              <p className={styles.cardSubtitle}>{pkg.subtitle}</p>
              <div className={styles.price}>{pkg.price}</div>
              <ul className={styles.features}>
                {pkg.includes.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <Link href={`/booking?package=${encodeURIComponent(pkg.title)}`} className={styles.bookBtn}>
                Book This Package
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
