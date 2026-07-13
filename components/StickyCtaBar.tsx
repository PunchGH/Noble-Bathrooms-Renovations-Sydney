"use client";

import { useEffect, useState } from "react";
import { oswald } from "@/lib/fonts";

function scrollToForm() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

export default function StickyCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const q = document.getElementById("quote");
      let next = window.scrollY > 650;
      if (q) {
        const r = q.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 120) next = false;
      }
      setShow(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "12px 24px",
        background: "rgba(23,21,15,.96)",
        backdropFilter: "blur(8px)",
        borderTop: "2px solid var(--accent)",
        color: "var(--light)",
        transform: show ? "translateY(0)" : "translateY(120%)",
        transition: "transform .35s ease",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span style={{ color: "var(--accent)", fontWeight: 700 }}>4.9★</span>
        <span style={{ fontSize: 14, color: "rgba(245,242,236,.85)" }}>
          Rated five stars on Google
        </span>
        <span style={{ color: "rgba(245,242,236,.3)" }}>|</span>
        <span style={{ fontSize: 14, color: "rgba(245,242,236,.7)" }}>
          Free consultation · response in 1 business day
        </span>
      </div>
      <button
        onClick={scrollToForm}
        className="btn-accent"
        style={{
          fontFamily: oswald,
          fontWeight: 600,
          letterSpacing: ".04em",
          textTransform: "uppercase",
          fontSize: 14,
          padding: "11px 20px",
          whiteSpace: "nowrap",
        }}
      >
        Book a free consult →
      </button>
    </div>
  );
}
