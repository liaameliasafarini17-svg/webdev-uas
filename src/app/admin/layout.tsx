import Link from "next/link";
import "./admin.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          MOTOIN<span>.</span> ADMIN
        </div>
        <nav className="admin-nav">
          <Link href="/admin/bookings">Bookings</Link>
          <Link href="/admin/calendar">Calendar</Link>
          <Link href="/admin/partnerships">Partnerships</Link>
          <Link href="/" target="_blank">View Live Site ↗</Link>
        </nav>
      </aside>
      <main className="admin-main">
        {children}
      </main>
    </div>
  );
}
