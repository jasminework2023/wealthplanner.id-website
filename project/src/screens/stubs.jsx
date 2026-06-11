// stubs.jsx — placeholder screens for sections still in development

function StubScreen({ title, eyebrow, blurb, sections, onNavigate, accent = "var(--accent)" }) {
  const { t, lang } = useT();
  return (
    <div>
      <Section style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div style={{ maxWidth: 820 }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 style={{ marginTop: 16 }}>{title}</h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 20, maxWidth: 620 }}>{blurb}</p>
        </div>
      </Section>

      <Section style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {sections.map((s, i) => (
            <div key={i} className="card" style={{ minHeight: 200, display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between" }}>
              <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</div>
              <div>
                <h4 style={{ fontSize: 20, lineHeight: 1.15 }}>{s.title}</h4>
                <p className="ink-2" style={{ fontSize: 13, lineHeight: 1.55, marginTop: 8 }}>{s.desc}</p>
              </div>
              <Tag>{lang === "id" ? "Segera hadir" : "Coming soon"}</Tag>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: 32, padding: 32, background: "var(--surface-2)", textAlign: "center" }}>
          <p className="muted" style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.6, maxWidth: 540, marginInline: "auto" }}>
            {lang === "id"
              ? "Halaman ini lagi disiapkan. Sementara, kontak kami langsung untuk info."
              : "This page is being prepared. In the meantime, reach out to us directly."}
          </p>
          <Button variant="primary" onClick={() => onNavigate({ name: "book", type: "free" })} iconRight={<ArrowRight size={14} />}>
            {lang === "id" ? "Hubungi via Konsultasi Gratis" : "Reach us via Free Consultation"}
          </Button>
        </div>
      </Section>
    </div>
  );
}

function AboutScreen({ onNavigate }) {
  const { lang } = useT();
  return (
    <div>
      <Section style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div style={{ maxWidth: 820 }}>
          <Eyebrow>{lang === "id" ? "TENTANG KAMI" : "ABOUT US"}</Eyebrow>
          <h1 style={{ marginTop: 16 }}>
            {lang === "id" ? "Platform edukasi & wealth planning syariah." : "Sharia financial education & wealth planning platform."}
          </h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 20, maxWidth: 640 }}>
            {lang === "id"
              ? "wealthplanner.id didirikan dengan satu misi — bantu lebih banyak orang Indonesia memahami uang mereka, merencanakan masa depan, dan melindungi yang mereka cintai. Semua sesuai prinsip syariah."
              : "wealthplanner.id was built with one mission — to help more Indonesians understand their money, plan their future, and protect what they love. All in line with sharia principles."}
          </p>
        </div>
      </Section>

      <Section style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", gap: 32, alignItems: "flex-start" }} className="about-grid">
          <div className="card" style={{ padding: 32 }}>
            <Eyebrow>{lang === "id" ? "FOUNDER" : "FOUNDER"}</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 36 }}>Jasmine</h2>
            <div className="mono muted" style={{ fontSize: 12, marginTop: 6, letterSpacing: "0.08em" }}>SHARIA LIFE PLANNER · FINANCIAL EDUCATOR</div>
            <p className="ink-2" style={{ fontSize: 15, lineHeight: 1.6, marginTop: 20 }}>
              {lang === "id"
                ? "Lulusan Ekonomi Syariah dengan passion di financial planning dan literasi. Sejak 2021 menjadi life planner di industri asuransi, dan memperluas pengalaman ke perbankan, fintech, dan investasi sebagai researcher, equity analyst, dan corporate secretary. Tujuannya satu — jadi konsultan yang benar-benar bisa kamu percaya."
                : "A Sharia Economics graduate with deep passion for financial planning & literacy. Since 2021 a life planner in insurance — then expanded into banking, fintech, and investments as a researcher, equity analyst, and corporate secretary. One mission — be a consultant people can truly trust."}
            </p>
          </div>
          <div className="stack" style={{ gap: 12 }}>
            <div className="card">
              <h4 style={{ fontSize: 18 }}>{lang === "id" ? "Misi" : "Mission"}</h4>
              <p className="ink-2" style={{ marginTop: 8, fontSize: 14, lineHeight: 1.55 }}>
                {lang === "id"
                  ? "Bantu 1 juta orang Indonesia merencanakan keuangan dengan literasi & alat yang tepat."
                  : "Help 1 million Indonesians plan their finances with the right literacy & tools."}
              </p>
            </div>
            <div className="card">
              <h4 style={{ fontSize: 18 }}>{lang === "id" ? "Nilai" : "Values"}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {(lang === "id"
                  ? ["Edukasi dulu, produk kemudian", "Syariah-compliant, halal & jelas", "Data-driven, bukan sales-driven", "Transparan tanpa kompromi"]
                  : ["Education first, products second", "Sharia-compliant, halal & clear", "Data-driven, not sales-driven", "Uncompromisingly transparent"]
                ).map((v, i) => (
                  <li key={i} className="row" style={{ gap: 10, fontSize: 14 }}>
                    <Check size={14} stroke={3} style={{ color: "var(--accent)" }} />{v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h4 style={{ fontSize: 18 }}>{lang === "id" ? "Dampak" : "Impact"}</h4>
              <div className="row" style={{ gap: 24, marginTop: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 32, fontWeight: 700 }}>100<span style={{ color: "var(--accent)" }}>+</span></div>
                  <div className="muted mono" style={{ fontSize: 11, letterSpacing: "0.08em" }}>{lang === "id" ? "KLIEN" : "CLIENTS"}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 32, fontWeight: 700 }}>5<span style={{ color: "var(--accent)" }}>+</span></div>
                  <div className="muted mono" style={{ fontSize: 11, letterSpacing: "0.08em" }}>{lang === "id" ? "PERUSAHAAN" : "COMPANIES"}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 32, fontWeight: 700 }}>300<span style={{ color: "var(--accent)" }}>+</span></div>
                  <div className="muted mono" style={{ fontSize: 11, letterSpacing: "0.08em" }}>{lang === "id" ? "PESERTA EVENT" : "EVENT PARTICIPANTS"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 880px) { .about-grid { grid-template-columns: 1fr !important; } }`}</style>
      </Section>
    </div>
  );
}

function PartnershipScreen({ onNavigate }) {
  const { lang } = useT();
  return (
    <StubScreen
      eyebrow={lang === "id" ? "PARTNERSHIP & AFFILIATE" : "PARTNERSHIP & AFFILIATE"}
      title={lang === "id" ? "Mari kolaborasi dengan wealthplanner.id." : "Let's collaborate with wealthplanner.id."}
      blurb={lang === "id"
        ? "Kami terbuka untuk kemitraan strategis dengan perusahaan, kreator konten, financial educator, dan komunitas. Detail program — termasuk struktur affiliate revenue-share — akan diumumkan segera."
        : "We're open to strategic partnerships with companies, content creators, financial educators, and communities. Program details — including affiliate revenue-share structure — will be announced soon."}
      sections={[
        { title: lang === "id" ? "Brand Partnership" : "Brand Partnership", desc: lang === "id" ? "Co-branded content, webinar, dan kampanye edukasi." : "Co-branded content, webinars, and education campaigns." },
        { title: lang === "id" ? "Content Creator Affiliate" : "Content Creator Affiliate", desc: lang === "id" ? "Bagikan produk digital kami, dapatkan komisi per penjualan." : "Share our digital products, earn commission per sale." },
        { title: lang === "id" ? "Financial Educator Network" : "Financial Educator Network", desc: lang === "id" ? "Bergabung dengan jaringan kami untuk akses tools, materi, dan mentoring." : "Join our network for tools, materials, and mentoring access." },
        { title: lang === "id" ? "Corporate Partnership" : "Corporate Partnership", desc: lang === "id" ? "Employee Benefit, sesi literasi finansial, dan in-house workshop." : "Employee Benefit, financial literacy sessions, and in-house workshops." },
      ]}
      onNavigate={onNavigate}
    />
  );
}

function ContactScreen({ onNavigate }) {
  const { lang } = useT();
  const contacts = [
    { label: "Email", value: "wealthplanner234@gmail.com", icon: "Wallet" },
    { label: "WhatsApp", value: "+62 858-9006-5850", icon: "User" },
    { label: "Instagram", value: "@wealthplanner.id", icon: "Sparkle" },
    { label: "TikTok", value: "@wealthplanner.id", icon: "Video" },
  ];
  return (
    <div>
      <Section style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div style={{ maxWidth: 820 }}>
          <Eyebrow>{lang === "id" ? "KONTAK" : "CONTACT"}</Eyebrow>
          <h1 style={{ marginTop: 16 }}>{lang === "id" ? "Yuk, mulai obrolan." : "Let's start a conversation."}</h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 20, maxWidth: 620 }}>
            {lang === "id"
              ? "Ada pertanyaan tentang produk, program asuransi, atau ingin diskusi kemitraan? Pilih channel yang paling nyaman buat kamu."
              : "Questions about products, insurance programs, or partnership discussion? Pick whichever channel suits you."}
          </p>
        </div>
      </Section>

      <Section style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 32, alignItems: "flex-start" }} className="contact-grid">
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 16 }}>{lang === "id" ? "Channel langsung" : "Direct channels"}</h3>
            <div className="stack" style={{ gap: 10 }}>
              {contacts.map((c) => {
                const Icon = window[c.icon] || Sparkle;
                return (
                  <div key={c.label} className="card card-tight row-between" style={{ background: "var(--surface)" }}>
                    <div className="row" style={{ gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--chip)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-2)" }}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.08em" }}>{c.label.toUpperCase()}</div>
                        <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{c.value}</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} style={{ color: "var(--muted)" }} />
                  </div>
                );
              })}
            </div>

            <div className="card" style={{ marginTop: 24, background: "var(--surface-2)" }}>
              <h4 style={{ fontSize: 16 }}>{lang === "id" ? "Jam operasional" : "Operating hours"}</h4>
              <p className="ink-2" style={{ fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
                {lang === "id"
                  ? "Senin–Jumat · 09.00–18.00 WIB · Respon WhatsApp dalam 4 jam kerja."
                  : "Mon–Fri · 09.00–18.00 WIB · WhatsApp response within 4 working hours."}
              </p>
            </div>
          </div>

          <div className="card" style={{ padding: 28 }}>
            <h3 style={{ fontSize: 22, marginBottom: 16 }}>{lang === "id" ? "Kirim pesan singkat" : "Send a quick message"}</h3>
            <div className="stack" style={{ gap: 12 }}>
              <div>
                <label className="label-sm">{lang === "id" ? "Nama" : "Name"}</label>
                <input className="input" placeholder={lang === "id" ? "Nama kamu" : "Your name"} />
              </div>
              <div>
                <label className="label-sm">Email</label>
                <input className="input" type="email" placeholder="email@example.com" />
              </div>
              <div>
                <label className="label-sm">{lang === "id" ? "Tipe pesan" : "Message type"}</label>
                <select className="select">
                  <option>{lang === "id" ? "Pertanyaan umum" : "General question"}</option>
                  <option>{lang === "id" ? "Produk digital" : "Digital products"}</option>
                  <option>{lang === "id" ? "Asuransi & investasi" : "Insurance & investment"}</option>
                  <option>{lang === "id" ? "Webinar / event" : "Webinar / event"}</option>
                  <option>{lang === "id" ? "Kemitraan" : "Partnership"}</option>
                </select>
              </div>
              <div>
                <label className="label-sm">{lang === "id" ? "Pesan" : "Message"}</label>
                <textarea className="textarea" rows={4} placeholder={lang === "id" ? "Tulis pesan kamu..." : "Write your message..."} style={{ resize: "vertical" }}></textarea>
              </div>
              <Button variant="primary" iconRight={<ArrowRight size={16} />}>{lang === "id" ? "Kirim pesan" : "Send message"}</Button>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 880px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
      </Section>
    </div>
  );
}

Object.assign(window, { StubScreen, AboutScreen, PartnershipScreen, ContactScreen });
