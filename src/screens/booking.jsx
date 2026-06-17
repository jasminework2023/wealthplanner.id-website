// booking.jsx — Halaman booking konsultasi dengan Calendly popup

const CALENDLY_URL = "https://calendly.com/jannatuljasmine/30min?background_color=0a0a0a&text_color=ffffff&primary_color=FFB800&hide_gdpr_banner=1";

function BookingScreen({ onNavigate }) {
  const { lang } = useT();

  React.useEffect(() => {
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  const topics = lang === "id" ? [
    "Review polis asuransi",
    "Konsultasi kebutuhan asuransi & investasi",
    "Hitung kebutuhan asuransi & investasi: premi, uang pertanggungan",
    "Lainnya",
  ] : [
    "Insurance policy review",
    "Insurance & investment needs consultation",
    "Calculate insurance & investment needs: premiums, coverage",
    "Others",
  ];

  const credentials = lang === "id" ? [
    "Profesional agent sejak 2021",
    "Lisensi AAJI, AASI, WPPE",
  ] : [
    "Professional agent since 2021",
    "AAJI, AASI, WPPE licensed",
  ];

  return (
    <Section style={{ paddingTop: 56, paddingBottom: 64 }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate({ name: "home" })}
        style={{
          background: "var(--chip)", border: 0, color: "var(--ink-2)",
          padding: "8px 14px", borderRadius: 999, font: "inherit",
          fontSize: 13, fontWeight: 500, cursor: "pointer",
          marginBottom: 40, display: "inline-flex", alignItems: "center", gap: 6,
        }}
      >
        ← {lang === "id" ? "Kembali" : "Back"}
      </button>

      {/* Main layout — photo left, content right */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.4fr)",
        gap: 56,
        alignItems: "flex-start",
      }} className="booking-grid">

        {/* Left — profile photo */}
        <div style={{ position: "relative" }}>
          <div style={{
            borderRadius: 24,
            overflow: "hidden",
            aspectRatio: "3/4",
            background: "var(--surface)",
          }}>
            <img
              src="/assets/jasmine-profile.jpg.jpeg"
              alt="Jannatul Jasmine"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
          </div>
          {/* Name overlay */}
          <div style={{
            position: "absolute", bottom: 16, left: 16, right: 16,
            background: "rgba(10,10,10,0.82)",
            backdropFilter: "blur(8px)",
            borderRadius: 14,
            padding: "14px 18px",
          }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--muted)", marginBottom: 6 }}>
              SHARIA LIFE PLANNER · MANULIFE
            </div>
            <div style={{ fontWeight: 700, fontSize: 17, color: "#fff" }}>Jannatul Jasmine, SE, WPPE</div>
          </div>
        </div>

        {/* Right — content */}
        <div>
          <Eyebrow>{lang === "id" ? "PROFIL KONSULTAN" : "CONSULTANT PROFILE"}</Eyebrow>

          <h1 style={{ marginTop: 16, marginBottom: 0, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1 }}>
            {lang === "id" ? (
              <>Quick Call 10 Menit —{" "}
                <span style={{ color: "var(--accent)" }}>Konsultasi Asuransi &amp; Investasi</span>
              </>
            ) : (
              <>Quick Call 10 Minutes —{" "}
                <span style={{ color: "var(--accent)" }}>Insurance &amp; Investment Consultation</span>
              </>
            )}
          </h1>

          <p className="ink-2" style={{ fontSize: 16, lineHeight: 1.65, marginTop: 20, marginBottom: 24 }}>
            {lang === "id"
              ? "Sharia Life Planner Manulife Indonesia yang menggunakan pendekatan financial planning untuk menemukan produk asuransi dan investasi yang sesuai kebutuhanmu."
              : "Manulife Indonesia Sharia Life Planner using a financial planning approach to find insurance and investment products suited to your needs."}
          </p>

          {/* Credentials */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            {credentials.map((c, i) => (
              <div key={i} className="row" style={{ gap: 10, fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>
                <span style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: "var(--accent)", color: "var(--accent-ink)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <Check size={13} stroke={3} />
                </span>
                {c}
              </div>
            ))}
          </div>

          {/* Topics card */}
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: "20px 24px",
            marginBottom: 32,
          }}>
            <div className="mono muted" style={{ fontSize: 10, letterSpacing: "0.14em", fontWeight: 700, marginBottom: 14 }}>
              {lang === "id" ? "CAKUPAN KONSULTASI" : "CONSULTATION SCOPE"}
            </div>
            <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column", gap: 10 }}>
              {topics.map((t, i) => (
                <li key={i} style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-2)" }}>{t}</li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <Button
            variant="primary"
            size="lg"
            onClick={openCalendly}
            iconRight={<ArrowRight size={18} />}
          >
            {lang === "id" ? "Free Konsultasi 1-on-1 · 10 Menit" : "Free 1-on-1 Consultation · 10 Min"}
          </Button>

          {/* Trust signals */}
          <div className="row" style={{ gap: 20, marginTop: 20, flexWrap: "wrap", color: "var(--ink-2)", fontSize: 13 }}>
            <span>🔒 OJK Licensed</span>
            <span>🏦 Manulife Indonesia</span>
            <span>✅ Syariah-compliant</span>
            <span>👨‍👩‍👧 150+ keluarga terlindungi</span>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 820px) { .booking-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

Object.assign(window, { BookingScreen });
