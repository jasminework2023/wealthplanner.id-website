// products.jsx — products listing

function ProductsScreen({ onNavigate, cart, onAddToCart }) {
  const { t, lang } = useT();
  return (
    <div>
      <Section style={{ paddingTop: 56, paddingBottom: 16 }}>
        <div style={{ maxWidth: 820 }}>
          <Eyebrow>{t.prod_eyebrow}</Eyebrow>
          <h1 style={{ marginTop: 16 }}>{t.prod_title}</h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 20, maxWidth: 620 }}>{t.prod_sub}</p>
        </div>
      </Section>

      <Section style={{ paddingTop: 16 }}>
        {/* Featured top products */}
        <WealthTrackerSection onNavigate={onNavigate} lang={lang} />
        <BundleSection onAddToCart={onAddToCart} lang={lang} />

        {/* Individual products grid — exclude bundle & wealth-tracker-ai (shown above) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, marginTop: 48 }}>
          {PRODUCTS.filter(p => p.id !== "bundle" && p.id !== "wealth-tracker-ai").map((p, i) => (
            <ProductGridCard key={p.id} product={p} onClick={() => onNavigate({ name: "product", id: p.id })} variant={i % 3} />
          ))}
        </div>
      </Section>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// WEALTH TRACKER AI — featured wide card
// ──────────────────────────────────────────────────────────────
function WealthTrackerSection({ onNavigate, lang }) {
  const product = PRODUCTS.find(p => p.id === "wealth-tracker-ai");
  if (!product) return null;

  const features = lang === "id" ? product.features_id : product.features_en;

  return (
    <div style={{
      background: "#0d1117",
      color: "#ffffff",
      borderRadius: 28,
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      gap: 0,
      marginBottom: 20,
    }} className="bundle-grid">

      {/* Left — product image */}
      <div style={{ position: "relative", background: "#161b22", minHeight: 420 }}>
        <img
          src={`/${product.image}`}
          alt={product[`name_${lang}`]}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", minHeight: 420 }}
        />
      </div>

      {/* Right — copy + CTA */}
      <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        <div>
          <Tag variant="accent">✦ {lang === "id" ? "BARU · AI POWERED · TERLARIS" : "NEW · AI POWERED · BEST SELLER"}</Tag>
          <h2 style={{ color: "#ffffff", marginTop: 16, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.15 }}>
            {lang === "id"
              ? <>Wealth Tracker<br /><span style={{ color: "var(--accent)" }}>AI Template</span></>
              : <>Wealth Tracker<br /><span style={{ color: "var(--accent)" }}>AI Template</span></>}
          </h2>
          <p style={{ marginTop: 10, color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.6 }}>
            {lang === "id"
              ? "Catat keuangan cukup lewat chat Telegram. AI otomatis membacanya dan mencatat ke Google Sheets-mu."
              : "Track your finances just by chatting on Telegram. AI reads and logs it to your Google Sheets automatically."}
          </p>
        </div>

        {/* Features */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {features.map((f, i) => (
            <li key={i} className="row" style={{ gap: 10, fontSize: 13, color: "rgba(255,255,255,0.75)", alignItems: "flex-start" }}>
              <span style={{
                width: 18, height: 18, minWidth: 18, borderRadius: "50%",
                background: "var(--accent)", color: "var(--accent-ink)",
                display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1,
              }}>
                <Check size={11} stroke={3} />
              </span>
              <span style={{ lineHeight: 1.5 }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Note */}
        {product[`note_${lang}`] && (
          <div style={{ background: "rgba(255,184,0,0.12)", border: "1px solid rgba(255,184,0,0.3)", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "var(--accent)" }}>
            ✦ {product[`note_${lang}`]}
          </div>
        )}

        {/* Price + CTA */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
          <div className="mono" style={{ fontSize: 11, opacity: 0.5, marginBottom: 4, letterSpacing: "0.1em" }}>SEKALI BAYAR · AKSES SELAMANYA</div>
          <div className="row" style={{ gap: 10, alignItems: "baseline", marginBottom: 16 }}>
            <span className="mono" style={{ fontSize: 30, fontWeight: 700, color: "var(--accent)" }}>Rp 99.000</span>
            <span className="mono" style={{ fontSize: 15, fontWeight: 600, textDecoration: "line-through", opacity: 0.4, color: "#fff" }}>Rp 149.000</span>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate({ name: "product", id: "wealth-tracker-ai" })}
            iconRight={<ArrowRight size={18} />}
            style={{ width: "100%" }}
          >
            {lang === "id" ? "Lihat & Beli Sekarang" : "View & Buy Now"}
          </Button>
        </div>
      </div>

      <style>{`@media (max-width: 820px) { .bundle-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// BUNDLE SECTION with image slider catalog
// ──────────────────────────────────────────────────────────────
function BundleSection({ onAddToCart, lang }) {
  const BUNDLE_IMAGES = [
    { src: "/assets/products/1.png", label: lang === "id" ? "Paket Lengkap" : "Complete Package" },
    { src: "/assets/products/2.png", label: lang === "id" ? "6 Template Keuangan" : "6 Finance Templates" },
    { src: "/assets/products/3.png", label: lang === "id" ? "Cashflow · Asuransi · Investasi" : "Cashflow · Insurance · Investment" },
    { src: "/assets/products/4.png", label: lang === "id" ? "KPR · Pendidikan · Pensiun" : "KPR · Education · Pension" },
    { src: "/assets/products/5.png", label: "Sample: Cashflow & Budget Tracker" },
    { src: "/assets/products/6.png", label: "Sample: Education Planner" },
    { src: "/assets/products/7.png", label: "Sample: KPR Planner" },
  ];

  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx((i) => (i - 1 + BUNDLE_IMAGES.length) % BUNDLE_IMAGES.length);
  const next = () => setIdx((i) => (i + 1) % BUNDLE_IMAGES.length);

  const includes = lang === "id" ? [
    "6 Template Financial Planning (Cashflow, Asuransi, Investasi, KPR, Pendidikan, Pensiun)",
    "Mini Guide Smart Finplan",
    "FREE Konsultasi Proteksi Financial Planning",
    "Lifetime Access & Fleksibel",
  ] : [
    "6 Financial Planning Templates (Cashflow, Insurance, Investment, KPR, Education, Pension)",
    "Mini Guide Smart Finplan",
    "FREE Protection Financial Planning Consultation",
    "Lifetime Access & Flexible",
  ];

  return (
    <div style={{
      background: "#111111",
      color: "#ffffff",
      borderRadius: 28,
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      gap: 0,
    }} className="bundle-grid">

      {/* Left — image slider */}
      <div style={{ position: "relative", background: "#1a1a1a", minHeight: 420 }}>
        <img
          key={idx}
          src={BUNDLE_IMAGES[idx].src}
          alt={BUNDLE_IMAGES[idx].label}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", minHeight: 420 }}
        />

        {/* Label */}
        <div style={{
          position: "absolute", bottom: 56, left: 16, right: 16,
          background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
          borderRadius: 8, padding: "6px 12px",
          fontSize: 12, fontWeight: 600, color: "#fff", textAlign: "center",
        }}>
          {BUNDLE_IMAGES[idx].label}
        </div>

        {/* Arrow buttons */}
        <button onClick={prev} style={{
          position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
        }}>
          <ArrowRight size={16} style={{ transform: "rotate(180deg)" }} />
        </button>
        <button onClick={next} style={{
          position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
          width: 36, height: 36, borderRadius: "50%",
          background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
        }}>
          <ArrowRight size={16} />
        </button>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 }}>
          {BUNDLE_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 20 : 6, height: 6, borderRadius: 999, border: 0, cursor: "pointer",
              background: i === idx ? "var(--accent)" : "rgba(255,255,255,0.4)", padding: 0, transition: "all .2s",
            }} />
          ))}
        </div>
      </div>

      {/* Right — copy + CTA */}
      <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        <div>
          <Tag variant="accent">★ {lang === "id" ? "HEMAT 41% · TERLARIS" : "SAVE 41% · BEST SELLER"}</Tag>
          <h2 style={{ color: "inherit", marginTop: 16, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.15 }}>
            {lang === "id"
              ? <>Financial Planning<br /><span style={{ color: "var(--accent)" }}>'Seumur Hidup'</span></>
              : <>Financial Planning<br /><span style={{ color: "var(--accent)" }}>'For Life'</span></>}
          </h2>
          <p style={{ marginTop: 10, opacity: 0.65, fontSize: 14, lineHeight: 1.6 }}>
            {lang === "id"
              ? "Bantu keuanganmu lebih terarah dengan mudah — 6 template + mini guide + konsultasi gratis."
              : "Help manage your finances with ease — 6 templates + mini guide + free consultation."}
          </p>
        </div>

        {/* Includes list */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {includes.map((item, i) => (
            <li key={i} className="row" style={{ gap: 10, fontSize: 13, color: "rgba(255,255,255,0.75)", alignItems: "flex-start" }}>
              <span style={{
                width: 18, height: 18, minWidth: 18, borderRadius: "50%",
                background: "var(--accent)", color: "var(--accent-ink)",
                display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1,
              }}>
                <Check size={11} stroke={3} />
              </span>
              <span style={{ lineHeight: 1.5 }}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
          <div className="mono muted" style={{ fontSize: 11, opacity: 0.5, marginBottom: 4 }}>SEKALI BAYAR</div>
          <div className="row" style={{ gap: 10, alignItems: "baseline", marginBottom: 16 }}>
            <span className="mono" style={{ fontSize: 30, fontWeight: 700, color: "var(--accent)" }}>Rp 149.000</span>
            <span className="mono" style={{ fontSize: 15, fontWeight: 600, textDecoration: "line-through", opacity: 0.4, color: "#fff" }}>Rp 254.000</span>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onAddToCart({ id: "bundle", name: "Financial Planning Seumur Hidup", price: 149000, priceOld: 254000 })}
            iconRight={<ArrowRight size={18} />}
            style={{ width: "100%" }}
          >
            {lang === "id" ? "Dapatkan Paket Lengkap" : "Get Complete Package"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProductGridCard({ product, onClick, variant }) {
  const { lang } = useT();
  const Icon = window[product.icon];
  return (
    <button onClick={onClick} className="card card-hover" style={{
      cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
      display: "flex", flexDirection: "column", padding: 0, overflow: "hidden",
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
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
        <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.5 }}>{product[`blurb_${lang}`]}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {product[`features_${lang}`].slice(0, 2).map((f, i) => (
            <li key={i} className="row" style={{ gap: 10, fontSize: 13, color: "var(--ink-2)" }}>
              <Check size={14} stroke={3} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="row-between" style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
          <div>
            <div className="mono muted" style={{ fontSize: 11 }}>SEKALI BAYAR</div>
            <div className="row" style={{ gap: 8, alignItems: "baseline" }}>
              <div className="mono" style={{ fontSize: 24, fontWeight: 700 }}>{formatIDR(product.price)}</div>
              {product.priceOld && (
                <div className="mono muted" style={{ fontSize: 14, fontWeight: 600, textDecoration: "line-through", opacity: 0.55 }}>{formatIDR(product.priceOld)}</div>
              )}
            </div>
          </div>
          <span className="row" style={{ gap: 6, color: "var(--ink)", fontSize: 13, fontWeight: 600 }}>
            Detail <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}

Object.assign(window, { ProductsScreen });
