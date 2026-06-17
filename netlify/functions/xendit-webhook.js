// netlify/functions/xendit-webhook.js
// Menerima notifikasi dari Xendit setelah pembayaran berhasil
// Lalu kirim email produk ke customer

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Verifikasi bahwa request benar dari Xendit
    const xenditToken = event.headers["x-callback-token"];
    if (xenditToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
      console.warn("Webhook token tidak valid");
      return { statusCode: 401, body: "Unauthorized" };
    }

    const payload = JSON.parse(event.body);

    // Hanya proses jika status PAID
    if (payload.status !== "PAID") {
      return { statusCode: 200, body: "Ignored" };
    }

    const { external_id, payer_email, amount, metadata } = payload;
    const items = metadata?.items || [];

    console.log(`✅ Pembayaran diterima: ${external_id} — ${payer_email} — Rp${amount}`);

    // TODO: Di sini kamu bisa:
    // 1. Kirim email dengan link download produk (pakai Resend / SendGrid / Nodemailer)
    // 2. Simpan data pembayaran ke database / Google Sheets
    // 3. Kirim notif WhatsApp ke Jasmine

    // Contoh log untuk sekarang:
    console.log("Items dibeli:", items.map((i) => i.name).join(", "));
    console.log("Email pembeli:", payer_email);

    // === KIRIM EMAIL (aktifkan setelah setup Resend) ===
    // await sendProductEmail(payer_email, items);

    return { statusCode: 200, body: "OK" };
  } catch (err) {
    console.error("Webhook error:", err);
    return { statusCode: 500, body: "Error" };
  }
};

// Fungsi pengiriman email produk (uncomment setelah setup)
/*
async function sendProductEmail(email, items) {
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "WealthPlanner.ID <noreply@wealthplanner.id>",
      to: email,
      subject: "✅ Pembelianmu berhasil — link download ada di sini!",
      html: `
        <h2>Terima kasih sudah membeli!</h2>
        <p>Berikut link download produkmu:</p>
        ${items.map(i => `<p><a href="${i.download_url}">${i.name}</a></p>`).join("")}
        <p>Ada pertanyaan? Chat Jasmine via WA: 08xxxxxxxx</p>
      `
    })
  });
}
*/
