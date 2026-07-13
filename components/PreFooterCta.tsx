"use client";

import { oswald } from "@/lib/fonts";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/fonts";

function scrollToForm() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

export default function PreFooterCta() {
  return (
    <section
      className="section-pad stack-mobile"
      style={{
        background: "var(--accent)",
        padding: "30px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          fontFamily: oswald,
          fontWeight: 700,
          fontSize: 28,
          textTransform: "uppercase",
          color: "var(--ink)",
          lineHeight: 1.05,
        }}
      >
        Your dream bathroom starts with a free consultation.
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <a
          href={`tel:${PHONE_TEL}`}
          style={{
            fontFamily: oswald,
            fontWeight: 600,
            fontSize: 20,
            color: "var(--ink)",
            textTransform: "uppercase",
          }}
        >
          {PHONE_DISPLAY}
        </a>
        <button
          onClick={scrollToForm}
          className="btn-dark"
          style={{
            fontFamily: oswald,
            fontWeight: 600,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            fontSize: 15,
            padding: "14px 24px",
          }}
        >
          Book now →
        </button>
      </div>
    </section>
  );
}
