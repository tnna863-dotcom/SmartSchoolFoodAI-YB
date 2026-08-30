import React, { useState } from "react";

function FoodAnalyzer({
  role,
  shopId,
  selectedFood,
}) {
  const [riceImage, setRiceImage] =
    useState(null);

  const [sideImage, setSideImage] =
    useState(null);

  const [ricePreview, setRicePreview] =
    useState("");

  const [sidePreview, setSidePreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  // =========================
  // เฉพาะเจ้าของร้าน
  // =========================

  if (role !== "vendor") {
    return null;
  }

  // =========================
  // รูปหม้อข้าว
  // =========================

  const handleRiceImage = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    setRiceImage(file);

    const preview =
      URL.createObjectURL(file);

    setRicePreview(preview);

    setResult(null);
  };

  // =========================
  // รูปหม้อกับข้าว
  // =========================

  const handleSideImage = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    setSideImage(file);

    const preview =
      URL.createObjectURL(file);

    setSidePreview(preview);

    setResult(null);
  };

  // =========================
  // ลบรูป
  // =========================

  const removeRiceImage = () => {
    setRiceImage(null);
    setRicePreview("");
    setResult(null);
  };

  const removeSideImage = () => {
    setSideImage(null);
    setSidePreview("");
    setResult(null);
  };

  // =========================
  // วิเคราะห์
  // =========================

  const analyzeFood = () => {
    if (!riceImage) {
      alert(
        "กรุณาถ่ายรูปหรือเลือกรูปหม้อข้าว"
      );
      return;
    }

    if (!sideImage) {
      alert(
        "กรุณาถ่ายรูปหรือเลือกรูปหม้อกับข้าว"
      );
      return;
    }

    setLoading(true);
    setResult(null);

    /*
      ตอนนี้จำลอง AI ก่อน

      ขั้นต่อไปจะเปลี่ยนส่วนนี้
      เป็น AI วิเคราะห์รูปจริง
    */

    setTimeout(() => {
      const rice = 32;
      const side = 28;

      // 1 จานต้องมีทั้งข้าวและกับข้าว
      const plates = Math.min(
        rice,
        side
      );

      setResult({
        shopId,
        foodId:
          selectedFood?.id || null,
        foodName:
          selectedFood?.name ||
          "อาหารของร้าน",
        sideName:
          selectedFood?.sideName ||
          "กับข้าว",
        rice,
        side,
        plates,
      });

      setLoading(false);
    }, 1800);
  };

  return (
    <section
      className="food-analyzer"
      id="food-analyzer"
    >

      {/* =========================
          หัวข้อ
      ========================= */}

      <div className="analyzer-header">

        <h2>
          🤖 AI วิเคราะห์อาหารคงเหลือ
        </h2>

        <p>
          {selectedFood
            ? `เมนู: ${selectedFood.name}`
            : "เลือกเมนูจากด้านบนก่อนวิเคราะห์"}
        </p>

      </div>

      {/* =========================
          กล่องถ่ายรูป
      ========================= */}

      <div className="analyzer-grid">

        {/* =====================
            หม้อข้าว
        ====================== */}

        <div className="analyzer-card">

          <div className="analyzer-icon">
            🍚
          </div>

          <h3>
            หม้อข้าว
          </h3>

          <p>
            ถ่ายให้เห็นปริมาณข้าว
            ภายในหม้ออย่างชัดเจน
          </p>

          {ricePreview ? (

            <div className="image-preview">

              <img
                src={ricePreview}
                alt="หม้อข้าว"
              />

              <button
                type="button"
                className="remove-image"
                onClick={
                  removeRiceImage
                }
              >
                ✕ ลบรูป
              </button>

            </div>

          ) : (

            <label className="camera-box">

              <span>
                📷
              </span>

              <strong>
                ถ่ายรูปหม้อข้าว
              </strong>

              <small>
                หรือเลือกภาพจากเครื่อง
              </small>

              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={
                  handleRiceImage
                }
                hidden
              />

            </label>

          )}

        </div>

        {/* =====================
            หม้อกับข้าว
        ====================== */}

        <div className="analyzer-card">

          <div className="analyzer-icon">
            🍲
          </div>

          <h3>
            หม้อกับข้าว
          </h3>

          <p>
            ถ่ายให้เห็นปริมาณ
            กับข้าวที่เหลือในหม้อ
          </p>

          {sidePreview ? (

            <div className="image-preview">

              <img
                src={sidePreview}
                alt="หม้อกับข้าว"
              />

              <button
                type="button"
                className="remove-image"
                onClick={
                  removeSideImage
                }
              >
                ✕ ลบรูป
              </button>

            </div>

          ) : (

            <label className="camera-box">

              <span>
                📷
              </span>

              <strong>
                ถ่ายรูปหม้อกับข้าว
              </strong>

              <small>
                หรือเลือกภาพจากเครื่อง
              </small>

              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={
                  handleSideImage
                }
                hidden
              />

            </label>

          )}

        </div>

      </div>

      {/* =========================
          ปุ่มวิเคราะห์
      ========================= */}

      <button
        className="analyze-button"
        onClick={analyzeFood}
        disabled={
          loading ||
          !riceImage ||
          !sideImage
        }
      >

        {loading
          ? "🤖 AI กำลังวิเคราะห์..."
          : "🤖 วิเคราะห์อาหาร"}

      </button>

      {/* =========================
          ผลลัพธ์
      ========================= */}

      {result && (

        <div className="analysis-result">

          <h2>
            📊 ผลการวิเคราะห์
          </h2>

          <div className="result-food-name">

            <strong>
              {result.foodName}
            </strong>

            <span>
              กับข้าว:{" "}
              {result.sideName}
            </span>

          </div>

          <div className="result-grid">

            <div className="result-card">

              <span>
                🍚
              </span>

              <h3>
                ข้าว
              </h3>

              <strong>
                {result.rice}
              </strong>

              <small>
                จานโดยประมาณ
              </small>

            </div>

            <div className="result-card">

              <span>
                🍲
              </span>

              <h3>
                กับข้าว
              </h3>

              <strong>
                {result.side}
              </strong>

              <small>
                จานโดยประมาณ
              </small>

            </div>

          </div>

          <div className="plates-result">

            <p>
              สามารถจัดอาหารได้อีกประมาณ
            </p>

            <strong>
              {result.plates} จาน
            </strong>

            <small>
              คำนวณจากจำนวนข้าวและกับข้าว
              ที่มีอยู่น้อยกว่า
            </small>

          </div>

        </div>

      )}

    </section>
  );
}

export default FoodAnalyzer;