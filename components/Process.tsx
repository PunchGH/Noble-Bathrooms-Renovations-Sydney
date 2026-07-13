import { oswald, mono } from "@/lib/fonts";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Free Consultation & 3D Design",
    body: "We visit, listen and measure up — then bring your ideas to life with a custom 3D design and product selections tailored to your space and budget.",
  },
  {
    n: "02",
    title: "Detailed, Transparent Quote",
    body: "A clear, itemised fixed-price quote with no hidden extras. We handle strata approvals and paperwork, and arrange Home Owner's Warranty before you pay a cent.",
  },
  {
    n: "03",
    title: "Build With Your Project Manager",
    body: "Certified trades get to work under your dedicated licensed builder, with clear schedules, a tidy site and responsive updates every step of the way.",
  },
  {
    n: "04",
    title: "Handover, Guarantee & Aftercare",
    body: "We hand back a space you're proud to show off — backed by a 10-year waterproofing guarantee and genuine ongoing support long after completion.",
  },
];

export default function Process() {
  return (
    <Reveal
      id="process"
      className="section-pad"
      style={{ background: "var(--cream)", padding: "96px 60px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: ".22em",
            color: "var(--accent-deep)",
            marginBottom: 16,
          }}
        >
          03 — HOW IT WORKS
        </div>
        <h2
          className="h2-big"
          style={{
            margin: "0 auto",
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 0.98,
            textTransform: "uppercase",
            maxWidth: 640,
          }}
        >
          A guided process, from first sketch to handover
        </h2>

        <div
          className="grid-4"
          style={{
            marginTop: 52,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 22,
            textAlign: "left",
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                background: "#fff",
                border: "1px solid rgba(28,26,22,.09)",
                borderTop: "4px solid var(--accent)",
              }}
            >
              <div
                style={{
                  fontFamily: oswald,
                  fontWeight: 700,
                  fontSize: 44,
                  color: "rgba(28,26,22,.14)",
                  padding: "20px 22px 0",
                }}
              >
                {s.n}
              </div>
              <div style={{ padding: "6px 22px 26px" }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontFamily: oswald,
                    fontWeight: 600,
                    fontSize: 21,
                    textTransform: "uppercase",
                    lineHeight: 1.05,
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
