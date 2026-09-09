// success.jsx — Halaman setelah pembayaran Xendit berhasil.
// Tombol di sini bawa kode order (?order=xxx) ke Telegram lewat deep link
// t.me/BOT_USERNAME?start=ORDER_ID, yang bikin bot otomatis aktifin akun
// (lihat bot.py -> fungsi start()).

// GANTI ini dengan username bot Telegram yang sebenarnya (tanpa @)
const BOT_USERNAME = "wealthplannerAI";

function SuccessScreen({ orderId, onNavigate }) {
  const telegramLink = `https://t.me/${BOT_USERNAME}?start=${encodeURIComponent(orderId || "")}`;

  return (
    <Section style={{ paddingTop: 60, paddingBottom: 60, textAlign: "center" }}>
      <div className="mono muted" style={{ fontSize: 12, letterSpacing: "0.1em" }}>PEMBAYARAN BERHASIL</div>
      <h1 style={{ fontSize: "clamp(28px,4vw,40px)", marginTop: 8 }}>Terima kasih! 🎉</h1>
      <p className="ink-2" style={{ marginTop: 8, maxWidth: 440, marginLeft: "auto", marginRight: "auto" }}>
        Tinggal satu langkah lagi: buka bot Telegram lewat tombol di bawah,
        akunmu bakal otomatis aktif begitu bot terbuka.
      </p>

      <Card style={{ maxWidth: 420, margin: "32px auto 0", padding: 24 }}>
        <Button
          variant="primary"
          onClick={() => window.open(telegramLink, "_blank")}
          style={{ width: "100%" }}
        >
          Buka Bot Telegram &amp; Aktifkan Akun
        </Button>
        <p className="ink-2" style={{ fontSize: 12, marginTop: 12 }}>
          Kode order-mu: <b>{orderId || "-"}</b>
        </p>
      </Card>

      <p className="ink-2" style={{ fontSize: 13, marginTop: 24 }}>
        Ada kendala? Hubungi <a href="https://wa.me/62xxxxxxxxxx" style={{ textDecoration: "underline" }}>Jasmine via WhatsApp</a>, sebutkan kode order di atas.
      </p>

      <Button variant="ghost" size="sm" onClick={() => onNavigate({ name: "home" })} style={{ marginTop: 24 }}>
        Kembali ke beranda
      </Button>
    </Section>
  );
}
