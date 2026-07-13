"use client";

import Image from "next/image";
import { oswald, mono } from "@/lib/fonts";
import Reveal from "./Reveal";

function scrollToForm() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

const SERVICES = [
  {
    n: "01",
    title: "Bathroom Renovations",
    img: "/images/bath1.jpg",
    body: "Full bathroom transformations — from compact ensuites to luxury main baths. Waterproofing, tiling, plumbing and premium fixtures, project-managed end to end.",
  },
  {
    n: "02",
    title: "Kitchen Renovations",
    img: "/images/kitchen1.jpg",
    body: "Functional, beautiful kitchens with custom joinery, stone benchtops and quality Australian appliances — designed around how your family actually lives.",
  },
  {
    n: "03",
    title: "Laundry Renovations",
    img: "/images/laundry1.jpg",
    body: "Hard-working laundries that make the most of every centimetre — smart storage, durable surfaces and finishes that match the rest of your home.",
  },
  {
    n: "04",
    title: "Home Renovations",
    img: "/images/bath4.jpg",
    body: "Whole-home updates and multi-room projects delivered under one licensed builder, one plan and one clear quote — with minimal disruption to your household.",
  },
];

export default function Services() {
  return (
    <Reveal
      id="services"
      className="section-pad"
      style={{ background: "var(--cream)", padding: "96px 60px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: ".22em",
            color: "var(--accent-deep)",
            marginBottom: 16,
          }}
        >
          01 — WHAT WE DO
        </div>
        <h2
          className="h2-big"
          style={{
            margin: 0,
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 0.98,
            textTransform: "uppercase",
            maxWidth: 640,
          }}
        >
          Renovations, done properly — start to finish
        </h2>

        <div
          className="grid-4"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 22,
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="card-lift"
              style={{
                background: "#fff",
                border: "1px solid rgba(28,26,22,.09)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: 168,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width:900px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    fontFamily: mono,
                    fontSize: 12,
                    letterSpacing: ".1em",
                    color: "var(--light)",
                    background: "rgba(12,10,7,.55)",
                    padding: "4px 8px",
                  }}
                >
                  {s.n}
                </span>
              </div>
              <div style={{ padding: "22px 22px 26px", flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontFamily: oswald,
                    fontWeight: 600,
                    fontSize: 22,
                    textTransform: "uppercase",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "rgba(28,26,22,.72)",
                  }}
                >
                  {s.body}
                </p>
                <div
                  onClick={scrollToForm}
                  className="link-accent"
                  style={{
                    cursor: "pointer",
                    marginTop: 16,
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: ".02em",
                  }}
                >
                  Get a quote →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
