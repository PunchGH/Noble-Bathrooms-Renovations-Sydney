import Image from "next/image";
import { oswald, mono, archivo } from "@/lib/fonts";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer
      className="section-pad"
      style={{
        background: "var(--ink)",
        color: "var(--light)",
        padding: "64px 60px 32px",
      }}
    >
      <div
        className="grid-4"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}
          >
            <Image
              src="/logo.avif"
              alt="Noble Bathrooms"
              width={36}
              height={36}
              style={{ height: 36, width: "auto", objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: archivo,
                fontWeight: 800,
                letterSpacing: ".02em",
                fontSize: 17,
              }}
            >
              NOBLE BATHROOMS
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 14.5,
              lineHeight: 1.6,
              color: "rgba(245,242,236,.62)",
              maxWidth: 320,
            }}
          >
            Sydney&apos;s expert bathroom, kitchen &amp; home renovations —
            guided every step of the way by a licensed builder. Done right the
            first time.
          </p>
        </div>

        <div>
          <div style={colHead}>EXPLORE</div>
          <div style={colList}>
            <a href="#services" style={linkStyle}>Services</a>
            <a href="#process" style={linkStyle}>Process</a>
            <a href="#gallery" style={linkStyle}>Projects</a>
            <a href="#reviews" style={linkStyle}>Reviews</a>
          </div>
        </div>

        <div>
          <div style={colHead}>CONTACT</div>
          <div style={colList}>
            <a href={`tel:${PHONE_TEL}`} style={linkStyle}>{PHONE_DISPLAY}</a>
            <a href="mailto:hello@noblebathrooms.com.au" style={linkStyle}>
              hello@noblebathrooms.com.au
            </a>
            <span style={{ color: "rgba(245,242,236,.62)" }}>Sydney, NSW</span>
          </div>
        </div>

        <div>
          <div style={colHead}>CREDENTIALS</div>
          <div style={colList}>
            <span style={{ color: "rgba(245,242,236,.62)" }}>NSW Licensed Builder</span>
            <span style={{ color: "rgba(245,242,236,.62)" }}>Fully Insured &amp; Certified</span>
            <span style={{ color: "rgba(245,242,236,.62)" }}>Home Owner&apos;s Warranty</span>
            <span style={{ color: "rgba(245,242,236,.62)" }}>10-Yr Waterproofing Guarantee</span>
          </div>
        </div>
      </div>

      <div
        className="stack-mobile"
        style={{
          maxWidth: 1200,
          margin: "44px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(245,242,236,.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 13, color: "rgba(245,242,236,.5)" }}>
          © 2026 Noble Bathrooms Renovations Sydney. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: ".18em",
            color: "rgba(245,242,236,.4)",
          }}
        >
          DONE RIGHT · THE FIRST TIME
        </span>
      </div>
    </footer>
  );
}

const colHead: React.CSSProperties = {
  fontFamily: oswald,
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "var(--accent)",
  marginBottom: 16,
};

const colList: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  fontSize: 14.5,
};

const linkStyle: React.CSSProperties = {
  color: "rgba(245,242,236,.75)",
};
