// checkout.jsx — Personal Wealth Planner checkout

function CheckoutScreen({ cart, onNavigate, product }) {
  const items = cart.length ? cart : [PRODUCTS.find((p) => p.id === product) || PRODUCTS.find((p) => p.id === "bundle")];
  const item = items[0];
  const total = 149000;
  const [contact, setContact] = React.useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = React.useState(false);
  const [payError, setPayError] = React.useState("");

  async function handlePay() {
    setPayError("");
    if (!contact.name.trim() || !contact.email.trim() || !contact.phone.trim()) {
      setPayError("Nama, email, dan nomor WhatsApp wajib diisi.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          items: [{ id: "bundle", name_id: "Personal Wealth Planner", name_en: "Personal Wealth Planner", price: total }],
          total,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Gagal membuat pembayaran.");
      if (!data.invoice_url) throw new Error("Link pembayaran Xendit belum tersedia.");
      window.location.href = data.invoice_url;
    } catch (err) {
      setPayError(err.message || "Gagal terhubung ke pembayaran.");
      setLoading(false);
    }
  }

  return (
    <Section style={{ paddingTop: 32 }}>
      <button onClick={() => onNavigate({ name: "home" })}
        style={{ background: "var(--chip)", border: 0, color: "var(--ink-2)", padding: "8px 14px", borderRadius: 999, font: "inherit", fontSize: 13, cursor: "pointer", marginBottom: 24 }}>
        ← Kembali
      </button>
      <h1>Checkout Personal Wealth Planner</h1>
      <p className="muted" style={{ marginTop: 10, maxWidth: 680 }}>
        Lengkapi data pembeli. Setelah klik bayar, kamu akan diarahkan ke Xendit untuk memilih metode pembayaran yang tersedia.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, .8fr)", gap: 32, marginTop: 32 }} className="co-grid">
        <div className="card">
          <Step number="1" label="Data pembeli" active />
          <div className="stack" style={{ gap: 14, marginTop: 22 }}>
            <div><label className="label-sm">Nama lengkap</label><input className="input" placeholder="Nama lengkap" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} /></div>
            <div><label className="label-sm">Email</label><input className="input" type="email" placeholder="kamu@email.com" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} /></div>
            <div><label className="label-sm">Nomor WhatsApp</label><input className="input" placeholder="08xxxxxxxxxx" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} /></div>
          </div>
          {payError && <div style={{ marginTop: 16, padding: 12, borderRadius: 12, background: "#fff1f1", color: "#a32929", fontSize: 13 }}>{payError}</div>}
        </div>

        <div>
          <div className="card" style={{ position: "sticky", top: 88 }}>
            <div className="row" style={{ gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 48, height: 48, background: "var(--accent)", color: "var(--accent-ink)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}><Sparkle size={20} /></div>
              <div style={{ flex: 1 }}><div style={{ fontWeight: 700 }}>{item?.name_id || "Personal Wealth Planner"}</div><div className="muted" style={{ fontSize: 12, marginTop: 4 }}>6 financial planning templates</div></div>
            </div>
            <div className="divider" style={{ margin: "20px 0" }} />
            <div className="row-between"><span className="muted">Harga</span><span className="mono" style={{ fontWeight: 700 }}>{formatIDR(total)}</span></div>
            <div className="row-between" style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--border)" }}><span style={{ fontWeight: 700 }}>Total</span><span className="mono" style={{ fontSize: 22, fontWeight: 800 }}>{formatIDR(total)}</span></div>
            <Button variant="primary" size="lg" onClick={handlePay} disabled={loading} iconRight={!loading ? <ArrowRight size={18} /> : null} style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>
              {loading ? "Membuat pembayaran…" : `Bayar ${formatIDR(total)}`}
            </Button>
            <p className="muted" style={{ fontSize: 11, marginTop: 12, textAlign: "center", lineHeight: 1.5 }}>Pembayaran diproses melalui Xendit.</p>
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
