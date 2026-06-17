exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { contact, items, total } = JSON.parse(event.body);
    console.log("Data diterima:", JSON.stringify({ contact, items, total }));
    const externalId = "WP-" + Date.now();

    const invoicePayload = {
      external_id: externalId,
      amount: total,
      payer_email: contact.email,
      description: items.map((i) => i.name || i.name_id || i.name_en || "Produk Digital").join(", "),
amount: Number(total),
      success_redirect_url: "https://wealthplannerindonesia.netlify.app",
      failure_redirect_url: "https://wealthplannerindonesia.netlify.app",
    };

    const response = await fetch("https://api.xendit.co/v2/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(process.env.XENDIT_SECRET_KEY + ":").toString("base64"),
      },
      body: JSON.stringify(invoicePayload),
    });

    const invoice = await response.json();

    if (!response.ok) {
      console.error("Xendit error:", invoice);
      return { statusCode: 500, body: JSON.stringify({ error: invoice.message }) };
    }

    return { statusCode: 200, body: JSON.stringify({ invoice_url: invoice.invoice_url }) };

  } catch (err) {
    console.error("Server error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  }
};
