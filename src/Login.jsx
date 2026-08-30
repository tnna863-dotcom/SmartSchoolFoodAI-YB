import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const accounts = [
    {
      username: "student",
      password: "1234",
      role: "student",
      name: "นักเรียน",
      shopId: null,
      shopName: null,
    },

    {
      username: "teacher",
      password: "1234",
      role: "teacher",
      name: "ครูผู้ดูแล",
      shopId: null,
      shopName: null,
    },

    {
      username: "vendor1",
      password: "1234",
      role: "vendor",
      name: "เจ้าของร้านข้าวมันไก่",
      shopId: "shop1",
      shopName: "ร้านข้าวมันไก่",
    },

    {
      username: "vendor2",
      password: "1234",
      role: "vendor",
      name: "เจ้าของร้านก๋วยเตี๋ยว",
      shopId: "shop2",
      shopName: "ร้านก๋วยเตี๋ยว",
    },

    {
      username: "vendor3",
      password: "1234",
      role: "vendor",
      name: "เจ้าของร้านอาหารตามสั่ง",
      shopId: "shop3",
      shopName: "ร้านอาหารตามสั่ง",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("กรุณากรอกชื่อผู้ใช้");
      return;
    }

    if (!password.trim()) {
      setError("กรุณากรอกรหัสผ่าน");
      return;
    }

    const account = accounts.find(
      (item) =>
        item.username === username.trim() &&
        item.password === password
    );

    if (!account) {
      setError(
        "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
      );
      return;
    }

    onLogin(account);
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🍱
        </div>

        <h1>
          SmartSchoolFoodAI
        </h1>

        <p className="login-subtitle">
          ระบบจัดการอาหารภายในโรงเรียน
        </p>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >

          <div className="login-group">

            <label>
              👤 ชื่อผู้ใช้
            </label>

            <input
              type="text"
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
              placeholder="กรอกชื่อผู้ใช้"
              autoComplete="username"
            />

          </div>

          <div className="login-group">

            <label>
              🔒 รหัสผ่าน
            </label>

            <div className="password-box">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="กรอกรหัสผ่าน"
                autoComplete="current-password"
              />

              <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? "🙈"
                  : "👁️"}
              </button>

            </div>

          </div>

          {error && (
            <div className="login-error">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
          >
            🔐 เข้าสู่ระบบ
          </button>

        </form>

        <div className="test-accounts">

          <h3>
            🧪 บัญชีทดสอบ
          </h3>

          <div className="test-account">
            🎓 นักเรียน
            <br />
            <strong>
              student / 1234
            </strong>
          </div>

          <div className="test-account">
            👨‍🏫 ครู
            <br />
            <strong>
              teacher / 1234
            </strong>
          </div>

          <div className="test-account">
            🏪 ร้านข้าวมันไก่
            <br />
            <strong>
              vendor1 / 1234
            </strong>
          </div>

          <div className="test-account">
            🍜 ร้านก๋วยเตี๋ยว
            <br />
            <strong>
              vendor2 / 1234
            </strong>
          </div>

          <div className="test-account">
            🍳 ร้านอาหารตามสั่ง
            <br />
            <strong>
              vendor3 / 1234
            </strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;