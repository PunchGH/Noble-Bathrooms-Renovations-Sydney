"use client";

import { useState } from "react";
import { oswald, mono } from "@/lib/fonts";

function scrollToForm() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

const FAQS = [
  {
    q: "Are you licensed and insured?",
    a: "Yes. Noble Bathrooms is an NSW Licensed Builder, fully insured and certified. We arrange Home Owner's Warranty cover before any progress payment begins, so your home and investment are protected from day one.",
  },
  {
    q: "Do you handle waterproofing — and is it guaranteed?",
    a: "Absolutely. Waterproofing is done by certified trades to Australian Standards, and every bathroom we build is backed by a 10-year waterproofing guarantee for genuine long-term peace of mind.",
  },
  {
    q: "Can you help with strata approvals?",
    a: "We can. For apartments and townhouses we assist with strata paperwork and approvals as part of the process, so you don't have to navigate it alone.",
  },
  {
    q: "How long does a typical bathroom renovation take?",
    a: "Most standard bathroom renovations take around 3–4 weeks on site once work begins, depending on scope and product lead times. We give you a clear schedule up front and keep you updated throughout.",
  },
  {
    q: "Do you provide 3D designs before we commit?",
    a: "Yes — a custom 3D design and tailored product selections are part of your free consultation, so you can see and refine your space before any construction starts.",
  },
  {
    q: "How does pricing work?",
    a: "You receive a detailed, itemised fixed-price quote with transparent pricing and no hidden extras. Any changes only happen when you request them, agreed in writing first.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(28,26,22,.14)",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "24px 4px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: oswald,
            fontWeight: 600,
            fontSize: 21,
            textTransform: "uppercase",
            color: "var(--ink)",
          }}
        >
          {q}
        </span>
        <span
          style={{
            fontSize: 26,
            lineHeight: 1,
            color: "var(--accent-deep)",
            transform: open ? "rotate(45deg)" : "none",
            transition: "transform .2s ease",
            flexShrink: 0,
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p
          style={{
            margin: "0 4px",
            paddingBottom: 24,
            fontSize: 15.5,
            lineHeight: 1.6,
            color: "rgba(28,26,22,.72)",
            maxWidth: 760,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--cream)", padding: "96px 60px" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: ".22em",
            color: "var(--accent-deep)",
            marginBottom: 16,
          }}
        >
          08 — GOOD TO KNOW
        </div>
        <h2
          className="h2-big"
          style={{
            margin: "0 0 36px",
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 52,
            lineHeight: 0.98,
            textTransform: "uppercase",
          }}
        >
          Questions, answered
        </h2>

        <div>
          {FAQS.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

        <button
          onClick={scrollToForm}
          className="btn-accent"
          style={{
            marginTop: 36,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            fontFamily: oswald,
            fontWeight: 600,
            letterSpacing: ".04em",
            textTransform: "uppercase",
            fontSize: 16,
            padding: "15px 26px",
          }}
        >
          Still have a question? Ask us →
        </button>
      </div>
    </section>
  );
}
