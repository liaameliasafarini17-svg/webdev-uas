"use client";

import { useEffect, useState } from "react";

type Partnership = {
  id: string;
  name: string;
  brandName: string;
  whatsapp: string;
  partnershipType: string;
  location: string;
  createdAt: string;
};

export default function AdminPartnerships() {
  const [partnerships, setPartnerships] = useState<Partnership[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartnerships();
  }, []);

  const fetchPartnerships = async () => {
    try {
      const res = await fetch("/api/admin/partnerships");
      const data = await res.json();
      setPartnerships(data.partnerships);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1>Partnership Requests</h1>
      </div>

      <div className="admin-table-container">
        {loading ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Brand / Company</th>
                <th>Contact Person</th>
                <th>Type</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {partnerships.map((p) => (
                <tr key={p.id}>
                  <td>{new Date(p.createdAt).toLocaleDateString()}</td>
                  <td><strong>{p.brandName}</strong></td>
                  <td>
                    {p.name}<br/>
                    <span style={{ fontSize: "0.85rem", color: "#666" }}>{p.whatsapp}</span>
                  </td>
                  <td>{p.partnershipType}</td>
                  <td>{p.location}</td>
                </tr>
              ))}
              {partnerships.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "2rem" }}>No partnership requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
