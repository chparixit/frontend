import { useState } from "react";
 import axios from "axios";
 import React from "react";

// ─── Icons ─────────────────────────────────────────────────────────────

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = ({ off = false }: { off?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    {off ? (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ─── Props ────────────────────────────────────────────────────────────

interface RegisterPageProps {
  onGoLogin: () => void;
}

// ─── Register Page ────────────────────────────────────────────────────

export const RegisterPage = ({ onGoLogin }: RegisterPageProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  // ─── Create Account ────────────────────────────────────────────────

 

const handleCreateAccount = async () => {
  try {
    const user = {
      name,
      email,
      password,
    };

    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      user
    );

    alert(res.data.message);

    onGoLogin();
  } catch (error: any) {
  console.log("FULL ERROR:", error);

  if (error.response) {
    console.log("STATUS:", error.response.status);
    console.log("DATA:", error.response.data);
    alert(JSON.stringify(error.response.data));
  } else {
    console.log("MESSAGE:", error.message);
    alert(error.message);
  }
}
};

  // ─── UI ────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        background: "#F3F4F6",
        overflow: "hidden",
      }}
    >
      {/* LEFT IMAGE SECTION */}

      <div
        style={{
          width: "50%",
          position: "relative",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1768278929634-4bf4976a0c7c?w=1200&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Overlay */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Text */}

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "40px",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 16,
              fontFamily: "'Georgia', serif",
            }}
          >
            Find Your Perfect Sanctuary
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 500,
            }}
          >
            Join Kathmandu's most premium property ecosystem.
            Verified listings, trusted landlords, and modern homes.
          </p>
        </div>
      </div>

      {/* RIGHT REGISTER SECTION */}

      <div
        style={{
          width: "50%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 520,
          }}
        >
          {/* Title */}

          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#111827",
              marginBottom: 8,
              fontFamily: "'Georgia', serif",
            }}
          >
            Create Account
          </h1>

          <p
            style={{
              fontSize: 14,
              color: "#6B7280",
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            Join Rental Buddy and find your dream home today.
          </p>

          {/* Form */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {/* Full Name */}

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                Full Name
              </label>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid #E5E7EB",
                  borderRadius: 10,
                  background: "#FAFAFA",
                  padding: "0 14px",
                  gap: 10,
                }}
              >
                <span style={{ color: "#9CA3AF" }}>
                  <UserIcon />
                </span>

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    padding: "13px 0",
                    fontSize: 14,
                    color: "#111827",
                  }}
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                Email Address
              </label>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid #E5E7EB",
                  borderRadius: 10,
                  background: "#FAFAFA",
                  padding: "0 14px",
                  gap: 10,
                }}
              >
                <span style={{ color: "#9CA3AF" }}>
                  <MailIcon />
                </span>

                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    padding: "13px 0",
                    fontSize: 14,
                    color: "#111827",
                  }}
                />
              </div>
            </div>

            {/* Phone */}

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                Phone
              </label>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid #E5E7EB",
                  borderRadius: 10,
                  background: "#FAFAFA",
                  padding: "0 14px",
                  gap: 10,
                }}
              >
                <span style={{ color: "#9CA3AF" }}>
                  <PhoneIcon />
                </span>

                <input
                  type="tel"
                  placeholder="+977"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    padding: "13px 0",
                    fontSize: 14,
                    color: "#111827",
                  }}
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                Password
              </label>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1.5px solid #E5E7EB",
                  borderRadius: 10,
                  background: "#FAFAFA",
                  padding: "0 14px",
                  gap: 10,
                }}
              >
                <span style={{ color: "#9CA3AF" }}>
                  <LockIcon />
                </span>

                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    flex: 1,
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    padding: "13px 0",
                    fontSize: 14,
                    color: "#111827",
                  }}
                />

                <span
                  style={{
                    color: "#9CA3AF",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPass((p) => !p)}
                >
                  <EyeIcon off={!showPass} />
                </span>
              </div>
            </div>

            {/* Create Button */}

            <button
              onClick={handleCreateAccount}
              style={{
                width: "100%",
                marginTop: 6,
                background: "#2563EB",
                color: "white",
                border: "none",
                borderRadius: 12,
                padding: "15px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Create Account
            </button>

            {/* Divider */}

            <div
              style={{
                position: "relative",
                margin: "8px 0",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "#F3F4F6",
                }}
              />

              <span
                style={{
                  position: "relative",
                  background: "white",
                  padding: "0 16px",
                  fontSize: 12,
                  color: "#9CA3AF",
                  fontWeight: 500,
                }}
              >
                OR CONTINUE WITH
              </span>
            </div>

            {/* Social */}

            <div style={{ display: "flex", gap: 12 }}>
              {[{ icon: <GoogleIcon />, label: "Google" }, { icon: <FacebookIcon />, label: "Facebook" }].map(
                ({ icon, label }) => (
                  <button
                    key={label}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "11px 16px",
                      border: "1.5px solid #E5E7EB",
                      borderRadius: 10,
                      background: "white",
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#374151",
                    }}
                  >
                    {icon}
                    {label}
                  </button>
                )
              )}
            </div>

            {/* Login */}

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <p
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                }}
              >
                Already have an account?{" "}
                <button
                  onClick={onGoLogin}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#2563EB",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: 14,
                    padding: 0,
                  }}
                >
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};