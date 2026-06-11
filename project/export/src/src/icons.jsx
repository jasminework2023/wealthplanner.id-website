// icons.jsx — simple inline SVG icon set. Keep them geometric, no slop.

const ICONS = {};

function makeIcon(path, vb = "0 0 24 24") {
  return ({ size = 18, stroke = 2, className = "", style = {} }) => (
    <svg
      width={size}
      height={size}
      viewBox={vb}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

const ArrowRight = makeIcon(
  <>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </>
);
const ArrowUpRight = makeIcon(
  <>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </>
);
const Sparkle = makeIcon(
  <>
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    <path d="M6 6l3 3" />
    <path d="M15 15l3 3" />
    <path d="M18 6l-3 3" />
    <path d="M9 15l-3 3" />
  </>
);
const Check = makeIcon(<path d="M4 12l5 5L20 6" />);
const Plus = makeIcon(
  <>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </>
);
const X = makeIcon(
  <>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </>
);
const Calendar = makeIcon(
  <>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
  </>
);
const Download = makeIcon(
  <>
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M5 21h14" />
  </>
);
const Lock = makeIcon(
  <>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" />
  </>
);
const Wallet = makeIcon(
  <>
    <rect x="3" y="6" width="18" height="14" rx="2" />
    <path d="M16 13h2" />
    <path d="M3 10h18" />
  </>
);
const Heart = makeIcon(
  <path d="M12 21s-7-4.5-9.5-9A5 5 0 0112 7a5 5 0 019.5 5C19 16.5 12 21 12 21z" />
);
const Home = makeIcon(
  <>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
  </>
);
const Briefcase = makeIcon(
  <>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
  </>
);
const Gift = makeIcon(
  <>
    <path d="M3 8h18v4H3z" />
    <path d="M5 12v9h14v-9" />
    <path d="M12 8v13" />
    <path d="M12 8s-3-5-5-3 2 5 5 3z" />
    <path d="M12 8s3-5 5-3-2 5-5 3z" />
  </>
);
const ChartBar = makeIcon(
  <>
    <path d="M4 21V4" />
    <path d="M8 21V13" />
    <path d="M13 21V9" />
    <path d="M18 21V5" />
  </>
);
const ShieldCheck = makeIcon(
  <>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </>
);
const GraduationCap = makeIcon(
  <>
    <path d="M2 10l10-5 10 5-10 5L2 10z" />
    <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
  </>
);
const Coins = makeIcon(
  <>
    <ellipse cx="9" cy="8" rx="6" ry="3" />
    <path d="M3 8v4c0 1.5 3 3 6 3s6-1.5 6-3" />
    <ellipse cx="15" cy="14" rx="6" ry="3" />
    <path d="M9 14v3c0 1.5 3 3 6 3s6-1.5 6-3v-3" />
  </>
);
const Stethoscope = makeIcon(
  <>
    <path d="M6 3v6a4 4 0 008 0V3" />
    <circle cx="18" cy="13" r="3" />
    <path d="M10 13a8 8 0 008 8" />
  </>
);
const Sun = makeIcon(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
  </>
);
const Moon = makeIcon(<path d="M21 12.8A8 8 0 0111.2 3a7 7 0 109.8 9.8z" />);
const Menu = makeIcon(
  <>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </>
);
const User = makeIcon(
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  </>
);
const Search = makeIcon(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="M16.5 16.5L21 21" />
  </>
);
const Mosque = makeIcon(
  <>
    <path d="M12 3c-1.5 2 -1.5 4 0 6" />
    <circle cx="12" cy="9" r="0.8" fill="currentColor" />
    <path d="M5 21V12a3 3 0 016 0v9" />
    <path d="M13 21V12a3 3 0 016 0v9" />
    <path d="M3 21h18" />
    <path d="M9 21v-3" />
    <path d="M15 21v-3" />
  </>
);
const FileDoc = makeIcon(
  <>
    <path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </>
);
const Users = makeIcon(
  <>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
    <circle cx="17" cy="8" r="2.5" />
    <path d="M21 19c0-2.5-2-4-4-4" />
  </>
);
const Video = makeIcon(
  <>
    <rect x="3" y="6" width="14" height="12" rx="2" />
    <path d="M17 10l4-2v8l-4-2" />
  </>
);
const PlayCircle = makeIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
  </>
);
const ShieldGrow = makeIcon(
  <>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M9 13l2 2 4-5" />
  </>
);

Object.assign(window, {
  ArrowRight, ArrowUpRight, Sparkle, Check, Plus, X, Calendar, Download,
  Lock, Wallet, Heart, Home, Briefcase, Gift, ChartBar, ShieldCheck,
  GraduationCap, Coins, Stethoscope, Sun, Moon, Menu, User, Search,
  Mosque, FileDoc, Users, Video, PlayCircle, ShieldGrow,
});
