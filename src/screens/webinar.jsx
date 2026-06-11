// webinar.jsx — webinar listing page + reusable teaser card

function WebinarScreen({ onNavigate }) {
  const { t, lang } = useT();
  const upcoming = WEBINARS.filter((w) => !w.past);
  const past = WEBINARS.filter((w) => w.past);

  return (
    <div>
      <Section style={{ paddingTop: 56, paddingBottom: 16 }}>
        <div style={{ maxWidth: 820 }}>
          <Eyebrow>{lang === "id" ? "EVENT WEBINAR" : "WEBINAR EVENTS"}</Eyebrow>
          <h1 style={{ marginTop: 16 }}>
            {lang === "id" ? "Lihat jadwal terdekat, jangan sampai tertinggal" : "Check the schedule — don't miss out"}
          </h1>
          <p className="ink-2" style={{ fontSize: 19, marginTop: 20, maxWidth: 640 }}>
            {lang === "id"
              ? "Seminar & workshop yang bantu kamu menyiapkan tujuan keuangan sesuai kebutuhan."
              : "Seminars & workshops that help you prepare your financial goals based on your needs."}
          </p>
        </div>
      </Section>

      <Section style={{ paddingTop: 16 }}>
        <h3 style={{ fontSize: 22, marginBottom: 20 }}>{lang === "id" ? "Webinar terdekat" : "Upcoming webinar"}</h3>
        {upcoming.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {upcoming.map((w) => <WebinarCard key={w.id} webinar={w} large />)}
          </div>
        ) : (
          <ComingSoonCard lang={lang} />
        )}

        <h3 style={{ fontSize: 22, marginTop: 56, marginBottom: 20 }}>{lang === "id" ? "Webinar sebelumnya" : "Past webinars"}</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {past.map((w) => <WebinarCard key={w.id} webinar={w} />)}
        </div>
      </Section>
    </div>
  );
}

function ComingSoonCard({ lang }) {
  return (
    <div className="card" style={{
      background: "var(--ink)", color: "var(--bg)", border: 0,
      padding: "40px 32px", display: "flex", flexDirection: "column", gap: 12,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: "50%", background: "var(--accent)", opacity: 0.15 }} />
      <span style={{
        alignSelf: "flex-start",
        background: "var(--accent)", color: "var(--accent-ink)",
        padding: "5px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700,
        fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", position: "relative",
      }}>★ {lang === "id" ? "WEBINAR TERDEKAT" : "NEXT WEBINAR"}</span>
      <h3 style={{ color: "inherit", fontSize: 34, position: "relative" }}>Coming Soon</h3>
      <p style={{ opacity: 0.75, fontSize: 15, maxWidth: 460, position: "relative" }}>
        {lang === "id"
          ? "Jadwal webinar berikutnya lagi disiapkan. Pantau Instagram @wealthplanner.id biar nggak ketinggalan."
          : "The next webinar schedule is being prepared. Follow @wealthplanner.id so you don't miss it."}
      </p>
    </div>
  );
}

function WebinarCard({ webinar, large }) {
  const { lang } = useT();
  if (webinar.past) {
    return (
      <div className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative", background: "#F2F0E6" }}>
          <img
            src={webinar.image}
            alt={webinar[`title_${lang}`]}
            style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }}
          />
          <span style={{
            position: "absolute", top: 14, left: 14,
            background: "var(--ink)", color: "var(--bg)",
            padding: "5px 10px", borderRadius: 999,
            fontSize: 10, fontWeight: 700,
            fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em",
          }}>✓ {lang === "id" ? "SUDAH BERLANGSUNG" : "COMPLETED"}</span>
        </div>
        <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div className="mono muted" style={{ fontSize: 11, letterSpacing: "0.08em" }}>{webinar[`date_${lang}`]} · {webinar.time}</div>
          <h4 style={{ fontSize: 17, lineHeight: 1.2 }}>{webinar[`title_${lang}`]}</h4>
          {webinar[`subtitle_${lang}`] && (
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>{webinar[`subtitle_${lang}`]}</p>
          )}
          <div className="row" style={{ gap: 8, color: "var(--muted)", fontSize: 12, marginTop: 4 }}>
            <User size={13} /> <span>{webinar.speaker}</span>
          </div>
          <div className="row-between" style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
            <span className="row" style={{ gap: 6, color: "var(--muted)", fontSize: 12 }}>
              <Video size={13} /> {webinar.format}
            </span>
            {webinar.price && <Tag variant="outline">Invest {formatIDR(webinar.price)}</Tag>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-hover" style={{
      minHeight: large ? 240 : "auto",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      position: "relative",
      overflow: "hidden",
    }}>
      {webinar[`tag_${lang}`] && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          background: "var(--accent)", color: "var(--accent-ink)",
          padding: "5px 10px", borderRadius: 999,
          fontSize: 10, fontWeight: 700,
          fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em",
        }}>★ {webinar[`tag_${lang}`]}</div>
      )}

      <div className="row" style={{ gap: 10, alignItems: "center" }}>
        <span style={{
          background: "var(--chip)", padding: "5px 10px", borderRadius: 8,
          fontFamily: "JetBrains Mono, monospace", fontSize: 11, fontWeight: 600, letterSpacing: "0.06em",
          color: "var(--accent)",
        }}>
          <Calendar size={11} style={{ marginRight: 6, verticalAlign: "middle" }} />
          {webinar[`date_${lang}`]}
        </span>
        <span className="mono muted" style={{ fontSize: 11, letterSpacing: "0.06em" }}>{webinar.time}</span>
      </div>

      <h4 style={{ fontSize: large ? 22 : 17, lineHeight: 1.2 }}>{webinar[`title_${lang}`]}</h4>

      <div className="row" style={{ gap: 16, color: "var(--muted)", fontSize: 12, flexWrap: "wrap" }}>
        <span className="row" style={{ gap: 6 }}>
          <User size={13} /> {webinar.speaker}
        </span>
        <span className="row" style={{ gap: 6 }}>
          <Video size={13} /> {webinar.format}
        </span>
      </div>

      <div className="row-between" style={{ marginTop: "auto", paddingTop: 8 }}>
        <div className="row" style={{ gap: 6 }}>
          {webinar.free && <Tag variant="accent">FREE</Tag>}
          <span className="muted" style={{ fontSize: 12 }}>{webinar[`spots_${lang}`]}</span>
        </div>
        <Button variant="primary" size="sm" iconRight={<ArrowRight size={14} />}>
          {lang === "id" ? "Daftar" : "Register"}
        </Button>
      </div>
    </div>
  );
}

Object.assign(window, { WebinarScreen, WebinarCard });
