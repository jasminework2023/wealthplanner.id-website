// home.jsx — landing page (v2 — copy update Juni 2026)

function HomeScreen({ onNavigate, heroLayout }) {
  const { t, lang } = useT();
  return (
    <div>
      <DashboardHero onNavigate={onNavigate} />
      <SocialProofMarquee />
      <CalculatorsTeaser onNavigate={onNavigate} />
      <ProductsTeaser onNavigate={onNavigate} />
      <ProgramTeaser onNavigate={onNavigate} />
      <WebinarTeaser onNavigate={onNavigate} />
      <JasmineSection onNavigate={onNavigate} />
      <BigCTA onNavigate={onNavigate} />
    </div>
  );
}

function DashboardHero({ onNavigate }) {
  const { t, lang } = useT();
  const cards = lang === "id" ? [
    {
      id: "calc",
      tag: "01 / GRATIS",
      title: "Hitung Impian Keuangan Gratis",
      desc: "Dengan menghitung impianmu dengan angka yang realistis, lebih mudah dan memotivasi kamu untuk mencapainya. 8 kalkulator otomatis siap bantu.",
      cta: "Mulai hitung",
      route: "calc",
      icon: "Sparkle",
      color: "var(--accent)",
    },
    {
      id: "products",
      tag: "02 / PREMIUM",
      title: "Produk Keuangan Digital Premium",
      desc: "Template spreadsheet dan AI premium yang bantu kamu manage cashflow, rencanakan impian lebih matang, dan pantau kondisi keuangan secara real-time.",
      cta: "Lihat produk",
      route: "products",
      icon: "Wallet",
      color: "#C6F24E",
    },
    {
      id: "program",
      tag: "03 / PROTEKSI",
      title: "Produk Asuransi dan Investasi",
      desc: "Bantu kamu menemukan strategi mencapai impian — menumbuhkan jalur investasi dan menjaganya dengan proteksi asuransi syariah yang tepat.",
      cta: "Lihat program",
      route: "program",
      icon: "ShieldCheck",
      color: "#7C9CFF",
    },
  ] : [
    { id: "calc", tag: "01 / FREE", title: "Calculate Your Financial Goals", desc: "Calculating your goals with realistic numbers makes them easier and more motivating to achieve. 8 automated calculators ready to help.", cta: "Start calculating", route: "calc", icon: "Sparkle", color: "var(--accent)" },
    { id: "products", tag: "02 / PREMIUM", title: "Premium Digital Finance Products", desc: "Premium spreadsheet templates and AI tools to help you manage cashflow, plan your goals more maturely, and track your finances in real-time.", cta: "See products", route: "products", icon: "Wallet", color: "#C6F24E" },
    { id: "program", tag: "03 / PROTECTION", title: "Insurance & Investment Products", desc: "Help you find the right strategy to achieve your goals — growing investment channels and protecting them with the right sharia insurance.", cta: "See programs", route: "program", icon: "ShieldCheck", color: "#7C9CFF" },
  ];

  const scrollToFeatures = () => {
    document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section style={{ paddingTop: 56, paddingBottom: 16 }}>
      {/* Headline */}
      <h1 style={{ maxWidth: 860, marginBottom: 20 }}>
        {lang === "id" ? (
          <>
            Wealthplanner.id —{" "}
            <span style={{ color: "var(--accent)" }}>Platform</span>{" "}
            yang bantu kamu mendapatkan produk asuransi, akumulasi kekayaan dan investasi yang sesuai kebutuhan
          </>
        ) : (
          <>
            Wealthplanner.id —{" "}
            <span style={{ color: "var(--accent)" }}>Platform</span>{" "}
            that helps you find the right insurance, wealth accumulation, and investment products for your needs
          </>
        )}
      </h1>
      <p className="ink-2" style={{ fontSize: 17, lineHeight: 1.65, maxWidth: 640, marginBottom: 36 }}>
        {lang === "id"
          ? "Dengan profesional agent bersertifikat dan tools keuangan akurat."
          : "With certified professional agents and accurate financial tools."}
      </p>

      {/* CTA buttons — stacked, centered */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 64, maxWidth: 420 }}>
        <Button
          variant="primary"
          size="lg"
          onClick={() => onNavigate({ name: "book" })}
          iconRight={<ArrowRight size={18} />}
          style={{ width: "100%", justifyContent: "center" }}
        >
          {lang === "id" ? "Free Konsultasi 1-on-1 · 10 Menit" : "Free 1-on-1 Consultation · 10 Minutes"}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={scrollToFeatures}
          style={{ width: "100%", justifyContent: "center" }}
        >
          {lang === "id" ? "Pelajari Lebih Lanjut" : "Learn More"}
        </Button>
      </div>

      {/* Section cards */}
      <div id="features-section" style={{ marginBottom: 24 }}>
        <Eyebrow>{lang === "id" ? "MULAI BENAHI KEUANGANMU DARI SINI!" : "START FIXING YOUR FINANCES HERE!"}</Eyebrow>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {cards.map((card, idx) => {
          const Icon = window[card.icon] || Sparkle;
          return (
            <button
              key={card.id}
              onClick={() => onNavigate({ name: card.route })}
              className="card card-hover"
              style={{
                cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 280, padding: 28, gap: 18, position: "relative", overflow: "hidden",
              }}
            >
              <div className="row-between" style={{ alignItems: "flex-start" }}>
                <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "var(--muted)" }}>{card.tag}</span>
                <div style={{
                  width: 44, height: 44, borderRadius: 14,
                  background: card.color, color: "#0a0a0a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={20} stroke={2} />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 24, lineHeight: 1.1 }}>{card.title}</h3>
                <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.5, marginTop: 10 }}>{card.desc}</p>
              </div>
              <div className="row" style={{ gap: 6, color: "var(--ink)", fontSize: 13, fontWeight: 600 }}>
                {card.cta} <ArrowRight size={14} />
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function SocialProofMarquee() {
  const items = ["150+ keluarga terlindungi", "4.9★ rating konsultasi", "Manulife trusted partner", "Sejak 2021", "Syariah-compliant", "OJK Licensed", "Konsultasi gratis"];
  return (
    <div className="marquee-row" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", margin: "32px 0" }}>
      <div className="marquee">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="row" style={{ gap: 16, fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 22, fontWeight: 600 }}>
            <span style={{ color: "var(--accent)", fontSize: 16 }}>✦</span>
            <span style={{ whiteSpace: "nowrap" }}>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSection() {
  const { lang } = useT();
  const problems = lang === "id" ? [
    {
      icon: "❌",
      title: "Tidak ada proteksi penghasilan",
      desc: "Kalau kamu sakit parah atau meninggal, siapa yang bayar cicilan rumah, biaya sekolah anak, dan kebutuhan bulanan keluarga?",
      color: "#FF6B6B",
    },
    {
      icon: "❌",
      title: "Nabung tapi tidak terproteksi",
      desc: "Investasi dan tabungan bisa habis karena satu musibah besar. Tanpa asuransi, semua yang sudah dikumpulkan bisa lenyap dalam hitungan bulan.",
      color: "#FFB347",
    },
    {
      icon: "❌",
      title: "Pakai produk yang tidak sesuai prinsip",
      desc: "Banyak yang belum tahu bahwa asuransi konvensional mengandung unsur yang tidak sesuai syariah. Ada alternatif yang lebih tenang secara agama.",
      color: "#7C9CFF",
    },
  ] : [
    {
      icon: "❌",
      title: "No income protection",
      desc: "If you get seriously ill or pass away, who pays the mortgage, school fees, and monthly family expenses?",
      color: "#FF6B6B",
    },
    {
      icon: "❌",
      title: "Saving without protection",
      desc: "Investments and savings can be wiped out by one major disaster. Without insurance, everything you've built could vanish in months.",
      color: "#FFB347",
    },
    {
      icon: "❌",
      title: "Using non-compliant products",
      desc: "Many people don't realize conventional insurance contains elements that don't comply with Islamic principles. There's a more peaceful alternative.",
      color: "#7C9CFF",
    },
  ];

  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 680, marginBottom: 48 }}>
        <Eyebrow>{lang === "id" ? "KENAPA INI PENTING?" : "WHY THIS MATTERS"}</Eyebrow>
        <h2 style={{ marginTop: 16 }}>
          {lang === "id"
            ? "Jujur — kebanyakan keluarga muda punya 3 gap ini tanpa sadar."
            : "Honestly — most young families have these 3 gaps without realizing it."}
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {problems.map((p, i) => (
          <div key={i} className="card" style={{ borderLeft: `4px solid ${p.color}`, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
              {p.icon}
            </div>
            <div>
              <h4 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.2 }}>{p.title}</h4>
              <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 10 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 36, textAlign: "center" }}>
        <p className="ink-2" style={{ fontSize: 16, marginBottom: 20 }}>
          {lang === "id" ? "Mau tahu kondisi finansialmu sekarang?" : "Want to know your current financial condition?"}
        </p>
        <div className="row" style={{ gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" onClick={() => document.getElementById("book-section")?.scrollIntoView({ behavior: "smooth" }) } iconRight={<ArrowRight size={16} />}>
            {lang === "id" ? "Konsultasi Gratis Sekarang" : "Free Consultation Now"}
          </Button>
        </div>
      </div>
    </Section>
  );
}

function Hero({ onNavigate, variant = "split" }) {
  const { t } = useT();
  const tag = t.hero_tag;
  const title1 = t.hero_title_1;
  const title2 = t.hero_title_2;
  const sub = t.hero_sub;

  if (variant === "stack") {
    return (
      <Section className="" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 920, margin: "0 auto" }}>
          <Tag variant="accent">★ {tag}</Tag>
          <h1 style={{ marginTop: 24, textAlign: "center" }}>
            {title1} <br />
            <span style={{
              background: "var(--accent)",
              color: "var(--accent-ink)",
              padding: "0.04em 0.22em 0.06em",
              borderRadius: 16,
              display: "inline-block",
              lineHeight: 1,
            }}>{title2}</span>
          </h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 24, maxWidth: 600, marginInline: "auto" }}>{sub}</p>
          <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "calc" })} iconRight={<ArrowRight size={18} />}>
              {t.hero_cta}
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate({ name: "products" })}>
              {t.hero_cta_2}
            </Button>
          </div>
        </div>
        <HeroStatsRow />
      </Section>
    );
  }

  if (variant === "wide") {
    return (
      <Section style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div style={{
          background: "var(--accent)",
          color: "var(--accent-ink)",
          borderRadius: 32,
          padding: "clamp(40px, 6vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div className="row" style={{ gap: 12, marginBottom: 24 }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "6px 12px", background: "rgba(0,0,0,0.15)", borderRadius: 999, letterSpacing: "0.1em", fontFamily: "JetBrains Mono, monospace" }}>★ {tag}</span>
          </div>
          <h1 style={{ color: "inherit", maxWidth: 920 }}>{title1} {title2}</h1>
          <p style={{ fontSize: 19, marginTop: 24, maxWidth: 640, opacity: 0.78 }}>{sub}</p>
          <div className="row" style={{ gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <button onClick={() => onNavigate({ name: "calc" })} className="btn btn-lg" style={{ background: "var(--accent-ink)", color: "var(--accent)" }}>
              {t.hero_cta} <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate({ name: "products" })} className="btn btn-lg" style={{ background: "transparent", color: "var(--accent-ink)", border: "1.5px solid currentColor" }}>
              {t.hero_cta_2}
            </button>
          </div>
          <BgPattern />
        </div>
        <HeroStatsRow />
      </Section>
    );
  }

  // split (default)
  return (
    <Section style={{ paddingTop: 48, paddingBottom: 24 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
        gap: 48,
        alignItems: "center",
      }} className="hero-grid">
        <div>
          <Tag variant="accent">★ {t.hero_tag}</Tag>
          <h1 style={{ marginTop: 24, marginBottom: 0 }}>
            {title1} <br />
            <span style={{ color: "var(--accent)" }}>{title2}</span>
          </h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 24, maxWidth: 520 }}>{t.hero_sub}</p>
          <div className="row" style={{ gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "calc" })} iconRight={<ArrowRight size={18} />}>
              {t.hero_cta}
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate({ name: "products" })}>
              {t.hero_cta_2}
            </Button>
          </div>
          <div className="row" style={{ gap: 28, marginTop: 40, flexWrap: "wrap" }}>
            <Stat value="100" label={t.hero_stat_1} />
            <Stat value="5" label={t.hero_stat_2} />
            <Stat value="300" label={t.hero_stat_3} />
          </div>
        </div>
        <HeroVisual />
      </div>
      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </Section>
  );
}

function UnderlineSquiggle() {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: -8, width: "100%", height: 10 }}>
      <path d="M0 6 Q 20 0, 40 6 T 80 6 T 120 6 T 160 6 T 200 6" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function HeroVisual() {
  const { t } = useT();
  return (
    <div className="hero-visual" style={{ position: "relative", aspectRatio: "1 / 1", maxWidth: 520, marginLeft: "auto" }}>
      <div className="sticker" style={{ position: "absolute", top: -8, left: -8, transform: "rotate(-6deg)", zIndex: 3 }}>
        gratis • instant
      </div>
      <div style={{
        position: "absolute",
        top: 30,
        right: 0,
        width: "90%",
        background: "var(--accent)",
        color: "var(--accent-ink)",
        borderRadius: 28,
        padding: 28,
        boxShadow: "var(--shadow-lg)",
        zIndex: 2,
        transform: "rotate(2deg)",
      }}>
        <div className="row-between">
          <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", opacity: 0.7 }}>HASIL IMPIANMU</span>
          <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 10px", background: "rgba(0,0,0,0.15)", borderRadius: 999, fontFamily: "JetBrains Mono, monospace" }}>NABUNG 10 THN</span>
        </div>
        <div className="display" style={{ fontSize: 56, lineHeight: 0.9, marginTop: 16, fontWeight: 700 }}>Rp 2,1M</div>
        <p style={{ fontSize: 13, marginTop: 14, opacity: 0.75 }}>Untuk DP rumah idamanmu. Mulai dari Rp 8,4jt/bln di RDPU + reksadana saham.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 18 }}>
          {[
            { l: "Bulan", v: "120" },
            { l: "%/thn", v: "9.5" },
            { l: "Risk", v: "Mid" },
          ].map((d) => (
            <div key={d.l} style={{ background: "rgba(0,0,0,0.10)", padding: "10px 12px", borderRadius: 12 }}>
              <div className="mono" style={{ fontSize: 10, opacity: 0.7, fontWeight: 600 }}>{d.l.toUpperCase()}</div>
              <div className="mono" style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{d.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        position: "absolute",
        bottom: 20,
        left: 0,
        width: "62%",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 24,
        padding: 20,
        zIndex: 1,
        boxShadow: "var(--shadow-lg)",
        transform: "rotate(-3deg)",
      }}>
        <div className="row" style={{ gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "var(--chip)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChartBar size={16} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Investment Planner</div>
            <div className="muted mono" style={{ fontSize: 10 }}>Update 2 menit lalu</div>
          </div>
        </div>
        <MiniChart />
      </div>
      <div style={{
        position: "absolute",
        bottom: -8,
        right: 8,
        background: "var(--ink)",
        color: "var(--bg)",
        padding: "10px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 8,
        boxShadow: "var(--shadow-lg)",
        transform: "rotate(4deg)",
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--positive)" }} />
        Syariah-compliant
      </div>
    </div>
  );
}

function MiniChart() {
  const data = [3, 5, 4, 7, 6, 9, 8, 11, 10, 13];
  const max = Math.max(...data);
  const w = 240, h = 70;
  const points = data.map((d, i) => `${(i / (data.length - 1)) * w},${h - (d / max) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 70, marginTop: 12 }}>
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.4" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${points} ${w},${h}`} fill="url(#g)" />
      <polyline points={points} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function HeroStatsRow() {
  const { t } = useT();
  return (
    <div className="row" style={{ gap: 32, marginTop: 56, flexWrap: "wrap", justifyContent: "center" }}>
      <Stat value="150+" label="keluarga terlindungi" />
      <Stat value="4.9★" label="rating konsultasi" />
      <Stat value="2021" label="mulai beroperasi" />
    </div>
  );
}

function BgPattern() {
  return (
    <svg style={{ position: "absolute", right: -40, top: -40, width: 280, height: 280, opacity: 0.12 }} viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CalculatorsTeaser({ onNavigate }) {
  const { t } = useT();
  return (
    <Section>
      <div className="row-between" style={{ marginBottom: 40, alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow>{t.section_calc_eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>{t.section_calc_title}</h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 16 }}>{t.section_calc_sub}</p>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "calc" })} iconRight={<ArrowRight size={16} />}>
          Lihat semua kalkulator
        </Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {CALCULATORS.slice(0, 7).map((c) => (
          <CalcTile key={c.id} calc={c} onClick={() => onNavigate({ name: "calculator", id: c.id })} />
        ))}
        <div className="card card-hover" style={{
          background: "var(--surface-2)",
          borderStyle: "dashed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          minHeight: 180,
        }}>
          <div className="muted mono" style={{ fontSize: 11, letterSpacing: "0.1em" }}>SOON</div>
          <h4 className="muted" style={{ textAlign: "center" }}>Zakat & Wakaf<br />Planner</h4>
        </div>
      </div>
    </Section>
  );
}

function CalcTile({ calc, onClick }) {
  const { t } = useT();
  const Icon = window[calc.icon];
  return (
    <button onClick={onClick} className="card card-hover" style={{
      textAlign: "left",
      cursor: "pointer",
      background: "var(--surface)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 180,
      gap: 16,
      color: "inherit",
      font: "inherit",
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: calc.color,
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {Icon && <Icon size={20} stroke={2} />}
      </div>
      <div>
        <h4 style={{ fontSize: 19, fontWeight: 700, fontFamily: "Bricolage Grotesque, sans-serif", letterSpacing: "-0.02em" }}>
          {t[`c_${calc.id}`]}
        </h4>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.45 }}>{t[`c_${calc.id}_sub`]}</p>
      </div>
      <div className="row" style={{ gap: 6, color: "var(--ink-2)", fontSize: 12, fontWeight: 500 }}>
        Mulai <ArrowRight size={14} />
      </div>
    </button>
  );
}

function ProductsTeaser({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div className="row-between" style={{ marginBottom: 40, alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow>{t.section_prod_eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>{t.section_prod_title}</h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 16 }}>{t.section_prod_sub}</p>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "products" })} iconRight={<ArrowRight size={16} />}>
          {t.section_prod_cta}
        </Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {PRODUCTS.slice(0, 3).map((p) => (
          <ProductCardLg key={p.id} product={p} onClick={() => onNavigate({ name: "product", id: p.id })} />
        ))}
      </div>
    </Section>
  );
}

function ProductCardLg({ product, onClick }) {
  const { t, lang } = useT();
  const Icon = window[product.icon];
  return (
    <button onClick={onClick} className="card card-hover" style={{
      cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
      display: "flex", flexDirection: "column", gap: 16, padding: 0, overflow: "hidden",
    }}>
      <div style={{ position: "relative", background: "#E6F0E6" }}>
        <img
          src={product.image}
          alt={product[`name_${lang}`]}
          style={{ display: "block", width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
        />
        <span style={{
          position: "absolute", top: 14, left: 14,
          fontSize: 11, fontWeight: 700, padding: "5px 10px",
          background: "var(--ink)", color: "var(--bg)", borderRadius: 999,
          fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em",
        }}>{product[`tag_${lang}`]}</span>
      </div>
      <div style={{ padding: "0 24px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.5 }}>{product[`blurb_${lang}`]}</p>
        <div className="row-between" style={{ marginTop: "auto" }}>
          <div className="row" style={{ gap: 8, alignItems: "baseline" }}>
            <div className="mono" style={{ fontSize: 22, fontWeight: 700, color: "var(--ink)" }}>{formatIDR(product.price)}</div>
            {product.priceOld && (
              <div className="mono muted" style={{ fontSize: 13, fontWeight: 600, textDecoration: "line-through", opacity: 0.55 }}>{formatIDR(product.priceOld)}</div>
            )}
          </div>
          <span className="row" style={{ color: "var(--ink-2)", fontSize: 13, fontWeight: 500, gap: 6 }}>
            Detail <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}

function JasmineSection({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
        gap: 48,
        alignItems: "center",
      }} className="jas-grid">
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "4/5",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            overflow: "hidden",
            position: "relative",
          }}>
            <img
              src="/assets/jasmine-profile.jpg.jpeg"
              alt="Jasmine — Sharia Life Planner Manulife Indonesia"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, padding: 14, background: "color-mix(in oklab, var(--bg) 85%, transparent)", backdropFilter: "blur(20px)", borderRadius: 14, border: "1px solid var(--border)" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--muted)", fontWeight: 600, letterSpacing: "0.1em" }}>SHARIA LIFE PLANNER · MANULIFE</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginTop: 4, fontFamily: "Bricolage Grotesque, sans-serif", letterSpacing: "-0.01em" }}>Jannatul Jasmine, SE, WPPE</div>
            </div>
          </div>
          <div style={{ position: "absolute", top: 24, right: -16, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: "12px 16px", fontSize: 12, transform: "rotate(4deg)" }}>
            <div className="mono" style={{ fontWeight: 600, fontSize: 11, color: "var(--muted)" }}>RATING</div>
            <div className="row" style={{ gap: 4, fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 700, fontSize: 20 }}>
              4.9 <span style={{ color: "var(--accent)" }}>★</span>
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>{lang === "id" ? "PROFIL KONSULTAN" : "CONSULTANT PROFILE"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id"
              ? <>Quick Call 10 Menit —<br /><span style={{ color: "var(--accent)" }}>Konsultasi Asuransi & Investasi</span></>
              : <>10-Minute Quick Call —<br /><span style={{ color: "var(--accent)" }}>Insurance & Investment Consultation</span></>}
          </h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 20 }}>
            {lang === "id"
              ? "Sharia Life Planner Manulife Indonesia yang menggunakan pendekatan financial planning untuk menemukan produk asuransi dan investasi yang sesuai kebutuhanmu."
              : "Manulife Indonesia Sharia Life Planner who uses a financial planning approach to find insurance and investment products that fit your needs."}
          </p>

          {/* Credentials */}
          <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
            {(lang === "id" ? [
              "Profesional agent sejak 2021",
              "Lisensi AAJI, AASI, WPPE",
            ] : [
              "Professional agent since 2021",
              "Licensed AAJI, AASI, WPPE",
            ]).map((it) => (
              <li key={it} className="row" style={{ gap: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: 999, background: "var(--accent)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={14} stroke={3} />
                </span>
                <span style={{ fontSize: 15 }}>{it}</span>
              </li>
            ))}
          </ul>

          {/* Cakupan Konsultasi */}
          <div style={{ marginTop: 28, padding: 20, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16 }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 14 }}>
              {lang === "id" ? "CAKUPAN KONSULTASI" : "CONSULTATION COVERAGE"}
            </div>
            <ol style={{ padding: "0 0 0 18px", margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {(lang === "id" ? [
                "Review polis asuransi",
                "Konsultasi kebutuhan asuransi & investasi",
                "Hitung kebutuhan asuransi & investasi: premi, uang pertanggungan",
                "Lainnya",
              ] : [
                "Insurance policy review",
                "Insurance & investment needs consultation",
                "Calculate insurance & investment needs: premium, sum insured",
                "Others",
              ]).map((it) => (
                <li key={it} style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{it}</li>
              ))}
            </ol>
          </div>

          <div style={{ marginTop: 28 }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "book" })} iconRight={<ArrowRight size={18} />}>
              {lang === "id" ? "Free Konsultasi 1-on-1 · 10 Menit" : "Free 1-on-1 Consultation · 10 Minutes"}
            </Button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .jas-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

function ProgramTeaser({ onNavigate }) {
  const { t, lang } = useT();
  const featured = PROGRAMS.filter((p) => ["warisan", "haji", "pendidikan"].includes(p.id));
  return (
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 48, alignItems: "center" }} className="pgt-grid">
        <div>
          <Eyebrow>{lang === "id" ? "PROGRAM ASURANSI DAN INVESTASI" : "INSURANCE & INVESTMENT PROGRAMS"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id"
              ? <>Temukan produk asuransi dan investasi yang <span style={{ color: "var(--accent)" }}>sesuai kebutuhanmu</span> disini.</>
              : <>Find the insurance and investment products that <span style={{ color: "var(--accent)" }}>fit your needs</span> here.</>}
          </h2>
          <div className="row" style={{ marginTop: 28, gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => onNavigate({ name: "program" })} iconRight={<ArrowRight size={16} />}>
              {lang === "id" ? "Lihat semua program" : "See all programs"}
            </Button>
            <Button variant="outline" onClick={() => onNavigate({ name: "book", type: "free" })}>
              {lang === "id" ? "Konsultasi gratis" : "Free consultation"}
            </Button>
          </div>
        </div>

        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr", gridAutoRows: "180px" }} className="pgt-cards">
          {featured.map((p, i) => {
            const Icon = window[p.icon] || ShieldCheck;
            return (
              <button
                key={p.id}
                onClick={() => onNavigate({ name: "program" })}
                className="card-hover"
                style={{
                  background: p.color, color: "#0a0a0a",
                  border: 0, borderRadius: 24, padding: 22,
                  cursor: "pointer", font: "inherit", textAlign: "left",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  gridRow: i === 0 ? "span 2" : "auto",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} stroke={2} />
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10, fontWeight: 600, opacity: 0.6, letterSpacing: "0.1em" }}>
                    {String(i + 1).padStart(2, "0")} / 06
                  </div>
                  <h4 style={{ fontSize: i === 0 ? 24 : 18, color: "inherit", marginTop: 6, lineHeight: 1.1 }}>{p[`title_${lang}`]}</h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 980px) { .pgt-grid { grid-template-columns: 1fr !important; } .pgt-cards { grid-auto-rows: 140px !important; } }`}</style>
    </Section>
  );
}

function WebinarTeaser({ onNavigate }) {
  const { t, lang } = useT();
  const upcoming = WEBINARS.filter((w) => !w.past);
  const past = WEBINARS.filter((w) => w.past);

  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div className="row-between" style={{ marginBottom: 40, alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 600 }}>
          <Eyebrow>{lang === "id" ? "EVENT WEBINAR" : "WEBINAR EVENTS"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id"
              ? "Edukasi literasi keuangan dengan topik yang beragam sesuai kebutuhan."
              : "Financial literacy education with diverse topics tailored to your needs."}
          </h2>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "webinar" })} iconRight={<ArrowRight size={16} />}>
          {lang === "id" ? "Semua webinar" : "All webinars"}
        </Button>
      </div>

      {upcoming.length === 0 && (
        <div className="card" style={{
          background: "var(--ink)", color: "var(--bg)", border: 0,
          padding: "36px 32px", marginBottom: 40,
          display: "flex", flexDirection: "column", gap: 12,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: "50%", background: "var(--accent)", opacity: 0.15 }} />
          <span style={{
            alignSelf: "flex-start", position: "relative",
            background: "var(--accent)", color: "var(--accent-ink)",
            padding: "5px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700,
            fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em",
          }}>★ {lang === "id" ? "WEBINAR TERDEKAT" : "NEXT WEBINAR"}</span>
          <h3 style={{ color: "inherit", fontSize: 34, position: "relative" }}>Coming Soon</h3>
          <p style={{ opacity: 0.75, fontSize: 15, maxWidth: 460, position: "relative" }}>
            {lang === "id"
              ? "Jadwal webinar berikutnya lagi disiapkan. Pantau Instagram @wealthplanner.id biar nggak ketinggalan."
              : "The next webinar schedule is being prepared. Follow @wealthplanner.id so you don't miss it."}
          </p>
        </div>
      )}

      {/* Featured past event — Star Energy */}
      <div className="card" style={{ marginBottom: 24, padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.6fr)", gap: 0 }} className="webinar-featured">
        <img
          src="/assets/webinars/poster seminar pt star energy.jpeg"
          alt="Sharing Session PT. Star Energy — Membangun Masa Depan Anak, Menjaga Masa Depan Diri"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 280 }}
        />
        <div style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em", color: "var(--muted)" }}>SHARING SESSION · PT. STAR ENERGY GEOTHERMAL</span>
            <h3 style={{ marginTop: 12, fontSize: 22, lineHeight: 1.2 }}>Membangun Masa Depan Anak, Menjaga Masa Depan Diri</h3>
            <p className="ink-2" style={{ fontSize: 14, marginTop: 12, lineHeight: 1.6 }}>Live class praktik hitung dana pensiun & free financial check up. Jasmine sebagai Financial Educator bersama PT. Star Energy Geothermal Pengalengan.</p>
          </div>
          <div className="row" style={{ gap: 16, marginTop: 20, flexWrap: "wrap" }}>
            <span className="muted mono" style={{ fontSize: 12 }}>📍 Power Station</span>
            <span className="muted mono" style={{ fontSize: 12 }}>📅 12 Juni 2026</span>
          </div>
        </div>
      </div>
      <h3 style={{ fontSize: 20, marginBottom: 20 }}>{lang === "id" ? "Webinar sebelumnya" : "Past webinars"}</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {past.map((w) => <WebinarCard key={w.id} webinar={w} />)}
      </div>
      <style>{`@media (max-width: 760px) { .webinar-featured { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

function WhySection() {
  const { t } = useT();
  const items = [
    { t: t.why_1_t, d: t.why_1_d, icon: ShieldCheck },
    { t: t.why_2_t, d: t.why_2_d, icon: ChartBar },
    { t: t.why_3_t, d: t.why_3_d, icon: Sparkle },
    { t: t.why_4_t, d: t.why_4_d, icon: Briefcase },
  ];
  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div style={{ marginBottom: 48, maxWidth: 720 }}>
        <Eyebrow>{t.why_eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 16 }}>{t.why_title}</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {items.map((it, i) => (
          <Card key={i} style={{ minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "var(--chip)", display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--accent)",
            }}>
              <it.icon size={20} />
            </div>
            <div>
              <h4 style={{ marginTop: 24, marginBottom: 10, fontSize: 22, lineHeight: 1.15 }}>{it.t}</h4>
              <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.5 }}>{it.d}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function BigCTA({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section>
      <div style={{
        background: "var(--ink)",
        color: "var(--bg)",
        borderRadius: 32,
        padding: "clamp(48px, 7vw, 96px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <Tag variant="accent">★ {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}</Tag>
        <h2 style={{ marginTop: 24, color: "inherit", maxWidth: 720, marginInline: "auto" }}>
          {lang === "id"
            ? <>Satu langkah kecil hari ini bisa melindungi<br />keluargamu bertahun-tahun ke depan.</>
            : <>One small step today can protect<br />your family for years to come.</>}
        </h2>
        <p style={{ fontSize: 17, marginTop: 16, opacity: 0.75, maxWidth: 520, marginInline: "auto" }}>
          {lang === "id"
            ? "Konsultasi gratis 10 menit, akan dapat free ilustrasi kebutuhan proteksi dan investasi."
            : "Free 10-minute consultation, get a free illustration of your protection and investment needs."}
        </p>
        <div className="row" style={{ gap: 12, marginTop: 36, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "book" })} iconRight={<ArrowRight size={18} />}>
            {lang === "id" ? "Free Konsultasi 1-on-1 · 10 Menit" : "Free 1-on-1 Consultation · 10 Minutes"}
          </Button>
          <button onClick={() => onNavigate({ name: "calc" })} className="btn btn-lg" style={{ background: "transparent", border: "1.5px solid currentColor", color: "inherit" }}>
            {lang === "id" ? "Atau coba kalkulator dulu" : "Or try the calculator first"}
          </button>
        </div>
        <p style={{ fontSize: 12, marginTop: 24, opacity: 0.5 }}>
          {lang === "id"
            ? "🔒 OJK Licensed · Manulife Indonesia · Syariah-compliant · 150+ keluarga terlindungi"
            : "🔒 OJK Licensed · Manulife Indonesia · Sharia-compliant · 150+ families protected"}
        </p>
      </div>
    </Section>
  );
}

Object.assign(window, { HomeScreen });
