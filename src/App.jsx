import React, { useState } from "react";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import FoodAnalyzer from "./FoodAnalyzer";
import FoodStock from "./FoodStock";
import Login from "./Login";

import { roles } from "./roles";
import { shops } from "./data";

function App() {

  const [loggedIn, setLoggedIn] =
    useState(false);

  const [currentUser, setCurrentUser] =
    useState(null);

  const [selectedFood, setSelectedFood] =
    useState(null);

  // =========================
  // LOGIN
  // =========================

  const handleLogin = (account) => {
    setCurrentUser(account);
    setLoggedIn(true);
    setSelectedFood(null);
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    setSelectedFood(null);
  };

  // =========================
  // ยังไม่ได้ Login
  // =========================

  if (!loggedIn) {
    return (
      <Login
        onLogin={handleLogin}
      />
    );
  }

  // =========================
  // ข้อมูลผู้ใช้
  // =========================

  const role = roles.find(
    (item) =>
      item.id === currentUser?.role
  );

  // =========================
  // ร้านของเจ้าของร้าน
  // =========================

  const myShop =
    currentUser?.role === "vendor"
      ? shops.find(
          (shop) =>
            shop.id ===
            currentUser.shopId
        )
      : null;

  // =========================
  // เลือกอาหาร
  // =========================

  const handleSelectFood = (food) => {

    setSelectedFood(food);

    setTimeout(() => {

      document
        .getElementById(
          "food-analyzer"
        )
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }, 100);
  };

  return (
    <div className="app">

      <Navbar />

      {/* =========================
          HEADER
      ========================= */}

      <header className="header">

        <div>

          <h1>
            SmartSchoolFoodAI
          </h1>

          <p>
            ระบบจัดการอาหารภายในโรงเรียน
          </p>

        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          🚪 ออกจากระบบ
        </button>

      </header>

      <main className="container">

        {/* =========================
            USER INFO
        ========================= */}

        <section className="user-info">

          <div className="user-icon">

            {currentUser?.role ===
            "student"
              ? "🎓"
              : currentUser?.role ===
                "teacher"
              ? "👨‍🏫"
              : "🏪"}

          </div>

          <div>

            <strong>
              สวัสดี{" "}
              {currentUser?.name}
            </strong>

            <p>
              สิทธิ์:{" "}
              {role?.label}
            </p>

          </div>

        </section>

        {/* =========================
            ร้านของฉัน
        ========================= */}

        {currentUser?.role ===
          "vendor" &&
          myShop && (

          <section className="my-shop">

            <div className="my-shop-icon">
              🏪
            </div>

            <div>

              <span>
                ร้านของฉัน
              </span>

              <h2>
                {myShop.name}
              </h2>

              <p>
                เจ้าของร้าน:
                {" "}
                {currentUser.name}
              </p>

            </div>

          </section>

        )}

        {/* =========================
            WELCOME
        ========================= */}

        <section className="welcome">

          <h2>
            🍽️ ยินดีต้อนรับ
          </h2>

          <p>
            ระบบจัดการเมนูอาหารโรงเรียน
            พร้อม AI ช่วยวิเคราะห์
            อาหารคงเหลือ
          </p>

        </section>

        {/* =========================
            DASHBOARD
        ========================= */}

        <Dashboard
          role={currentUser?.role}
          shop={myShop}
          user={currentUser}
        />

        {/* =========================
            ร้านอาหาร
        ========================= */}

        <section className="shops-section">

          <h2>
            🏪 ร้านอาหารในโรงเรียน
          </h2>

          <p>
            ตรวจสอบร้านอาหาร
            และสถานะการให้บริการ
          </p>

          <div className="shop-grid">

            {shops.map((shop) => {

              const isMyShop =
                currentUser?.role ===
                  "vendor" &&
                currentUser?.shopId ===
                  shop.id;

              return (
                <div
                  className={`shop-card ${
                    isMyShop
                      ? "my-shop-card"
                      : ""
                  }`}
                  key={shop.id}
                >

                  <div className="shop-icon">
                    🍱
                  </div>

                  <div className="shop-info">

                    <h3>
                      {shop.name}
                    </h3>

                    {shop.description && (
                      <p>
                        {shop.description}
                      </p>
                    )}

                    {isMyShop && (
                      <span className="my-shop-label">
                        ⭐ ร้านของฉัน
                      </span>
                    )}

                    <span className="status">
                      ● เปิดให้บริการ
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </section>

        {/* =========================
            FOOD STOCK
        ========================= */}

        <FoodStock
          role={currentUser?.role}
          shopId={currentUser?.shopId}
          onSelectFood={
            handleSelectFood
          }
        />

        {/* =========================
            AI ANALYZER
        ========================= */}

        <div id="food-analyzer">

          <FoodAnalyzer
            role={currentUser?.role}
            shopId={currentUser?.shopId}
            selectedFood={
              selectedFood
            }
          />

        </div>

      </main>

    </div>
  );
}

export default App;