// program.jsx — Asuransi & Investasi programs (Manulife partnership)

function ProgramScreen({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <div>
      <ProgramHero onNavigate={onNavigate} />
      <ManulifeBar />
      <ProgramsGrid onNavigate={onNavigate} />
      <ProgramFAQ />
      <ProgramCTA onNavigate={onNavigate} />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// HERO — emotional/storytelling
// ──────────────────────────────────────────────────────────────
function ProgramHero({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section style={{ paddingTop: 56, paddingBottom: 24 }}>
      <div style={{ maxWidth: 760 }}>
        <Tag variant="accent">★ {lang === "id" ? "ASURANSI + INVESTASI" : "INSURANCE + INVESTMENT"}</Tag>
        <h1 style={{ marginTop: 24, marginBottom: 0 }}>
          {lang === "id" ? <>
            Impianmu terlalu berharga<br />
            buat <span style={{ color: "var(--accent)" }}>diambil kesempatan.</span>
          </> : <>
            Your dreams are too precious<br />
            to <span style={{ color: "var(--accent)" }}>leave to chance.</span>
          </>}
        </h1>

        <div className="card" style={{
          marginTop: 32,
          borderLeft: "4px solid var(--accent)",
          borderRadius: 14,
          background: "var(--surface)",
        }}>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
            {lang === "id" ? (
              <>
                Kamu udah nabung rutin, target sudah jelas, planning matang — impian terasa dalam genggaman.{" "}
                <strong style={{ color: "var(--ink)" }}>Lalu tiba-tiba muncul kondisi kesehatan tak terduga.</strong>
                {" "}Biaya medis membengkak, dan rencana 10 tahun bisa hilang dalam sebulan.
                <br /><br />
                Bukan soal menakut-nakuti. Ini soal perencanaan yang cerdas — bikin impianmu tahan banting dari risiko yang nggak kamu duga.
              </>
            ) : (
              <>
                You save regularly, the targets are clear, the plan is solid — your dreams feel within reach.{" "}
                <strong style={{ color: "var(--ink)" }}>Then suddenly an unexpected health situation hits.</strong>
                {" "}Medical bills pile up, and a 10-year plan can vanish in a month.
                <br /><br />
                This isn't fear-mongering. It's smart planning — making your dreams bulletproof against risks you never saw coming.
              </>
            )}
          </p>
        </div>

        <div className="row" style={{ gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "book", type: "free" })} iconRight={<ArrowRight size={18} />}>
            {lang === "id" ? "Konsultasi gratis 10 menit" : "Free 10-min consultation"}
          </Button>
          <Button variant="outline" size="lg" onClick={() => {
            document.getElementById("programs-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}>
            {lang === "id" ? "Lihat 6 program" : "See 6 programs"}
          </Button>
        </div>
      </div>
    </Section>
  );
}

// ──────────────────────────────────────────────────────────────
// MANULIFE PARTNERSHIP BAR
// ──────────────────────────────────────────────────────────────
function ManulifeBar() {
  const { lang } = useT();
  return (
    <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "28px 0", background: "var(--bg-2)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
        <span className="mono muted" style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 600 }}>
          {lang === "id" ? "DALAM KEMITRAAN RESMI DENGAN" : "IN OFFICIAL PARTNERSHIP WITH"}
        </span>
        <ManulifeLogo />
        <span style={{ width: 1, height: 24, background: "var(--border)" }} />
        <span className="row" style={{ gap: 8, fontSize: 13, color: "var(--ink-2)" }}>
          <ShieldCheck size={14} style={{ color: "var(--accent)" }} />
          {lang === "id" ? "Lisensi OJK + AAJI" : "OJK + AAJI licensed"}
        </span>
      </div>
    </div>
  );
}

function ManulifeLogo() {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <svg viewBox="0 0 32 32" width="28" height="28">
        <rect width="32" height="32" rx="6" fill="#00A758" />
        <path d="M8 22V10l4 6 4-6v12" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", color: "var(--ink)" }}>
        Manulife
      </span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// PROGRAMS GRID
// ──────────────────────────────────────────────────────────────
function ProgramsGrid({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section id="programs-grid" style={{ background: "var(--bg-2)" }}>
      <div className="row-between" style={{ marginBottom: 48, alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow>{lang === "id" ? "6 PROGRAM SOLUSI" : "6 SOLUTION PROGRAMS"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id" ? "Setiap fase hidup, ada programnya." : "A program for every life stage."}
          </h2>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "book", type: "free" })} iconRight={<ArrowRight size={16} />}>
          {lang === "id" ? "Bingung pilih mana?" : "Not sure which?"}
        </Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {PROGRAMS.map((p) => (
          <ProgramCard key={p.id} program={p} onNavigate={onNavigate} />
        ))}
      </div>
    </Section>
  );
}

function ProgramCard({ program, onNavigate }) {
  const { lang } = useT();
  const Icon = window[program.icon] || ShieldCheck;
  return (
    <div className="card card-hover" style={{
      padding: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      minHeight: 440,
      position: "relative",
    }}>
      {program.featured && (
        <div style={{
          position: "absolute", top: 16, right: 16, zIndex: 2,
          background: "var(--ink)", color: "var(--bg)",
          padding: "5px 10px", borderRadius: 999,
          fontSize: 10, fontWeight: 700,
          fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em",
        }}>FEATURED</div>
      )}

      <div style={{
        background: program.color,
        color: "#0a0a0a",
        padding: "28px 28px 24px",
        display: "flex", flexDirection: "column", gap: 12,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: "rgba(0,0,0,0.12)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon size={24} stroke={2} />
        </div>
        <div>
          <h3 style={{ fontSize: 26, color: "inherit", lineHeight: 1.05 }}>{program[`title_${lang}`]}</h3>
          <div className="mono" style={{ fontSize: 12, fontWeight: 600, marginTop: 8, opacity: 0.75, lineHeight: 1.4 }}>
            "{program[`tagline_${lang}`]}"
          </div>
        </div>
      </div>

      <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.55 }}>{program[`desc_${lang}`]}</p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {program[`benefits_${lang}`].map((b, i) => (
            <li key={i} className="row" style={{ gap: 10, fontSize: 13, alignItems: "flex-start", color: "var(--ink-2)" }}>
              <span style={{
                width: 18, height: 18, minWidth: 18, borderRadius: 999,
                background: "var(--chip)", color: "var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginTop: 2,
              }}>
                <Check size={12} stroke={3} />
              </span>
              <span style={{ lineHeight: 1.5 }}>{b}</span>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "auto", paddingTop: 8 }}>
          <div className="tag tag-outline" style={{ marginBottom: 12 }}>
            <Sparkle size={11} style={{ color: "var(--accent)" }} /> {program[`ideal_${lang}`]}
          </div>
          <Button variant="secondary" size="sm" onClick={() => onNavigate({ name: "book", type: "free", program: program.id })} iconRight={<ArrowRight size={14} />} style={{ width: "100%", justifyContent: "center" }}>
            {lang === "id" ? "Tanya program ini" : "Ask about this program"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// FAQ
// ──────────────────────────────────────────────────────────────
function ProgramFAQ() {
  const { lang } = useT();
  const [open, setOpen] = React.useState(0);
  const items = lang === "id" ? [
    { q: "Apa bedanya program ini sama asuransi biasa?", a: "Program kami menggabungkan proteksi (asuransi) dengan instrumen investasi yang dikelola Manulife. Premi kamu gak cuma jadi proteksi, tapi juga tumbuh nilainya. Laporan transparan tiap bulan." },
    { q: "Apakah ini syariah-compliant?", a: "Iya. Kami menggunakan produk syariah dari Manulife Indonesia — bebas riba, gharar, dan maysir. Akadnya tabarru' & wakalah bil ujrah. Bisa kami jelaskan detailnya di sesi konsultasi gratis." },
    { q: "Berapa premi minimum untuk mulai?", a: "Bervariasi per program. Untuk personal life starts at Rp 350.000/bulan; untuk haji dan pendidikan biasanya Rp 500.000+/bulan. Akan kami sesuaikan dengan profil & target kamu." },
    { q: "Kalau saya berhenti bayar, gimana?", a: "Polis tetap aktif selama nilai tunai cukup menutupi biaya proteksi. Kamu juga bisa cuti premi atau adjust nominal sesuai kondisi. Bukan model 'hangus' kayak unit-link lama." },
    { q: "Konsultasinya beneran gratis?", a: "Gratis 10 menit, tanpa kewajiban beli apa-apa. Kami percaya edukasi dulu. Kalau kamu cocok dengan programnya, baru kita lanjut ke ilustrasi & enrollment." },
  ] : [
    { q: "How is this different from regular insurance?", a: "Our programs combine protection (insurance) with investment instruments managed by Manulife. Your premium isn't just protection — it grows in value. Transparent monthly reports." },
    { q: "Is this sharia-compliant?", a: "Yes. We use sharia products from Manulife Indonesia — free of riba, gharar, and maysir. The contracts are tabarru' & wakalah bil ujrah. We'll explain details in the free consultation." },
    { q: "What's the minimum premium to start?", a: "Varies by program. Personal life starts at Rp 350,000/month; hajj and education programs typically Rp 500,000+/month. We'll calibrate to your profile & goals." },
    { q: "What if I stop paying?", a: "The policy stays active as long as cash value covers protection costs. You can also take a premium holiday or adjust amounts. Not a 'lose-it-all' model like old unit-link." },
    { q: "Is the consultation really free?", a: "Free 10 minutes, no obligation to buy. We believe in education first. If you're a good fit, we then proceed to illustration & enrollment." },
  ];

  return (
    <Section>
      <div className="row" style={{ marginBottom: 48 }}>
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 style={{ marginTop: 16 }}>{lang === "id" ? "Pertanyaan umum." : "Common questions."}</h2>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)", gap: 48 }} className="faq-grid">
        <div>
          <p className="ink-2" style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 24 }}>
            {lang === "id"
              ? "Masih ada yang mau ditanyakan? Sesi gratis 10 menit dengan Jasmine adalah cara tercepat dapat jawaban personal."
              : "Still have questions? A free 10-min session with Jasmine is the fastest way to get personal answers."}
          </p>
        </div>
        <div className="stack" style={{ gap: 8 }}>
          {items.map((it, i) => (
            <div key={i} className="card" style={{ padding: 0, overflow: "hidden", background: "var(--surface)" }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%", textAlign: "left", padding: "20px 24px",
                  background: "transparent", border: 0, color: "inherit", font: "inherit",
                  cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 16 }}>{it.q}</span>
                <span style={{
                  width: 28, height: 28, borderRadius: 999, flexShrink: 0,
                  background: "var(--chip)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transform: open === i ? "rotate(45deg)" : "rotate(0)",
                  transition: "transform .2s ease",
                }}>
                  <Plus size={14} />
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px", color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 }}>
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .faq-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

// ──────────────────────────────────────────────────────────────
// CTA
// ──────────────────────────────────────────────────────────────
function ProgramCTA({ onNavigate }) {
  const { lang } = useT();
  return (
    <Section>
      <div style={{
        background: "var(--ink)",
        color: "var(--bg)",
        borderRadius: 32,
        padding: "clamp(48px, 7vw, 80px)",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
        gap: 48,
        alignItems: "center",
      }} className="pg-cta-grid">
        <div>
          <Tag variant="accent">★ {lang === "id" ? "GRATIS · TANPA KOMITMEN" : "FREE · NO COMMITMENT"}</Tag>
          <h2 style={{ color: "inherit", marginTop: 20 }}>
            {lang === "id"
              ? <>Bingung pilih program?<br />Ngobrol 10 menit, gratis.</>
              : <>Not sure which program?<br />Let's chat for 10 minutes, free.</>}
          </h2>
          <p style={{ fontSize: 16, marginTop: 16, opacity: 0.75, maxWidth: 480 }}>
            {lang === "id"
              ? "Langsung dengan Jasmine. Bahas kondisi keuanganmu, tujuan, dan program mana yang paling cocok. Tanpa kewajiban beli apa-apa."
              : "Directly with Jasmine. Review your situation, goals, and which program fits best. No obligation to buy."}
          </p>
          <div className="row" style={{ gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "book", type: "free" })} iconRight={<ArrowRight size={18} />}>
              {lang === "id" ? "Booking konsultasi gratis" : "Book free consultation"}
            </Button>
            <a href="https://wa.me/6285890065850" target="_blank" rel="noopener" className="btn btn-lg" style={{ background: "transparent", border: "1.5px solid currentColor", color: "inherit" }}>
              {lang === "id" ? "Chat WhatsApp" : "WhatsApp chat"}
            </a>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="card" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "var(--bg)" }}>
            <div className="row" style={{ gap: 12, marginBottom: 12 }}>
              <div className="avatar" style={{ width: 48, height: 48 }}>J</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Jasmine</div>
                <div style={{ fontSize: 12, opacity: 0.6, fontFamily: "JetBrains Mono, monospace" }}>SHARIA LIFE PLANNER</div>
              </div>
            </div>
            <div className="stack" style={{ gap: 12, marginTop: 16 }}>
              {[
                { l: lang === "id" ? "Durasi" : "Duration", v: "10 min" },
                { l: lang === "id" ? "Format" : "Format", v: "Zoom / WhatsApp call" },
                { l: lang === "id" ? "Harga" : "Price", v: lang === "id" ? "Gratis" : "Free" },
                { l: lang === "id" ? "Slot tersedia" : "Slots open", v: lang === "id" ? "12 minggu ini" : "12 this week" },
              ].map((d) => (
                <div key={d.l} className="row-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 8 }}>
                  <span style={{ fontSize: 13, opacity: 0.6 }}>{d.l}</span>
                  <span className="mono" style={{ fontWeight: 600, fontSize: 13 }}>{d.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .pg-cta-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

Object.assign(window, { ProgramScreen });
