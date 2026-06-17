// checkout.jsx — Checkout & payment flow

function CheckoutScreen({ cart, onNavigate, onCompletePurchase }) {
  const { t, lang } = useT();
  const [step, setStep] = React.useState("checkout"); // checkout | success
  const [contact, setContact] = React.useState({ name: "", email: "", phone: "" });
  const [promo, setPromo] = React.useState("");
  const [promoApplied, setPromoApplied] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [payError, setPayError] = React.useState("");

  const items = cart.length ? cart : [PRODUCTS[1]]; // fallback for direct nav
  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.15) : 0;
  const taxBase = subtotal - discount;
  const tax = 0;
  const total = taxBase;

  async function handlePay() {
    if (!contact.name || !contact.email || !contact.phone) {
      setPayError("Lengkapi nama, email, dan nomor WhatsApp dulu ya.");
      return;
    }
    setLoading(true);
    setPayError("");
    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact, items, total }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPayError(data.error || "Gagal membuat pembayaran. Coba lagi.");
        setLoading(false);
        return;
      }
      window.location.href = data.invoice_url;
    } catch (err) {
      setPayError("Koneksi bermasalah. Periksa internet kamu.");
      setLoading(false);
    }
  }

  if (step === "success") {
    return <PaymentSuccess onNavigate={onNavigate} items={items} total={total} />;
  }

  return (
    <Section style={{ paddingTop: 32 }}>
      <button
        onClick={() => onNavigate({ name: "products" })}
        style={{ background: "var(--chip)", border: 0, color: "var(--ink-2)", padding: "8px 14px", borderRadius: 999, font: "inherit", fontSize: 13, fontWeight: 500, cursor: "pointer", marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 6 }}
      >
        ← Lanjut belanja
      </button>
      <h1>{t.co_title}</h1>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)", gap: 32, marginTop: 32 }} className="co-grid">
        {/* LEFT */}
        <div className="stack" style={{ gap: 20 }}>
          {/* Contact */}
          <div className="card">
            <div className="row" style={{ gap: 10, marginBottom: 20 }}>
              <Step number="1" label={t.co_contact} active />
            </div>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ gridColumn: "1 / -1" }}>
                <label className="label-sm">{t.co_name}</label>
                <input className="input" placeholder="Nama lengkap" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
              </div>
              <div>
                <label className="label-sm">{t.co_email}</label>
                <input className="input" type="email" placeholder="kamu@email.com" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
              </div>
              <div>
                <label className="label-sm">{t.co_phone}</label>
                <input className="input" placeholder="08xxxxxxx" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — order summary */}
        <div>
          <div className="card" style={{ position: "sticky", top: 88 }}>
            <h3 style={{ fontSize: 20, marginBottom: 20 }}>{t.co_summary}</h3>
            <div className="stack" style={{ gap: 14 }}>
              {items.map((it) => (
                <div key={it.id} className="row" style={{ gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, background: "var(--accent)", color: "var(--accent-ink)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {window[it.icon] ? React.createElement(window[it.icon], { size: 20 }) : <Sparkle size={20} />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{it[`name_${lang}`] || it.name}</div>
                    <div className="muted mono" style={{ fontSize: 11, marginTop: 2 }}>EXCEL · GSHEETS</div>
                  </div>
                  <div className="mono" style={{ fontSize: 14, fontWeight: 600 }}>{formatIDR(it.price)}</div>
                </div>
              ))}
            </div>

            <div className="divider" style={{ margin: "20px 0" }} />

            <div className="row" style={{ gap: 8 }}>
              <input
                className="input"
                placeholder="Kode promo"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                style={{ flex: 1, fontSize: 13, padding: "10px 12px" }}
              />
              <Button variant="secondary" size="sm" onClick={() => setPromoApplied(promo.trim().length > 0)}>
                Apply
              </Button>
            </div>
            {promoApplied && <div className="row" style={{ marginTop: 10, color: "var(--positive)", fontSize: 12, gap: 6 }}><Check size={12} stroke={3} />Promo 15% diterapkan</div>}

            <div className="divider" style={{ margin: "20px 0" }} />

            <div className="stack" style={{ gap: 10 }}>
              <SummaryRow label={t.co_subtotal} value={formatIDR(subtotal)} />
              {discount > 0 && <SummaryRow label={t.co_discount} value={`-${formatIDR(discount)}`} color="var(--positive)" />}
            </div>
            <div className="row-between" style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              <span style={{ fontWeight: 700 }}>{t.co_total}</span>
              <span className="mono" style={{ fontSize: 22, fontWeight: 800 }}>{formatIDR(total)}</span>
            </div>
            {payError && (
              <p style={{ color: "var(--negative, #e53)", fontSize: 13, marginTop: 12, textAlign: "center" }}>
                {payError}
              </p>
            )}
            <Button
              variant="primary"
              size="lg"
              onClick={handlePay}
              disabled={loading}
              className=""
              iconRight={loading ? null : <ArrowRight size={18} />}
              style={{ marginTop: 20, width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Memproses..." : `${t.co_pay} ${formatIDR(total)}`}
            </Button>
            <p className="muted" style={{ fontSize: 11, marginTop: 12, textAlign: "center", lineHeight: 1.5 }}>{t.co_terms}</p>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .co-grid { grid-template-columns: 1fr !important; } .co-grid > div:last-child > div { position: relative !important; top: 0 !important; } }`}</style>
    </Section>
  );
}

function Step({ number, label, active }) {
  return (
    <div className="row" style={{ gap: 10 }}>
      <span style={{
        width: 28, height: 28, borderRadius: 999,
        background: active ? "var(--accent)" : "var(--chip)",
        color: active ? "var(--accent-ink)" : "var(--ink-2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 12, fontWeight: 700,
      }}>{number}</span>
      <span style={{ fontWeight: 600 }}>{label}</span>
    </div>
  );
}

function SummaryRow({ label, value, color }) {
  return (
    <div className="row-between">
      <span style={{ fontSize: 14, color: "var(--ink-2)" }}>{label}</span>
      <span className="mono" style={{ fontWeight: 600, color: color || "var(--ink)" }}>{value}</span>
    </div>
  );
}

function PaymentSuccess({ onNavigate, items, total }) {
  const { t, lang } = useT();
  return (
    <Section style={{ paddingTop: 56 }}>
      <div style={{ maxWidth: 640, marginInline: "auto", textAlign: "center" }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%",
          background: "var(--positive)", color: "#0a0a0a",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px",
        }}>
          <Check size={44} stroke={3} />
        </div>
        <h1 style={{ fontSize: "clamp(40px,5vw,64px)" }}>{t.pay_success_t}</h1>
        <p className="ink-2" style={{ fontSize: 18, marginTop: 16 }}>{t.pay_success_s}</p>

        <div className="card" style={{ marginTop: 32, textAlign: "left" }}>
          <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.1em" }}>RECEIPT · #WP-{Date.now().toString().slice(-6)}</div>
          <div className="stack" style={{ gap: 14, marginTop: 16 }}>
            {items.map((it, i) => (
              <div key={i} className="row-between">
                <span style={{ fontSize: 14, fontWeight: 600 }}>{it[`name_${lang}`] || it.name}</span>
                <span className="mono">{formatIDR(it.price)}</span>
              </div>
            ))}
          </div>
          <div className="divider" style={{ margin: "16px 0" }} />
          <div className="row-between">
            <span style={{ fontWeight: 700 }}>Total dibayar</span>
            <span className="mono" style={{ fontWeight: 700, fontSize: 18 }}>{formatIDR(total)}</span>
          </div>
        </div>

        <div className="row" style={{ marginTop: 32, gap: 12, justifyContent: "center" }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "dashboard" })} iconRight={<ArrowRight size={18} />}>
            {t.pay_goto_dash}
          </Button>
          <Button variant="outline" size="lg" onClick={() => onNavigate({ name: "products" })}>
            Lihat produk lain
          </Button>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { CheckoutScreen });
