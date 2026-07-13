import Image from "next/image";
import { oswald, mono } from "@/lib/fonts";
import Reveal from "./Reveal";

const SHOTS = [
  { img: "/images/bath1.jpg", tag: "Ensuite · Mosman", span: true },
  { img: "/images/kitchen2.jpg", tag: "Kitchen · Ryde" },
  { img: "/images/bath2.jpg", tag: "Main Bath · Bondi" },
  { img: "/images/bath3.jpg", tag: "Ensuite · Chatswood" },
  { img: "/images/laundry1.jpg", tag: "Laundry · Parramatta" },
  { img: "/images/kitchen1.jpg", tag: "Kitchen · Hills District", span: true },
];

export default function Gallery() {
  return (
    <Reveal
      id="gallery"
      className="section-pad"
      style={{ background: "var(--cream-2)", padding: "96px 60px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="stack-mobile"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: ".22em",
                color: "var(--accent-deep)",
                marginBottom: 16,
              }}
            >
              04 — RECENT PROJECTS
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
              }}
            >
              Proof, not promises
            </h2>
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.55,
              color: "rgba(28,26,22,.72)",
              maxWidth: 340,
            }}
          >
            A selection of recent bathroom, kitchen and laundry renovations
            completed for families right across Sydney.
          </p>
        </div>

        <div
          className="grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridAutoRows: 220,
            gap: 16,
          }}
        >
          {SHOTS.map((s, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                position: "relative",
                gridColumn: s.span ? "span 2" : "span 1",
                gridRow: "span 1",
              }}
            >
              <Image
                src={s.img}
                alt={s.tag}
                fill
                sizes="(max-width:900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 12,
                  bottom: 12,
                  fontFamily: mono,
                  fontSize: 11,
                  letterSpacing: ".1em",
                  color: "var(--light)",
                  background: "rgba(12,10,7,.6)",
                  padding: "5px 9px",
                }}
              >
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
