import styles from "./page.module.css";

export default function PortfolioPage() {
  const portfolios = [
    {
      eventName: "Rizky & Nisa Wedding",
      eventType: "Wedding",
      location: "Bogor Raya Club",
      description: "A beautiful garden wedding with our premium booth setup and custom floral frame.",
      // Using placeholder colors for image since we don't have assets yet
      bg: "#e63946" 
    },
    {
      eventName: "IPB Graduation Night 2026",
      eventType: "Campus Event",
      location: "IPB Dramaga",
      description: "Fun and energetic photobooth sessions for 500+ graduates.",
      bg: "#d4af37"
    },
    {
      eventName: "Tech Startup Year-End Party",
      eventType: "Corporate Event",
      location: "Aston Sentul",
      description: "Sleek and modern corporate photobooth with instant digital sharing.",
      bg: "#121212"
    },
    {
      eventName: "Kopi Kenangan New Menu Launch",
      eventType: "Café Activation",
      location: "Kopi Kenangan Pajajaran",
      description: "Brand activation campaign with custom branded photo frames.",
      bg: "#333333"
    },
    {
      eventName: "Sweet 17th Sarah",
      eventType: "Birthday Event",
      location: "Cibinong",
      description: "Glamorous black and gold themed photobooth for a private birthday party.",
      bg: "#121212"
    }
  ];

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="title">Our Portfolio</h1>
          <p className="subtitle">See how we bring fun and memories to every event.</p>
        </div>

        <div className={styles.grid}>
          {portfolios.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imagePlaceholder} style={{ background: item.bg }}>
                <span>Photo Placeholder</span>
              </div>
              <div className={styles.content}>
                <span className={styles.badge}>{item.eventType}</span>
                <h2>{item.eventName}</h2>
                <p className={styles.location}>📍 {item.location}</p>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
