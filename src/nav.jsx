// nav.jsx — top nav + footer

function Nav({ route, onNavigate, lang, onLangToggle, dark, onThemeToggle, cartCount }) {
  const { t } = useT();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { k: "home", label: t.nav_home, route: "home" },
    { k: "calc", label: t.nav_calc, route: "calc" },
    {
      k: "products",
      label: t.nav_products,
      dropdown: [
        { k: "program", label: t.nav_products_insurance, route: "program", icon: ShieldCheck },
        { k: "products", label: t.nav_products_digital, route: "products", icon: Wallet },
        { k: "webinar", label: t.nav_products_seminar, route: "webinar", icon: Video || Calendar },
        { k: "book", label: t.nav_products_consult, route: "book", icon: User },
      ],
    },
    { k: "partnership", label: t.nav_partnership, route: "partnership" },
    { k: "wealthtracker", label: "Wealth Tracker AI", external: "wealth-tracker-ai.html" },
    { k: "about", label: t.nav_about, route: "about" },
    { k: "contact", label: t.nav_contact, route: "contact" },
  ];

  return (
    <>
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "color-mix(in oklab, var(--bg) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all .25s ease",
      }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, gap: 16 }}>
          <button
            onClick={() => onNavigate({ name: "home" })}
            style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: 0, color: "inherit", cursor: "pointer", padding: 0 }}
          >
            <Logo />
            <span className="display" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>
              wealthplanner<span style={{ color: "var(--accent)" }}>.id</span>
            </span>
          </button>

          <div className="nav-links" style={{ gap: 4, display: "none", alignItems: "center" }}>
            {links.map((l) => (
              l.dropdown ? (
                <NavDropdown key={l.k} label={l.label} items={l.dropdown} route={route} onNavigate={onNavigate} />
              ) : l.external ? (
                <button
                  key={l.k}
                  onClick={() => window.open(l.external, "_blank")}
                  style={{
                    background: "transparent",
                    border: 0,
                    color: "var(--accent)",
                    padding: "8px 12px",
                    borderRadius: 999,
                    font: "inherit",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all .15s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {l.label}
                </button>
              ) : (
                <button
                  key={l.k}
                  onClick={() => onNavigate({ name: l.route })}
                  style={{
                    background: route?.name === l.route ? "var(--chip)" : "transparent",
                    border: 0,
                    color: route?.name === l.route ? "var(--ink)" : "var(--ink-2)",
                    padding: "8px 12px",
                    borderRadius: 999,
                    font: "inherit",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all .15s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ink)"; }}
                  onMouseLeave={(e) => { if (route?.name !== l.route) e.currentTarget.style.color = "var(--ink-2)"; }}
                >
                  {l.label}
                </button>
              )
            ))}
          </div>

          <div className="row" style={{ gap: 6 }}>
            <IconButton onClick={onThemeToggle} title="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </IconButton>
            <button
              onClick={onLangToggle}
              style={{
                background: "var(--chip)",
                border: 0,
                color: "var(--ink)",
                padding: "8px 12px",
                borderRadius: 999,
                font: "inherit",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                cursor: "pointer",
                fontFamily: "JetBrains Mono, monospace",
              }}
              title="Language"
            >
              {lang.toUpperCase()}
            </button>
            <button
              className="nav-burger"
              onClick={() => setOpen(true)}
              style={{
                background: "var(--chip)",
                border: 0,
                color: "var(--ink)",
                width: 36,
                height: 36,
                borderRadius: 999,
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        <style>{`
          @media (min-width: 1100px) {
            .nav-links { display: flex !important; }
          }
          @media (max-width: 1099px) {
            .nav-burger { display: inline-flex !important; }
          }
        `}</style>
      </nav>

      {open && (
        <div style={{ position: "fixed", inset: 0, background: "var(--bg)", zIndex: 200, padding: 24 }}>
          <div className="row-between">
            <Logo />
            <IconButton onClick={() => setOpen(false)}><X size={18} /></IconButton>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 32 }}>
            {links.map((l) => (
              l.dropdown ? (
                <React.Fragment key={l.k}>
                  <div style={{
                    padding: "16px 0 8px",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--ink)",
                    borderBottom: "1px solid var(--border)",
                  }}>{l.label}</div>
                  {l.dropdown.map((it) => (
                    <button
                      key={it.k}
                      onClick={() => { setOpen(false); onNavigate({ name: it.route }); }}
                      style={{
                        background: "transparent",
                        border: 0,
                        color: "var(--ink-2)",
                        padding: "10px 0 10px 16px",
                        font: "inherit",
                        fontSize: 18,
                        fontWeight: 500,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >→ {it.label}</button>
                  ))}
                </React.Fragment>
              ) : l.external ? (
                <button
                  key={l.k}
                  onClick={() => { setOpen(false); window.open(l.external, "_blank"); }}
                  style={{
                    background: "transparent",
                    border: 0,
                    color: "var(--accent)",
                    padding: "16px 0",
                    font: "inherit",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    cursor: "pointer",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </button>
              ) : (
                <button
                  key={l.k}
                  onClick={() => { setOpen(false); onNavigate({ name: l.route }); }}
                  style={{
                    background: "transparent",
                    border: 0,
                    color: "var(--ink)",
                    padding: "16px 0",
                    font: "inherit",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    textAlign: "left",
                    cursor: "pointer",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function NavDropdown({ label, items, route, onNavigate }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const ref = React.useRef(null);
  const active = items.some((it) => it.route === route?.name);

  const openMe = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeMe = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={openMe}
      onMouseLeave={closeMe}
      style={{ position: "relative" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          background: open || active ? "var(--chip)" : "transparent",
          border: 0,
          color: open || active ? "var(--ink)" : "var(--ink-2)",
          padding: "8px 12px",
          borderRadius: 999,
          font: "inherit",
          fontSize: 13,
          fontWeight: 500,
          cursor: "pointer",
          transition: "all .15s ease",
          whiteSpace: "nowrap",
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        {label}
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s ease" }}>
          <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            minWidth: 280,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            padding: 8,
            boxShadow: "var(--shadow-lg)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {items.map((it) => {
            const Icon = it.icon;
            const isActive = route?.name === it.route;
            return (
              <button
                key={it.k}
                onClick={() => { setOpen(false); onNavigate({ name: it.route }); }}
                style={{
                  background: isActive ? "var(--chip)" : "transparent",
                  border: 0,
                  color: "var(--ink)",
                  padding: "10px 12px",
                  borderRadius: 12,
                  font: "inherit",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "background .15s ease",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "var(--chip)"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                {Icon && <span style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: "var(--chip)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  color: "var(--ink-2)",
                }}><Icon size={15} /></span>}
                <span>{it.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function IconButton({ children, onClick, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        background: "var(--chip)",
        border: 0,
        color: "var(--ink)",
        width: 36,
        height: 36,
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background .15s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--chip-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--chip)"; }}
    >
      {children}
    </button>
  );
}

function Logo() {
  return (
    <div style={{
      width: 44,
      height: 32,
      borderRadius: 9,
      background: "var(--accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 7px",
    }}>
      <img
        src="assets/brand/logo-mark-white.png"
        alt="wealthplanner.id"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

function Footer({ onNavigate }) {
  const { t } = useT();
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80, padding: "64px 0 32px" }}>
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.5fr) repeat(3, minmax(0, 1fr))",
          gap: 40,
          marginBottom: 56,
        }}>
          <div>
            <div className="row" style={{ gap: 10, marginBottom: 16 }}>
              <Logo />
              <span className="display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
                wealthplanner<span style={{ color: "var(--accent)" }}>.id</span>
              </span>
            </div>
            <p className="muted" style={{ fontSize: 14, maxWidth: 320 }}>{t.foot_tag}</p>
          </div>
          <FooterCol title={t.foot_about} items={["Tentang Kami", "Jasmine", "Career", "Blog"]} />
          <FooterCol title={t.foot_corp} items={["Employee Benefit", "Webinar & Workshop", "Manulife Partnership"]} />
          <FooterCol title={t.foot_contact} items={["wealthplanner234@gmail.com", "wa.me/6285890065850", "Instagram", "TikTok"]} />
        </div>
        <div className="row-between" style={{ paddingTop: 24, borderTop: "1px solid var(--border)", flexWrap: "wrap", gap: 12 }}>
          <span className="muted mono" style={{ fontSize: 12 }}>{t.foot_rights}</span>
          <span className="muted mono" style={{ fontSize: 12 }}>{t.foot_legal}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 style={{ fontSize: 13, fontFamily: "JetBrains Mono, monospace", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 16 }}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((it) => (
          <li key={it}>
            <a href="#" style={{ color: "var(--ink)", textDecoration: "none", fontSize: 14 }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink)"}
            >{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { Nav, Footer, IconButton, Logo });
