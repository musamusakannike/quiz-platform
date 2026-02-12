"use client";

import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="app-container"
      style={{ justifyContent: "center", minHeight: "100vh" }}
    >
      <div className="main-content centered" style={{ maxWidth: "600px" }}>
        <div
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            background: "rgba(239, 68, 68, 0.1)",
            borderRadius: "50%",
            border: "1px solid rgba(239, 68, 68, 0.2)",
          }}
        >
          <AlertCircle size={48} color="#ef4444" />
        </div>

        <h1
          className="page-title"
          style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
        >
          Page Not Found
        </h1>

        <p
          className="page-subtitle"
          style={{ fontSize: "1.125rem", marginBottom: "2.5rem" }}
        >
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or deleted.
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 2rem",
            background: "var(--foreground)",
            color: "var(--background)",
            borderRadius: "12px",
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.opacity = "1";
          }}
        >
          <Home size={20} />
          Return Home
        </Link>
      </div>
    </div>
  );
}
