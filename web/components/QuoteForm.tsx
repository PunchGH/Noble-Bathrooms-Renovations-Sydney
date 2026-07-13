"use client";

import { useState } from "react";
import { oswald, mono } from "@/lib/fonts";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/fonts";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  fontSize: 15,
  fontFamily: "inherit",
  color: "var(--ink)",
  background: "#f3efe6",
  border: "1px solid rgba(28,26,22,.16)",
  transition: "border-color .2s ease, background .2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: mono,
  fontSize: 11,
  letterSpacing: ".14em",
  color: "rgba(245,242,236,.72)",
  marginBottom: 8,
};

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    ptype: "",
    msg: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please add your name and email so we can get back to you.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      id="quote"
      className="section-pad"
      style={{
        position: "relative",
        background: "#17150f",
        color: "var(--light)",
        padding: "96px 60px",
        borderTop: "4px solid var(--accent)",
      }}
    >
      <div
        className="grid-2"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "start",
        }}
      >
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
            07 — BOOK A FREE CONSULTATION
          </div>
          <h2
            className="h2-big"
            style={{
              margin: "0 0 22px",
              fontFamily: oswald,
              fontWeight: 700,
              fontSize: 60,
              lineHeight: 0.94,
              textTransform: "uppercase",
            }}
          >
            Ready to start?
            <br />
            Let&apos;s talk it through.
          </h2>
          <p
            style={{
              margin: "0 0 26px",
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(245,242,236,.8)",
              maxWidth: 440,
            }}
          >
            Tell us a little about your project and we&apos;ll be in touch
            within one business day to arrange your free, no-obligation
            consultation and 3D design.
          </p>
          {[
            "Response within 1 business day",
            "Free consultation & custom 3D design",
            "Fixed, itemised pricing up front",
          ].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "var(--accent)",
                  borderRadius: "50%",
                }}
              />
              <span style={{ fontSize: 15, color: "rgba(245,242,236,.9)" }}>
                {t}
              </span>
            </div>
          ))}
          <div
            style={{
              marginTop: 28,
              fontFamily: oswald,
              textTransform: "uppercase",
              letterSpacing: ".03em",
            }}
          >
            <span style={{ color: "rgba(245,242,236,.6)", fontSize: 14 }}>
              Prefer to call?{" "}
            </span>
            <a
              href={`tel:${PHONE_TEL}`}
              style={{ color: "var(--accent)", fontWeight: 600, fontSize: 22 }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {!submitted ? (
          <form
            onSubmit={submit}
            style={{
              background: "rgba(245,242,236,.04)",
              border: "1px solid rgba(245,242,236,.12)",
              padding: "34px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div>
              <label style={labelStyle}>FULL NAME</label>
              <input
                className="field"
                style={fieldStyle}
                value={form.name}
                onChange={set("name")}
                placeholder="Jane Homeowner"
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={labelStyle}>EMAIL</label>
                <input
                  className="field"
                  style={fieldStyle}
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label style={labelStyle}>PHONE</label>
                <input
                  className="field"
                  style={fieldStyle}
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="0400 000 000"
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>PROJECT TYPE</label>
              <select
                className="field"
                style={fieldStyle}
                value={form.ptype}
                onChange={set("ptype")}
              >
                <option value="">Select one…</option>
                <option value="bathroom">Bathroom renovation</option>
                <option value="kitchen">Kitchen renovation</option>
                <option value="laundry">Laundry renovation</option>
                <option value="home">Whole-home renovation</option>
                <option value="unsure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>TELL US ABOUT YOUR PROJECT</label>
              <textarea
                className="field"
                style={{ ...fieldStyle, resize: "vertical" }}
                rows={4}
                value={form.msg}
                onChange={set("msg")}
                placeholder="A few lines on what you're planning, timeline, suburb…"
              />
            </div>
            {error && (
              <div style={{ color: "#ff9b7a", fontSize: 14 }}>{error}</div>
            )}
            <button
              type="submit"
              className="btn-accent"
              style={{
                fontFamily: oswald,
                fontWeight: 600,
                letterSpacing: ".04em",
                textTransform: "uppercase",
                fontSize: 17,
                padding: "16px 24px",
              }}
            >
              Book my free consultation →
            </button>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                color: "rgba(245,242,236,.5)",
                textAlign: "center",
              }}
            >
              We&apos;ll only use your details to arrange your consultation.
            </p>
          </form>
        ) : (
          <div
            style={{
              background: "rgba(47,155,214,.1)",
              border: "1px solid var(--accent)",
              padding: "48px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "var(--accent)",
                color: "var(--ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                margin: "0 auto 20px",
              }}
            >
              ✓
            </div>
            <h3
              style={{
                margin: "0 0 12px",
                fontFamily: oswald,
                fontWeight: 700,
                fontSize: 30,
                textTransform: "uppercase",
              }}
            >
              Request received
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.55,
                color: "rgba(245,242,236,.8)",
              }}
            >
              Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we&apos;ve
              got it. One of our builders will reach out within one business day
              to arrange your free consultation.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
