import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--motoin-black)", color: "var(--motoin-light-gray)", padding: "4rem 0 2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          
          <div>
            <h2 style={{ color: "var(--motoin-white)", marginBottom: "1rem" }}>MOTOIN.</h2>
            <p style={{ fontSize: "0.875rem", lineHeight: "1.6" }}>
              Bringing fun to every moment with our portable photobooth.
            </p>
          </div>

          <div>
            <h3 style={{ color: "var(--motoin-white)", marginBottom: "1rem", fontSize: "1.125rem" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/partnership">Partnership</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: "var(--motoin-white)", marginBottom: "1rem", fontSize: "1.125rem" }}>Contact</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              <li>📍 Bogor, Indonesia</li>
              <li>📱 +62 812-3456-7890</li>
              <li>✉️ hello@motoinphotobooth.com</li>
              <li>📸 @motoin.photobooth</li>
            </ul>
          </div>
          
        </div>

        <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", fontSize: "0.875rem" }}>
          &copy; {new Date().getFullYear()} Motoin Photobooth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
