import Image from "next/image";
import { oswald, mono } from "@/lib/fonts";
import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Licensed & Insured",
    body: "NSW Licensed Builder, fully insured and certified. Home Owner's Warranty cover is arranged before any progress payment — complete peace of mind from day one.",
  },
  {
    title: "Custom 3D Design",
    body: "See and refine your space before a single tile is laid. Detailed 3D designs and tailored product selections, with expert guidance from your builder and designer.",
  },
  {
    title: "One Project Manager",
    body: "A single dedicated contact — a fully qualified, licensed builder — guides your project from first quote to final handover. You always know who to call.",
  },
  {
    title: "Premium Craftsmanship",
    body: "Certified trades, premium finishes and impeccable attention to detail, backed by certificates and a 10-year waterproofing guarantee built to last.",
  },
];

export default function WhyNoble() {
  return (
    <Reveal
      className="section-pad"
      style={{
        background: "#1c1913",
        color: "var(--light)",
        padding: "96px 60px",
      }}
    >
      <div
        className="grid-2"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 5",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/feature.jpg"
              alt="A completed Noble Bathrooms renovation"
              fill
              sizes="(max-width:900px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              right: -8,
              bottom: -8,
              background: "var(--accent)",
              color: "var(--ink)",
              padding: "22px 26px",
              maxWidth: 220,
            }}
          >
            <div
              style={{
                fontFamily: oswald,
                fontWeight: 700,
                fontSize: 34,
                lineHeight: 1,
              }}
            >
              10-year
            </div>
            <div style={{ fontSize: 13, marginTop: 6, fontWeight: 600 }}>
              waterproofing guarantee on every bathroom we build.
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: ".22em",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            02 — THE NOBLE DIFFERENCE
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
            Built to last, where it actually counts
          </h2>
          <div
            className="grid-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 30,
            }}
          >
            {POINTS.map((p) => (
              <div key={p.title}>
                <div
                  style={{
                    fontFamily: oswald,
                    fontWeight: 600,
                    fontSize: 20,
                    textTransform: "uppercase",
                    marginBottom: 10,
                    paddingBottom: 10,
                    borderBottom: "2px solid var(--accent)",
                    display: "inline-block",
                  }}
                >
                  {p.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "rgba(245,242,236,.72)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
