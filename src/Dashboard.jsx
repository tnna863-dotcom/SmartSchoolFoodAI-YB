import React from "react";

function Dashboard({
  role,
  shop,
  user,
}) {

  // =========================
  // นักเรียน
  // =========================

  if (role === "student") {

    return (
      <section className="dashboard">

        <div className="dashboard-title">

          <h2>
            🎓 Dashboard นักเรียน
          </h2>

          <p>
            ดูข้อมูลอาหารภายในโรงเรียน
          </p>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              🍛
            </div>

            <h3>
              เมนูอาหาร
            </h3>

            <p>
              ดูเมนูอาหารของร้านต่าง ๆ
            </p>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              📊
            </div>

            <h3>
              อาหารคงเหลือ
            </h3>

            <p>
              ดูจำนวนอาหารโดยประมาณ
              ของแต่ละร้าน
            </p>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              🏪
            </div>

            <h3>
              ร้านอาหาร
            </h3>

            <p>
              ดูร้านอาหาร
              ที่เปิดให้บริการ
            </p>

          </div>

        </div>

      </section>
    );
  }

  // =========================
  // ครู
  // =========================

  if (role === "teacher") {

    return (
      <section className="dashboard">

        <div className="dashboard-title">

          <h2>
            👨‍🏫 Dashboard ครูผู้ดูแล
          </h2>

          <p>
            ตรวจสอบข้อมูลร้านอาหาร
            ภายในโรงเรียน
          </p>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              🏪
            </div>

            <h3>
              ร้านอาหารทั้งหมด
            </h3>

            <p>
              ตรวจสอบร้านอาหาร
              และสถานะการเปิดร้าน
            </p>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              📊
            </div>

            <h3>
              รายงานอาหาร
            </h3>

            <p>
              ดูข้อมูลอาหารคงเหลือ
              ของแต่ละร้าน
            </p>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              🔍
            </div>

            <h3>
              ตรวจสอบ AI
            </h3>

            <p>
              ตรวจสอบข้อมูลที่ร้านอาหาร
              ส่งเข้าระบบ
            </p>

          </div>

        </div>

      </section>
    );
  }

  // =========================
  // เจ้าของร้าน
  // =========================

  if (role === "vendor") {

    return (
      <section className="dashboard">

        <div className="dashboard-title">

          <h2>
            🏪 Dashboard ร้านของฉัน
          </h2>

          <p>
            {shop
              ? shop.name
              : "ไม่พบข้อมูลร้าน"}
          </p>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              🍛
            </div>

            <h3>
              เมนูของร้าน
            </h3>

            <p>
              เพิ่มและจัดการ
              เมนูอาหารของร้าน
            </p>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              📷
            </div>

            <h3>
              AI อาหารคงเหลือ
            </h3>

            <p>
              ถ่ายรูปหม้อข้าว
              และหม้อไก่
              เพื่อวิเคราะห์อาหาร
            </p>

          </div>

          <div className="dashboard-card">

            <div className="dashboard-card-icon">
              📊
            </div>

            <h3>
              รายงานร้าน
            </h3>

            <p>
              ดูข้อมูลอาหาร
              และจำนวนที่เหลือ
            </p>

          </div>

        </div>

        <div className="vendor-permission">

          <h3>
            🔐 สิทธิ์ของบัญชี
          </h3>

          <p>
            บัญชีนี้สามารถจัดการข้อมูล
            เฉพาะร้านของตัวเองเท่านั้น
          </p>

          <strong>
            {user?.name}
          </strong>

        </div>

      </section>
    );
  }

  return null;
}

export default Dashboard;