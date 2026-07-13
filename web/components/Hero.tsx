"use client";

import { useEffect, useRef, useState } from "react";
import { oswald, mono } from "@/lib/fonts";

function scrollToForm() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
}

type Stat = { value: number; decimals: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 4.9, decimals: 1, suffix: "★", label: "Average Google rating" },
  { value: 10, decimals: 0, suffix: "-yr", label: "Waterproofing guarantee" },
  { value: 100, decimals: 0, suffix: "%", label: "Licensed & insured" },
  { value: 350, decimals: 0, suffix: "+", label: "Sydney renovations" },
];

function CountUp({ stat, start }: { stat: Stat; start: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  return (
    <span>
      {val.toFixed(stat.decimals)}
      {stat.suffix}
    </span>
  );
}

export default function Hero() {
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: 780,
        color: "var(--light)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* full-bleed background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/Hero-video.mp4" type="video/mp4" />
      </video>

      {/* scrim for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(96deg,rgba(12,10,7,.9) 0%,rgba(12,10,7,.74) 42%,rgba(12,10,7,.4) 78%,rgba(12,10,7,.6) 100%)",
        }}
      />
      {/* accent edge */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 8,
          height: "100%",
          background: "var(--accent)",
          zIndex: 4,
        }}
      />

      <div
        className="section-pad"
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          padding: "88px 48px 44px 60px",
          maxWidth: 860,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            fontFamily: mono,
            fontSize: 12,
            letterSpacing: ".22em",
            color: "var(--accent)",
            marginBottom: 22,
          }}
        >
          <span
            style={{ width: 26, height: 2, background: "var(--accent)" }}
          />
          BATHROOMS · KITCHENS · LAUNDRIES · SYDNEY
        </div>
        <h1
          className="hero-h1"
          style={{
            margin: 0,
            fontFamily: oswald,
            fontWeight: 700,
            fontSize: 92,
            lineHeight: 0.9,
            letterSpacing: "-.01em",
            textTransform: "uppercase",
          }}
        >
          Renovations done right the{" "}
          <span style={{ color: "var(--accent)" }}>first time.</span>
        </h1>
        <p
          style={{
            margin: "26px 0 0",
            fontSize: 19,
            lineHeight: 1.5,
            maxWidth: 540,
            color: "rgba(245,242,236,.85)",
          }}
        >
          Sydney&apos;s expert bathroom &amp; kitchen renovations — guided from
          first sketch to final handover by a licensed builder. Custom 3D
          design, transparent fixed pricing, and a 10-year waterproofing
          guarantee.
        </p>
        <div
          className="stack-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 38,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={scrollToForm}
            className="btn-accent"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: oswald,
              fontWeight: 600,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              fontSize: 18,
              padding: "18px 30px",
            }}
          >
            Book a free consultation →
          </button>
          <a
            href="#gallery"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--light)",
              fontFamily: oswald,
              fontWeight: 600,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              fontSize: 18,
              padding: "18px 4px",
              borderBottom: "2px solid rgba(245,242,236,.4)",
            }}
          >
            See our work
          </a>
        </div>
      </div>

      {/* stats bar */}
      <div
        ref={statsRef}
        className="section-pad grid-4"
        style={{
          position: "relative",
          zIndex: 3,
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 1,
          background: "rgba(245,242,236,.14)",
          borderTop: "1px solid rgba(245,242,236,.18)",
        }}
      >
        {STATS.map((s) => (
          <div
            key={s.label}
            style={{
              padding: "26px 30px",
              background: "rgba(12,10,7,.42)",
              backdropFilter: "blur(2px)",
            }}
          >
            <div
              style={{
                fontFamily: oswald,
                fontWeight: 700,
                fontSize: 40,
                lineHeight: 1,
                color: "var(--accent)",
              }}
            >
              <CountUp stat={s} start={inView} />
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 13,
                letterSpacing: ".02em",
                color: "rgba(245,242,236,.78)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
