"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Don't show public navbar on admin pages
  if (pathname?.startsWith("/admin")) return null;

  return (
    <nav style={{ 
      background: "var(--motoin-black)", 
      color: "var(--motoin-white)",
      padding: "1rem 0",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--motoin-white)" }}>
          MOTOIN<span style={{ color: "var(--motoin-red)" }}>.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-menu">
          <Link href="/packages" style={{ fontWeight: pathname === "/packages" ? 700 : 400 }}>Packages</Link>
          <Link href="/portfolio" style={{ fontWeight: pathname === "/portfolio" ? 700 : 400 }}>Portfolio</Link>
          <Link href="/partnership" style={{ fontWeight: pathname === "/partnership" ? 700 : 400 }}>Partnership</Link>
          <Link href="/about" style={{ fontWeight: pathname === "/about" ? 700 : 400 }}>About</Link>
          <Link href="/faq" style={{ fontWeight: pathname === "/faq" ? 700 : 400 }}>FAQ</Link>
          <Link href="/booking" style={{ 
            background: "var(--motoin-red)", 
            padding: "0.5rem 1.25rem", 
            borderRadius: "50px",
            fontWeight: 700
          }}>Book Now</Link>
        </div>
      </div>
    </nav>
  );
}
