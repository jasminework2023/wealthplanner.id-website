// dashboard.jsx — Customer dashboard

function DashboardScreen({ purchases, savedResults, bookings, onNavigate }) {
  const { t, lang } = useT();

  // Default fallback purchases so dashboard isn't empty
  const ownedIds = purchases.length ? purchases : ["cashflow", "invest"];
  const owned = ownedIds
    .map((id) => (typeof id === "string" ? PRODUCTS.find((p) => p.id === id) : id))
    .filter(Boolean);

  return (
    <div>
      <Section style={{ paddingTop: 40 }}>
        <div className="row-between" style={{ flexWrap: "wrap", gap: 24, alignItems: "flex-end" }}>
          <div>
            <div className="row" style={{ gap: 12 }}>
              <div className="avatar" style={{ width: 56, height: 56, fontSize: 20 }}>A</div>
              <div>
                <div className="mono muted" style={{ fontSize: 12, letterSpacing: "0.1em" }}>DASHBOARD</div>
                <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)" }}>{t.dash_hi} Aisha 👋</h1>
              </div>
            </div>
            <p className="ink-2" style={{ marginTop: 16 }}>{t.dash_sub}</p>
          </div>
          <div className="row" style={{ gap: 8 }}>
            <Button variant="outline" size="sm" onClick={() => onNavigate({ name: "calc" })} icon={<Plus size={14} />}>
              Hitung impian baru
            </Button>
            <Button variant="primary" size="sm" onClick={() => onNavigate({ name: "book" })} iconRight={<Calendar size={14} />}>
              Book Jasmine
            </Button>
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 40 }}>
          <StatCard label="Tools dimiliki" value={owned.length} suffix="/6" color="var(--accent)" />
          <StatCard label="Hasil tersimpan" value={savedResults.length} suffix="" color="#5EE5B0" />
          <StatCard label="Konsultasi mendatang" value={bookings.length} suffix="" color="#7C9CFF" />
          <StatCard label="Lifetime savings" value="Rp 234rb" suffix="" color="#FFB800" raw />
        </div>
      </Section>

      <Section style={{ paddingTop: 16, paddingBottom: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)", gap: 32, alignItems: "flex-start" }} className="dash-grid">
          <div className="stack" style={{ gap: 32 }}>
            {/* Owned tools */}
            <div>
              <SectionTitle label={t.dash_tools} count={owned.length} cta="Beli lagi" onCta={() => onNavigate({ name: "products" })} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
                {owned.map((p) => (
                  <OwnedToolCard key={p.id} product={p} />
                ))}
              </div>
            </div>

            {/* Saved results */}
            <div>
              <SectionTitle label={t.dash_results} count={savedResults.length} cta="Hitung baru" onCta={() => onNavigate({ name: "calc" })} />
              {savedResults.length === 0 ? (
                <EmptyState
                  icon={<Sparkle size={20} />}
                  title="Belum ada hasil tersimpan"
                  sub="Mulai hitung impianmu — hasilnya bisa kamu simpan dan ditinjau ulang kapan saja."
                  cta="Mulai hitung"
                  onCta={() => onNavigate({ name: "calc" })}
                />
              ) : (
                <div className="stack" style={{ gap: 10 }}>
                  {savedResults.slice().reverse().map((r, i) => (
                    <ResultRow key={i} result={r} onOpen={() => onNavigate({ name: "calculator", id: r.id })} />
                  ))}
                </div>
              )}
            </div>

            {/* History */}
            <div>
              <SectionTitle label={t.dash_history} count={owned.length} />
              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                {owned.map((p, i) => (
                  <div key={p.id} className="row-between" style={{ padding: "16px 20px", borderTop: i === 0 ? "0" : "1px solid var(--border)" }}>
                    <div className="row" style={{ gap: 12 }}>
                      <div style={{ width: 36, height: 36, background: "var(--chip)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {window[p.icon] ? React.createElement(window[p.icon], { size: 16 }) : null}
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{p[`name_${lang}`]}</div>
                        <div className="muted mono" style={{ fontSize: 11 }}>QRIS · #{(1000 + i * 17).toString(16).toUpperCase()}</div>
                      </div>
                    </div>
                    <div className="row" style={{ gap: 12 }}>
                      <span className="mono" style={{ fontWeight: 600 }}>{formatIDR(p.price)}</span>
                      <Tag>Paid</Tag>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="stack" style={{ gap: 24 }}>
            {/* Upcoming consultation */}
            <div className="card" style={{ background: "var(--ink)", color: "var(--bg)", border: 0 }}>
              <div className="row" style={{ gap: 10, marginBottom: 16 }}>
                <span style={{ background: "var(--accent)", color: "var(--accent-ink)", padding: "5px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em" }}>KONSULTASI</span>
              </div>
              {bookings.length === 0 ? (
                <>
                  <h3 style={{ color: "inherit", fontSize: 22 }}>{t.dash_no_upcoming}</h3>
                  <p style={{ marginTop: 12, opacity: 0.7, fontSize: 14 }}>Sesi 60 menit dengan Jasmine — review keuangan, tanya jawab, rencana 90 hari.</p>
                  <Button variant="primary" onClick={() => onNavigate({ name: "book" })} className="" iconRight={<ArrowRight size={16} />} style={{ marginTop: 16 }}>
                    Book sekarang
                  </Button>
                </>
              ) : (
                <>
                  <h3 style={{ color: "inherit", fontSize: 22 }}>Sesi mendatang</h3>
                  {bookings.map((b, i) => (
                    <div key={i} style={{ marginTop: 16, padding: 16, background: "rgba(255,255,255,0.05)", borderRadius: 14 }}>
                      <div className="mono" style={{ fontSize: 11, opacity: 0.7, letterSpacing: "0.1em" }}>{b.date}</div>
                      <div style={{ fontWeight: 700, fontSize: 18, marginTop: 4 }}>{b.time}</div>
                      <div style={{ fontSize: 13, marginTop: 4, opacity: 0.8 }}>dengan Jasmine · {b.package}</div>
                      {b.topic && <p style={{ fontSize: 13, marginTop: 8, opacity: 0.7 }}>"{b.topic}"</p>}
                    </div>
                  ))}
                  <div className="row" style={{ gap: 8, marginTop: 16 }}>
                    <button className="btn btn-sm" style={{ background: "var(--accent)", color: "var(--accent-ink)", padding: "8px 14px" }}>Join sesi</button>
                    <button className="btn btn-sm" style={{ background: "rgba(255,255,255,0.08)", color: "inherit", padding: "8px 14px" }}>Reschedule</button>
                  </div>
                </>
              )}
            </div>

            {/* Recommended */}
            <div>
              <SectionTitle label={t.dash_recommend} />
              <div className="stack" style={{ gap: 10 }}>
                {PRODUCTS.filter((p) => !ownedIds.includes(p.id) && p.id !== ownedIds[0]).slice(0, 2).map((p) => (
                  <RecommendCard key={p.id} product={p} onClick={() => onNavigate({ name: "product", id: p.id })} />
                ))}
              </div>
            </div>

            {/* Tip */}
            <div className="card" style={{ background: "var(--surface-2)" }}>
              <div className="row" style={{ gap: 10, marginBottom: 8 }}>
                <Sparkle size={18} style={{ color: "var(--accent)" }} />
                <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", fontWeight: 700 }}>TIPS MINGGU INI</span>
              </div>
              <h4 style={{ fontSize: 16, marginBottom: 8 }}>3-6-9 rule untuk dana darurat</h4>
              <p className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>Single → 3 bulan. Sudah berkeluarga → 6 bulan. Self-employed → 9 bulan. Tempatkan di RDPU atau deposito.</p>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 880px) { .dash-grid { grid-template-columns: 1fr !important; } }`}</style>
      </Section>
    </div>
  );
}

function StatCard({ label, value, suffix, color, raw }) {
  return (
    <div className="card card-tight">
      <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.1em" }}>{label.toUpperCase()}</div>
      <div className="row" style={{ gap: 8, alignItems: "baseline", marginTop: 6 }}>
        <span style={{ fontFamily: "Bricolage Grotesque", fontWeight: 700, fontSize: raw ? 24 : 36, lineHeight: 1 }}>{value}</span>
        <span className="mono muted" style={{ fontSize: 14 }}>{suffix}</span>
      </div>
      <div style={{ height: 3, width: "30%", background: color, marginTop: 12, borderRadius: 999 }} />
    </div>
  );
}

function SectionTitle({ label, count, cta, onCta }) {
  return (
    <div className="row-between" style={{ marginBottom: 16 }}>
      <div className="row" style={{ gap: 10, alignItems: "baseline" }}>
        <h3 style={{ fontSize: 22 }}>{label}</h3>
        {count !== undefined && <span className="mono muted" style={{ fontSize: 13 }}>{count}</span>}
      </div>
      {cta && <button onClick={onCta} className="row" style={{ background: "transparent", border: 0, color: "var(--ink-2)", fontSize: 13, cursor: "pointer", gap: 4, font: "inherit", fontWeight: 500 }}>{cta} <ArrowRight size={12} /></button>}
    </div>
  );
}

function OwnedToolCard({ product }) {
  const { lang } = useT();
  const Icon = window[product.icon];
  return (
    <div className="card card-hover" style={{ display: "flex", flexDirection: "column", gap: 12, minHeight: 180 }}>
      <div className="row-between">
        <div style={{ width: 36, height: 36, background: "var(--accent)", color: "var(--accent-ink)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {Icon && <Icon size={16} />}
        </div>
        <Tag>Lifetime</Tag>
      </div>
      <h4 style={{ fontSize: 17, lineHeight: 1.2, marginTop: 4 }}>{product[`name_${lang}`]}</h4>
      <div className="row" style={{ gap: 8, marginTop: "auto" }}>
        <Button variant="primary" size="sm" icon={<ArrowUpRight size={14} />}>Open</Button>
        <Button variant="ghost" size="sm" icon={<Download size={14} />}>.xlsx</Button>
      </div>
    </div>
  );
}

function ResultRow({ result, onOpen }) {
  const calc = CALCULATORS.find((c) => c.id === result.id);
  const Icon = calc && window[calc.icon];
  return (
    <div className="card card-tight row-between" style={{ background: "var(--surface)" }}>
      <div className="row" style={{ gap: 12 }}>
        <div style={{ width: 36, height: 36, background: calc?.color || "var(--chip)", color: "#000", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {Icon && <Icon size={16} />}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{result.title}</div>
          <div className="muted mono" style={{ fontSize: 11 }}>Tersimpan baru saja</div>
        </div>
      </div>
      <div className="row" style={{ gap: 14 }}>
        <span className="mono" style={{ fontWeight: 600 }}>{result.value}</span>
        <Button variant="secondary" size="sm" onClick={onOpen}>Buka</Button>
      </div>
    </div>
  );
}

function RecommendCard({ product, onClick }) {
  const { lang } = useT();
  const Icon = window[product.icon];
  return (
    <button onClick={onClick} className="card card-hover card-tight row" style={{
      cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
      gap: 14, alignItems: "center", justifyContent: "space-between",
    }}>
      <div className="row" style={{ gap: 12, alignItems: "center" }}>
        <div style={{ width: 36, height: 36, background: "var(--chip)", color: "var(--ink)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {Icon && <Icon size={16} />}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{product[`name_${lang}`]}</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--accent)", marginTop: 2, fontWeight: 600 }}>{formatIDR(product.price)}</div>
        </div>
      </div>
      <ArrowRight size={16} />
    </button>
  );
}

function EmptyState({ icon, title, sub, cta, onCta }) {
  return (
    <div className="card" style={{ background: "var(--surface-2)", textAlign: "center", padding: 40, borderStyle: "dashed" }}>
      <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--chip)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
        {icon}
      </div>
      <h4 style={{ marginTop: 16, fontSize: 18 }}>{title}</h4>
      <p className="muted" style={{ marginTop: 8, fontSize: 14, maxWidth: 380, marginInline: "auto" }}>{sub}</p>
      <Button variant="primary" onClick={onCta} className="" style={{ marginTop: 20 }}>
        {cta}
      </Button>
    </div>
  );
}

Object.assign(window, { DashboardScreen });
