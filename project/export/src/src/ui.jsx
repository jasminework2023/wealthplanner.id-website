// ui.jsx — shared UI primitives

function Button({ children, variant = "primary", size, onClick, href, icon, iconRight, className = "", ...rest }) {
  const cls = [
    "btn",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" && "btn-ghost",
    variant === "outline" && "btn-outline",
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    className,
  ].filter(Boolean).join(" ");
  const inner = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} {...rest}>
      {inner}
    </button>
  );
}

function Tag({ children, variant = "default" }) {
  const cls = [
    "tag",
    variant === "accent" && "tag-accent",
    variant === "outline" && "tag-outline",
  ].filter(Boolean).join(" ");
  return <span className={cls}>{children}</span>;
}

function Card({ children, hover = true, tight = false, style = {}, className = "", onClick }) {
  return (
    <div
      className={["card", hover && "card-hover", tight && "card-tight", className].filter(Boolean).join(" ")}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, color }) {
  return (
    <div className="row" style={{ gap: 10, fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: color || "var(--muted)", textTransform: "uppercase", fontFamily: "JetBrains Mono, monospace" }}>
      <span style={{ display: "inline-block", width: 24, height: 1, background: "currentColor", opacity: 0.4 }} />
      {children}
    </div>
  );
}

function Section({ children, id, style = {}, className = "" }) {
  return (
    <section id={id} className={["sect", className].filter(Boolean).join(" ")} style={style}>
      <div className="wrap">{children}</div>
    </section>
  );
}

function Stat({ value, label, suffix }) {
  return (
    <div>
      <div className="display" style={{ fontSize: "clamp(48px,5vw,72px)", fontWeight: 700 }}>
        {value}<span style={{ color: "var(--accent)" }}>{suffix || "+"}</span>
      </div>
      <div className="muted" style={{ fontSize: 13, marginTop: 6, fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
    </div>
  );
}

function NumberInput({ label, value, onChange, prefix, suffix, min = 0, step = 1, hint }) {
  const { lang } = useT();
  // Strip non-digit chars and parse to number
  const parse = (str) => {
    const digits = String(str).replace(/[^0-9]/g, "");
    return digits === "" ? 0 : Number(digits);
  };
  const display = (typeof value === "number" && !isNaN(value)) ? formatThousands(value, lang) : "";
  return (
    <div>
      <label className="label-sm">{label}</label>
      <div style={{ position: "relative", display: "flex", alignItems: "stretch" }}>
        {prefix && (
          <div style={{
            padding: "0 12px",
            display: "flex",
            alignItems: "center",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRight: "none",
            borderRadius: "14px 0 0 14px",
            color: "var(--muted)",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            fontWeight: 500,
          }}>{prefix}</div>
        )}
        <input
          className="input mono"
          type="text"
          inputMode="numeric"
          value={display}
          onChange={(e) => {
            const n = parse(e.target.value);
            const clamped = Math.max(min, n);
            onChange(clamped);
          }}
          style={{
            borderRadius: prefix ? (suffix ? 0 : "0 14px 14px 0") : (suffix ? "14px 0 0 14px" : 14),
            fontVariantNumeric: "tabular-nums",
          }}
        />
        {suffix && (
          <div style={{
            padding: "0 12px",
            display: "flex",
            alignItems: "center",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderLeft: "none",
            borderRadius: "0 14px 14px 0",
            color: "var(--muted)",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 13,
            fontWeight: 500,
          }}>{suffix}</div>
        )}
      </div>
      {hint && <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{hint}</div>}
    </div>
  );
}

function Slider({ label, value, onChange, min, max, step = 1, format }) {
  return (
    <div>
      <div className="row-between" style={{ marginBottom: 8 }}>
        <span className="label-sm" style={{ margin: 0 }}>{label}</span>
        <span className="mono" style={{ fontWeight: 600, color: "var(--ink)" }}>
          {format ? format(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          width: "100%",
          appearance: "none",
          height: 6,
          borderRadius: 999,
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${((value - min) / (max - min)) * 100}%, var(--border) ${((value - min) / (max - min)) * 100}%, var(--border) 100%)`,
          outline: "none",
        }}
      />
    </div>
  );
}

// Big colored "result" tile
function ResultTile({ label, value, sub, accent }) {
  return (
    <div style={{
      background: accent || "var(--accent)",
      color: "var(--accent-ink)",
      borderRadius: 24,
      padding: "28px 28px 32px",
    }}>
      <div className="mono" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, fontWeight: 600 }}>{label}</div>
      <div className="display" style={{ fontSize: "clamp(36px,4.5vw,56px)", lineHeight: 1, marginTop: 12, fontWeight: 700 }}>{value}</div>
      {sub && <div style={{ fontSize: 14, marginTop: 14, opacity: 0.75 }}>{sub}</div>}
    </div>
  );
}

// Mini chart helpers — simple SVG line/bar
function MiniBars({ data, color = "var(--accent)", height = 140 }) {
  const max = Math.max(...data.map((d) => d.v), 1);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{
            width: "100%",
            height: `${(d.v / max) * (height - 24)}px`,
            background: d.color || color,
            borderRadius: "8px 8px 4px 4px",
            transition: "height .4s ease",
            minHeight: 4,
          }} />
          <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>{d.l}</div>
        </div>
      ))}
    </div>
  );
}

// Icon resolver — renders by name from window
function IconByName({ name, size = 20, stroke = 2 }) {
  const Comp = window[name];
  if (!Comp) return null;
  return <Comp size={size} stroke={stroke} />;
}

Object.assign(window, { Button, Tag, Card, Eyebrow, Section, Stat, NumberInput, Slider, ResultTile, MiniBars, IconByName });
