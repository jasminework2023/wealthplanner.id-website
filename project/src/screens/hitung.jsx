// hitung.jsx — Calculator hub

function HitungHub({ onNavigate }) {
  const { t } = useT();
  return (
    <div>
      <Section style={{ paddingTop: 56, paddingBottom: 16 }}>
        <div style={{ maxWidth: 1080 }}>
          <Eyebrow>{t.calc_hub_eyebrow}</Eyebrow>
          <h1 style={{ marginTop: 16, maxWidth: 1040 }}>{t.calc_hub_title}</h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 20, maxWidth: 720 }}>{t.calc_hub_sub}</p>
        </div>
      </Section>

      <Section style={{ paddingTop: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {CALCULATORS.map((c, i) => (
            <BigCalcTile key={c.id} calc={c} idx={i + 1} onClick={() => onNavigate({ name: "calculator", id: c.id })} />
          ))}
        </div>

        <div className="card" style={{ marginTop: 32, background: "var(--surface-2)", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px" }}>
            <div className="row" style={{ gap: 10, marginBottom: 8 }}>
              <span style={{ background: "var(--accent)", color: "var(--accent-ink)", padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em" }}>BUTUH DETAIL?</span>
            </div>
            <h3 style={{ fontSize: 28 }}>Hasil kalkulator gratis cuma estimasi.</h3>
            <p className="ink-2" style={{ marginTop: 8, maxWidth: 520 }}>Untuk perencanaan komplet — projeksi multi-skenario, tracking realtime, dan integrasi data — pakai spreadsheet planner kami.</p>
          </div>
          <Button variant="primary" onClick={() => onNavigate({ name: "products" })} iconRight={<ArrowRight size={16} />}>
            Lihat digital products
          </Button>
        </div>
      </Section>
    </div>
  );
}

function BigCalcTile({ calc, idx, onClick }) {
  const { t } = useT();
  const Icon = window[calc.icon];
  return (
    <button onClick={onClick} className="card card-hover" style={{
      cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      minHeight: 220, gap: 20, position: "relative", overflow: "hidden",
    }}>
      <div className="row-between" style={{ alignItems: "flex-start" }}>
        <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.15em" }}>
          {String(idx).padStart(2, "0")} / 07
        </div>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: calc.color, color: "#000",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {Icon && <Icon size={22} stroke={2} />}
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: 26 }}>{t[`c_${calc.id}`]}</h3>
        <p className="ink-2" style={{ marginTop: 10, fontSize: 14, lineHeight: 1.5 }}>{t[`c_${calc.id}_sub`]}</p>
      </div>
      <div className="row-between">
        <span className="tag tag-outline">~ 60 detik</span>
        <span className="row" style={{ gap: 6, color: "var(--ink)", fontSize: 13, fontWeight: 600 }}>
          Mulai <ArrowRight size={14} />
        </span>
      </div>
    </button>
  );
}

Object.assign(window, { HitungHub });
