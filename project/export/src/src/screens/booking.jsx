// booking.jsx — Consultation booking with Jasmine

function BookingScreen({ onNavigate, onConfirmBooking, intent, programId }) {
  const { t, lang } = useT();
  const [mode, setMode] = React.useState(intent || null); // null = picker | "paid" | "free"
  const [pkg, setPkg] = React.useState("single");
  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState(null);
  const [topic, setTopic] = React.useState(() => {
    if (programId) {
      const p = (window.PROGRAMS || []).find((p) => p.id === programId);
      return p ? (lang === "id" ? `Tanya program: ${p.title_id}` : `Ask about: ${p.title_en}`) : "";
    }
    return "";
  });
  const [step, setStep] = React.useState("select"); // select | confirm

  // Generate next 14 days
  const today = new Date();
  const days = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  const times = ["09:00", "10:30", "13:00", "14:30", "16:00", "19:00"];

  const paidPackages = [
    { id: "single", label: t.book_pkg_single, price: 350000, dur: "60 menit" },
    { id: "triple", label: t.book_pkg_3, price: 950000, dur: "3× 60 menit", save: "Hemat Rp 100rb" },
    { id: "corp", label: t.book_pkg_emp, price: null, dur: "Custom" },
  ];

  const freePackages = [
    { id: "single", label: lang === "id" ? "Konsultasi Asuransi 30 menit" : "30-min Insurance Chat", price: 0, dur: "30 menit", free: true },
    { id: "extended", label: lang === "id" ? "Sesi Lanjutan 45 menit" : "Extended 45-min", price: 0, dur: "45 menit", free: true },
  ];

  const packages = mode === "free" ? freePackages : paidPackages;
  const isFree = mode === "free";

  // ── INTENT PICKER ──────────────────────────────────────────────
  if (mode === null) {
    return <IntentPicker onPick={setMode} onNavigate={onNavigate} />;
  }

  if (step === "confirm") {
    return <BookingConfirmed pkg={packages.find(p => p.id === pkg)} date={date} time={time} topic={topic} isFree={isFree} onNavigate={onNavigate} onConfirm={(b) => { onConfirmBooking({ ...b, intent: mode }); onNavigate({ name: "dashboard" }); }} />;
  }

  return (
    <div>
      <Section style={{ paddingTop: 40, paddingBottom: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)", gap: 48, alignItems: "flex-start" }} className="book-grid">
          {/* Jasmine bio */}
          <div style={{ position: "sticky", top: 88 }} className="book-sticky">
            <Eyebrow>{isFree ? (lang === "id" ? "KONSULTASI ASURANSI · GRATIS" : "INSURANCE CONSULTATION · FREE") : t.book_eyebrow}</Eyebrow>
            <h1 style={{ marginTop: 16 }}>
              {isFree
                ? (lang === "id" ? "Ngobrol santai 30 menit. Tanpa tekanan." : "Casual 30-min chat. No pressure.")
                : t.book_title}
            </h1>
            <button
              onClick={() => setMode(null)}
              className="row"
              style={{ background: "var(--chip)", border: 0, color: "var(--ink-2)", padding: "6px 12px", borderRadius: 999, font: "inherit", fontSize: 12, cursor: "pointer", marginTop: 16, gap: 6 }}
            >
              ← {lang === "id" ? "Ganti tipe konsultasi" : "Change consultation type"}
            </button>

            <div className="card" style={{ marginTop: 32, padding: 0, overflow: "hidden" }}>
              <div style={{
                aspectRatio: "16/10",
                background: "radial-gradient(at 30% 30%, color-mix(in oklab, var(--accent) 30%, transparent), transparent 60%), repeating-linear-gradient(135deg, transparent 0 12px, var(--chip) 12px 13px)",
                position: "relative",
              }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), color-mix(in oklab, var(--accent) 50%, var(--bg)))", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 48, fontWeight: 800, color: "var(--accent-ink)" }}>J</div>
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <div className="row" style={{ gap: 10, marginBottom: 12 }}>
                  <Tag variant="accent">★ 4.9 (124 sesi)</Tag>
                  <Tag>Sharia certified</Tag>
                </div>
                <h3 style={{ fontSize: 26 }}>Jasmine</h3>
                <div className="mono muted" style={{ fontSize: 12, marginTop: 4, letterSpacing: "0.08em" }}>SHARIA LIFE PLANNER · FINANCIAL EDUCATOR</div>
                <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 16 }}>{t.book_who_bio}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="stack" style={{ gap: 24 }}>
            {/* Package */}
            <div className="card">
              <h3 style={{ fontSize: 20, marginBottom: 16 }}>{t.book_pkg}</h3>
              <div className="stack" style={{ gap: 10 }}>
                {packages.map((p) => (
                  <button key={p.id} onClick={() => setPkg(p.id)} style={{
                    background: pkg === p.id ? "var(--surface-2)" : "transparent",
                    border: pkg === p.id ? "1.5px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: 18,
                    padding: 16,
                    cursor: "pointer",
                    font: "inherit",
                    color: "inherit",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                  }}>
                    <div className="row" style={{ gap: 12, alignItems: "center" }}>
                      <span style={{
                        width: 20, height: 20, borderRadius: 999,
                        border: `2px solid ${pkg === p.id ? "var(--accent)" : "var(--border-strong)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {pkg === p.id && <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--accent)" }} />}
                      </span>
                      <div>
                        <div className="row" style={{ gap: 8 }}>
                          <span style={{ fontWeight: 600, fontSize: 15 }}>{p.label}</span>
                          {p.save && <Tag variant="accent">{p.save}</Tag>}
                        </div>
                        <div className="muted mono" style={{ fontSize: 12, marginTop: 2 }}>{p.dur}</div>
                      </div>
                    </div>
                    <div className="mono" style={{ fontSize: 18, fontWeight: 700 }}>
                      {p.free || p.price === 0
                        ? (lang === "id" ? "Gratis" : "Free")
                        : (p.price ? formatIDR(p.price) : "Custom")}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & time */}
            <div className="card">
              <h3 style={{ fontSize: 20, marginBottom: 16 }}>{t.book_when}</h3>
              <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8 }} className="no-scrollbar">
                {days.map((d, i) => {
                  const sel = date && date.toDateString() === d.toDateString();
                  const isWeekend = d.getDay() === 0;
                  return (
                    <button
                      key={i}
                      disabled={isWeekend}
                      onClick={() => setDate(d)}
                      style={{
                        flexShrink: 0,
                        width: 76,
                        background: sel ? "var(--accent)" : isWeekend ? "transparent" : "var(--surface-2)",
                        color: sel ? "var(--accent-ink)" : isWeekend ? "var(--muted)" : "var(--ink)",
                        border: sel ? 0 : `1px solid var(--border)`,
                        borderRadius: 16,
                        padding: "14px 8px",
                        cursor: isWeekend ? "not-allowed" : "pointer",
                        font: "inherit",
                        opacity: isWeekend ? 0.4 : 1,
                      }}
                    >
                      <div className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{d.toLocaleDateString("id-ID", { weekday: "short" })}</div>
                      <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 24, fontWeight: 700, marginTop: 6, lineHeight: 1 }}>{d.getDate()}</div>
                      <div className="muted mono" style={{ fontSize: 10, marginTop: 4, color: sel ? "var(--accent-ink)" : "var(--muted)" }}>{d.toLocaleDateString("id-ID", { month: "short" })}</div>
                    </button>
                  );
                })}
              </div>

              <div className="label-sm" style={{ marginTop: 24 }}>WIB · Pilih jam</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(96px, 1fr))", gap: 8 }}>
                {times.map((tm) => {
                  const taken = tm === "13:00" && date && date.getDay() === 1; // mock booked slot
                  const sel = time === tm;
                  return (
                    <button
                      key={tm}
                      disabled={taken}
                      onClick={() => setTime(tm)}
                      style={{
                        background: sel ? "var(--accent)" : taken ? "transparent" : "var(--surface-2)",
                        color: sel ? "var(--accent-ink)" : taken ? "var(--muted)" : "var(--ink)",
                        border: sel ? 0 : `1px solid var(--border)`,
                        borderRadius: 12,
                        padding: "12px 0",
                        cursor: taken ? "not-allowed" : "pointer",
                        font: "inherit",
                        fontFamily: "JetBrains Mono, monospace",
                        fontWeight: 600,
                        fontSize: 14,
                        opacity: taken ? 0.4 : 1,
                        textDecoration: taken ? "line-through" : "none",
                      }}
                    >
                      {tm}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Topic */}
            <div className="card">
              <h3 style={{ fontSize: 20, marginBottom: 16 }}>{t.book_topic}</h3>
              <textarea
                className="textarea"
                placeholder={t.book_topic_ph}
                rows={4}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                style={{ resize: "vertical", fontFamily: "inherit", lineHeight: 1.5 }}
              />
              <div className="row" style={{ gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                {["Review portofolio", "Dana pendidikan anak", "Asuransi syariah", "Rencana pensiun"].map((tag) => (
                  <button key={tag} onClick={() => setTopic((t) => t ? t + " · " + tag : tag)} style={{
                    background: "var(--chip)", color: "var(--ink)", border: 0,
                    padding: "6px 12px", borderRadius: 999, font: "inherit", fontSize: 12, fontWeight: 500,
                    cursor: "pointer",
                  }}>+ {tag}</button>
                ))}
              </div>
            </div>

            {/* Sticky CTA */}
            <div className="card" style={{ background: "var(--ink)", color: "var(--bg)", border: 0 }}>
              <div className="row-between" style={{ marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div className="mono" style={{ fontSize: 11, opacity: 0.6, letterSpacing: "0.1em" }}>RINGKASAN</div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginTop: 4 }}>
                    {packages.find(p => p.id === pkg)?.label}
                    {date && time ? ` · ${date.toLocaleDateString("id-ID", { day: "numeric", month: "short" })} · ${time}` : " · pilih jadwal"}
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 11, opacity: 0.6, letterSpacing: "0.1em" }}>TOTAL</div>
                  <div className="mono" style={{ fontSize: 22, fontWeight: 700 }}>
                    {isFree
                      ? (lang === "id" ? "Gratis" : "Free")
                      : (packages.find(p => p.id === pkg)?.price ? formatIDR(packages.find(p => p.id === pkg).price) : "Custom")}
                  </div>
                </div>
              </div>
              <Button
                variant="primary"
                size="lg"
                disabled={!date || !time}
                onClick={() => setStep("confirm")}
                iconRight={<ArrowRight size={18} />}
                style={{ width: "100%", justifyContent: "center", opacity: (date && time) ? 1 : 0.5, pointerEvents: (date && time) ? "auto" : "none" }}
              >
                {t.book_confirm}
              </Button>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) {
            .book-grid { grid-template-columns: 1fr !important; }
            .book-sticky { position: relative !important; top: 0 !important; }
          }
        `}</style>
      </Section>
    </div>
  );
}

function IntentPicker({ onPick, onNavigate }) {
  const { t, lang } = useT();
  const options = [
    {
      id: "paid",
      tag: lang === "id" ? "PERSONAL FINANCE" : "PERSONAL FINANCE",
      title: lang === "id" ? "Sesi 1-on-1 dengan Jasmine" : "1-on-1 session with Jasmine",
      sub: lang === "id"
        ? "Review komprehensif keuangan kamu — investasi, asuransi, KPR, dana pendidikan, pensiun. 60 menit + action plan 90 hari."
        : "Comprehensive review of your finances — investing, insurance, mortgage, education, retirement. 60 min + 90-day action plan.",
      price: lang === "id" ? "Mulai Rp 350.000 / sesi" : "From Rp 350,000 / session",
      cta: lang === "id" ? "Pilih Personal Finance" : "Choose Personal Finance",
      bullets: lang === "id"
        ? ["Sesi 60 menit via Zoom", "Rekaman + ringkasan tertulis", "Akses follow-up via WhatsApp", "Diskon paket 3× tersedia"]
        : ["60-min Zoom session", "Recording + written summary", "WhatsApp follow-up access", "3-session bundle discount available"],
      accent: "var(--accent)",
      icon: User,
    },
    {
      id: "free",
      tag: lang === "id" ? "ASURANSI & INVESTASI · GRATIS" : "INSURANCE & INVESTMENT · FREE",
      title: lang === "id" ? "Konsultasi gratis 30 menit" : "Free 30-min consultation",
      sub: lang === "id"
        ? "Cocok kalau kamu masih cek-cek opsi asuransi & investasi. Tanpa tekanan, tanpa penawaran agresif. Cek kondisi & dapat rekomendasi awal."
        : "Right for you if you're still exploring insurance & investment options. No pressure, no hard sell. Get a snapshot + initial recommendations.",
      price: lang === "id" ? "Gratis — tanpa biaya" : "Free — no fee",
      cta: lang === "id" ? "Pilih Konsultasi Gratis" : "Choose Free Consultation",
      bullets: lang === "id"
        ? ["30 menit via Zoom / WhatsApp", "Cek profil risiko + tujuan", "Rekomendasi 1–2 opsi yang relevan", "Lanjutkan ke program kalau cocok"]
        : ["30 min via Zoom / WhatsApp", "Risk profile + goals check", "1–2 relevant option recommendations", "Continue to a program only if it fits"],
      accent: "#5EE5B0",
      icon: ShieldCheck,
    },
  ];

  return (
    <Section style={{ paddingTop: 56 }}>
      <div style={{ maxWidth: 920, marginInline: "auto", textAlign: "center", marginBottom: 48 }}>
        <Eyebrow>{lang === "id" ? "KONSULTASI DENGAN JASMINE" : "CONSULTATION WITH JASMINE"}</Eyebrow>
        <h1 style={{ marginTop: 16 }}>{t.book_intent_t}</h1>
        <p className="ink-2" style={{ fontSize: 17, marginTop: 16, maxWidth: 580, marginInline: "auto" }}>
          {lang === "id"
            ? "Dua jalur konsultasi — sesuai apa yang kamu cari. Tidak yakin? Mulai dari yang gratis."
            : "Two paths — depending on what you need. Not sure? Start with the free one."}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, maxWidth: 960, marginInline: "auto" }}>
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <button
              key={opt.id}
              onClick={() => onPick(opt.id)}
              className="card card-hover"
              style={{
                cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
                display: "flex", flexDirection: "column", gap: 18, padding: 32, minHeight: 460,
                border: `1.5px solid ${opt.id === "free" ? "var(--border)" : "var(--border)"}`,
              }}
            >
              <div className="row-between" style={{ alignItems: "flex-start" }}>
                <span style={{
                  background: opt.accent, color: "#0a0a0a",
                  padding: "5px 12px", borderRadius: 999,
                  fontSize: 11, fontWeight: 700, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em",
                }}>{opt.tag}</span>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: opt.accent, color: "#0a0a0a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={22} stroke={2} />
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: 26, lineHeight: 1.1 }}>{opt.title}</h3>
                <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.55, marginTop: 12 }}>{opt.sub}</p>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {opt.bullets.map((b, i) => (
                  <li key={i} className="row" style={{ gap: 10, fontSize: 13, color: "var(--ink-2)" }}>
                    <Check size={14} stroke={3} style={{ color: opt.accent }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{opt.price}</div>
                <Button variant={opt.id === "free" ? "outline" : "primary"} className="" iconRight={<ArrowRight size={16} />} style={{ width: "100%", justifyContent: "center", marginTop: 16 }}>
                  {opt.cta}
                </Button>
              </div>
            </button>
          );
        })}
      </div>

      <p className="muted" style={{ fontSize: 13, textAlign: "center", marginTop: 32 }}>
        {lang === "id"
          ? "Bingung pilih mana? Mulai dengan yang gratis dulu — Jasmine akan bantu arahkan."
          : "Not sure? Start free — Jasmine will help guide you."}
      </p>
    </Section>
  );
}

function BookingConfirmed({ pkg, date, time, topic, isFree, onConfirm, onNavigate }) {
  return (
    <Section style={{ paddingTop: 56 }}>
      <div style={{ maxWidth: 560, marginInline: "auto", textAlign: "center" }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%",
          background: "var(--accent)", color: "var(--accent-ink)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px",
        }}>
          <Calendar size={36} />
        </div>
        <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)" }}>Booking dikonfirmasi!</h1>
        <p className="ink-2" style={{ fontSize: 17, marginTop: 16 }}>Link Zoom akan dikirim via email & WhatsApp 1 jam sebelum sesi.</p>

        <div className="card" style={{ marginTop: 32, textAlign: "left" }}>
          <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.1em" }}>DETAIL SESI</div>
          <div className="stack" style={{ gap: 12, marginTop: 14 }}>
            <DetailRow label="Tanggal" value={date.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} />
            <DetailRow label="Jam" value={`${time} WIB`} />
            <DetailRow label="Paket" value={pkg.label} />
            <DetailRow label="Konsultan" value="Jasmine" />
            {topic && <DetailRow label="Topik" value={topic} />}
          </div>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={() => onConfirm({
            date: date.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" }),
            time: time + " WIB",
            package: pkg.label,
            topic,
          })}
          iconRight={<ArrowRight size={18} />}
          style={{ marginTop: 32 }}
        >
          Ke dashboard
        </Button>
      </div>
    </Section>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="row-between" style={{ alignItems: "flex-start", gap: 16 }}>
      <span className="muted" style={{ fontSize: 13 }}>{label}</span>
      <span style={{ fontWeight: 600, textAlign: "right" }}>{value}</span>
    </div>
  );
}

Object.assign(window, { BookingScreen });
