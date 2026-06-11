// checkout.jsx — Checkout & payment flow

function CheckoutScreen({ cart, onNavigate, onCompletePurchase }) {
  const { t, lang } = useT();
  const [step, setStep] = React.useState("checkout"); // checkout | paying | success
  const [method, setMethod] = React.useState("qris");
  const [bank, setBank] = React.useState("BCA");
  const [wallet, setWallet] = React.useState("GoPay");
  const [contact, setContact] = React.useState({ name: "", email: "", phone: "" });
  const [promo, setPromo] = React.useState("");
  const [promoApplied, setPromoApplied] = React.useState(false);

  const items = cart.length ? cart : [PRODUCTS[1]]; // fallback for direct nav
  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.15) : 0;
  const taxBase = subtotal - discount;
  const tax = Math.round(taxBase * 0.11);
  const total = taxBase + tax;

  if (step === "success") {
    return <PaymentSuccess onNavigate={onNavigate} items={items} method={method} total={total} />;
  }

  if (step === "paying") {
    return <PaymentProcessing method={method} bank={bank} wallet={wallet} total={total} onDone={() => { setStep("success"); onCompletePurchase(items); }} onCancel={() => setStep("checkout")} />;
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

          {/* Payment method */}
          <div className="card">
            <div className="row" style={{ gap: 10, marginBottom: 20 }}>
              <Step number="2" label={t.co_method} active />
            </div>
            <div className="stack" style={{ gap: 10 }}>
              {PAYMENT_METHODS.map((m) => (
                <PaymentOption
                  key={m.id}
                  method={m}
                  active={method === m.id}
                  onClick={() => setMethod(m.id)}
                  selectedBank={bank}
                  onBank={setBank}
                  selectedWallet={wallet}
                  onWallet={setWallet}
                />
              ))}
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
              <SummaryRow label={t.co_tax} value={formatIDR(tax)} />
            </div>
            <div className="row-between" style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              <span style={{ fontWeight: 700 }}>{t.co_total}</span>
              <span className="mono" style={{ fontSize: 22, fontWeight: 800 }}>{formatIDR(total)}</span>
            </div>
            <Button variant="primary" size="lg" onClick={() => setStep("paying")} className="" iconRight={<ArrowRight size={18} />} style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>
              {t.co_pay} {formatIDR(total)}
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

function PaymentOption({ method, active, onClick, selectedBank, onBank, selectedWallet, onWallet }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: active ? "var(--surface-2)" : "transparent",
        border: active ? "1.5px solid var(--accent)" : "1px solid var(--border)",
        borderRadius: 18,
        padding: 18,
        cursor: "pointer",
        transition: "all .15s ease",
      }}
    >
      <div className="row-between">
        <div className="row" style={{ gap: 12 }}>
          <span style={{
            width: 20, height: 20, borderRadius: 999,
            border: `2px solid ${active ? "var(--accent)" : "var(--border-strong)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {active && <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--accent)" }} />}
          </span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{method.name}</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>{method.sub}</div>
          </div>
        </div>
        <PaymentBadge name={method.id} />
      </div>

      {/* Sub options */}
      {active && method.banks && (
        <div className="row" style={{ gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          {method.banks.map((b) => (
            <button key={b} onClick={(e) => { e.stopPropagation(); onBank(b); }} style={{
              background: selectedBank === b ? "var(--accent)" : "var(--chip)",
              color: selectedBank === b ? "var(--accent-ink)" : "var(--ink)",
              border: 0, padding: "8px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600,
              cursor: "pointer", fontFamily: "JetBrains Mono, monospace",
            }}>{b}</button>
          ))}
        </div>
      )}
      {active && method.wallets && (
        <div className="row" style={{ gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          {method.wallets.map((b) => (
            <button key={b} onClick={(e) => { e.stopPropagation(); onWallet(b); }} style={{
              background: selectedWallet === b ? "var(--accent)" : "var(--chip)",
              color: selectedWallet === b ? "var(--accent-ink)" : "var(--ink)",
              border: 0, padding: "8px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600,
              cursor: "pointer", fontFamily: "JetBrains Mono, monospace",
            }}>{b}</button>
          ))}
        </div>
      )}
    </div>
  );
}

function PaymentBadge({ name }) {
  const bg = name === "qris" ? "#E5202B" : name === "bank" ? "var(--ink)" : "#5EE5B0";
  const fg = name === "qris" ? "#fff" : name === "bank" ? "var(--bg)" : "#0a0a0a";
  const label = name === "qris" ? "QRIS" : name === "bank" ? "BANK" : "E-WALLET";
  return (
    <span style={{
      background: bg, color: fg, padding: "4px 10px", borderRadius: 6,
      fontSize: 10, fontWeight: 700, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em",
    }}>{label}</span>
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

function PaymentProcessing({ method, bank, wallet, total, onDone, onCancel }) {
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <Section style={{ paddingTop: 64 }}>
      <div className="card" style={{ maxWidth: 540, marginInline: "auto", textAlign: "center", padding: 40 }}>
        {method === "qris" ? <QRDisplay total={total} /> : method === "bank" ? <BankInstructions bank={bank} total={total} /> : <WalletInstructions wallet={wallet} total={total} />}
        <div className="muted mono" style={{ fontSize: 12, marginTop: 24 }}>MENUNGGU PEMBAYARAN · {String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</div>
        <div className="row" style={{ gap: 8, marginTop: 24, justifyContent: "center" }}>
          <Button variant="primary" onClick={onDone}>Saya sudah bayar</Button>
          <Button variant="ghost" onClick={onCancel}>Batal</Button>
        </div>
      </div>
    </Section>
  );
}

function QRDisplay({ total }) {
  return (
    <>
      <div className="mono muted" style={{ fontSize: 12, letterSpacing: "0.1em" }}>SCAN QR DENGAN APP E-WALLET</div>
      <div style={{ margin: "24px auto", width: 220, height: 220, background: "#fff", borderRadius: 16, padding: 16 }}>
        <FakeQR />
      </div>
      <div className="mono" style={{ fontSize: 24, fontWeight: 700 }}>{formatIDR(total)}</div>
    </>
  );
}

function FakeQR() {
  // Generate a deterministic 25x25 pixel matrix to look like QR
  const N = 25;
  const cells = [];
  let seed = 13;
  const rng = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const corner = (x < 7 && y < 7) || (x >= N - 7 && y < 7) || (x < 7 && y >= N - 7);
      const cornerInner = (x >= 2 && x < 5 && y >= 2 && y < 5) || (x >= N - 5 && x < N - 2 && y >= 2 && y < 5) || (x >= 2 && x < 5 && y >= N - 5 && y < N - 2);
      const cornerBorder = (x < 7 && y < 7) || (x >= N - 7 && y < 7) || (x < 7 && y >= N - 7);
      let dark = rng() < 0.45;
      if (cornerBorder) {
        dark = (x === 0 || y === 0 || x === 6 || y === 6 || x === N - 1 || x === N - 7 || y === N - 1 || y === N - 7);
        if (cornerInner) dark = true;
      }
      if (dark) cells.push({ x, y });
    }
  }
  const cell = 100 / N;
  return (
    <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
      {cells.map((c, i) => (
        <rect key={i} x={c.x * cell} y={c.y * cell} width={cell + 0.5} height={cell + 0.5} fill="#0a0a0a" />
      ))}
    </svg>
  );
}

function BankInstructions({ bank, total }) {
  const account = bank === "BCA" ? "8810 5523 9988" : bank === "Mandiri" ? "1234 5678 9012 345" : "0123 4567 8910";
  return (
    <>
      <div className="mono muted" style={{ fontSize: 12, letterSpacing: "0.1em" }}>TRANSFER KE</div>
      <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 36, fontWeight: 700, marginTop: 8 }}>{bank}</div>
      <div className="mono" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.05em", marginTop: 12 }}>{account}</div>
      <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>a.n. PT Wealth Planner Indonesia</div>
      <div className="divider" style={{ margin: "20px 0" }} />
      <div className="mono muted" style={{ fontSize: 12 }}>NOMINAL TRANSFER</div>
      <div className="mono" style={{ fontSize: 24, fontWeight: 700 }}>{formatIDR(total)}</div>
      <p className="muted" style={{ fontSize: 12, marginTop: 12, lineHeight: 1.5 }}>Transfer nominal pas. Konfirmasi otomatis setelah dana masuk (max 5 menit).</p>
    </>
  );
}

function WalletInstructions({ wallet, total }) {
  return (
    <>
      <div className="mono muted" style={{ fontSize: 12, letterSpacing: "0.1em" }}>BAYAR DENGAN</div>
      <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 36, fontWeight: 700, marginTop: 8 }}>{wallet}</div>
      <p className="muted" style={{ fontSize: 13, marginTop: 12, lineHeight: 1.5 }}>Buka app {wallet} kamu — konfirmasi pembayaran muncul otomatis.</p>
      <div className="divider" style={{ margin: "20px 0" }} />
      <div className="mono muted" style={{ fontSize: 12 }}>NOMINAL</div>
      <div className="mono" style={{ fontSize: 24, fontWeight: 700 }}>{formatIDR(total)}</div>
    </>
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
