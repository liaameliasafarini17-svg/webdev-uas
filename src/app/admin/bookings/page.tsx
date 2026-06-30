"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: string;
  customerName: string;
  whatsapp: string;
  eventDate: string;
  eventType: string;
  status: string;
  package: { name: string };
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/admin/bookings");
      const data = await res.json();
      setBookings(data.bookings);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Pending Confirmation": return "status-pending";
      case "Confirmed": return "status-confirmed";
      case "Paid": return "status-paid";
      case "Completed": return "status-completed";
      case "Cancelled": return "status-cancelled";
      default: return "";
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1>Bookings</h1>
      </div>

      <div className="admin-table-container">
        {loading ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Event Date</th>
                <th>Type</th>
                <th>Package</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td>
                    <strong>{b.customerName}</strong><br/>
                    <span style={{ fontSize: "0.85rem", color: "#666" }}>{b.whatsapp}</span>
                  </td>
                  <td>{new Date(b.eventDate).toLocaleDateString()}</td>
                  <td>{b.eventType}</td>
                  <td>{b.package?.name || '-'}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(b.status)}`}>
                      {b.status}
                    </span>
                  </td>
                  <td>
                    <select 
                      value={b.status} 
                      onChange={(e) => handleStatusChange(b.id, e.target.value)}
                      style={{ padding: "0.25rem", borderRadius: "4px" }}
                    >
                      <option value="Pending Confirmation">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Paid">Paid</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", padding: "2rem" }}>No bookings found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
