// netlify/functions/create-payment.js
// Xendit Invoice API — dipanggil dari checkout.jsx saat user klik "Bayar sekarang"

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { contact, items, total } = JSON.parse(event.body);

    // Buat external_id unik untuk setiap transaksi
    const externalId = `WP-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

    const invoicePayload = {
      external_id: externalId,
      amount: total,
      payer_email: contact.email,
      description: items.map((i) => i.name).join(", "),
      customer: {
        given_names: contact.name,
        email: contact.email,
        mobile_number: contact.phone,
      },
      customer_notification_preference: {
        invoice_created: ["email", "whatsapp"],
        invoice_paid: ["email", "whatsapp"],
      },
      // Setelah bayar, user diarahkan kembali ke websitemu
      success_redirect_url: "https://wealthplannerindonesia.netlify.app/payment-success",
      failure_redirect_url: "https://wealthplannerindonesia.netlify.app/payment-failed",
      // Metode pembayaran yang aktif
      payment_methods: ["QRIS", "BCA", "MANDIRI", "BNI", "OVO", "GOPAY", "DANA"],
      // Invoice kedaluwarsa dalam 24 jam
      invoice_duration: 86400,
      // Data tambahan untuk referensi
      metadata: {
        items: items.map((i) => ({ id: i.id, name: i.name, price: i.price })),
        phone: contact.phone,
      },
    };

    // Panggil Xendit API
    const response = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Xendit pakai Basic Auth — secret key sebagai username, password kosong
        Authorization: `Basic ${Buffer.from(process.env.XENDIT_SECRET_KEY + ":").toString("base64")}`,
      },
      body: JSON.stringify(invoicePayload),
    });

    const invoice = await response.json();

    if (!response.ok) {
      console.error("Xendit error:", invoice);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: invoice.message || "Gagal membuat invoice" }),
      };
    }

    // Kembalikan invoice_url ke frontend untuk redirect
    return {
      statusCode: 200,
      body: JSON.stringify({
        invoice_url: invoice.invoice_url,
        invoice_id: invoice.id,
        external_id: externalId,
      }),
    };
  } catch (err) {
    console.error("Server error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};
