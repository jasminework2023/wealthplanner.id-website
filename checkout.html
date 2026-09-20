<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Checkout Personal Wealth Planner — wealthplanner.id</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:opsz,wght@8..144,400;8..144,500;8..144,600;8..144,700;8..144,800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="theme.css" />
  <style>
    :root{--checkout-max:1120px}
    body{min-height:100vh}
    .checkout-page{max-width:var(--checkout-max);margin:0 auto;padding:32px 24px 72px}
    .checkout-back{display:inline-flex;align-items:center;border:0;background:var(--chip);color:var(--ink-2);padding:8px 14px;border-radius:999px;font:inherit;font-size:13px;cursor:pointer;margin-bottom:24px;text-decoration:none}
    .checkout-page h1{margin:0;font-size:clamp(32px,4vw,52px);line-height:1.05}
    .checkout-muted{color:var(--ink-2)}
    .checkout-intro{margin-top:10px;max-width:680px;line-height:1.6}
    .checkout-grid{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(280px,.8fr);gap:32px;margin-top:32px}
    .checkout-card{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:24px;box-shadow:var(--shadow,0 10px 30px rgba(0,0,0,.08))}
    .checkout-step{display:flex;align-items:center;gap:10px;font-weight:600}
    .step-number{width:28px;height:28px;border-radius:999px;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:"JetBrains Mono",monospace;font-size:12px;font-weight:700}
    .checkout-fields{display:grid;gap:14px;margin-top:22px}
    .checkout-label{display:block;font-size:12px;font-weight:600;margin-bottom:7px;color:var(--ink-2)}
    .checkout-input{width:100%;box-sizing:border-box;background:var(--input,var(--chip));border:1px solid var(--border);color:var(--ink);border-radius:10px;padding:12px 13px;font:inherit;font-size:14px;outline:none}
    .checkout-input:focus{border-color:var(--accent)}
    .checkout-summary{position:sticky;top:88px}
    .product-row{display:flex;gap:12px;align-items:flex-start}
    .product-icon{width:48px;height:48px;background:var(--accent);color:var(--accent-ink);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800}
    .divider{height:1px;background:var(--border);margin:20px 0}
    .row-between{display:flex;justify-content:space-between;gap:16px;align-items:center}
    .mono{font-family:"JetBrains Mono",monospace}
    .pay-button{width:100%;margin-top:20px;border:0;border-radius:12px;background:var(--accent);color:var(--accent-ink);padding:14px 18px;font:inherit;font-weight:800;font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px}
    .pay-button:disabled{opacity:.65;cursor:wait}
    .pay-note{font-size:11px;margin-top:12px;text-align:center;line-height:1.5}
    .error{margin-top:16px;padding:12px;border-radius:12px;background:#fff1f1;color:#a32929;font-size:13px}
    @media(max-width:880px){.checkout-page{padding-inline:18px}.checkout-grid{grid-template-columns:1fr}.checkout-summary{position:relative;top:0}}
  </style>
</head>
<body>
  <main class="checkout-page">
    <a class="checkout-back" href="/">← Kembali</a>
    <h1>Checkout Personal Wealth Planner</h1>
    <p class="checkout-muted checkout-intro">Lengkapi data pembeli. Setelah klik bayar, kamu akan diarahkan ke Xendit untuk memilih metode pembayaran yang tersedia.</p>

    <div class="checkout-grid">
      <section class="checkout-card">
        <div class="checkout-step"><span class="step-number">1</span><span>Data pembeli</span></div>
        <div class="checkout-fields">
          <div><label class="checkout-label" for="name">Nama lengkap</label><input id="name" class="checkout-input" placeholder="Nama lengkap" autocomplete="name" /></div>
          <div><label class="checkout-label" for="email">Email</label><input id="email" class="checkout-input" type="email" placeholder="kamu@email.com" autocomplete="email" /></div>
          <div><label class="checkout-label" for="phone">Nomor WhatsApp</label><input id="phone" class="checkout-input" placeholder="08xxxxxxxxxx" autocomplete="tel" /></div>
        </div>
        <div id="error" class="error" hidden></div>
      </section>

      <aside class="checkout-card checkout-summary">
        <div class="product-row">
          <div class="product-icon">✦</div>
          <div style="flex:1"><div style="font-weight:700">Personal Wealth Planner</div><div class="checkout-muted" style="font-size:12px;margin-top:4px">6 financial planning templates</div></div>
        </div>
        <div class="divider"></div>
        <div class="row-between"><span class="checkout-muted">Harga</span><span class="mono" style="font-weight:700">Rp149.000</span></div>
        <div class="row-between" style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)"><span style="font-weight:700">Total</span><span class="mono" style="font-size:22px;font-weight:800">Rp149.000</span></div>
        <button id="pay" class="pay-button">Bayar Rp149.000 <span>→</span></button>
        <p class="checkout-muted pay-note">Pembayaran diproses melalui Xendit.</p>
      </aside>
    </div>
  </main>

  <script>
    const errorEl = document.getElementById('error');
    const payBtn = document.getElementById('pay');
    const formatError = (message) => { errorEl.textContent = message; errorEl.hidden = false; };
    payBtn.addEventListener('click', async () => {
      errorEl.hidden = true;
      const contact = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim()
      };
      if (!contact.name || !contact.email || !contact.phone) {
        formatError('Nama, email, dan nomor WhatsApp wajib diisi.');
        return;
      }
      payBtn.disabled = true;
      payBtn.firstChild.textContent = 'Membuat pembayaran…';
      try {
        const res = await fetch('/api/create-payment', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            contact,
            items: [{id:'bundle',name_id:'Personal Wealth Planner',name_en:'Personal Wealth Planner',price:149000}],
            total:149000
          })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.error || 'Gagal membuat pembayaran.');
        if (!data.invoice_url) throw new Error('Link pembayaran Xendit belum tersedia.');
        window.location.href = data.invoice_url;
      } catch (err) {
        formatError(err.message || 'Gagal terhubung ke pembayaran.');
        payBtn.disabled = false;
        payBtn.firstChild.textContent = 'Bayar Rp149.000 ';
      }
    });
  </script>
</body>
</html>
