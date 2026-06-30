"use client";

import { useEffect, useState } from "react";

type Package = {
  id: string;
  name: string;
  description: string;
  includes: string;
  targetAudience: string;
  price: string | null;
  createdAt: string;
};

export default function AdminPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    includes: "",
    targetAudience: "",
    price: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/packages");
      const data = await res.json();
      setPackages(data.packages || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setModalMode("create");
    setFormData({ name: "", description: "", includes: "", targetAudience: "", price: "" });
    setSelectedId(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (pkg: Package) => {
    setModalMode("edit");
    setFormData({
      name: pkg.name,
      description: pkg.description,
      includes: pkg.includes,
      targetAudience: pkg.targetAudience,
      price: pkg.price || "",
    });
    setSelectedId(pkg.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this package?")) return;

    try {
      const res = await fetch(`/api/admin/packages/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchPackages();
      } else {
        alert("Failed to delete package.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting package.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const url = modalMode === "create" ? "/api/admin/packages" : `/api/admin/packages/${selectedId}`;
      const method = modalMode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsModalOpen(false);
        fetchPackages();
      } else {
        alert("Failed to save package.");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving package.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="admin-header">
        <h1>Product Packages</h1>
        <button className="admin-btn" onClick={handleOpenCreate}>
          + Create Package
        </button>
      </div>

      <div className="admin-table-container">
        {loading ? (
          <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Target Audience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.id}>
                  <td>
                    <strong>{pkg.name}</strong><br/>
                    <span style={{ fontSize: "0.85rem", color: "#666" }}>{pkg.description.substring(0, 50)}...</span>
                  </td>
                  <td>{pkg.price || "-"}</td>
                  <td>{pkg.targetAudience}</td>
                  <td>
                    <button className="admin-action-btn" onClick={() => handleOpenEdit(pkg)} style={{ marginRight: "0.5rem" }}>
                      Edit
                    </button>
                    <button className="admin-action-btn delete" onClick={() => handleDelete(pkg.id)} style={{ color: "red" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {packages.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center", padding: "2rem" }}>No packages found.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h2>{modalMode === "create" ? "Create Package" : "Edit Package"}</h2>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-group">
                <label>Package Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="e.g. Rp 1.500.000"
                />
              </div>

              <div className="form-group">
                <label>Target Audience</label>
                <input
                  type="text"
                  required
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  placeholder="e.g. Corporate Events, Weddings"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Includes (Features)</label>
                <textarea
                  required
                  rows={4}
                  value={formData.includes}
                  onChange={(e) => setFormData({ ...formData, includes: e.target.value })}
                  placeholder="Comma-separated or plain text list of features included"
                ></textarea>
              </div>

              <div className="modal-actions">
                <button type="button" className="admin-btn-secondary" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Package"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
