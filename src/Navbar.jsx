import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🍽️ SmartSchoolFoodAI
      </div>

      <div className="navbar-menu">
        <button>หน้าหลัก</button>
        <button>เมนูอาหาร</button>
        <button>ร้านอาหาร</button>
        <button>AI วิเคราะห์อาหาร</button>
      </div>
    </nav>
  );
}

export default Navbar;