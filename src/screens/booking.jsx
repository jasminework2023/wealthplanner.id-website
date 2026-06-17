// booking.jsx — Halaman booking konsultasi dengan Calendly embed

function BookingScreen({ onNavigate }) {
  const { lang } = useT();

  React.useEffect(() => {
    // Load Calendly widget script
    const existing = document.querySelector('script[src*="calendly"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
    // Load Calendly CSS for popup
    const existingCss = document.querySelector('link[href*="calendly"]');
    if (!existingCss) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/jannatuljasmine/30min?background_color=0a0a0a&text_color=ffffff&primary_color=FFB800&hide_gdpr_banner=1",
      });
    }
  };

  return (
    <Section style={{ paddingTop: 40, paddingBottom: 56 }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate({ name: "dashboard" })}
        style={{
          background: "var(--chip)", border: 0, color: "var(--ink-2)",
          padding: "8px 14px", borderRadius: 999, font: "inherit",
          fontSize: 13, fontWeight: 500, cursor: "pointer",
          marginBottom: 32, display: "inline-flex", alignItems: "center", gap: 6,
        }}
      >
        ← {lang === "id" ? "Kembali" : "Back"}
      </button>

      {/* Header */}
      <div style={{ maxWidth: 640, marginBottom: 40 }}>
        <div className="row" style={{ gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          <Tag variant="accent">★ Konsultasi Gratis</Tag>
          <Tag variant="outline">10 Menit · Via Zoom</Tag>
        </div>
        <h1 style={{ marginBottom: 16 }}>
          {lang === "id"
            ? "Booking Sesi Konsultasi"
            : "Book a Consultation"}
        </h1>
        <p className="ink-2" style={{ fontSize: 18, lineHeight: 1.65 }}>
          {lang === "id"
            ? "Pilih jadwal yang cocok. Kami akan bantu kamu lihat kondisi keuangan sekarang dan solusi proteksi yang paling sesuai — gratis, tanpa komitmen apapun."
            : "Pick a time that works for you. We'll help you understand your current financial situation and the right protection solution — free, no commitment."}
        </p>
      </div>

      {/* Calendly popup button */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
        <Button
          variant="primary"
          size="lg"
          onClick={openCalendly}
          iconRight={<ArrowRight size={18} />}
        >
          {lang === "id" ? "Pilih Jadwal Konsultasi →" : "Choose Consultation Schedule →"}
        </Button>
        <p className="muted" style={{ fontSize: 13 }}>
          {lang === "id"
            ? "Kamu akan memilih tanggal & waktu yang cocok. Konfirmasi dikirim ke email."
            : "You'll pick a date & time that works. Confirmation sent to your email."}
        </p>
      </div>

      {/* Trust signals */}
      <div
        className="row"
        style={{ gap: 24, marginTop: 40, flexWrap: "wrap", color: "var(--ink-2)", fontSize: 13 }}
      >
        <span>🔒 OJK Licensed</span>
        <span>🏦 Manulife Indonesia</span>
        <span>✅ Syariah-compliant</span>
        <span>👨‍👩‍👧 150+ keluarga terlindungi</span>
      </div>
    </Section>
  );
}

Object.assign(window, { BookingScreen });
