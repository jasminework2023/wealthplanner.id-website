// home.jsx — landing page (v2 — copy update Juni 2026)

function HomeScreen({ onNavigate, heroLayout }) {
  const { t, lang } = useT();
  return (
    <div>
      <HomeHero onNavigate={onNavigate} />
      <SocialProofMarquee />
      <PriorityCalculatorsSection onNavigate={onNavigate} />
      <ProtectionOptionsSection onNavigate={onNavigate} />
      <MitraProfileSection />
      <WhyWealthPlannerSection onNavigate={onNavigate} />
      <WebinarTeaser onNavigate={onNavigate} />
      <JasmineSection onNavigate={onNavigate} />
      <BigCTA onNavigate={onNavigate} />
    </div>
  );
}

function HomeHero({ onNavigate }) {
  const { lang } = useT();

  const copy = lang === "id" ? {
    title: "Lindungi Tujuan Finansialmu dengan Asuransi Syariah.",
    p1: "Bukan sekadar memilih produk asuransi, tapi dimulai dari memahami apa yang ingin kamu jaga.",
    cta1: "Hitung Kebutuhan Asuransi",
    cta2: "Book Konsultasi dengan Life Planner",
  } : {
    title: "Start Protecting Your Financial Plan From Here.",
    p1: "It's not just about choosing an insurance product — it starts with understanding what you want to protect.",
    cta1: "Calculate Insurance Needs",
    cta2: "Book Consultation with a Life Planner",
  };

  return (
    <Section style={{ paddingTop: 64, paddingBottom: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
        {/* Wordmark headline — subtle color-fill animation on load */}
        <h1
          className="display"
          aria-label="wealthplanner.id"
          style={{
            position: "relative",
            display: "inline-block",
            fontSize: "clamp(32px, 6vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          <span aria-hidden="true" style={{ color: "color-mix(in oklab, var(--accent) 16%, transparent)" }}>
            wealthplanner.id
          </span>
          <span
            aria-hidden="true"
            className="wm-fill"
            style={{
              position: "absolute", inset: 0,
              color: "var(--accent)",
              clipPath: "inset(0 100% 0 0)",
            }}
          >
            wealthplanner.id
          </span>
        </h1>

        {/* Hero headline */}
        <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: 1.2, fontWeight: 700, color: "var(--ink)" }}>
          {copy.title}
        </h2>

        <p className="ink-2" style={{ fontSize: 18, lineHeight: 1.6, marginTop: 24, maxWidth: 640, marginInline: "auto" }}>
          {copy.p1}
        </p>

        <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
          <Button
            variant="primary"
            size="lg"
            href="https://gri.my.id/f1/GJ5115"
            target="_blank"
            rel="noopener noreferrer"
            iconRight={<ArrowRight size={18} />}
          >
            {copy.cta1}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate({ name: "book" })}
          >
            {copy.cta2}
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes wmFillIn { to { clip-path: inset(0 0% 0 0); } }
        .wm-fill { animation: wmFillIn 1.8s cubic-bezier(0.65, 0, 0.35, 1) 0.25s forwards; }
        @media (prefers-reduced-motion: reduce) {
          .wm-fill { animation: none; clip-path: inset(0 0% 0 0); }
        }
      `}</style>
    </Section>
  );
}

const PROTECTION_OPTIONS_ID = [
  {
    id: "jiwa",
    icon: "❤️",
    title: "Asuransi Jiwa",
    desc: "Jaga kondisi finansial keluarga saat kamu sudah tidak bisa lagi mendampingi mereka.",
    bullets: [
      "Premi mulai dari Rp250 ribu/bulan*",
      "Santunan jiwa yang dapat disesuaikan",
      "Bisa dikombinasikan dengan investasi syariah",
    ],
  },
  {
    id: "sakit-kritis",
    icon: "🩺",
    title: "Asuransi Sakit Kritis",
    desc: "Siapkan perlindungan finansial saat kamu harus menghadapi penyakit kritis.",
    bullets: [
      "Santunan saat terdiagnosis penyakit kritis",
      "Membantu menjaga cash flow selama masa pemulihan",
      "Cakupan untuk puluhan jenis penyakit kritis",
    ],
  },
  {
    id: "kesehatan",
    icon: "🏥",
    title: "Asuransi Kesehatan",
    desc: "Bantu siapkan biaya kesehatan tanpa harus mengganggu rencana keuangan yang sudah kamu susun.",
    bullets: [
      "Perlindungan biaya rumah sakit",
      "Cashless di jaringan rumah sakit rekanan",
      "Bisa untuk rawat inap & rawat jalan",
    ],
  },
  {
    id: "haji",
    icon: "🕋",
    title: "Program Pelunasan Haji",
    desc: "Siapkan dana untuk mewujudkan panggilan ke Baitullah, dengan skema tabungan syariah yang terencana.",
    bullets: [
      "Tabungan khusus pelunasan biaya Haji/Umroh",
      "Dikelola dengan prinsip syariah",
      "Bisa disesuaikan dengan target keberangkatan",
    ],
  },
  {
    id: "wakaf",
    icon: "🤲",
    title: "Perlindungan Wakaf",
    desc: "Jadikan manfaat asuransimu sebagai amal jariyah dengan mewakafkan sebagian manfaat polis.",
    bullets: [
      "Sebagian manfaat polis dapat diwakafkan",
      "Sesuai prinsip syariah & fatwa wakaf polis asuransi",
      "Manfaat perlindungan sekaligus pahala berkelanjutan",
    ],
  },
];

const PROTECTION_OPTIONS_EN = [
  {
    id: "jiwa",
    icon: "❤️",
    title: "Life Insurance",
    desc: "Protect your family's finances for the times you can no longer be there for them.",
    bullets: [
      "Premiums from Rp250K/month*",
      "Adjustable life insurance payout",
      "Can be combined with sharia investment",
    ],
  },
  {
    id: "sakit-kritis",
    icon: "🩺",
    title: "Critical Illness Insurance",
    desc: "Prepare financial protection for when you have to face a critical illness.",
    bullets: [
      "Payout upon critical illness diagnosis",
      "Helps maintain cash flow during recovery",
      "Coverage for dozens of critical illnesses",
    ],
  },
  {
    id: "kesehatan",
    icon: "🏥",
    title: "Health Insurance",
    desc: "Prepare medical costs without disrupting the financial plan you've built.",
    bullets: [
      "Hospital cost coverage",
      "Cashless at partner hospital networks",
      "Covers inpatient & outpatient care",
    ],
  },
  {
    id: "haji",
    icon: "🕋",
    title: "Hajj Savings Program",
    desc: "Prepare the funds for your calling to Baitullah, with a structured sharia savings scheme.",
    bullets: [
      "Dedicated savings for Hajj/Umrah costs",
      "Managed under sharia principles",
      "Can be tailored to your departure target",
    ],
  },
  {
    id: "wakaf",
    icon: "🤲",
    title: "Waqf Protection",
    desc: "Turn part of your insurance benefit into ongoing charity by endowing a portion of your policy benefit.",
    bullets: [
      "A portion of the policy benefit can be waqf-ed",
      "Aligned with sharia principles & insurance waqf fatwa",
      "Protection benefit plus ongoing reward",
    ],
  },
];

function ProtectionOptionsSection({ onNavigate }) {
  const { lang } = useT();
  const options = lang === "id" ? PROTECTION_OPTIONS_ID : PROTECTION_OPTIONS_EN;

  return (
    <Section>
      <div style={{ maxWidth: 820, marginBottom: 28 }}>
        <Eyebrow>{lang === "id" ? "PILIHAN PERLINDUNGAN" : "PROTECTION OPTIONS"}</Eyebrow>
        <h2 style={{ marginTop: 12 }}>
          {lang === "id" ? "Pilihan Perlindungan untuk Berbagai Kebutuhan" : "Protection Options for Every Need"}
        </h2>
      </div>

      <div className="protection-scroll" style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 12, scrollSnapType: "x mandatory" }}>
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onNavigate({ name: "program" })}
            className="card card-hover"
            style={{
              cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
              flex: "0 0 auto", width: "min(320px, 84vw)", scrollSnapAlign: "start",
              display: "flex", flexDirection: "column", gap: 16, padding: 28,
            }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: "var(--chip)", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22,
            }}>
              {opt.icon}
            </div>
            <div>
              <h3 style={{ fontSize: 22, lineHeight: 1.15 }}>{opt.title}</h3>
              <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.55, marginTop: 10 }}>{opt.desc}</p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {opt.bullets.map((b, i) => (
                <li key={i} className="row" style={{ gap: 8, alignItems: "flex-start", fontSize: 13, color: "var(--ink-2)" }}>
                  <span style={{ color: "var(--accent)", marginTop: 1 }}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      <p className="muted" style={{ fontSize: 12, marginTop: 16 }}>
        {lang === "id"
          ? "*Detail manfaat, premi, dan ketentuan mengikuti program yang dipilih."
          : "*Benefit details, premiums, and terms follow the selected program."}
      </p>

      <style>{`
        .protection-scroll::-webkit-scrollbar { height: 6px; }
        .protection-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 999px; }
      `}</style>
    </Section>
  );
}

function MitraProfileSection() {
  const { lang } = useT();

  const stats = lang === "id" ? [
    { value: "Rp1,6 Triliun", label: "Aset 2025*" },
    { value: "5433%", label: "Risk-Based Capital (RBC) — Dana Perusahaan 2025*" },
    { value: "797%", label: "Risk-Based Capital (RBC) — Dana Tabarru' & Tanahud 2025*" },
  ] : [
    { value: "Rp1.6 Trillion", label: "Assets 2025*" },
    { value: "5433%", label: "Risk-Based Capital (RBC) — Company Fund 2025*" },
    { value: "797%", label: "Risk-Based Capital (RBC) — Tabarru' & Tanahud Fund 2025*" },
  ];

  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div className="mitra-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.3fr)", gap: 48, alignItems: "center" }}>
        <div>
          <Eyebrow>{lang === "id" ? "PROFIL MITRA" : "PARTNER PROFILE"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>PT Asuransi Jiwa Manulife Indonesia Syariah</h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>
            {lang === "id"
              ? "Dalam mempersiapkan perlindungan finansial, memilih mitra yang tepat sama pentingnya dengan memahami kebutuhanmu."
              : "In preparing your financial protection, choosing the right partner matters just as much as understanding your needs."}
          </p>
          <p className="ink-2" style={{ fontSize: 15, marginTop: 12, lineHeight: 1.6 }}>
            {lang === "id"
              ? "wealthplanner.id bermitra dengan Manulife Syariah Indonesia karena kemampuannya mengelola dana peserta serta membayarkan klaim mencerminkan kekuatan finansial yang baik dan dapat dipercaya."
              : "wealthplanner.id partners with Manulife Syariah Indonesia because its ability to manage participant funds and pay claims reflects strong, trustworthy financial standing."}
          </p>
          <div style={{ marginTop: 24 }}>
            <Button
              variant="outline"
              size="lg"
              href="https://www.manulife.co.id/id/tentang-kami/tentang-manulife-syariah.html"
              target="_blank"
              rel="noopener noreferrer"
              iconRight={<ArrowRight size={16} />}
            >
              {lang === "id" ? "Kenali Mitra Kami" : "Get to Know Our Partner"}
            </Button>
          </div>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          {stats.map((s, i) => (
            <div key={i} className="card" style={{ padding: 22, display: "flex", flexDirection: "column", gap: 6 }}>
              <div className="display" style={{ fontSize: "clamp(26px, 3.4vw, 38px)", fontWeight: 700, color: "var(--accent)", lineHeight: 1.1 }}>
                {s.value}
              </div>
              <div className="ink-2" style={{ fontSize: 13.5, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
          <p className="muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
            {lang === "id"
              ? "Angka Risk-Based Capital (RBC) di atas berada di atas batas minimum ketentuan OJK sebesar 120%. *Berdasarkan Laporan Keuangan Audited per 31 Desember 2025."
              : "The Risk-Based Capital (RBC) figures above are above the OJK's minimum requirement of 120%. *Based on Audited Financial Statements as of December 31, 2025."}
          </p>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .mitra-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

function WhyWealthPlannerSection({ onNavigate }) {
  const { lang } = useT();

  const steps = lang === "id" ? [
    { num: "01", title: "Kenali Tujuanmu", desc: "Kami mulai dengan memahami tujuan, kebutuhan, dan prioritas finansialmu." },
    { num: "02", title: "Temukan Perlindungan yang Tepat", desc: "Setelah memahami kebutuhanmu, kami bantu menemukan pilihan produk asuransi yang relevan dengan tujuan dan kondisi finansialmu." },
    { num: "03", title: "Tetap Kami Dampingi", desc: "Perjalanan finansial tidak berhenti setelah kamu memiliki polis. Kami tetap hadir untuk memberikan service dan pendampingan sesuai kebutuhanmu." },
  ] : [
    { num: "01", title: "Know Your Goals", desc: "We start by understanding your goals, needs, and financial priorities." },
    { num: "02", title: "Find the Right Protection", desc: "Once we understand your needs, we help you find insurance products relevant to your goals and financial situation." },
    { num: "03", title: "We Stay by Your Side", desc: "Your financial journey doesn't end once you have a policy. We remain present to provide service and support as you need it." },
  ];

  return (
    <Section>
      <div style={{ maxWidth: 720, marginBottom: 40 }}>
        <h2>{lang === "id" ? <>Kenapa <span style={{ color: "var(--accent)" }}>wealthplanner.id</span>?</> : <>Why <span style={{ color: "var(--accent)" }}>wealthplanner.id</span>?</>}</h2>
        <p className="ink-2" style={{ fontSize: 17, marginTop: 16, lineHeight: 1.6 }}>
          {lang === "id"
            ? "Karena perlindungan yang tepat bukan dimulai dari produk, tapi dari memahami apa yang penting bagimu."
            : "Because the right protection doesn't start with a product — it starts with understanding what matters to you."}
        </p>
        <p className="ink-2" style={{ fontSize: 15, marginTop: 12, lineHeight: 1.6 }}>
          {lang === "id"
            ? "Kami membantu kamu memahami tujuan finansialmu, mengetahui apa yang ingin kamu lindungi, menemukan pilihan produk asuransi yang sesuai dengan kebutuhanmu, hingga tetap memberikan service dan pendampingan setelah kamu memiliki perlindungan."
            : "We help you understand your financial goals, know what you want to protect, find insurance products that fit your needs, and continue to provide service and support after you're protected."}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
        {steps.map((s) => (
          <div key={s.num} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div className="mono" style={{ fontSize: 14, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em" }}>{s.num}</div>
            <h3 style={{ fontSize: 20 }}>{s.title}</h3>
            <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.55 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 36 }}>
        <Button
          variant="primary"
          size="lg"
          href="https://gri.my.id/f1/GJ5115"
          target="_blank"
          rel="noopener noreferrer"
          iconRight={<ArrowRight size={18} />}
        >
          {lang === "id" ? "Konsultasikan Kebutuhanmu" : "Consult Your Needs"}
        </Button>
      </div>
    </Section>
  );
}

function PriorityCalculatorsSection({ onNavigate }) {
  const { t, lang } = useT();

  const priorityIds = ["checkup", "rumah", "edu", "pension", "warisan", "haji"];
  const labels_id = {
    checkup: "Check-Up Finansial",
    rumah: "Rumah",
    edu: "Pendidikan Anak",
    pension: "Dana Pensiun",
    warisan: "Warisan & Wakaf",
    haji: "Haji/Umroh",
  };
  const labels_en = {
    checkup: "Financial Check-Up",
    rumah: "Home",
    edu: "Children's Education",
    pension: "Retirement Fund",
    warisan: "Inheritance & Waqf",
    haji: "Hajj/Umrah",
  };
  const labels = lang === "id" ? labels_id : labels_en;

  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 680, marginBottom: 32 }}>
        <Eyebrow>{lang === "id" ? "MULAI DARI TUJUANMU" : "START WITH YOUR GOAL"}</Eyebrow>
        <h2 style={{ marginTop: 16, whiteSpace: "nowrap", fontSize: "clamp(19px, 4.4vw, 40px)" }}>
          {lang === "id" ? "Prioritas Keuanganmu Saat Ini" : "Your Financial Priority Right Now"}
        </h2>
        <p className="ink-2" style={{ fontSize: 17, marginTop: 16 }}>
          {lang === "id"
            ? "Perlindungan finansial sebaiknya bukan sekadar memilih produk asuransi, tapi dimulai dari memahami apa yang ingin kamu jaga. Mulai dari tujuanmu. Lalu, siapkan perlindungannya."
            : "Financial protection shouldn't just be about picking an insurance product — start by understanding what you want to protect. Begin with your goal. Then, prepare the protection."}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {priorityIds.map((id, i) => {
          const calc = CALCULATORS.find((c) => c.id === id);
          const Icon = calc ? window[calc.icon] : null;
          return (
            <button
              key={id}
              onClick={() => onNavigate({ name: "calculator", id })}
              className="card card-hover"
              style={{
                cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                height: 240, gap: 14, position: "relative", overflow: "hidden",
              }}
            >
              <div className="row-between" style={{ alignItems: "flex-start" }}>
                <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.15em" }}>
                  {String(i + 1).padStart(2, "0")} / {String(priorityIds.length).padStart(2, "0")}
                </div>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                  background: "var(--accent)", color: "var(--accent-ink)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {Icon && <Icon size={22} stroke={2} />}
                </div>
              </div>
              <div>
                <h3 style={{
                  fontSize: 20, lineHeight: 1.25,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>{labels[id]}</h3>
                <p className="ink-2" style={{
                  marginTop: 8, fontSize: 13.5, lineHeight: 1.5,
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                  overflow: "hidden", minHeight: 60.75,
                }}>{t[`c_${id}_sub`]}</p>
              </div>
              <div className="row-between">
                <span className="tag tag-outline">~ 60 detik</span>
                <span className="row" style={{ gap: 6, color: "var(--ink)", fontSize: 13, fontWeight: 600 }}>
                  {lang === "id" ? "Mulai" : "Start"} <ArrowRight size={14} />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
        <Button
          variant="primary"
          size="lg"
          href="https://gri.my.id/f1/GJ5115"
          target="_blank"
          rel="noopener noreferrer"
          iconRight={<ArrowRight size={18} />}
        >
          {lang === "id" ? "Hitung Kebutuhan Asuransi" : "Calculate Insurance Needs"}
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => onNavigate({ name: "book" })}
        >
          {lang === "id" ? "Book Konsultasi dengan Life Planner" : "Book Consultation with a Life Planner"}
        </Button>
      </div>
    </Section>
  );
}

function DashboardHero({ onNavigate }) {
  const { t, lang } = useT();
  const cards = lang === "id" ? [
    {
      id: "calc",
      tag: "Step 1 / HITUNG",
      title: "Hitung Impian Keuangan Gratis",
      desc: "Dengan menghitung impianmu dengan angka yang realistis, lebih mudah dan memotivasi kamu untuk mencapainya. 8 kalkulator otomatis siap bantu.",
      cta: "Mulai hitung",
      route: "calc",
      icon: "Sparkle",
      color: "var(--accent)",
    },
    {
      id: "products",
      tag: "Step 2 / PRAKTIK",
      title: "Produk Keuangan Digital Premium",
      desc: "Template spreadsheet dan AI premium yang bantu kamu manage cashflow, rencanakan impian lebih matang, dan pantau kondisi keuangan secara real-time.",
      cta: "Lihat produk",
      route: "products",
      icon: "Wallet",
      color: "#C6F24E",
    },
    {
      id: "program",
      tag: "Step 3 / KONSULTASI",
      title: "Produk Asuransi dan Investasi",
      desc: "Bantu kamu menemukan strategi mencapai impian — menumbuhkan jalur investasi dan menjaganya dengan proteksi asuransi syariah yang tepat.",
      cta: "Lihat program",
      route: "program",
      icon: "ShieldCheck",
      color: "#7C9CFF",
    },
  ] : [
    { id: "calc", tag: "Step 1 / CALCULATE", title: "Calculate Your Financial Goals", desc: "Calculating your goals with realistic numbers makes them easier and more motivating to achieve. 8 automated calculators ready to help.", cta: "Start calculating", route: "calc", icon: "Sparkle", color: "var(--accent)" },
    { id: "products", tag: "Step 2 / PRACTICE", title: "Premium Digital Finance Products", desc: "Premium spreadsheet templates and AI tools to help you manage cashflow, plan your goals more maturely, and track your finances in real-time.", cta: "See products", route: "products", icon: "Wallet", color: "#C6F24E" },
    { id: "program", tag: "Step 3 / CONSULT", title: "Insurance & Investment Products", desc: "Help you find the right strategy to achieve your goals — growing investment channels and protecting them with the right sharia insurance.", cta: "See programs", route: "program", icon: "ShieldCheck", color: "#7C9CFF" },
  ];

  const scrollToFeatures = () => {
    document.getElementById("features-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section style={{ paddingTop: 56, paddingBottom: 16 }}>
      {/* Headline */}
      <h2 style={{ maxWidth: 780, marginBottom: 32, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2, fontWeight: 700 }}>
        {lang === "id" ? (
          <>
            <span style={{ color: "var(--accent)" }}>Wealthplanner.id</span>
            {" —"}
            <br />
            {"platform yang bantu kamu mendapatkan produk asuransi, akumulasi kekayaan, dan investasi yang sesuai kebutuhan"}
            <br />
            <span style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 400, color: "var(--ink-2)" }}>
              {"dengan profesional agent bersertifikat dan tools keuangan akurat."}
            </span>
          </>
        ) : (
          <>
            <span style={{ color: "var(--accent)" }}>Wealthplanner.id</span>
            {" — a platform that helps you find the right insurance, wealth accumulation, and investment products with certified professional agents and accurate financial tools."}
          </>
        )}
      </h2>

      {/* CTA button */}
      <div style={{ marginBottom: 64 }}>
        <Button
          variant="primary"
          size="lg"
          onClick={() => onNavigate({ name: "book" })}
          iconRight={<ArrowRight size={18} />}
        >
          {lang === "id" ? "Free Konsultasi 1-on-1 · 10 Menit" : "Free 1-on-1 Consultation · 10 Minutes"}
        </Button>
      </div>

      {/* Section cards */}
      <div id="features-section" style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--ink)" }}>
          {lang === "id" ? "Mulai Benahi Keuanganmu Dari Sini!" : "Start Fixing Your Finances Here!"}
        </h3>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
        {cards.map((card, idx) => {
          const Icon = window[card.icon] || Sparkle;
          return (
            <button
              key={card.id}
              onClick={() => onNavigate({ name: card.route })}
              className="card card-hover"
              style={{
                cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 280, padding: 28, gap: 18, position: "relative", overflow: "hidden",
              }}
            >
              <div className="row-between" style={{ alignItems: "flex-start" }}>
                <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "var(--muted)" }}>{card.tag}</span>
                <div style={{
                  width: 44, height: 44, borderRadius: 14,
                  background: card.color, color: "#0a0a0a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={20} stroke={2} />
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 24, lineHeight: 1.1 }}>{card.title}</h3>
                <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.5, marginTop: 10 }}>{card.desc}</p>
              </div>
              <div className="row" style={{ gap: 6, color: "var(--ink)", fontSize: 13, fontWeight: 600 }}>
                {card.cta} <ArrowRight size={14} />
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

function SocialProofMarquee() {
  const items = ["Asuransi Jiwa", "Asuransi Kesehatan", "Asuransi Sakit Kritis", "Asuransi Korporat", "Asuransi Kebakaran"];
  return (
    <div className="marquee-row" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", margin: "32px 0" }}>
      <div className="marquee">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="row" style={{ gap: 16, fontFamily: "Plus Jakarta Sans, sans-serif", fontSize: 22, fontWeight: 600 }}>
            <span style={{ color: "var(--accent)", fontSize: 16 }}>✦</span>
            <span style={{ whiteSpace: "nowrap" }}>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProblemSection() {
  const { lang } = useT();
  const problems = lang === "id" ? [
    {
      icon: "❌",
      title: "Tidak ada proteksi penghasilan",
      desc: "Kalau kamu sakit parah atau meninggal, siapa yang bayar cicilan rumah, biaya sekolah anak, dan kebutuhan bulanan keluarga?",
      color: "#FF6B6B",
    },
    {
      icon: "❌",
      title: "Nabung tapi tidak terproteksi",
      desc: "Investasi dan tabungan bisa habis karena satu musibah besar. Tanpa asuransi, semua yang sudah dikumpulkan bisa lenyap dalam hitungan bulan.",
      color: "#FFB347",
    },
    {
      icon: "❌",
      title: "Pakai produk yang tidak sesuai prinsip",
      desc: "Banyak yang belum tahu bahwa asuransi konvensional mengandung unsur yang tidak sesuai syariah. Ada alternatif yang lebih tenang secara agama.",
      color: "#7C9CFF",
    },
  ] : [
    {
      icon: "❌",
      title: "No income protection",
      desc: "If you get seriously ill or pass away, who pays the mortgage, school fees, and monthly family expenses?",
      color: "#FF6B6B",
    },
    {
      icon: "❌",
      title: "Saving without protection",
      desc: "Investments and savings can be wiped out by one major disaster. Without insurance, everything you've built could vanish in months.",
      color: "#FFB347",
    },
    {
      icon: "❌",
      title: "Using non-compliant products",
      desc: "Many people don't realize conventional insurance contains elements that don't comply with Islamic principles. There's a more peaceful alternative.",
      color: "#7C9CFF",
    },
  ];

  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div style={{ maxWidth: 680, marginBottom: 48 }}>
        <Eyebrow>{lang === "id" ? "KENAPA INI PENTING?" : "WHY THIS MATTERS"}</Eyebrow>
        <h2 style={{ marginTop: 16 }}>
          {lang === "id"
            ? "Jujur — kebanyakan keluarga muda punya 3 gap ini tanpa sadar."
            : "Honestly — most young families have these 3 gaps without realizing it."}
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {problems.map((p, i) => (
          <div key={i} className="card" style={{ borderLeft: `4px solid ${p.color}`, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
              {p.icon}
            </div>
            <div>
              <h4 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.2 }}>{p.title}</h4>
              <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.6, marginTop: 10 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 36, textAlign: "center" }}>
        <p className="ink-2" style={{ fontSize: 16, marginBottom: 20 }}>
          {lang === "id" ? "Mau tahu kondisi finansialmu sekarang?" : "Want to know your current financial condition?"}
        </p>
        <div className="row" style={{ gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" onClick={() => document.getElementById("book-section")?.scrollIntoView({ behavior: "smooth" }) } iconRight={<ArrowRight size={16} />}>
            {lang === "id" ? "Konsultasi Gratis Sekarang" : "Free Consultation Now"}
          </Button>
        </div>
      </div>
    </Section>
  );
}

function Hero({ onNavigate, variant = "split" }) {
  const { t } = useT();
  const tag = t.hero_tag;
  const title1 = t.hero_title_1;
  const title2 = t.hero_title_2;
  const sub = t.hero_sub;

  if (variant === "stack") {
    return (
      <Section className="" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <div style={{ textAlign: "center", maxWidth: 920, margin: "0 auto" }}>
          <Tag variant="accent">★ {tag}</Tag>
          <h1 style={{ marginTop: 24, textAlign: "center" }}>
            {title1} <br />
            <span style={{
              background: "var(--accent)",
              color: "var(--accent-ink)",
              padding: "0.04em 0.22em 0.06em",
              borderRadius: 16,
              display: "inline-block",
              lineHeight: 1,
            }}>{title2}</span>
          </h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 24, maxWidth: 600, marginInline: "auto" }}>{sub}</p>
          <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "calc" })} iconRight={<ArrowRight size={18} />}>
              {t.hero_cta}
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate({ name: "products" })}>
              {t.hero_cta_2}
            </Button>
          </div>
        </div>
        <HeroStatsRow />
      </Section>
    );
  }

  if (variant === "wide") {
    return (
      <Section style={{ paddingTop: 56, paddingBottom: 24 }}>
        <div style={{
          background: "var(--accent)",
          color: "var(--accent-ink)",
          borderRadius: 32,
          padding: "clamp(40px, 6vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div className="row" style={{ gap: 12, marginBottom: 24 }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "6px 12px", background: "rgba(0,0,0,0.15)", borderRadius: 999, letterSpacing: "0.1em", fontFamily: "JetBrains Mono, monospace" }}>★ {tag}</span>
          </div>
          <h1 style={{ color: "inherit", maxWidth: 920 }}>{title1} {title2}</h1>
          <p style={{ fontSize: 19, marginTop: 24, maxWidth: 640, opacity: 0.78 }}>{sub}</p>
          <div className="row" style={{ gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <button onClick={() => onNavigate({ name: "calc" })} className="btn btn-lg" style={{ background: "var(--accent-ink)", color: "var(--accent)" }}>
              {t.hero_cta} <ArrowRight size={18} />
            </button>
            <button onClick={() => onNavigate({ name: "products" })} className="btn btn-lg" style={{ background: "transparent", color: "var(--accent-ink)", border: "1.5px solid currentColor" }}>
              {t.hero_cta_2}
            </button>
          </div>
          <BgPattern />
        </div>
        <HeroStatsRow />
      </Section>
    );
  }

  // split (default)
  return (
    <Section style={{ paddingTop: 48, paddingBottom: 24 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
        gap: 48,
        alignItems: "center",
      }} className="hero-grid">
        <div>
          <Tag variant="accent">★ {t.hero_tag}</Tag>
          <h1 style={{ marginTop: 24, marginBottom: 0 }}>
            {title1} <br />
            <span style={{ color: "var(--accent)" }}>{title2}</span>
          </h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 24, maxWidth: 520 }}>{t.hero_sub}</p>
          <div className="row" style={{ gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "calc" })} iconRight={<ArrowRight size={18} />}>
              {t.hero_cta}
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate({ name: "products" })}>
              {t.hero_cta_2}
            </Button>
          </div>
          <div className="row" style={{ gap: 28, marginTop: 40, flexWrap: "wrap" }}>
            <Stat value="100" label={t.hero_stat_1} />
            <Stat value="5" label={t.hero_stat_2} />
            <Stat value="300" label={t.hero_stat_3} />
          </div>
        </div>
        <HeroVisual />
      </div>
      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </Section>
  );
}

function UnderlineSquiggle() {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: -8, width: "100%", height: 10 }}>
      <path d="M0 6 Q 20 0, 40 6 T 80 6 T 120 6 T 160 6 T 200 6" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function HeroVisual() {
  const { t } = useT();
  return (
    <div className="hero-visual" style={{ position: "relative", aspectRatio: "1 / 1", maxWidth: 520, marginLeft: "auto" }}>
      <div className="sticker" style={{ position: "absolute", top: -8, left: -8, transform: "rotate(-6deg)", zIndex: 3 }}>
        gratis • instant
      </div>
      <div style={{
        position: "absolute",
        top: 30,
        right: 0,
        width: "90%",
        background: "var(--accent)",
        color: "var(--accent-ink)",
        borderRadius: 28,
        padding: 28,
        boxShadow: "var(--shadow-lg)",
        zIndex: 2,
        transform: "rotate(2deg)",
      }}>
        <div className="row-between">
          <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", opacity: 0.7 }}>HASIL IMPIANMU</span>
          <span style={{ fontSize: 10, fontWeight: 700, padding: "4px 10px", background: "rgba(0,0,0,0.15)", borderRadius: 999, fontFamily: "JetBrains Mono, monospace" }}>NABUNG 10 THN</span>
        </div>
        <div className="display" style={{ fontSize: 56, lineHeight: 0.9, marginTop: 16, fontWeight: 700 }}>Rp 2,1M</div>
        <p style={{ fontSize: 13, marginTop: 14, opacity: 0.75 }}>Untuk DP rumah idamanmu. Mulai dari Rp 8,4jt/bln di RDPU + reksadana saham.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 18 }}>
          {[
            { l: "Bulan", v: "120" },
            { l: "%/thn", v: "9.5" },
            { l: "Risk", v: "Mid" },
          ].map((d) => (
            <div key={d.l} style={{ background: "rgba(0,0,0,0.10)", padding: "10px 12px", borderRadius: 12 }}>
              <div className="mono" style={{ fontSize: 10, opacity: 0.7, fontWeight: 600 }}>{d.l.toUpperCase()}</div>
              <div className="mono" style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{d.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        position: "absolute",
        bottom: 20,
        left: 0,
        width: "62%",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 24,
        padding: 20,
        zIndex: 1,
        boxShadow: "var(--shadow-lg)",
        transform: "rotate(-3deg)",
      }}>
        <div className="row" style={{ gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "var(--chip)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChartBar size={16} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Investment Planner</div>
            <div className="muted mono" style={{ fontSize: 10 }}>Update 2 menit lalu</div>
          </div>
        </div>
        <MiniChart />
      </div>
      <div style={{
        position: "absolute",
        bottom: -8,
        right: 8,
        background: "var(--ink)",
        color: "var(--bg)",
        padding: "10px 14px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 8,
        boxShadow: "var(--shadow-lg)",
        transform: "rotate(4deg)",
      }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--positive)" }} />
        Syariah-compliant
      </div>
    </div>
  );
}

function MiniChart() {
  const data = [3, 5, 4, 7, 6, 9, 8, 11, 10, 13];
  const max = Math.max(...data);
  const w = 240, h = 70;
  const points = data.map((d, i) => `${(i / (data.length - 1)) * w},${h - (d / max) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 70, marginTop: 12 }}>
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.4" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${points} ${w},${h}`} fill="url(#g)" />
      <polyline points={points} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function HeroStatsRow() {
  const { t } = useT();
  return (
    <div className="row" style={{ gap: 32, marginTop: 56, flexWrap: "wrap", justifyContent: "center" }}>
      <Stat value="150+" label="keluarga terlindungi" />
      <Stat value="4.9★" label="rating konsultasi" />
      <Stat value="2021" label="mulai beroperasi" />
    </div>
  );
}

function BgPattern() {
  return (
    <svg style={{ position: "absolute", right: -40, top: -40, width: 280, height: 280, opacity: 0.12 }} viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CalculatorsTeaser({ onNavigate }) {
  const { t } = useT();
  return (
    <Section>
      <div className="row-between" style={{ marginBottom: 40, alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow>{t.section_calc_eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>{t.section_calc_title}</h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 16 }}>{t.section_calc_sub}</p>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "calc" })} iconRight={<ArrowRight size={16} />}>
          Lihat semua kalkulator
        </Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {CALCULATORS.slice(0, 7).map((c) => (
          <CalcTile key={c.id} calc={c} onClick={() => onNavigate({ name: "calculator", id: c.id })} />
        ))}
        <div className="card card-hover" style={{
          background: "var(--surface-2)",
          borderStyle: "dashed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          minHeight: 180,
        }}>
          <div className="muted mono" style={{ fontSize: 11, letterSpacing: "0.1em" }}>SOON</div>
          <h4 className="muted" style={{ textAlign: "center" }}>Zakat & Wakaf<br />Planner</h4>
        </div>
      </div>
    </Section>
  );
}

function CalcTile({ calc, onClick }) {
  const { t } = useT();
  const Icon = window[calc.icon];
  return (
    <button onClick={onClick} className="card card-hover" style={{
      textAlign: "left",
      cursor: "pointer",
      background: "var(--surface)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 180,
      gap: 16,
      color: "inherit",
      font: "inherit",
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: calc.color,
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {Icon && <Icon size={20} stroke={2} />}
      </div>
      <div>
        <h4 style={{ fontSize: 19, fontWeight: 700, fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.02em" }}>
          {t[`c_${calc.id}`]}
        </h4>
        <p className="muted" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.45 }}>{t[`c_${calc.id}_sub`]}</p>
      </div>
      <div className="row" style={{ gap: 6, color: "var(--ink-2)", fontSize: 12, fontWeight: 500 }}>
        Mulai <ArrowRight size={14} />
      </div>
    </button>
  );
}

function ProductsTeaser({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div className="row-between" style={{ marginBottom: 40, alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow>{t.section_prod_eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>{t.section_prod_title}</h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 16 }}>{t.section_prod_sub}</p>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "products" })} iconRight={<ArrowRight size={16} />}>
          {t.section_prod_cta}
        </Button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {PRODUCTS.slice(0, 3).map((p) => (
          <ProductCardLg key={p.id} product={p} onClick={() => onNavigate({ name: "product", id: p.id })} />
        ))}
      </div>
    </Section>
  );
}

function ProductCardLg({ product, onClick }) {
  const { t, lang } = useT();
  const Icon = window[product.icon];
  return (
    <button onClick={onClick} className="card card-hover" style={{
      cursor: "pointer", textAlign: "left", color: "inherit", font: "inherit",
      display: "flex", flexDirection: "column", gap: 16, padding: 0, overflow: "hidden",
    }}>
      <div style={{ position: "relative", background: "#E6F0E6" }}>
        <img
          src={product.image}
          alt={product[`name_${lang}`]}
          style={{ display: "block", width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
        />
        <span style={{
          position: "absolute", top: 14, left: 14,
          fontSize: 11, fontWeight: 700, padding: "5px 10px",
          background: "var(--ink)", color: "var(--bg)", borderRadius: 999,
          fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em",
        }}>{product[`tag_${lang}`]}</span>
      </div>
      <div style={{ padding: "0 24px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.5 }}>{product[`blurb_${lang}`]}</p>
        <div className="row-between" style={{ marginTop: "auto" }}>
          <div className="row" style={{ gap: 8, alignItems: "baseline" }}>
            <div className="mono" style={{ fontSize: 22, fontWeight: 700, color: "var(--ink)" }}>{formatIDR(product.price)}</div>
            {product.priceOld && (
              <div className="mono muted" style={{ fontSize: 13, fontWeight: 600, textDecoration: "line-through", opacity: 0.55 }}>{formatIDR(product.priceOld)}</div>
            )}
          </div>
          <span className="row" style={{ color: "var(--ink-2)", fontSize: 13, fontWeight: 500, gap: 6 }}>
            Detail <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </button>
  );
}

function WealthTrackerLandingTeaser({ onNavigate }) {
  const { lang } = useT();
  return (
    <Section>
      <div className="card" style={{
        padding: 0, overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
        gap: 0,
        alignItems: "center",
        border: "1px solid rgba(94,229,176,0.25)",
        background: "linear-gradient(135deg, rgba(94,229,176,0.06), transparent 60%)",
      }} className="wta-teaser-grid">

        <div style={{ padding: "40px 40px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(94,229,176,0.12)", border: "1px solid rgba(94,229,176,0.25)",
            color: "var(--accent)", fontSize: 12, fontWeight: 700, letterSpacing: "0.06em",
            padding: "5px 14px", borderRadius: 999, marginBottom: 20,
          }}>
            🤖 {lang === "id" ? "PRODUK UNGGULAN" : "FEATURED PRODUCT"}
          </span>

          <h2 style={{ fontSize: "clamp(26px, 3vw, 36px)", marginBottom: 14, lineHeight: 1.15 }}>
            {lang === "id" ? (
              <>Wealth Tracker AI —<br /><span style={{ color: "var(--accent)" }}>Catat Uang Otomatis</span></>
            ) : (
              <>Wealth Tracker AI —<br /><span style={{ color: "var(--accent)" }}>Auto Money Tracking</span></>
            )}
          </h2>

          <p className="ink-2" style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 24, maxWidth: 440 }}>
            {lang === "id"
              ? "Kirim pesan atau foto struk lewat Telegram — AI langsung mencatat, mengkategorikan, dan merangkum ke Google Sheets-mu secara otomatis."
              : "Send a message or receipt photo via Telegram — AI automatically records, categorizes, and summarizes it into your Google Sheets."}
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button
              variant="primary"
              onClick={() => window.open("wealth-tracker-ai.html", "_blank")}
              iconRight={<ArrowRight size={16} />}
            >
              {lang === "id" ? "Lihat Landing Page" : "View Landing Page"}
            </Button>
            <Button
              variant="outline"
              onClick={() => onNavigate({ name: "product", id: "wealth-tracker-ai" })}
            >
              {lang === "id" ? "Beli Sekarang" : "Buy Now"}
            </Button>
          </div>
        </div>

        <div style={{ padding: 24 }}>
          <div style={{
            background: "#0e1621", borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ background: "#17212b", padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🤖</div>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>WealthTracker AI</span>
            </div>
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ alignSelf: "flex-end", background: "#2b5278", color: "#fff", padding: "8px 12px", borderRadius: "10px 10px 2px 10px", fontSize: 12, maxWidth: "85%" }}>
                beli bensin 80 ribu
              </div>
              <div style={{ alignSelf: "flex-start", background: "#182533", color: "#e8e8e8", padding: "8px 12px", borderRadius: "10px 10px 10px 2px", fontSize: 12, maxWidth: "85%" }}>
                ✅ Tercatat!<br />📂 Transportasi · Rp 80.000<br />💰 Saldo: Rp 2.854.000
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 760px) { .wta-teaser-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

function JasmineSection({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
        gap: 48,
        alignItems: "center",
      }} className="jas-grid">
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "4/5",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 24,
            overflow: "hidden",
            position: "relative",
          }}>
            <img
              src="/assets/jasmine-profile.jpeg"
              alt="Jasmine — Sharia Life Planner Manulife Indonesia"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, padding: 14, background: "color-mix(in oklab, var(--bg) 85%, transparent)", backdropFilter: "blur(20px)", borderRadius: 14, border: "1px solid var(--border)" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--muted)", fontWeight: 600, letterSpacing: "0.1em" }}>SHARIA LIFE PLANNER · MANULIFE</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginTop: 4, fontFamily: "Plus Jakarta Sans, sans-serif", letterSpacing: "-0.01em" }}>Jannatul Jasmine, SE, WPPE</div>
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>{lang === "id" ? "PROFIL KONSULTAN" : "CONSULTANT PROFILE"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id"
              ? <>Quick Call 10 Menit —<br /><span style={{ color: "var(--accent)" }}>Konsultasi Asuransi & Investasi</span></>
              : <>10-Minute Quick Call —<br /><span style={{ color: "var(--accent)" }}>Insurance & Investment Consultation</span></>}
          </h2>
          <p className="ink-2" style={{ fontSize: 17, marginTop: 20 }}>
            {lang === "id"
              ? "Sharia Life Planner Manulife Indonesia yang menggunakan pendekatan financial planning untuk menemukan produk asuransi dan investasi yang sesuai kebutuhanmu."
              : "Manulife Indonesia Sharia Life Planner who uses a financial planning approach to find insurance and investment products that fit your needs."}
          </p>

          {/* Credentials */}
          <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
            {(lang === "id" ? [
              "Profesional agent sejak 2021",
              "Lisensi AAJI, AASI, WPPE",
            ] : [
              "Professional agent since 2021",
              "Licensed AAJI, AASI, WPPE",
            ]).map((it) => (
              <li key={it} className="row" style={{ gap: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: 999, background: "var(--accent)", color: "var(--accent-ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={14} stroke={3} />
                </span>
                <span style={{ fontSize: 15 }}>{it}</span>
              </li>
            ))}
          </ul>

          {/* Cakupan Konsultasi */}
          <div style={{ marginTop: 28, padding: 20, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16 }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 14 }}>
              {lang === "id" ? "CAKUPAN KONSULTASI" : "CONSULTATION COVERAGE"}
            </div>
            <ol style={{ padding: "0 0 0 18px", margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {(lang === "id" ? [
                "Review polis asuransi",
                "Konsultasi kebutuhan asuransi & investasi",
                "Hitung kebutuhan asuransi & investasi: premi, uang pertanggungan",
                "Lainnya",
              ] : [
                "Insurance policy review",
                "Insurance & investment needs consultation",
                "Calculate insurance & investment needs: premium, sum insured",
                "Others",
              ]).map((it) => (
                <li key={it} style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{it}</li>
              ))}
            </ol>
          </div>

          <div style={{ marginTop: 28 }}>
            <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "book" })} iconRight={<ArrowRight size={18} />}>
              {lang === "id" ? "Free Konsultasi 1-on-1 · 10 Menit" : "Free 1-on-1 Consultation · 10 Minutes"}
            </Button>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .jas-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  );
}

function ProgramTeaser({ onNavigate }) {
  const { t, lang } = useT();
  const featured = PROGRAMS.filter((p) => ["warisan", "haji", "pendidikan"].includes(p.id));
  return (
    <Section>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)", gap: 48, alignItems: "center" }} className="pgt-grid">
        <div>
          <Eyebrow>{lang === "id" ? "03 — PROGRAM ASURANSI DAN INVESTASI" : "03 — INSURANCE & INVESTMENT PROGRAMS"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id"
              ? <>Temukan produk asuransi dan investasi yang <span style={{ color: "var(--accent)" }}>sesuai kebutuhanmu</span> disini.</>
              : <>Find the insurance and investment products that <span style={{ color: "var(--accent)" }}>fit your needs</span> here.</>}
          </h2>
          <div className="row" style={{ marginTop: 28, gap: 12, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => onNavigate({ name: "program" })} iconRight={<ArrowRight size={16} />}>
              {lang === "id" ? "Lihat semua program" : "See all programs"}
            </Button>
            <Button variant="outline" onClick={() => onNavigate({ name: "book", type: "free" })}>
              {lang === "id" ? "Konsultasi gratis" : "Free consultation"}
            </Button>
          </div>
        </div>

        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr", gridAutoRows: "180px" }} className="pgt-cards">
          {featured.map((p, i) => {
            const Icon = window[p.icon] || ShieldCheck;
            return (
              <button
                key={p.id}
                onClick={() => onNavigate({ name: "program" })}
                className="card-hover"
                style={{
                  background: p.color, color: "#0a0a0a",
                  border: 0, borderRadius: 24, padding: 22,
                  cursor: "pointer", font: "inherit", textAlign: "left",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  gridRow: i === 0 ? "span 2" : "auto",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} stroke={2} />
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10, fontWeight: 600, opacity: 0.6, letterSpacing: "0.1em" }}>
                    {String(i + 1).padStart(2, "0")} / 06
                  </div>
                  <h4 style={{ fontSize: i === 0 ? 24 : 18, color: "inherit", marginTop: 6, lineHeight: 1.1 }}>{p[`title_${lang}`]}</h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 980px) { .pgt-grid { grid-template-columns: 1fr !important; } .pgt-cards { grid-auto-rows: 140px !important; } }`}</style>
    </Section>
  );
}

function WebinarTeaser({ onNavigate }) {
  const { t, lang } = useT();
  const upcoming = WEBINARS.filter((w) => !w.past);
  const past = WEBINARS.filter((w) => w.past);

  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div className="row-between" style={{ marginBottom: 40, alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div style={{ maxWidth: 600 }}>
          <Eyebrow>{lang === "id" ? "EVENT WEBINAR" : "WEBINAR EVENTS"}</Eyebrow>
          <h2 style={{ marginTop: 16 }}>
            {lang === "id"
              ? "Edukasi literasi keuangan dengan topik yang beragam sesuai kebutuhan."
              : "Financial literacy education with diverse topics tailored to your needs."}
          </h2>
        </div>
        <Button variant="outline" onClick={() => onNavigate({ name: "webinar" })} iconRight={<ArrowRight size={16} />}>
          {lang === "id" ? "Semua webinar" : "All webinars"}
        </Button>
      </div>

      {upcoming.length === 0 && (
        <div className="card" style={{
          background: "var(--ink)", color: "var(--bg)", border: 0,
          padding: "36px 32px", marginBottom: 40,
          display: "flex", flexDirection: "column", gap: 12,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: "50%", background: "var(--accent)", opacity: 0.15 }} />
          <span style={{
            alignSelf: "flex-start", position: "relative",
            background: "var(--accent)", color: "var(--accent-ink)",
            padding: "5px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700,
            fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em",
          }}>★ {lang === "id" ? "WEBINAR TERDEKAT" : "NEXT WEBINAR"}</span>
          <h3 style={{ color: "inherit", fontSize: 34, position: "relative" }}>Coming Soon</h3>
          <p style={{ opacity: 0.75, fontSize: 15, maxWidth: 460, position: "relative" }}>
            {lang === "id"
              ? "Jadwal webinar berikutnya lagi disiapkan. Pantau Instagram @wealthplanner.id biar nggak ketinggalan."
              : "The next webinar schedule is being prepared. Follow @wealthplanner.id so you don't miss it."}
          </p>
        </div>
      )}

      <WebinarSlider past={past} lang={lang} />
    </Section>
  );
}

function WhySection() {
  const { t } = useT();
  const items = [
    { t: t.why_1_t, d: t.why_1_d, icon: ShieldCheck },
    { t: t.why_2_t, d: t.why_2_d, icon: ChartBar },
    { t: t.why_3_t, d: t.why_3_d, icon: Sparkle },
    { t: t.why_4_t, d: t.why_4_d, icon: Briefcase },
  ];
  return (
    <Section style={{ background: "var(--bg-2)" }}>
      <div style={{ marginBottom: 48, maxWidth: 720 }}>
        <Eyebrow>{t.why_eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 16 }}>{t.why_title}</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {items.map((it, i) => (
          <Card key={i} style={{ minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "var(--chip)", display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--accent)",
            }}>
              <it.icon size={20} />
            </div>
            <div>
              <h4 style={{ marginTop: 24, marginBottom: 10, fontSize: 22, lineHeight: 1.15 }}>{it.t}</h4>
              <p className="ink-2" style={{ fontSize: 14, lineHeight: 1.5 }}>{it.d}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function BigCTA({ onNavigate }) {
  const { t, lang } = useT();
  return (
    <Section>
      <div style={{
        background: "var(--ink)",
        color: "var(--bg)",
        borderRadius: 32,
        padding: "clamp(48px, 7vw, 96px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <Tag variant="accent">★ {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}</Tag>
        <h2 style={{ marginTop: 24, color: "inherit", maxWidth: 720, marginInline: "auto" }}>
          {lang === "id"
            ? <>Satu langkah kecil hari ini bisa melindungi<br />keluargamu bertahun-tahun ke depan.</>
            : <>One small step today can protect<br />your family for years to come.</>}
        </h2>
        <p style={{ fontSize: 17, marginTop: 16, opacity: 0.75, maxWidth: 520, marginInline: "auto" }}>
          {lang === "id"
            ? "Konsultasi gratis 10 menit, akan dapat free ilustrasi kebutuhan proteksi dan investasi."
            : "Free 10-minute consultation, get a free illustration of your protection and investment needs."}
        </p>
        <div className="row" style={{ gap: 12, marginTop: 36, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" onClick={() => onNavigate({ name: "book" })} iconRight={<ArrowRight size={18} />}>
            {lang === "id" ? "Free Konsultasi 1-on-1 · 10 Menit" : "Free 1-on-1 Consultation · 10 Minutes"}
          </Button>
          <button onClick={() => onNavigate({ name: "calc" })} className="btn btn-lg" style={{ background: "transparent", border: "1.5px solid currentColor", color: "inherit" }}>
            {lang === "id" ? "Atau coba kalkulator dulu" : "Or try the calculator first"}
          </button>
        </div>
        <p style={{ fontSize: 12, marginTop: 24, opacity: 0.5 }}>
          {lang === "id"
            ? "🔒 OJK Licensed · Manulife Indonesia · Syariah-compliant · 150+ keluarga terlindungi"
            : "🔒 OJK Licensed · Manulife Indonesia · Sharia-compliant · 150+ families protected"}
        </p>
      </div>
    </Section>
  );
}

function WebinarSlider({ past, lang }) {
  const starEnergy = {
    id: "star-energy",
    image: "/assets/webinars/poster seminar pt star energy.jpeg",
    title: "Membangun Masa Depan Anak, Menjaga Masa Depan Diri",
    org: "PT. Star Energy Geothermal",
    date: "12 Juni 2026",
    location: "Power Station, Pengalengan",
  };

  const allItems = [starEnergy, ...past.map((w) => ({ id: w.id, image: w.image, title: w[`title_${lang}`] || w.title, org: "", date: w.date || "", location: "" }))];

  const PER_PAGE = 3;
  const totalPages = Math.ceil(allItems.length / PER_PAGE);
  const [page, setPage] = React.useState(0);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visible = allItems.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="webinar-grid">
        {visible.map((item) => (
          <div key={item.id} className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ background: "var(--surface-2)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "contain", display: "block" }}
              />
            </div>
            <div style={{ padding: "16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
              {item.org && <span className="mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "var(--muted)" }}>{item.org}</span>}
              <p style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4, margin: 0, color: "var(--ink)" }}>{item.title}</p>
              {item.date && <span className="muted mono" style={{ fontSize: 11, marginTop: 4 }}>📅 {item.date}</span>}
              {item.location && <span className="muted mono" style={{ fontSize: 11 }}>📍 {item.location}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows + dots — only show if more than 1 page */}
      {totalPages > 1 && (
        <div className="row" style={{ justifyContent: "center", gap: 12, marginTop: 24, alignItems: "center" }}>
          <button onClick={prev} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--border)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ArrowRight size={16} style={{ transform: "rotate(180deg)" }} />
          </button>
          <div className="row" style={{ gap: 6 }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} style={{
                width: i === page ? 20 : 8, height: 8, borderRadius: 999, border: 0, cursor: "pointer",
                background: i === page ? "var(--accent)" : "var(--border)", padding: 0, transition: "all .2s",
              }} />
            ))}
          </div>
          <button onClick={next} style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--border)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
      <style>{`@media (max-width: 800px) { .webinar-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 500px) { .webinar-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

Object.assign(window, { HomeScreen });
