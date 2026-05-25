import { useState } from "react";
import { LoginPage } from "./pages/Login/login";
import { RegisterPage } from "./pages/register/register";

type Page = "login" | "register";

// ─── Logo Icon ────────────────────────────────────────────────────────────────

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#2563EB" />
    <path d="M8 22V13l8-5 8 5v9" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    <rect x="13" y="16" width="6" height="6" rx="1" fill="white" />
  </svg>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = ({ onLogin, onRegister }: { onLogin: () => void; onRegister: () => void }) => (
  <nav style={{ display: "flex", alignItems: "center", padding: "0 40px", height: 60, background: "white", borderBottom: "1px solid #F3F4F6", position: "sticky", top: 0, zIndex: 100 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 48 }}>
      <LogoIcon />
      <span style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>Rental Buddy</span>
    </div>
    <div style={{ display: "flex", gap: 32, flex: 1 }}>
      {["Rent", "Buy", "Sell", "List Property"].map(item => (
        <a key={item} href="#"
          style={{ fontSize: 14, color: "#374151", textDecoration: "none", fontWeight: 500 }}
          onMouseOver={e => (e.currentTarget.style.color = "#2563EB")}
          onMouseOut={e => (e.currentTarget.style.color = "#374151")}
        >
          {item}
        </a>
      ))}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button onClick={onLogin}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 500, color: "#2563EB", fontFamily: "inherit" }}
      >
        Login
      </button>
      <button onClick={onRegister}
        style={{ background: "#2563EB", color: "white", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
        onMouseOver={e => (e.currentTarget.style.background = "#1D4ED8")}
        onMouseOut={e => (e.currentTarget.style.background = "#2563EB")}
      >
        Register
      </button>
    </div>
  </nav>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer style={{ background: "white", borderTop: "1px solid #F3F4F6", padding: "48px 80px 24px" }}>
    <div style={{ display: "flex", gap: 64, marginBottom: 40 }}>
      <div style={{ flex: "0 0 260px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <LogoIcon />
          <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>Rental Buddy</span>
        </div>
        <p style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
          Kathmandu's leading real estate marketplace, connecting modern professionals with their ideal living spaces across the valley.
        </p>
      </div>
      {[
        { title: "Platform", links: ["Browse Rentals", "Sell Property", "Verified Agents"] },
        { title: "Company", links: ["About Us", "Privacy Policy", "Terms of Use"] },
        { title: "Connect", links: ["Contact Support", "Help Center", "Instagram"] },
      ].map(col => (
        <div key={col.title}>
          <h4 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px" }}>{col.title}</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {col.links.map(link => (
              <a key={link} href="#"
                style={{ fontSize: 13, color: "#6B7280", textDecoration: "none" }}
                onMouseOver={e => (e.currentTarget.style.color = "#2563EB")}
                onMouseOut={e => (e.currentTarget.style.color = "#6B7280")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: 20, textAlign: "center" }}>
      <p style={{ fontSize: 13, color: "#9CA3AF", margin: 0 }}>
        © 2024 Rental Buddy Kathmandu. Premium Real Estate Solutions.
      </p>
    </div>
  </footer>
);

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("login");

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", minHeight: "100vh", background: "#F9FAFB" }}>
      <Navbar onLogin={() => setPage("login")} onRegister={() => setPage("register")} />
      {page === "login"
        ? <LoginPage onGoRegister={() => setPage("register")} />
        : <RegisterPage onGoLogin={() => setPage("login")} />
      }
      <Footer />
    </div>
  );
}