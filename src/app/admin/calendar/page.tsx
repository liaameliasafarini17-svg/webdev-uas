"use client";

import { useEffect, useState } from "react";

export default function AdminCalendar() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/admin/bookings");
      const data = await res.json();
      setBookings(data.bookings.filter((b: any) => b.status === "Confirmed" || b.status === "Paid"));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1>Confirmed Events Calendar</h1>
      </div>

      <div className="admin-table-container" style={{ padding: "2rem" }}>
        {bookings.length === 0 ? (
          <p>No confirmed events to display in the calendar yet.</p>
        ) : (
          <div style={{ display: "grid", gap: "1rem" }}>
            {bookings.map((b) => (
              <div key={b.id} style={{ 
                padding: "1rem", 
                borderLeft: "4px solid var(--motoin-red)",
                background: "#f9f9f9",
                borderRadius: "4px"
              }}>
                <h3 style={{ marginBottom: "0.5rem" }}>{new Date(b.eventDate).toLocaleDateString()} at {b.eventTime}</h3>
                <p><strong>{b.eventType}</strong> for {b.customerName}</p>
                <p style={{ color: "#666", fontSize: "0.9rem" }}>Location: {b.location}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
