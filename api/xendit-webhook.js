// api/xendit-webhook.js
// Menerima notifikasi dari Xendit setelah pembayaran berhasil.
// Menyimpan kode aktivasi ke Supabase supaya bot Telegram bisa otomatis
// aktifin akun begitu customer klik link Telegram dari halaman sukses.

import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Verifikasi bahwa request benar dari Xendit
    const xenditToken = req.headers["x-callback-token"];
    if (xenditToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
      console.warn("Webhook token tidak valid");
      return res.status(401).json({ error: "Unauthorized" });
    }

    const payload = req.body;

    // Hanya proses jika status PAID
    if (payload.status !== "PAID") {
      return res.status(200).json({ message: "Ignored" });
    }

    const { external_id, payer_email, amount, metadata } = payload;
    const items = metadata?.items || [];

    console.log(`✅ Pembayaran diterima: ${external_id} — ${payer_email} — Rp${amount}`);
    console.log("Items dibeli:", items.map((i) => i.name).join(", "));

    // Simpan kode aktivasi -- dipakai bot.py buat auto-aktivasi
    // begitu customer klik link Telegram (t.me/namabot?start=external_id)
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    const { error } = await supabase.from("pending_activations").insert({
      order_id: external_id,
      email: payer_email,
      product: items.map((i) => i.name).join(", "),
      created_at: new Date().toISOString(),
      used: 0,
    });

    if (error) {
      console.error("Gagal simpan pending_activations:", error.message);
      // Tetap balas 200 ke Xendit -- ini bukan salah Xendit, jangan bikin
      // Xendit retry webhook berkali-kali karena masalah di sisi kita.
    }

    // TODO: Kirim email produk ke customer (aktifkan setelah setup Resend)
    // await sendProductEmail(payer_email, items);

    return res.status(200).json({ message: "OK" });
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
