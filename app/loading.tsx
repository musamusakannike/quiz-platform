"use client";

import { ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div
      className="app-container"
      style={{ justifyContent: "center", minHeight: "100vh" }}
    >
      <div className="main-content centered">
        <ScaleLoader
          color="#ffffff"
          height={60}
          width={6}
          radius={3}
          margin={4}
          speedMultiplier={1.2}
          aria-label="Loading Spinner"
        />
        <p className="page-subtitle" style={{ marginTop: "2rem" }}>
          Loading...
        </p>
      </div>
    </div>
  );
}
