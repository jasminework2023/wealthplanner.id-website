// app.jsx — main app with router, theme, i18n, tweaks

function App() {
  // ── Tweaks (persisted to file via host) ────────────────────────────
  const [tweaks, setTweak] = useTweaks(window.__TWEAK_DEFAULTS__);

  // Apply theme to <html>
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.dark ? "dark" : "light");
    document.documentElement.style.colorScheme = tweaks.dark ? "dark" : "light";
  }, [tweaks.dark]);

  // Apply accent
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", tweaks.accent);
    // Pick ink that's readable on accent
    const ink = tweaks.accent === "#FF6B6B" || tweaks.accent === "#7C9CFF" ? "#0a0a0a" :
                tweaks.accent === "#5EE5B0" ? "#04261a" :
                tweaks.accent === "#C6F24E" ? "#1a2400" :
                "#1a1400";
    document.documentElement.style.setProperty("--accent-ink", ink);
  }, [tweaks.accent]);

  // Apply lang
  React.useEffect(() => {
    document.documentElement.lang = tweaks.lang;
    window.__currentLang__ = tweaks.lang;
  }, [tweaks.lang]);

  const i18nValue = React.useMemo(() => ({ t: I18N[tweaks.lang] || I18N.id, lang: tweaks.lang }), [tweaks.lang]);

  // ── Router state ────────────────────────────────────────────────────
  const [route, setRoute] = React.useState({ name: "home" });

  const navigate = (r) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── App-wide mock state ────────────────────────────────────────────
  const [cart, setCart] = React.useState([]);
  const [purchases, setPurchases] = React.useState(["cashflow", "invest"]);
  const [savedResults, setSavedResults] = React.useState([]);
  const [bookings, setBookings] = React.useState([]);

  const addToCart = (product) => {
    setCart((c) => {
      if (c.find((x) => x.id === product.id)) return c;
      return [...c, product];
    });
    // Toast
    showToast(`${product.name_id || product.name} ditambahkan ke keranjang`);
  };

  const buyNow = (product) => {
    setCart([product]);
    navigate({ name: "checkout" });
  };

  const completePurchase = (items) => {
    setPurchases((p) => Array.from(new Set([...p, ...items.map((i) => i.id)])));
    setCart([]);
  };

  const saveResult = (result) => {
    setSavedResults((r) => [...r, { ...result, savedAt: Date.now() }]);
    showToast("Hasil disimpan ke dashboard");
  };

  const confirmBooking = (b) => {
    setBookings((bs) => [...bs, b]);
    showToast("Booking dikonfirmasi");
  };

  // ── Render screen ──────────────────────────────────────────────────
  let screen;
  switch (route.name) {
    case "home":
      screen = <HomeScreen onNavigate={navigate} heroLayout={tweaks.heroLayout} />;
      break;
    case "calc":
      screen = <HitungHub onNavigate={navigate} />;
      break;
    case "calculator":
      screen = <CalculatorScreen id={route.id || "checkup"} onNavigate={navigate} onSaveResult={saveResult} />;
      break;
    case "products":
      screen = <ProductsScreen onNavigate={navigate} cart={cart} onAddToCart={addToCart} />;
      break;
    case "product":
      screen = <ProductDetailScreen id={route.id || "invest"} onNavigate={navigate} onAddToCart={addToCart} onBuyNow={buyNow} />;
      break;
    case "checkout":
      screen = <CheckoutScreen cart={cart} onNavigate={navigate} onCompletePurchase={completePurchase} />;
      break;
    case "dashboard":
      // legacy route — Dashboard is now the home/landing hub (no login)
      screen = <HomeScreen onNavigate={navigate} heroLayout={tweaks.heroLayout} />;
      break;
    case "book":
      screen = <BookingScreen onNavigate={navigate} onConfirmBooking={confirmBooking} intent={route.type} programId={route.program} />;
      break;
    case "program":
      screen = <ProgramScreen onNavigate={navigate} />;
      break;
    case "webinar":
      screen = <WebinarScreen onNavigate={navigate} />;
      break;
    case "about":
      screen = <AboutScreen onNavigate={navigate} />;
      break;
    case "partnership":
      screen = <PartnershipScreen onNavigate={navigate} />;
      break;
    case "contact":
      screen = <ContactScreen onNavigate={navigate} />;
      break;
    default:
      screen = <HomeScreen onNavigate={navigate} heroLayout={tweaks.heroLayout} />;
  }

  return (
    <I18nContext.Provider value={i18nValue}>
      <Nav
        route={route}
        onNavigate={navigate}
        lang={tweaks.lang}
        onLangToggle={() => setTweak("lang", tweaks.lang === "id" ? "en" : "id")}
        dark={tweaks.dark}
        onThemeToggle={() => setTweak("dark", !tweaks.dark)}
        cartCount={cart.length}
      />

      <main>{screen}</main>

      <Footer onNavigate={navigate} />

      {/* Floating cart pill */}
      {cart.length > 0 && route.name !== "checkout" && (
        <button
          onClick={() => navigate({ name: "checkout" })}
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 80,
            background: "var(--ink)",
            color: "var(--bg)",
            padding: "12px 20px",
            borderRadius: 999,
            border: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 12,
            font: "inherit",
            fontSize: 14,
            fontWeight: 600,
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <span style={{ background: "var(--accent)", color: "var(--accent-ink)", padding: "2px 8px", borderRadius: 999, fontSize: 12, fontWeight: 700 }}>{cart.length}</span>
          Lanjut ke checkout
          <ArrowRight size={14} />
        </button>
      )}

      <Toast />

      {/* Tweaks Panel */}
      <TweaksPanel>
        <TweakSection label={i18nValue.t.tw_theme} />
        <TweakToggle label={i18nValue.t.tw_dark} value={tweaks.dark} onChange={(v) => setTweak("dark", v)} />
        <TweakRadio
          label={i18nValue.t.tw_lang}
          value={tweaks.lang}
          options={[{ value: "id", label: "Indonesia" }, { value: "en", label: "English" }]}
          onChange={(v) => setTweak("lang", v)}
        />
        <TweakColor
          label={i18nValue.t.tw_accent}
          value={tweaks.accent}
          options={["#FFB800", "#5EE5B0", "#C6F24E", "#7C9CFF", "#FF6B6B"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Layout" />
        <TweakRadio
          label={i18nValue.t.tw_hero}
          value={tweaks.heroLayout}
          options={[
            { value: "split", label: i18nValue.t.tw_var_split },
            { value: "stack", label: i18nValue.t.tw_var_stack },
            { value: "wide", label: i18nValue.t.tw_var_wide },
          ]}
          onChange={(v) => setTweak("heroLayout", v)}
        />
        <TweakSection label="Jump to screen" />
        <TweakButton label="🏠 Home" onClick={() => navigate({ name: "home" })} />
        <TweakButton label="✦ Hitung Impian" onClick={() => navigate({ name: "calc" })} />
        <TweakButton label="📦 Produk" onClick={() => navigate({ name: "products" })} />
        <TweakButton label="🛒 Checkout (demo)" onClick={() => navigate({ name: "checkout" })} />
        <TweakButton label="📊 Dashboard" onClick={() => navigate({ name: "dashboard" })} />
        <TweakButton label="📅 Booking Jasmine" onClick={() => navigate({ name: "book" })} />
      </TweaksPanel>
    </I18nContext.Provider>
  );
}

// ── Toast (simple global toast) ──────────────────────────────────────
let __toastSetter = null;
function showToast(msg) {
  __toastSetter && __toastSetter({ msg, id: Date.now() });
}
function Toast() {
  const [t, setT] = React.useState(null);
  React.useEffect(() => { __toastSetter = setT; return () => { __toastSetter = null; }; }, []);
  React.useEffect(() => {
    if (!t) return;
    const id = setTimeout(() => setT(null), 2400);
    return () => clearTimeout(id);
  }, [t]);
  if (!t) return null;
  return (
    <div style={{
      position: "fixed",
      top: 88,
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--ink)",
      color: "var(--bg)",
      padding: "12px 18px",
      borderRadius: 999,
      zIndex: 1000,
      fontSize: 14,
      fontWeight: 500,
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      animation: "popIn .25s ease",
    }}>
      <span style={{ width: 18, height: 18, background: "var(--accent)", color: "var(--accent-ink)", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Check size={12} stroke={3} />
      </span>
      {t.msg}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
