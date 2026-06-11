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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {PRODUCTS.map((p, i) => (
            <ProductGridCard key={p.id} product={p} onClick={() => onNavigate({ name: "product", id: p.id })} variant={i % 3} />
          ))}
        </div>

        <div className="card" style={{ marginTop: 48, padding: "48px", background: "var(--ink)", color: "var(--bg)", textAlign: "center" }}>
          <Tag variant="accent">★ HEMAT 25%</Tag>
          <h2 style={{ marginTop: 16, color: "inherit", fontSize: 36 }}>{lang === "id" ? "Bundle semua planner — Rp 149.000" : "Bundle all planners — Rp 149,000"}</h2>
          <p style={{ marginTop: 12, opacity: 0.7, maxWidth: 560, marginInline: "auto" }}>6 spreadsheet planner + 1 sesi konsultasi dengan Jasmine (60 menit) + akses webinar bulanan.</p>
          <Button variant="primary" size="lg" onClick={() => onAddToCart({ id: "bundle", name: "Bundle Lengkap", price: 149000 })} className="mt-2" iconRight={<ArrowRight size={18} />}>
            Beli bundle
          </Button>
        </div>
      </Section>
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
