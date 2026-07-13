"use client";

import Image from "next/image";
import { oswald, archivo } from "@/lib/fonts";

function scrollToForm() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: 72,
        background: "rgba(250,248,244,.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(28,26,22,.1)",
      }}
      className="section-pad"
    >
      <a
        href="#top"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <Image
          src="/logo.avif"
          alt="Noble Bathrooms"
          width={40}
          height={40}
          style={{ height: 40, width: "auto", objectFit: "contain" }}
          priority
        />
        <span
          style={{
            fontFamily: archivo,
            fontWeight: 800,
            letterSpacing: ".02em",
            fontSize: 18,
            color: "var(--ink)",
          }}
        >
          NOBLE BATHROOMS
        </span>
      </a>

      <div
        style={{ display: "flex", alignItems: "center", gap: 32 }}
        className="nav-links-desktop"
      >
        {[
          ["Services", "#services"],
          ["Process", "#process"],
          ["Projects", "#gallery"],
          ["Reviews", "#reviews"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="nav-link"
            style={{ fontWeight: 600, fontSize: 14 }}
          >
            {label}
          </a>
        ))}
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
          }}
        >
          Book a free consult →
        </button>
      </div>
    </nav>
  );
}
