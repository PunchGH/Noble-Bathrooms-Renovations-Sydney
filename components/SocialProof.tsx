import { oswald, mono } from "@/lib/fonts";

const BRANDS = ["Reece", "Beaumont Tiles", "Di Lorenzo", "Otti", "Bunnings"];

export default function SocialProof() {
  return (
    <section
      className="section-pad stack-mobile"
      style={{
        background: "var(--cream-2)",
        padding: "24px 60px",
        display: "flex",
        alignItems: "center",
        gap: 40,
        borderBottom: "1px solid rgba(28,26,22,.08)",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 30,
            color: "var(--accent-deep)",
          }}
        >
          4.9★
        </span>
        <span style={{ fontSize: 14, lineHeight: 1.35, maxWidth: 200 }}>
          Rated five stars across{" "}
          <strong>Google &amp; Product Reviews</strong>
        </span>
      </div>

      <div
        style={{
          fontFamily: mono,
          fontSize: 11,
          letterSpacing: ".2em",
          color: "rgba(28,26,22,.5)",
          whiteSpace: "nowrap",
        }}
      >
        WE BUILD WITH TRUSTED AUSTRALIAN BRANDS
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 28,
          flexWrap: "wrap",
          marginLeft: "auto",
        }}
      >
        {BRANDS.map((b) => (
          <span
            key={b}
            style={{
              fontFamily: oswald,
              fontWeight: 600,
              fontSize: 17,
              letterSpacing: ".03em",
              color: "rgba(28,26,22,.55)",
              textTransform: "uppercase",
            }}
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
