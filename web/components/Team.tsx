import Image from "next/image";
import { oswald, mono } from "@/lib/fonts";
import Reveal from "./Reveal";

const PEOPLE = [
  { img: "/images/team1.jpg", name: "Marco Bianchi", role: "Founder & Licensed Builder" },
  { img: "/images/team2.jpg", name: "Sophie Nguyen", role: "Head of Design" },
  { img: "/images/team3.jpg", name: "Liam Roberts", role: "Project Manager" },
  { img: "/images/team4.jpg", name: "Ava Costa", role: "Client Care & Strata" },
];

const PARTNERS = ["Reece", "Beaumont Tiles", "Di Lorenzo", "Otti"];

export default function Team() {
  return (
    <Reveal
      className="section-pad"
      style={{ background: "var(--cream-2)", padding: "96px 60px" }}
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
          06 — THE PEOPLE
        </div>
        <h2
          className="h2-big"
          style={{
            margin: "0 0 16px",
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 0.98,
            textTransform: "uppercase",
          }}
        >
          A real team behind every project
        </h2>
        <p
          style={{
            margin: "0 0 44px",
            fontSize: 16,
            lineHeight: 1.55,
            color: "rgba(28,26,22,.72)",
            maxWidth: 620,
          }}
        >
          No faceless call centre. You&apos;ll meet your builder and designer
          before you sign anything — and work alongside certified trades who
          treat your home with genuine care.
        </p>

        <div
          className="grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 22,
          }}
        >
          {PEOPLE.map((p) => (
            <div key={p.name}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  background: "#ddd5c4",
                }}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width:900px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontFamily: oswald,
                  fontWeight: 600,
                  fontSize: 19,
                  textTransform: "uppercase",
                }}
              >
                {p.name}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  color: "rgba(28,26,22,.62)",
                  marginTop: 2,
                }}
              >
                {p.role}
              </div>
            </div>
          ))}
        </div>

        <div
          className="stack-mobile"
          style={{
            marginTop: 52,
            paddingTop: 32,
            borderTop: "1px solid rgba(28,26,22,.12)",
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: ".2em",
              color: "rgba(28,26,22,.5)",
            }}
          >
            WE WORK WITH
          </span>
          {PARTNERS.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: oswald,
                fontWeight: 600,
                fontSize: 20,
                letterSpacing: ".03em",
                color: "rgba(28,26,22,.55)",
                textTransform: "uppercase",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
