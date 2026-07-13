import { oswald, mono } from "@/lib/fonts";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "From the 3D design to the final clean, everything was exactly as promised. The waterproofing guarantee gave us real peace of mind and the finish is flawless.",
    name: "Rebecca T.",
    where: "Ensuite renovation · Mosman",
  },
  {
    quote:
      "Our project manager kept us informed every single day. Tidy site, on schedule, and the quote never moved. Couldn't recommend Noble more highly.",
    name: "James & Priya M.",
    where: "Bathroom + laundry · Ryde",
  },
  {
    quote:
      "They handled the strata approvals and paperwork so we didn't have to stress. The new kitchen has completely changed how we use our home.",
    name: "Daniel K.",
    where: "Kitchen renovation · Bondi",
  },
];

export default function Testimonials() {
  return (
    <Reveal
      id="reviews"
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
          05 — REAL CUSTOMERS, REAL REVIEWS
        </div>
        <h2
          className="h2-big"
          style={{
            margin: "0 0 48px",
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 0.98,
            textTransform: "uppercase",
            maxWidth: 640,
          }}
        >
          Five-star reviews, all over Sydney
        </h2>

        <div
          className="grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 22,
          }}
        >
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              style={{
                background: "#fff",
                border: "1px solid rgba(28,26,22,.09)",
                padding: "30px 28px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  color: "var(--accent)",
                  fontSize: 18,
                  letterSpacing: 2,
                  marginBottom: 16,
                }}
              >
                ★★★★★
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "rgba(28,26,22,.85)",
                  flex: 1,
                }}
              >
                “{r.quote}”
              </p>
              <div
                style={{
                  marginTop: 22,
                  paddingTop: 18,
                  borderTop: "1px solid rgba(28,26,22,.1)",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 15 }}>{r.name}</div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(28,26,22,.6)",
                    marginTop: 2,
                  }}
                >
                  {r.where}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
