// api/create-payment.js
// Xendit Invoice API — dipanggil dari checkout.jsx saat user klik "Bayar sekarang"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { contact, items, total } = req.body;

    console.log("Data diterima:", JSON.stringify({ contact, items, total }));

    const externalId = "WP-" + Date.now();
    const amount = Number(total) || 99000;
    const description = items && items.length
      ? items.map((i) => i.name || i.name_id || i.name_en || "Produk Digital").join(", ")
      : "Produk Digital WealthPlanner";

    const invoicePayload = {
      external_id: externalId,
      amount: amount,
      payer_email: contact.email,
      description: description,
      customer: {
        given_names: contact.name,
        email: contact.email,
        mobile_number: contact.phone,
      },
      success_redirect_url: "https://wealthplanner.id",
      failure_redirect_url: "https://wealthplanner.id",
      invoice_duration: 86400,
      metadata: {
        items: items ? items.map((i) => ({ id: i.id, name: i.name_id || i.name_en || i.name, price: i.price })) : [],
        phone: contact.phone,
      },
    };

    console.log("Payload ke Xendit:", JSON.stringify(invoicePayload));

    const response = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(process.env.XENDIT_SECRET_KEY + ":").toString("base64"),
      },
      body: JSON.stringify(invoicePayload),
    });

    const invoice = await response.json();
    console.log("Respon Xendit:", JSON.stringify(invoice));

    if (!response.ok) {
      return res.status(500).json({ error: invoice.message || "Gagal membuat invoice" });
    }

    return res.status(200).json({ invoice_url: invoice.invoice_url });
  } catch (err) {
    console.error("Server error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
