// home.jsx — landing page

function HomeScreen({ onNavigate, heroLayout }) {
  const { t, lang } = useT();
  return (
    <div>
      <DashboardHero onNavigate={onNavigate} />
      <CalculatorsTeaser onNavigate={onNavigate} />
      <ProductsTeaser onNavigate={onNavigate} />
      <ProgramTeaser onNavigate={onNavigate} />
      <WebinarTeaser onNavigate={onNavigate} />
      <JasmineSection onNavigate={onNavigate} />
      <WhySection />
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
      title: "Hitung Impianmu disini",
      desc: "8 kalkulator otomatis untuk semua tujuan finansialmu — dari cek kondisi sampai dana haji.",
      cta: "Mulai hitung",
      route: "calc",
      icon: "Sparkle",
      color: "var(--accent)",
    },
    {
      id: "products",
      tag: "02 / PREMIUM",
      title: "Digital Finance Product",
      desc: "Spreadsheet planner yang sudah teruji. Sekali beli, akses selamanya. Update gratis.",
      cta: "Lihat produk",
      route: "products",
      icon: "Wallet",
      color: "#C6F24E",
    },
    {
      id: "program",
      tag: "03 / SYARIAH",
      title: "Insurance Product",
      desc: "Asuransi & investasi terintegrasi. Hifdzun mal — ikhtiar penjagaan harta.",
      cta: "Lihat program",
      route: "program",
      icon: "ShieldCheck",
      color: "#7C9CFF",
    },
    {
      id: "collab",
      tag: "04 / KOLABORASI",
      title: "Open for collaboration!",
      desc: "Brand partnership, affiliate, financial educator network. Yuk ngobrol.",
      cta: "Lihat peluang",
      route: "partnership",
      icon: "Heart",
      color: "#FF9A6B",
    },
  ] : [
    { id: "calc", tag: "01 / FREE", title: "Calculate your dreams", desc: "8 automated calculators for every financial goal — from a health check to hajj funding.", cta: "Start calculating", route: "calc", icon: "Sparkle", color: "var(--accent)" },
    { id: "products", tag: "02 / PREMIUM", title: "Digital Finance Product", desc: "Battle-tested spreadsheet planners. Buy once, lifetime access. Free updates.", cta: "See products", route: "products", icon: "Wallet", color: "#C6F24E" },
    { id: "program", tag: "03 / SHARIA", title: "Insurance Product", desc: "Integrated insurance & investment. Hifdzun mal — sharia-aligned wealth protection.", cta: "See programs", route: "program", icon: "ShieldCheck", color: "#7C9CFF" },
    { id: "collab", tag: "04 / COLLABORATION", title: "Open for collaboration!", desc: "Brand partnership, affiliates, financial educator network. Let's talk.", cta: "Explore opportunities", route: "partnership", icon: "Heart", color: "#FF9A6B" },
  ];

  return (
    <Section style={{ paddingTop: 56, paddingBottom: 16 }}>
      <div className="row" style={{ gap: 8, marginBottom: 24 }}>
        <Tag variant="accent">★ WealthPlanner ID</Tag>
        <Tag variant="outline">{lang === "id" ? "Syariah-compliant" : "Sharia-compliant"}</Tag>
      </div>

      <h1 style={{ maxWidth: 1100, marginBottom: 24 }}>
        {lang === "id" ? (
          <>
            Mulai perjalanan keuanganmu{" "}
            <span style={{ color: "var(--accent)" }}>seumur hidup</span>{" "}
            bersama wealthplanner.id
          </>
        ) : (
          <>
            Start your <span style={{ color: "var(--accent)" }}>lifelong</span> financial journey with wealthplanner.id
          </>
        )}
      </h1>
      <div style={{ maxWidth: 640, marginBottom: 56 }}>
        <p className="ink-2" style={{ fontSize: 19, fontWeight: 600, color: "var(--ink)", marginBottom: 16 }}>
          {lang === "id"
            ? "WealthPlanner.ID — Platform yang membantu kamu mencapai tujuan finansial."
            : "WealthPlanner.ID — The platform that helps you reach your financial goals."}
        </p>
        <p className="ink-2" style={{ fontSize: 17, lineHeight: 1.6 }}>
          {lang === "id"
            ? "Kami percaya bahwa financial planning bukan hanya tentang memahami teori — tetapi juga tentang memiliki strategi dan solusi yang tepat untuk mencapainya. Karena itu, kami hadir membantu kamu secara end-to-end:"
            : "We believe financial planning isn't just about understanding theory — it's about having the right strategy and solutions to get there. That's why we help you end-to-end:"}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
          {(lang === "id"
            ? ["Edukasi Literasi Keuangan", "Merumuskan Tujuan Keuangan", "Mencapai Tujuan Keuangan"]
            : ["Financial Literacy Education", "Defining Your Financial Goals", "Achieving Your Financial Goals"]
          ).map((item, i) => (
            <li key={i} className="row" style={{ gap: 12, fontSize: 17, fontWeight: 500, color: "var(--ink)" }}>
              <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--accent)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={15} stroke={3} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Eyebrow>{lang === "id" ? "GIMANA CARA KITA MEMBANTU KAMU?" : "HOW CAN WE HELP YOU?"}</Eyebrow>
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
  // A "result card" mock — visually shows what the tools spit out
  return (
    <div className="hero-visual" style={{ position: "relative", aspectRatio: "1 / 1", maxWidth: 520, marginLeft: "auto" }}>
      {/* sticker */}
      <div className="sticker" style={{ position: "absolute", top: -8, left: -8, transform: "rotate(-6deg)", zIndex: 3 }}>
        gratis • instant
      </div>

      {/* Big result card */}
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

      {/* Smaller side card */}
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

      {/* Floating tag */}
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
      <Stat value="100" label={t.hero_stat_1} />
      <Stat value="5" label={t.hero_stat_2} />
      <Stat value="300" label={t.hero_stat_3} />
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

function SocialProofMarquee() {
  const items = ["100+ klien individu", "5+ klien korporat", "300+ peserta event", "Manulife trusted partner", "Sharia-compliant", "Built by certified planner"];
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
  const { t } = useT();
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
            backgroundImage: "radial-gradient(at 70% 30%, color-mix(in oklab, var(--accent) 30%, transparent), transparent 60%), repeating-linear-gradient(135deg, transparent 0 12px, var(--chip) 12px 13px)",
          }}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
              <div style={{
                width: 120, height: 120, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent), color-mix(in oklab, var(--accent) 50%, var(--bg)))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "Bricolage Grotesque, sans-serif",
                fontSize: 56, fontWeight: 800, color: "var(--accent-ink)",
              }}>J</div>
              <div className="mono muted" style={{ fontSize: 10, letterSpacing: "0.15em" }}>FOTO JASMINE</div>
            </div>
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, padding: 14, background: "color-mix(in oklab, var(--bg) 85%, transparent)", backdropFilter: "blur(20px)", borderRadius: 14, border: "1px solid var(--border)" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--muted)", fontWeight: 600, letterSpacing: "0.1em" }}>FOUNDER · PLANNER</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginTop: 4, fontFamily: "Bricolage Grotesque, sans-serif", letterSpacing: "-0.01em" }}>Jasmine</div>
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
          <Eyebrow>{t.section_jasmine_eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>{t.section_jasmine_title}</h2>
          <p className="ink-2" style={{ fontSize: 18, marginTop: 20 }}>{t.section_jasmine_sub}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Lulusan Ekonomi Syariah",
              "Life Planner di industri asuransi (sejak 2021)",
              "Researcher · Equity Analyst · Corporate Secretary",
            ].map((it) => (
              <li key={it} className="row" style={{ gap: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: 999, background: "var(--accent)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={14} stroke={3} />
                </span>
                <span style={{ fontSize: 15 }}>{it}</span>
              </li>
            ))}
          </ul>
          <div className="row" style={{ marginTop: 36, gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "book" })} iconRight={<ArrowRight size={18} />}>
              {t.book_cta}
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate({ name: "book" })}>
              Lihat jadwal
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
  // Highlight 3 most distinct programs on homepage
  const featured = PROGRAMS.filter((p) => ["warisan", "haji", "pendidikan"].includes(p.id));
  return (
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 48, alignItems: "center" }} className="pgt-grid">
        <div>
          <Eyebrow>{lang === "id" ? "04 — ASURANSI & PROGRAM" : "04 — INSURANCE & PROGRAMS"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id"
              ? <>Lindungi impianmu.<br /><span style={{ color: "var(--accent)" }}>Tumbuhkan</span> nilainya.</>
              : <>Protect your dreams.<br /><span style={{ color: "var(--accent)" }}>Grow</span> their value.</>}
          </h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 20, maxWidth: 460 }}>
            {lang === "id"
              ? "6 program asuransi + investasi terintegrasi. Bekerja sama dengan Manulife Indonesia. Syariah-compliant."
              : "6 integrated insurance + investment programs. In partnership with Manulife Indonesia. Sharia-compliant."}
          </p>
          <div className="row" style={{ marginTop: 16, gap: 16, color: "var(--muted)", fontSize: 13 }}>
            <span className="row" style={{ gap: 6 }}><ShieldCheck size={14} /> OJK Licensed</span>
            <span className="row" style={{ gap: 6 }}><Sparkle size={14} /> Syariah</span>
          </div>
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
          <Eyebrow>{lang === "id" ? "04 — EVENT WEBINAR" : "04 — WEBINAR EVENTS"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>{lang === "id" ? "Lihat jadwal terdekat, jangan sampai tertinggal" : "Check the schedule — don't miss out"}</h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 16 }}>
            {lang === "id"
              ? "Seminar & workshop yang bantu kamu menyiapkan tujuan keuangan sesuai kebutuhan."
              : "Seminars & workshops that help you prepare your financial goals based on your needs."}
          </p>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "webinar" })} iconRight={<ArrowRight size={16} />}>
          {lang === "id" ? "Semua webinar" : "All webinars"}
        </Button>
      </div>

      {/* Coming soon */}
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

      {/* Past webinars */}
      <h3 style={{ fontSize: 20, marginBottom: 20 }}>{lang === "id" ? "Webinar sebelumnya" : "Past webinars"}</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {past.map((w) => <WebinarCard key={w.id} webinar={w} />)}
      </div>
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
  const { t } = useT();
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
        <Tag variant="accent">★ {t.hero_tag}</Tag>
        <h2 style={{ marginTop: 24, color: "inherit", maxWidth: 720, marginInline: "auto" }}>
          Mulai dari satu kalkulator gratis.<br />
          Lihat sendiri impianmu jadi nyata.
        </h2>
        <div className="row" style={{ gap: 12, marginTop: 36, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "calc" })} iconRight={<ArrowRight size={18} />}>
            {t.hero_cta}
          </Button>
          <button onClick={() => onNavigate({ name: "book" })} className="btn btn-lg" style={{ background: "transparent", border: "1.5px solid currentColor", color: "inherit" }}>
            {t.book_cta}
          </button>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { HomeScreen });
