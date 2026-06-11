// product-detail.jsx

function ProductDetailScreen({ id, onNavigate, onAddToCart, onBuyNow }) {
  const { t, lang } = useT();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const Icon = window[product.icon];
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div>
      <Section style={{ paddingTop: 32, paddingBottom: 24 }}>
        <button
          onClick={() => onNavigate({ name: "products" })}
          style={{ background: "var(--chip)", border: 0, color: "var(--ink-2)", padding: "8px 14px", borderRadius: 999, font: "inherit", fontSize: 13, fontWeight: 500, cursor: "pointer", marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          ← Semua produk
        </button>

        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: 48,
        }} className="pd-grid">
          {/* Visual */}
          <div>
            {product.image ? (
              <img
                src={product.image}
                alt={product[`name_${lang}`]}
                style={{ display: "block", width: "100%", borderRadius: 28, border: "1px solid var(--border)" }}
              />
            ) : (
              <div style={{
                background: "var(--accent)",
                color: "var(--accent-ink)",
                borderRadius: 28,
                padding: 40,
                minHeight: 460,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}>
                <div className="row-between" style={{ alignItems: "flex-start" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "6px 12px", background: "rgba(0,0,0,0.15)", borderRadius: 999, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em" }}>
                    {product[`tag_${lang}`]}
                  </span>
                  <div style={{ background: "rgba(0,0,0,0.12)", padding: 12, borderRadius: 14 }}>
                    {Icon && <Icon size={28} stroke={2} />}
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 12, fontWeight: 600, opacity: 0.7, letterSpacing: "0.08em" }}>EXCEL · GOOGLE SHEETS</div>
                  <h1 style={{ marginTop: 12, color: "inherit", fontSize: "clamp(36px,4.5vw,56px)" }}>{product[`name_${lang}`]}</h1>
                </div>
                <BgPattern />
              </div>
            )}

            {/* Features */}
            <div style={{ marginTop: 32 }}>
              <h3 style={{ marginBottom: 20 }}>{t.prod_features}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="feat-grid">
                {product[`features_${lang}`].map((f, i) => (
                  <div key={i} className="card card-tight row" style={{ gap: 12, alignItems: "flex-start", background: "var(--surface)" }}>
                    <span style={{ width: 24, height: 24, borderRadius: 999, background: "var(--accent)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={14} stroke={3} />
                    </span>
                    <span style={{ fontSize: 14, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky buy box */}
          <div>
            <div className="card" style={{ position: "sticky", top: 88 }}>
              <div className="row" style={{ gap: 8, marginBottom: 12 }}>
                <Tag>★ 4.9 (124 reviews)</Tag>
                <Tag variant="outline">Update terakhir: Jan 2026</Tag>
              </div>
              <h2 style={{ fontSize: 28 }}>{product[`name_${lang}`]}</h2>
              <p className="ink-2" style={{ fontSize: 15, marginTop: 12 }}>{product[`blurb_${lang}`]}</p>

              <div className="divider" style={{ margin: "24px 0" }} />

              <div className="row-between">
                <div className="mono muted" style={{ fontSize: 12, letterSpacing: "0.1em" }}>SEKALI BAYAR · AKSES SELAMANYA</div>
              </div>
              <div className="row" style={{ gap: 12, alignItems: "baseline", marginTop: 8, flexWrap: "wrap" }}>
                <div className="mono" style={{ fontSize: 44, fontWeight: 800, lineHeight: 1 }}>{formatIDR(product.price)}</div>
                {product.priceOld && (
                  <div className="mono muted" style={{ fontSize: 20, fontWeight: 600, textDecoration: "line-through", opacity: 0.6 }}>{formatIDR(product.priceOld)}</div>
                )}
              </div>
              {product[`note_${lang}`] ? (
                <div className="row" style={{ gap: 8, marginTop: 12, padding: "10px 12px", borderRadius: 10, background: "var(--accent)", color: "var(--accent-ink)", fontSize: 13, fontWeight: 600 }}>
                  <Sparkle size={15} />
                  <span>{product[`note_${lang}`]}</span>
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 13, marginTop: 8 }}>Update gratis selamanya. Akses langsung setelah bayar.</div>
              )}

              <div className="stack" style={{ marginTop: 24, gap: 10 }}>
                <Button variant="primary" size="lg" onClick={() => onBuyNow(product)} iconRight={<ArrowRight size={18} />}>
                  {t.prod_buy}
                </Button>
                <Button variant="outline" onClick={() => onAddToCart(product)}>
                  Tambah ke keranjang
                </Button>
              </div>

              <div className="divider" style={{ margin: "24px 0" }} />

              <div className="stack" style={{ gap: 12 }}>
                {[
                  { icon: Download, t: "Download instan setelah bayar" },
                  { icon: Lock, t: "Pembayaran aman & terenkripsi" },
                  { icon: Sparkle, t: "Update lifetime gratis" },
                ].map((it, i) => (
                  <div key={i} className="row" style={{ gap: 10, fontSize: 13, color: "var(--ink-2)" }}>
                    <it.icon size={16} />
                    <span>{it.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 880px) { 
            .pd-grid { grid-template-columns: 1fr !important; }
            .pd-grid > div:last-child > div { position: relative !important; top: 0 !important; }
            .feat-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      <Section style={{ background: "var(--bg-2)" }}>
        <h3 style={{ marginBottom: 32 }}>{t.prod_related}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {related.map((p) => (
            <ProductMiniCard key={p.id} product={p} onClick={() => onNavigate({ name: "product", id: p.id })} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function ProductMiniCard({ product, onClick }) {
  const { lang } = useT();
  const Icon = window[product.icon];
  return (
    <button onClick={onClick} className="card card-hover" style={{
      cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
      display: "flex", flexDirection: "column", gap: 12,
    }}>
      <div className="row-between">
        <div style={{
          width: 40, height: 40, borderRadius: 12, background: "var(--chip)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {Icon && <Icon size={18} />}
        </div>
        <div className="mono" style={{ fontSize: 16, fontWeight: 700 }}>{formatIDR(product.price)}</div>
      </div>
      <h4 style={{ fontSize: 18, marginTop: 12 }}>{product[`name_${lang}`]}</h4>
      <p className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>{product[`blurb_${lang}`]}</p>
    </button>
  );
}

Object.assign(window, { ProductDetailScreen });
