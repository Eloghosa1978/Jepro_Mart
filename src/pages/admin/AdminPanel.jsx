import React, { useState } from "react";
import { seedProducts, clearProducts, getProductCount } from "../../utils/seedDatabase";

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [productCount, setProductCount] = useState(null);

  const handleSeed = async () => {
    setLoading(true);
    setMessage("");
    try {
      const result = await seedProducts();
      setMessage(`✅ ${result.message}`);
      fetchCount();
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = async () => {
    if (window.confirm("⚠️ Are you sure? This will delete ALL products!")) {
      setLoading(true);
      setMessage("");
      try {
        await clearProducts();
        setMessage("✅ All products cleared!");
        setProductCount(0);
      } catch (error) {
        setMessage(`❌ ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const fetchCount = async () => {
    try {
      const count = await getProductCount();
      setProductCount(count);
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  React.useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>🛠️ Admin Panel - Database Seeding</h1>

      <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
        <p>
          <strong>Products in Firestore:</strong> {productCount !== null ? productCount : "Loading..."}
        </p>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={handleSeed}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "⏳ Uploading..." : "🚀 Seed Products"}
        </button>

        <button
          onClick={handleClear}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "⏳ Deleting..." : "🗑️ Clear All Products"}
        </button>

        <button
          onClick={fetchCount}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          🔄 Refresh
        </button>
      </div>

      {message && (
        <div
          style={{
            padding: "15px",
            backgroundColor: message.includes("❌") ? "#ffcccc" : "#ccffcc",
            borderRadius: "5px",
            border: `2px solid ${message.includes("❌") ? "#ff0000" : "#00cc00"}`,
          }}
        >
          <p style={{ margin: 0 }}>{message}</p>
        </div>
      )}

      <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "5px" }}>
        <h3>📋 Instructions:</h3>
        <ol>
          <li>Click <strong>"🚀 Seed Products"</strong> to upload all products from products.js to Firestore</li>
          <li>Check your Firestore console to verify the data</li>
          <li>Use <strong>"🗑️ Clear All Products"</strong> to delete all products (use with caution!)</li>
          <li>Click <strong>"🔄 Refresh"</strong> to see the current product count</li>
        </ol>
      </div>
    </div>
  );
};

export default AdminPanel;
