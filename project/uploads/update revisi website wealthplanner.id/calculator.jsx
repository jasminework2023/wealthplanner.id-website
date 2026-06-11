// calculator.jsx — single calculator detail with logic per type

function CalculatorScreen({ id, onNavigate, onSaveResult }) {
  const { t, lang } = useT();
  const calc = CALCULATORS.find((c) => c.id === id) || CALCULATORS[0];
  const Icon = window[calc.icon];

  return (
    <div>
      <Section style={{ paddingTop: 32, paddingBottom: 16 }}>
        <button
          onClick={() => onNavigate({ name: "calc" })}
          style={{
            background: "var(--chip)", border: 0, color: "var(--ink-2)",
            padding: "8px 14px", borderRadius: 999, font: "inherit",
            fontSize: 13, fontWeight: 500, cursor: "pointer", marginBottom: 24,
            display: "inline-flex", alignItems: "center", gap: 6,
          }}
        >
          ← Semua kalkulator
        </button>

        <div className="row" style={{ gap: 18, marginBottom: 8 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: calc.color, color: "#000",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            {Icon && <Icon size={28} stroke={2} />}
          </div>
          <div>
            <div className="mono muted" style={{ fontSize: 12, letterSpacing: "0.12em" }}>{t.calc_hub_eyebrow}</div>
            <h1 style={{ fontSize: "clamp(36px,5vw,64px)" }}>{t[`c_${id}`]}</h1>
          </div>
        </div>
        <p className="ink-2" style={{ fontSize: 18, marginTop: 12, maxWidth: 620 }}>{t[`c_${id}_sub`]}</p>
      </Section>

      <Section style={{ paddingTop: 24, paddingBottom: 24 }}>
        <CalculatorBody id={id} onSaveResult={onSaveResult} onNavigate={onNavigate} />
      </Section>
    </div>
  );
}

// ============================================================
// CTA MAP — per calculator: digital product + proteksi awareness
// ============================================================
const CALC_CTA_MAP = {
  checkup: {
    productId: "cashflow",
    proteksi: {
      title_id: "Proteksi Finansial",
      title_en: "Financial Protection",
      concern_id: "Kalo tiba-tiba sakit atau tutup usia, cashflow bisa bengkak. Siapa yang nanggung?",
      concern_en: "If illness or sudden loss hits, cashflow can blow up. Who'll cover it?",
    },
  },
  rumah: {
    productId: "kpr",
    proteksi: {
      title_id: "Proteksi Rumah Impian",
      title_en: "Dream Home Protection",
      concern_id: "Kamu ambil KPR, tapi kalo something happens — siapa yang lanjutin cicilannya? Cek proteksi gratis.",
      concern_en: "You took a mortgage — but if something happens, who continues the payments? Check protection free.",
    },
  },
  edu: {
    productId: "edu",
    proteksi: {
      title_id: "Proteksi Dana Pendidikan",
      title_en: "Education Fund Protection",
      concern_id: "Walaupun kita udah gaada, sekolah anak tetap aman. Konsultasi proteksi gratis.",
      concern_en: "Even when you're gone, your kids' education stays safe. Book a free protection chat.",
    },
  },
  pension: {
    productId: "pension",
    proteksi: {
      title_id: "Proteksi Dana Pensiun",
      title_en: "Retirement Fund Protection",
      concern_id: "Pas pensiun, biaya hidup & sakit gak harus jadi beban anak. Cek strategi proteksinya.",
      concern_en: "At retirement, living + healthcare costs shouldn't burden your kids. Check protection strategy.",
    },
  },
  warisan: {
    productId: "pension",
    proteksi: {
      title_id: "Proteksi Warisan",
      title_en: "Inheritance Protection",
      concern_id: "Dengan asuransi syariah, warisan jadi adil — likuid, langsung sampai ke ahli waris.",
      concern_en: "With sharia insurance, inheritance is fair — liquid, straight to beneficiaries.",
    },
  },
  haji: {
    productId: null,
    proteksi: {
      title_id: "Pelunasan Haji & Umroh",
      title_en: "Hajj & Umroh Funding",
      concern_id: "Program investasi terproteksi — kalo meninggal sebelum berangkat, bisa jadi biaya badal.",
      concern_en: "Protected investment program — if you pass before departure, funds can cover a badal.",
    },
  },
  zakat: {
    productId: null,
    proteksi: {
      title_id: "Program Wakaf",
      title_en: "Waqf Program",
      concern_id: "Ada program waqaf dalam asuransi syariah — pahala mengalir, harta tetap di keluarga.",
      concern_en: "Waqf programs inside sharia insurance — ongoing reward, while wealth stays with family.",
    },
  },
  invest: {
    productId: "invest",
    proteksi: {
      title_id: "Proteksi Investasi",
      title_en: "Investment Protection",
      concern_id: "Sakit atau musibah bisa makan nilai investasi. Pisahkan dana risk dengan proteksi.",
      concern_en: "Illness or misfortune can eat into your investments. Separate risk capital with protection.",
    },
  },
  insurance: {
    productId: "insurance",
    proteksi: {
      title_id: "Konsultasi Asuransi",
      title_en: "Insurance Consultation",
      concern_id: "Audit polis lama atau pilih polis baru bareng Jasmine. Gratis 30 menit.",
      concern_en: "Audit your existing policy or pick a new one with Jasmine. Free 30-min session.",
    },
  },
};

function CalculatorBody({ id, onSaveResult, onNavigate }) {
  switch (id) {
    case "checkup": return <CheckupCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "rumah": return <RumahCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "edu": return <EduCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "pension": return <PensionCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "warisan": return <WarisanCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "haji": return <HajiCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "zakat": return <ZakatCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "invest": return <InvestCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "insurance": return <InsuranceCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "kpr": return <RumahCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    case "emergency": return <CheckupCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
    default: return <CheckupCalc onSaveResult={onSaveResult} onNavigate={onNavigate} />;
  }
}

// ============================================================
// 1. FINANCIAL CHECKUP
// ============================================================
function CheckupCalc({ onSaveResult, onNavigate }) {
  const [income, setIncome] = React.useState(10000000);
  const [expenses, setExpenses] = React.useState(7500000);
  const [savings, setSavings] = React.useState(20000000);
  const [debt, setDebt] = React.useState(500000);
  const [assets, setAssets] = React.useState(50000000);

  const saving = income - expenses;
  const savingRate = income > 0 ? (saving / income) * 100 : 0;
  const debtRatio = income > 0 ? (debt / income) * 100 : 0;
  const emergencyMonths = expenses > 0 ? savings / expenses : 0;
  const liquidity = (savings / Math.max(assets, 1)) * 100;

  let score = 0;
  if (savingRate >= 20) score += 25;
  else if (savingRate >= 10) score += 18;
  else if (savingRate > 0) score += 10;
  if (debtRatio === 0) score += 25;
  else if (debtRatio < 10) score += 22;
  else if (debtRatio < 30) score += 15;
  else score += 5;
  if (emergencyMonths >= 6) score += 30;
  else if (emergencyMonths >= 3) score += 22;
  else if (emergencyMonths >= 1) score += 12;
  if (liquidity >= 30) score += 20;
  else if (liquidity >= 15) score += 14;
  else score += 7;

  const grade = score >= 80 ? "A" : score >= 65 ? "B" : score >= 50 ? "C" : "D";
  const color = score >= 80 ? "var(--positive)" : score >= 65 ? "#C6F24E" : score >= 50 ? "#FFB800" : "var(--negative)";

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Pemasukan bulanan" prefix="Rp" value={income} onChange={setIncome} step={500000} />
          <NumberInput label="Pengeluaran bulanan" prefix="Rp" value={expenses} onChange={setExpenses} step={500000} />
          <NumberInput label="Total tabungan" prefix="Rp" value={savings} onChange={setSavings} step={1000000} />
          <NumberInput label="Cicilan utang bulanan" prefix="Rp" value={debt} onChange={setDebt} step={100000} />
          <NumberInput label="Total aset (termasuk tabungan)" prefix="Rp" value={assets} onChange={setAssets} step={5000000} />
        </>
      }
      results={
        <>
          <div style={{
            background: color, color: "#0a0a0a", borderRadius: 24, padding: 32,
          }}>
            <div className="row-between">
              <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", opacity: 0.75 }}>SKOR KEUANGANMU</div>
              <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 800, fontSize: 64, lineHeight: 1 }}>{grade}</div>
            </div>
            <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontWeight: 700, fontSize: 96, lineHeight: 0.9, marginTop: 16 }}>
              {Math.round(score)}<span style={{ fontSize: 28, opacity: 0.5 }}>/100</span>
            </div>
            <p style={{ fontSize: 14, marginTop: 18, opacity: 0.75, maxWidth: 380 }}>
              {score >= 80 ? "Mantap! Keuangan kamu sehat. Saatnya scale up investasi & rencana jangka panjang." :
               score >= 65 ? "Lumayan! Ada beberapa area yang bisa ditingkatkan, terutama dana darurat & alokasi investasi." :
               score >= 50 ? "Cukup. Fokus naikkan tabungan & turunkan rasio utang." :
               "Perlu perhatian. Mulai dari turunkan utang & bangun dana darurat dulu."}
            </p>
          </div>
          <div className="stack" style={{ gap: 8, marginTop: 16 }}>
            <ScoreRow label="Saving rate" value={`${savingRate.toFixed(1)}%`} status={savingRate >= 20 ? "good" : savingRate >= 10 ? "ok" : "warn"} target=">20%" />
            <ScoreRow label="Debt ratio" value={`${debtRatio.toFixed(1)}%`} status={debtRatio < 10 ? "good" : debtRatio < 30 ? "ok" : "warn"} target="<10%" />
            <ScoreRow label="Dana darurat" value={`${emergencyMonths.toFixed(1)} bln`} status={emergencyMonths >= 6 ? "good" : emergencyMonths >= 3 ? "ok" : "warn"} target=">6 bln" />
            <ScoreRow label="Likuiditas" value={`${liquidity.toFixed(0)}%`} status={liquidity >= 30 ? "good" : liquidity >= 15 ? "ok" : "warn"} target=">30%" />
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "checkup", title: "Cek Kondisi Finansial", value: `${Math.round(score)}/100 (${grade})` })}
      onNavigate={onNavigate}
      relatedId="invest"
    />
  );
}

function ScoreRow({ label, value, status, target }) {
  const color = status === "good" ? "var(--positive)" : status === "ok" ? "#FFB800" : "var(--negative)";
  return (
    <div className="card card-tight row-between" style={{ background: "var(--surface)" }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{label}</div>
        <div className="muted mono" style={{ fontSize: 11, marginTop: 2 }}>target {target}</div>
      </div>
      <div className="row" style={{ gap: 12 }}>
        <span className="mono" style={{ fontWeight: 600 }}>{value}</span>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: color }} />
      </div>
    </div>
  );
}

// ============================================================
// 2. SIMULASI RUMAH (KPR vs Sewa Comparison)
// ============================================================
function RumahCalc({ onSaveResult, onNavigate }) {
  const [homePrice, setHomePrice] = React.useState(500000000);
  const [downPayment, setDownPayment] = React.useState(100000000);
  const [loanAmount, setLoanAmount] = React.useState(400000000);
  const [interestRate, setInterestRate] = React.useState(5.5);
  const [tenor, setTenor] = React.useState(20);
  const [rentalPrice, setRentalPrice] = React.useState(5000000);

  const monthlyRate = interestRate / 100 / 12;
  const numPayments = tenor * 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = totalPaid - loanAmount;

  const comparisonData = [];
  let cumulativeKPR = downPayment;
  let cumulativeRental = 0;
  for (let month = 1; month <= numPayments; month++) {
    cumulativeKPR += monthlyPayment;
    cumulativeRental += rentalPrice;
    if (month === 1 || month === 12 || month === 60 || month === 120 || month === 180 || month === numPayments) {
      comparisonData.push({
        month,
        monthLabel: month === 1 ? "Bulan 1" : month === 12 ? "Tahun 1" : `Tahun ${Math.ceil(month / 12)}`,
        kprCumulative: cumulativeKPR,
        rentalCumulative: cumulativeRental,
        monthlyKPR: monthlyPayment,
        monthlyRental: rentalPrice,
      });
    }
  }

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Harga rumah" prefix="Rp" value={homePrice} onChange={setHomePrice} step={10000000} />
          <NumberInput label="Down payment" prefix="Rp" value={downPayment} onChange={setDownPayment} step={10000000} />
          <NumberInput label="Jumlah pinjaman" prefix="Rp" value={loanAmount} onChange={setLoanAmount} step={10000000} />
          <Slider label="Suku bunga" value={interestRate} onChange={setInterestRate} min={2} max={10} step={0.5} format={(v) => `${v}%`} />
          <Slider label="Tenor" value={tenor} onChange={setTenor} min={5} max={30} step={1} format={(v) => `${v} tahun`} />
          <div className="divider" style={{ margin: "16px 0" }} />
          <NumberInput label="Sewa rumah per bulan (untuk comparison)" prefix="Rp" value={rentalPrice} onChange={setRentalPrice} step={500000} />
        </>
      }
      results={
        <>
          <div className="row" style={{ gap: 16, marginBottom: 16 }}>
            <div className="card" style={{ flex: 1, background: "var(--surface-2)" }}>
              <div className="muted" style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>CICILAN KPR BULANAN</div>
              <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 32, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>
                {formatIDR(Math.round(monthlyPayment))}
              </div>
              <div className="muted" style={{ fontSize: 12 }}>{tenor} tahun, bunga {interestRate}%</div>
            </div>
            <div className="card" style={{ flex: 1, background: "var(--surface-2)" }}>
              <div className="muted" style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>SEWA RUMAH BULANAN</div>
              <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 32, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>
                {formatIDR(rentalPrice)}
              </div>
              <div className="muted" style={{ fontSize: 12 }}>Selisih: {monthlyPayment > rentalPrice ? "KPR lebih mahal" : "Sewa lebih mahal"}</div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16, padding: 20 }}>
            <h4 style={{ marginBottom: 16 }}>Perbandingan KPR vs Sewa</h4>
            <div style={{ overflowX: "auto" }}>
              <table style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 14,
              }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    <th style={{ textAlign: "left", padding: "10px 0", fontWeight: 600, color: "var(--ink-2)" }}>Timeline</th>
                    <th style={{ textAlign: "right", padding: "10px 0", fontWeight: 600, color: "var(--ink-2)" }}>Cicilan KPR (Total)</th>
                    <th style={{ textAlign: "right", padding: "10px 0", fontWeight: 600, color: "var(--ink-2)" }}>Sewa (Total)</th>
                    <th style={{ textAlign: "right", padding: "10px 0", fontWeight: 600, color: "var(--ink-2)" }}>Lebih murah?</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => {
                    const kprCheaper = row.rentalCumulative > row.kprCumulative;
                    return (
                      <tr key={idx} style={{ borderBottom: "1px solid var(--border)", color: kprCheaper ? "var(--positive)" : "var(--accent)" }}>
                        <td style={{ padding: "10px 0" }}>{row.monthLabel}</td>
                        <td style={{ textAlign: "right", padding: "10px 0", fontFamily: "JetBrains Mono, monospace", fontSize: 12 }}>
                          {formatIDR(Math.round(row.kprCumulative))}
                        </td>
                        <td style={{ textAlign: "right", padding: "10px 0", fontFamily: "JetBrains Mono, monospace", fontSize: 12 }}>
                          {formatIDR(Math.round(row.rentalCumulative))}
                        </td>
                        <td style={{ textAlign: "right", padding: "10px 0", fontWeight: 600 }}>
                          {kprCheaper ? "Beli ✓" : "Sewa ✓"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--surface)", borderRadius: 14, fontSize: 13 }}>
              <span className="muted">💡 </span>
              {monthlyPayment > rentalPrice
                ? `Sewa lebih hemat dalam jangka pendek. Tapi setelah ~${Math.ceil(numPayments / 12)} tahun, investasi rumah lebih menguntungkan.`
                : `Membeli sudah lebih hemat dari sekarang. Setelah ${tenor} tahun, kamu punya aset rumah, bukan cicilan.`}
            </div>
          </div>

          <div className="stack" style={{ gap: 12, marginTop: 16 }}>
            <ResultTile
              label="TOTAL BUNGA YANG DIBAYAR"
              value={formatIDR(Math.round(totalInterest))}
              sub={`Dari total cicilan ${formatIDR(Math.round(totalPaid))}`}
            />
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "rumah", title: "Simulasi Rumah", value: `${formatIDR(Math.round(monthlyPayment))}/bln × ${tenor}th` })}
      onNavigate={onNavigate}
      relatedId="kpr"
    />
  );
}

// ============================================================
// 3. INVESTMENT PLANNER
// ============================================================
function InvestCalc({ onSaveResult, onNavigate }) {
  const [target, setTarget] = React.useState(500000000);
  const [years, setYears] = React.useState(10);
  const [returnPct, setReturnPct] = React.useState(9);
  const [starting, setStarting] = React.useState(10000000);

  const months = years * 12;
  const monthlyReturn = Math.pow(1 + returnPct / 100, 1 / 12) - 1;
  const monthlyPayment = (target - starting * Math.pow(1 + monthlyReturn, months)) / (Math.pow(1 + monthlyReturn, months) - 1) / (1 + monthlyReturn);
  const totalContributed = starting + monthlyPayment * months;
  const totalReturn = target - totalContributed;
  const finalValue = starting * Math.pow(1 + monthlyReturn, months) + monthlyPayment * (Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn;

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Target investasi" prefix="Rp" value={target} onChange={setTarget} step={25000000} />
          <Slider label="Timeframe" value={years} onChange={setYears} min={1} max={30} format={(v) => `${v} tahun`} />
          <Slider label="Return ekspektasi" value={returnPct} onChange={setReturnPct} min={2} max={15} step={0.5} format={(v) => `${v}%/tahun`} />
          <NumberInput label="Dana investasi awal" prefix="Rp" value={starting} onChange={setStarting} step={5000000} />
        </>
      }
      results={
        <>
          <ResultTile
            label="KONTRIBUSI BULANAN"
            value={formatIDR(Math.max(0, Math.round(monthlyPayment)))}
            sub={`Investasi rutin untuk capai target ${formatIDR(target)} dalam ${years} tahun`}
          />
          <div className="card" style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 16 }}>Proyeksi Pertumbuhan</h4>
            <div className="stack" style={{ gap: 12 }}>
              <BreakdownRow label="Dana awal" value={formatIDR(Math.round(starting))} />
              <BreakdownRow label="Kontribusi total" value={formatIDR(Math.round(monthlyPayment * months))} sub={`${months} bulan × ${formatIDR(Math.round(monthlyPayment))}`} />
              <BreakdownRow label="Return dari investasi" value={formatIDR(Math.round(totalReturn))} sub={`Compound return ${returnPct}%/tahun`} highlight />
              <div className="divider" style={{ margin: "8px 0" }} />
              <BreakdownRow label="Total akhir" value={formatIDR(Math.round(finalValue))} highlight />
            </div>
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "invest", title: "Investasi", value: `${formatIDR(Math.round(monthlyPayment))}/bln` })}
      onNavigate={onNavigate}
      relatedId="invest"
    />
  );
}

// ============================================================
// 4. INSURANCE CALCULATOR (WITH INFLATION)
// ============================================================
function InsuranceCalc({ onSaveResult, onNavigate }) {
  const [income, setIncome] = React.useState(10000000);
  const [dependents, setDependents] = React.useState(2);
  const [debts, setDebts] = React.useState(50000000);
  const [existing, setExisting] = React.useState(0);
  const [yearsCover, setYearsCover] = React.useState(10);
  const [inflationRate, setInflationRate] = React.useState(3);

  const annualIncome = income * 12;
  const inflationMultiplier = Math.pow(1 + inflationRate / 100, yearsCover);
  const adjustedAnnualIncome = annualIncome * inflationMultiplier;
  const dimNeed = adjustedAnnualIncome * yearsCover + debts + (dependents * 50000000);
  const gap = Math.max(dimNeed - existing, 0);

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Pemasukan bulanan" prefix="Rp" value={income} onChange={setIncome} step={500000} />
          <NumberInput label="Jumlah tanggungan (anak, ortu, dst.)" value={dependents} onChange={setDependents} min={0} step={1} />
          <NumberInput label="Total utang aktif" prefix="Rp" value={debts} onChange={setDebts} step={5000000} />
          <NumberInput label="Uang pertanggungan polis sekarang" prefix="Rp" value={existing} onChange={setExisting} step={50000000} />
          <Slider label="Penggantian income selama" value={yearsCover} onChange={setYearsCover} min={3} max={25} format={(v) => `${v} tahun`} />
          <Slider label="Estimasi inflasi tahunan" value={inflationRate} onChange={setInflationRate} min={0} max={10} step={0.5} format={(v) => `${v}%`} />
        </>
      }
      results={
        <>
          <ResultTile
            label="GAP UANG PERTANGGUNGAN"
            value={formatIDR(gap)}
            sub={gap > 0 ? "Tambahan UP yang ideal kamu beli — pakai term life untuk premi paling efisien." : "Coverage kamu sudah cukup. Tetap review tiap 2 tahun ya."}
            accent={gap > 0 ? "var(--accent)" : "var(--positive)"}
          />
          <div className="card" style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 16 }}>Breakdown kebutuhan (metode DIME)</h4>
            <BreakdownRow label="Income replacement" value={formatIDR(Math.round(adjustedAnnualIncome * yearsCover))} sub={`${yearsCover} tahun × ${formatIDR(Math.round(adjustedAnnualIncome))}/thn (sudah adjusted inflasi ${inflationRate}%)`} />
            <BreakdownRow label="Pelunasan utang" value={formatIDR(debts)} sub="Sisa hutang aktif" />
            <BreakdownRow label="Dana tanggungan" value={formatIDR(dependents * 50000000)} sub={`${dependents} orang × Rp 50jt`} />
            <div className="divider" style={{ margin: "12px 0" }} />
            <BreakdownRow label="Total kebutuhan" value={formatIDR(Math.round(dimNeed))} highlight />
            <BreakdownRow label="Coverage sekarang" value={`-${formatIDR(existing)}`} muted />
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "insurance", title: "Kebutuhan Asuransi", value: formatIDR(gap) + " gap" })}
      onNavigate={onNavigate}
      relatedId="insurance"
    />
  );
}

function BreakdownRow({ label, value, sub, highlight, muted }) {
  return (
    <div className="row-between" style={{ padding: "10px 0", color: muted ? "var(--muted)" : "var(--ink)" }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: highlight ? 700 : 500 }}>{label}</div>
        {sub && <div className="muted" style={{ fontSize: 12 }}>{sub}</div>}
      </div>
      <div className="mono" style={{ fontSize: highlight ? 18 : 15, fontWeight: highlight ? 700 : 500, color: highlight ? "var(--accent)" : "inherit" }}>{value}</div>
    </div>
  );
}

// ============================================================
// 5. EDUCATION FUND CALCULATOR
// ============================================================
function EduCalc({ onSaveResult, onNavigate }) {
  const [monthlyNeeded, setMonthlyNeeded] = React.useState(5000000);
  const [yearsAhead, setYearsAhead] = React.useState(15);
  const [inflation, setInflation] = React.useState(6);
  const [returnRate, setReturnRate] = React.useState(8);

  const months = yearsAhead * 12;
  const futureMonthly = monthlyNeeded * Math.pow(1 + inflation / 100, yearsAhead);
  const yearlyFuture = futureMonthly * 12;
  const monthlyRate = returnRate / 100 / 12;
  const monthlyPayment = (yearlyFuture - 0) / (Math.pow(1 + monthlyRate, months) - 1) * monthlyRate;
  const totalTarget = yearlyFuture;

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Biaya pendidikan per bulan sekarang" prefix="Rp" value={monthlyNeeded} onChange={setMonthlyNeeded} step={250000} />
          <Slider label="Tahun hingga masuk universitas" value={yearsAhead} onChange={setYearsAhead} min={1} max={25} format={(v) => `${v} tahun`} />
          <Slider label="Inflasi pendidikan" value={inflation} onChange={setInflation} min={2} max={12} step={0.5} format={(v) => `${v}%`} />
          <Slider label="Return investasi" value={returnRate} onChange={setReturnRate} min={2} max={15} step={0.5} format={(v) => `${v}%`} />
        </>
      }
      results={
        <>
          <ResultTile
            label="TABUNGAN BULANAN DIBUTUHKAN"
            value={formatIDR(Math.round(monthlyPayment))}
            sub={`Target dana pendidikan dalam ${yearsAhead} tahun`}
          />
          <div className="card" style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 16 }}>Simulasi Biaya</h4>
            <BreakdownRow label="Biaya bulanan sekarang" value={formatIDR(Math.round(monthlyNeeded))} />
            <BreakdownRow label="Biaya bulanan di masa depan" value={formatIDR(Math.round(futureMonthly))} sub={`Dengan inflasi ${inflation}%/tahun`} />
            <BreakdownRow label="Total dana dibutuhkan" value={formatIDR(Math.round(totalTarget))} highlight />
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "edu", title: "Dana Pendidikan", value: formatIDR(Math.round(monthlyPayment)) + "/bln" })}
      onNavigate={onNavigate}
      relatedId="edu"
    />
  );
}

// ============================================================
// 6. PENSION CALCULATOR
// ============================================================
function PensionCalc({ onSaveResult, onNavigate }) {
  const [monthlyNeeded, setMonthlyNeeded] = React.useState(10000000);
  const [retirementAge, setRetirementAge] = React.useState(60);
  const [lifeExpectancy, setLifeExpectancy] = React.useState(85);
  const [currentAge, setCurrentAge] = React.useState(35);
  const [inflation, setInflation] = React.useState(3);
  const [returnRate, setReturnRate] = React.useState(6);

  const yearsToRetirement = retirementAge - currentAge;
  const yearsInRetirement = lifeExpectancy - retirementAge;
  const futureMonthly = monthlyNeeded * Math.pow(1 + inflation / 100, yearsToRetirement);
  const monthlyInRetirement = futureMonthly * Math.pow(1 + inflation / 100, yearsInRetirement / 2);
  const totalNeed = monthlyInRetirement * 12 * yearsInRetirement;
  const monthlyRate = returnRate / 100 / 12;
  const months = yearsToRetirement * 12;
  const monthlyPayment = totalNeed / (Math.pow(1 + monthlyRate, months) - 1) * monthlyRate;

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Kebutuhan bulanan saat pensiun" prefix="Rp" value={monthlyNeeded} onChange={setMonthlyNeeded} step={500000} />
          <Slider label="Usia sekarang" value={currentAge} onChange={setCurrentAge} min={20} max={50} format={(v) => `${v} tahun`} />
          <Slider label="Target usia pensiun" value={retirementAge} onChange={setRetirementAge} min={50} max={70} format={(v) => `${v} tahun`} />
          <Slider label="Perkiraan usia harapan" value={lifeExpectancy} onChange={setLifeExpectancy} min={retirementAge + 10} max={100} format={(v) => `${v} tahun`} />
          <Slider label="Inflasi biaya hidup" value={inflation} onChange={setInflation} min={1} max={8} step={0.5} format={(v) => `${v}%`} />
          <Slider label="Return investasi" value={returnRate} onChange={setReturnRate} min={2} max={12} step={0.5} format={(v) => `${v}%`} />
        </>
      }
      results={
        <>
          <ResultTile
            label="TABUNGAN BULANAN DIBUTUHKAN"
            value={formatIDR(Math.round(monthlyPayment))}
            sub={`Mulai sekarang hingga umur ${retirementAge}`}
          />
          <div className="card" style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 16 }}>Simulasi Pensiun</h4>
            <BreakdownRow label="Tahun hingga pensiun" value={`${yearsToRetirement} tahun`} />
            <BreakdownRow label="Kebutuhan bulanan saat pensiun" value={formatIDR(Math.round(monthlyInRetirement))} sub={`Dari ${formatIDR(Math.round(futureMonthly))} (adjusted ${yearsInRetirement / 2} tahun inflasi)`} />
            <BreakdownRow label="Tahun pensiun" value={`${yearsInRetirement} tahun`} sub={`Usia ${retirementAge}-${lifeExpectancy}`} />
            <BreakdownRow label="Total dana yang dibutuhkan" value={formatIDR(Math.round(totalNeed))} highlight />
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "pension", title: "Pensiun", value: formatIDR(Math.round(monthlyPayment)) + "/bln" })}
      onNavigate={onNavigate}
      relatedId="pension"
    />
  );
}

// ============================================================
// 7. HAJI & UMROH CALCULATOR
// ============================================================
function HajiCalc({ onSaveResult, onNavigate }) {
  const [daftarHaji, setDaftarHaji] = React.useState(25000000);
  const [targetBerangkat, setTargetBerangkat] = React.useState(2028);
  const [dpSetoran, setDpSetoran] = React.useState(10000000);
  const [inflasi, setInflasi] = React.useState(5);
  const [sisaPelunasan, setSisaPelunasan] = React.useState(15000000);

  const tahunSaatIni = new Date().getFullYear();
  const tahunMenuju = targetBerangkat - tahunSaatIni;
  
  const totalBiayaMendasar = daftarHaji + sisaPelunasan;
  const totalBiayaDenganInflasi = totalBiayaMendasar * Math.pow(1 + inflasi / 100, tahunMenuju);
  const sisaDanaDibutuhkan = Math.max(totalBiayaDenganInflasi - dpSetoran, 0);
  const budiBulanan = tahunMenuju > 0 ? sisaDanaDibutuhkan / (tahunMenuju * 12) : 0;

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Biaya daftar haji" prefix="Rp" value={daftarHaji} onChange={setDaftarHaji} step={1000000} />
          <NumberInput label="Target tahun keberangkatan" value={targetBerangkat} onChange={setTargetBerangkat} min={tahunSaatIni} max={tahunSaatIni + 30} step={1} />
          <NumberInput label="DP / Setoran awal" prefix="Rp" value={dpSetoran} onChange={setDpSetoran} step={1000000} />
          <Slider label="Estimasi inflasi biaya haji" value={inflasi} onChange={setInflasi} min={0} max={10} step={0.5} format={(v) => `${v}%`} />
          <NumberInput label="Sisa pelunasan" prefix="Rp" value={sisaPelunasan} onChange={setSisaPelunasan} step={1000000} />
        </>
      }
      results={
        <>
          <div className="row" style={{ gap: 16, marginBottom: 16 }}>
            <div className="card" style={{ flex: 1, background: "var(--surface-2)" }}>
              <div className="muted" style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>TARGET BERANGKAT</div>
              <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 32, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>
                {targetBerangkat}
              </div>
              <div className="muted" style={{ fontSize: 12 }}>Dalam {tahunMenuju} tahun</div>
            </div>
            <div className="card" style={{ flex: 1, background: "var(--surface-2)" }}>
              <div className="muted" style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>TOTAL BIAYA (Inflasi {inflasi}%)</div>
              <div style={{ fontFamily: "Bricolage Grotesque, sans-serif", fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>
                {formatIDR(Math.round(totalBiayaDenganInflasi))}
              </div>
              <div className="muted" style={{ fontSize: 12 }}>Dari {formatIDR(totalBiayaMendasar)}</div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16, padding: 20 }}>
            <h4 style={{ marginBottom: 16 }}>Rencana Pelunasan</h4>
            <div className="stack" style={{ gap: 12 }}>
              <div className="row-between">
                <span>DP / Setoran awal</span>
                <span className="mono" style={{ fontWeight: 600 }}>{formatIDR(dpSetoran)}</span>
              </div>
              <div className="row-between">
                <span>Sisa dana dibutuhkan</span>
                <span className="mono" style={{ fontWeight: 600, color: "var(--accent)" }}>{formatIDR(Math.round(sisaDanaDibutuhkan))}</span>
              </div>
              <div className="divider" style={{ margin: "8px 0" }} />
              <div className="row-between">
                <span style={{ fontWeight: 600 }}>Budget bulanan yang diperlukan</span>
                <span className="mono" style={{ fontWeight: 700, fontSize: 18, color: "var(--positive)" }}>{formatIDR(Math.round(budiBulanan))}</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--surface-2)", borderRadius: 14, fontSize: 13, color: "var(--ink-2)" }}>
            💡 <span style={{ marginLeft: 8 }}>Semakin cepat dapat nomor porsi, semakin cepat antrean berjalan. Sedia surat rujukan dari masjid atau agen haji terpercaya.</span>
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "haji", title: "Haji & Umroh", value: `${targetBerangkat} · Rp ${formatIDR(Math.round(budiBulanan))}/bln` })}
      onNavigate={onNavigate}
      relatedId={null}
    />
  );
}

// ============================================================
// 8. WARISAN CALCULATOR
// ============================================================
function WarisanCalc({ onSaveResult, onNavigate }) {
  const [totalAset, setTotalAset] = React.useState(1000000000);
  const [jumlahAnak, setJumlahAnak] = React.useState(2);
  const [jumlahIstri, setJumlahIstri] = React.useState(1);
  const [wasiatPersen, setWasiatPersen] = React.useState(33);

  const wasiahDana = totalAset * (wasiatPersen / 100);
  const sisaAset = totalAset - wasiahDana;
  const istriShare = sisaAset * 0.125;
  const anakShare = (sisaAset - istriShare) / jumlahAnak;

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Total aset untuk distribusi" prefix="Rp" value={totalAset} onChange={setTotalAset} step={50000000} />
          <NumberInput label="Jumlah anak" value={jumlahAnak} onChange={setJumlahAnak} min={1} max={10} step={1} />
          <NumberInput label="Jumlah istri" value={jumlahIstri} onChange={setJumlahIstri} min={0} max={4} step={1} />
          <Slider label="Wasiat 1/3 dari harta" value={wasiatPersen} onChange={setWasiatPersen} min={0} max={33} step={1} format={(v) => `${v}%`} />
        </>
      }
      results={
        <>
          <div className="card" style={{ marginBottom: 16, padding: 20, background: "var(--surface-2)" }}>
            <h4 style={{ marginBottom: 16 }}>Distribusi Warisan (Faraidh)</h4>
            <div className="stack" style={{ gap: 12 }}>
              <div className="row-between">
                <span>Total aset</span>
                <span className="mono" style={{ fontWeight: 700, fontSize: 18 }}>{formatIDR(totalAset)}</span>
              </div>
              {wasiatPersen > 0 && (
                <div className="row-between">
                  <span>Wasiat {wasiatPersen}%</span>
                  <span className="mono" style={{ fontWeight: 600, color: "var(--accent)" }}>{formatIDR(Math.round(wasiahDana))}</span>
                </div>
              )}
              <div className="divider" style={{ margin: "8px 0" }} />
              {jumlahIstri > 0 && (
                <div className="row-between">
                  <span>Istri (1/8)</span>
                  <span className="mono" style={{ fontWeight: 600 }}>{formatIDR(Math.round(istriShare))}</span>
                </div>
              )}
              <div className="row-between">
                <span>Anak per orang (÷ {jumlahAnak})</span>
                <span className="mono" style={{ fontWeight: 600, color: "var(--positive)" }}>{formatIDR(Math.round(anakShare))}</span>
              </div>
            </div>
          </div>

          <div style={{ padding: "12px 16px", background: "var(--surface)", borderRadius: 14, fontSize: 13, color: "var(--ink-2)" }}>
            ✓ Berdasarkan hukum faraid Islam standar (istri 1/8, anak share sisanya). Konsultasi dengan ustadz atau notaris untuk kasus khusus.
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "warisan", title: "Perencanaan Warisan", value: `${jumlahAnak} anak · ${formatIDR(Math.round(anakShare))}/orang` })}
      onNavigate={onNavigate}
      relatedId={null}
    />
  );
}

// ============================================================
// 9. ZAKAT CALCULATOR
// ============================================================
function ZakatCalc({ onSaveResult, onNavigate }) {
  const [hartaTersimpan, setHartaTersimpan] = React.useState(50000000);
  const [emas, setEmas] = React.useState(500000);
  const [penghasilanBulanan, setPenghasilanBulanan] = React.useState(10000000);
  const [bulanBekerja, setBulanBekerja] = React.useState(12);

  const nishabEmas = 67000000;
  const nishabMaal = 67000000;

  const zakatMaal = hartaTersimpan > nishabMaal ? hartaTersimpan * 0.025 : 0;

  const nilaiEmas = emas * 135000;
  const zakatEmas = nilaiEmas > nishabEmas ? nilaiEmas * 0.025 : 0;

  const pendapatanTahunan = penghasilanBulanan * bulanBekerja;
  const zakatProfesi = pendapatanTahunan * 0.025;

  const totalZakat = zakatMaal + zakatEmas + zakatProfesi;

  return (
    <CalcLayout
      inputs={
        <>
          <NumberInput label="Harta tersimpan (tabungan/investasi)" prefix="Rp" value={hartaTersimpan} onChange={setHartaTersimpan} step={5000000} />
          <NumberInput label="Emas yang dimiliki" prefix="gr" value={emas} onChange={setEmas} step={50} />
          <NumberInput label="Penghasilan bulanan" prefix="Rp" value={penghasilanBulanan} onChange={setPenghasilanBulanan} step={500000} />
          <Slider label="Bulan bekerja per tahun" value={bulanBekerja} onChange={setBulanBekerja} min={1} max={12} step={1} format={(v) => `${v} bulan`} />
        </>
      }
      results={
        <>
          <ResultTile
            label="TOTAL ZAKAT YANG HARUS DIBAYAR"
            value={formatIDR(Math.round(totalZakat))}
            sub="Per tahun / per hijriah"
          />

          <div className="card" style={{ marginTop: 16, padding: 20 }}>
            <h4 style={{ marginBottom: 16 }}>Breakdown Zakat</h4>
            <div className="stack" style={{ gap: 12 }}>
              <div>
                <div className="row-between" style={{ marginBottom: 4 }}>
                  <span>Zakat Maal (Harta)</span>
                  <span className="mono" style={{ fontWeight: 600 }}>{formatIDR(Math.round(zakatMaal))}</span>
                </div>
                <div className="muted" style={{ fontSize: 12 }}>2.5% dari Rp {formatIDR(hartaTersimpan)} (jika > nishab Rp {formatIDR(nishabMaal)})</div>
              </div>

              <div>
                <div className="row-between" style={{ marginBottom: 4 }}>
                  <span>Zakat Emas</span>
                  <span className="mono" style={{ fontWeight: 600 }}>{formatIDR(Math.round(zakatEmas))}</span>
                </div>
                <div className="muted" style={{ fontSize: 12 }}>2.5% dari {emas}gr emas (nilai ~Rp {formatIDR(Math.round(nilaiEmas))})</div>
              </div>

              <div>
                <div className="row-between" style={{ marginBottom: 4 }}>
                  <span>Zakat Profesi (Gaji)</span>
                  <span className="mono" style={{ fontWeight: 600 }}>{formatIDR(Math.round(zakatProfesi))}</span>
                </div>
                <div className="muted" style={{ fontSize: 12 }}>2.5% dari Rp {formatIDR(Math.round(pendapatanTahunan))}/tahun</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, padding: "12px 16px", background: "var(--surface)", borderRadius: 14, fontSize: 13, color: "var(--ink-2)" }}>
            ✓ Nishab emas ~85gr (update sesuai harga emas terkini). Bayar zakat kepada yang berhak sebelum Ramadan atau saat income diterima.
          </div>
        </>
      }
      onSave={() => onSaveResult({ id: "zakat", title: "Zakat Tahunan", value: formatIDR(Math.round(totalZakat)) })}
      onNavigate={onNavigate}
      relatedId={null}
    />
  );
}

// ============================================================
// Shared layout
// ============================================================
function CalcLayout({ inputs, results, onSave, onNavigate, calcId, relatedId }) {
  const { t, lang } = useT();
  const [saved, setSaved] = React.useState(false);

  const cta = CALC_CTA_MAP[calcId] || CALC_CTA_MAP.checkup;
  const product = cta.productId
    ? PRODUCTS.find((p) => p.id === cta.productId)
    : (relatedId ? PRODUCTS.find((p) => p.id === relatedId) : null);

  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
        gap: 32,
        alignItems: "flex-start",
      }} className="calc-grid">
        <div className="card" style={{ position: "sticky", top: 88 }}>
          <div className="row-between" style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 22 }}>{t.calc_input}</h3>
            <Tag>auto-update</Tag>
          </div>
          <div className="stack" style={{ gap: 16 }}>
            {inputs}
          </div>
        </div>

        <div>
          <div className="row-between" style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 22 }}>{t.calc_result}</h3>
            <div className="row" style={{ gap: 8 }}>
              <Button variant="secondary" size="sm" onClick={() => {
                if (!saved) {
                  onSave();
                  setSaved(true);
                  setTimeout(() => setSaved(false), 2200);
                }
              }} icon={saved ? <Check size={14} stroke={3} /> : <Plus size={14} />}>
                {saved ? (lang === "id" ? "Tersimpan" : "Saved") : t.calc_save}
              </Button>
            </div>
          </div>
          {results}
          <p className="muted" style={{ fontSize: 12, marginTop: 16, lineHeight: 1.5 }}>{t.calc_disclaimer}</p>

          {/* Dual CTA: Digital Product (left) + Proteksi Impian (right) */}
          <div style={{ display: "grid", gridTemplateColumns: product ? "1fr 1fr" : "1fr", gap: 12, marginTop: 24 }} className="dual-cta">
            {product && (
              <div className="card" style={{ background: "var(--surface-2)", display: "flex", flexDirection: "column", gap: 12, padding: 22 }}>
                <div className="row" style={{ gap: 8 }}>
                  <Tag variant="outline">UPGRADE · DIGITAL TOOL</Tag>
                </div>
                <h4 style={{ fontSize: 17, lineHeight: 1.2 }}>
                  {lang === "id" ? "Mau perhitungan lebih detail?" : "Want a deeper calculation?"}
                </h4>
                <p className="muted" style={{ fontSize: 12, lineHeight: 1.5 }}>
                  {lang === "id"
                    ? "Spreadsheet planner kami — multi-skenario, tracking realtime, rumus terverifikasi."
                    : "Our spreadsheet planner — multi-scenario, real-time tracking, verified formulas."}
                </p>
                <div className="row-between" style={{ marginTop: "auto", paddingTop: 8 }}>
                  <span className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{formatIDR(product.price)}</span>
                  <Button variant="primary" size="sm" onClick={() => onNavigate({ name: "product", id: product.id })} iconRight={<ArrowRight size={13} />}>
                    {product[`name_${lang}`]}
                  </Button>
                </div>
              </div>
            )}

            <div className="card" style={{
              background: "linear-gradient(135deg, color-mix(in oklab, var(--accent) 18%, var(--surface)), var(--surface))",
              border: "1px solid var(--accent)",
              display: "flex", flexDirection: "column", gap: 12, padding: 22,
            }}>
              <div className="row" style={{ gap: 8 }}>
                <Tag variant="accent">★ PROTEKSI · GRATIS</Tag>
              </div>
              <h4 style={{ fontSize: 17, lineHeight: 1.2 }}>{cta.proteksi[`title_${lang}`]}</h4>
              <p className="ink-2" style={{ fontSize: 12, lineHeight: 1.55 }}>{cta.proteksi[`concern_${lang}`]}</p>
              <Button variant="primary" size="sm" onClick={() => onNavigate({ name: "book", type: "free" })} iconRight={<ArrowRight size={13} />} style={{ marginTop: "auto" }}>
                {lang === "id" ? "Konsultasi gratis sekarang" : "Free consultation now"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .calc-grid { grid-template-columns: 1fr !important; }
          .calc-grid > div:first-child { position: relative !important; top: 0 !important; }
          .dual-cta { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

Object.assign(window, { CalculatorScreen });
