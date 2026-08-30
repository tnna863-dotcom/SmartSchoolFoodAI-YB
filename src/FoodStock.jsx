import React, { useState } from "react";
import { foods as initialFoods } from "./data";

function FoodStock({
  role,
  shopId,
  onSelectFood,
}) {
  const [foods, setFoods] =
    useState(initialFoods);

  const [showAdd, setShowAdd] =
    useState(false);

  const [foodName, setFoodName] =
    useState("");

  const [sideName, setSideName] =
    useState("");

  const [total, setTotal] =
    useState("");

  // =========================
  // แสดงเฉพาะอาหารของร้าน
  // =========================

  const myFoods =
    role === "vendor"
      ? foods.filter(
          (food) =>
            food.shopId === shopId
        )
      : foods;

  // =========================
  // เพิ่มเมนู
  // =========================

  const addFood = (event) => {
    event.preventDefault();

    if (!foodName.trim()) {
      alert("กรุณากรอกชื่ออาหาร");
      return;
    }

    if (!sideName.trim()) {
      alert("กรุณากรอกชื่อกับข้าว");
      return;
    }

    if (!total || Number(total) <= 0) {
      alert("กรุณาระบุจำนวนจาน");
      return;
    }

    const newFood = {
      id:
        "food-" +
        Date.now(),

      shopId,

      name: foodName.trim(),

      sideName:
        sideName.trim(),

      total: Number(total),

      remaining:
        Number(total),
    };

    setFoods((current) => [
      ...current,
      newFood,
    ]);

    setFoodName("");
    setSideName("");
    setTotal("");
    setShowAdd(false);
  };

  // =========================
  // ไม่ใช่เจ้าของร้าน
  // =========================

  if (role !== "vendor") {
    return (
      <section
        className="food-stock"
        id="food-stock"
      >

        <div className="food-stock-header">

          <h2>
            🍱 อาหารคงเหลือ
          </h2>

          <p>
            ดูจำนวนอาหารคงเหลือ
            ของร้านอาหาร
          </p>

        </div>

        <div className="food-grid">

          {myFoods.map((food) => {

            const percentage =
              food.total > 0
                ? Math.round(
                    (food.remaining /
                      food.total) *
                      100
                  )
                : 0;

            return (
              <div
                className="food-card"
                key={food.id}
              >

                <div className="food-card-icon">
                  🍛
                </div>

                <div className="food-card-content">

                  <h3>
                    {food.name}
                  </h3>

                  <p>
                    กับข้าว:{" "}
                    {food.sideName ||
                      "ไม่ระบุ"}
                  </p>

                  <div className="food-remaining">

                    <strong>
                      {food.remaining}
                    </strong>

                    <span>
                      จาน
                    </span>

                  </div>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      style={{
                        width:
                          `${percentage}%`,
                      }}
                    />

                  </div>

                  <small>
                    เหลือ {percentage}%
                  </small>

                </div>

              </div>
            );
          })}

        </div>

      </section>
    );
  }

  // =========================
  // เจ้าของร้าน
  // =========================

  return (
    <section
      className="food-stock"
      id="food-stock"
    >

      <div className="food-stock-header">

        <div>

          <h2>
            🍱 เมนูของร้าน
          </h2>

          <p>
            เพิ่มและจัดการเมนู
            ของร้านตัวเอง
          </p>

        </div>

        <button
          className="add-food-button"
          onClick={() =>
            setShowAdd(!showAdd)
          }
        >
          {showAdd
            ? "✕ ปิด"
            : "＋ เพิ่มเมนู"}
        </button>

      </div>

      {/* =========================
          เพิ่มเมนู
      ========================= */}

      {showAdd && (

        <form
          className="add-food-form"
          onSubmit={addFood}
        >

          <h3>
            ➕ เพิ่มเมนูอาหาร
          </h3>

          <div className="form-row">

            <div className="login-group">

              <label>
                🍚 ชื่ออาหารหลัก
              </label>

              <input
                type="text"
                value={foodName}
                onChange={(event) =>
                  setFoodName(
                    event.target.value
                  )
                }
                placeholder="เช่น ข้าวราดแกง"
              />

            </div>

            <div className="login-group">

              <label>
                🍗 ชื่อกับข้าว
              </label>

              <input
                type="text"
                value={sideName}
                onChange={(event) =>
                  setSideName(
                    event.target.value
                  )
                }
                placeholder="เช่น ไก่ทอด"
              />

            </div>

          </div>

          <div className="login-group">

            <label>
              🍽️ จำนวนทั้งหมดที่เตรียม
            </label>

            <input
              type="number"
              min="1"
              value={total}
              onChange={(event) =>
                setTotal(
                  event.target.value
                )
              }
              placeholder="เช่น 50"
            />

          </div>

          <button
            type="submit"
            className="save-food-button"
          >
            💾 บันทึกเมนู
          </button>

        </form>
      )}

      {/* =========================
          รายการอาหาร
      ========================= */}

      {myFoods.length === 0 ? (

        <div className="empty-food">

          <div>
            🍽️
          </div>

          <h3>
            ยังไม่มีเมนู
          </h3>

          <p>
            กด “เพิ่มเมนู”
            เพื่อเพิ่มอาหารของร้าน
          </p>

        </div>

      ) : (

        <div className="food-grid">

          {myFoods.map((food) => {

            const percentage =
              food.total > 0
                ? Math.round(
                    (food.remaining /
                      food.total) *
                      100
                  )
                : 0;

            return (
              <div
                className="food-card"
                key={food.id}
              >

                <div className="food-card-icon">
                  🍛
                </div>

                <div className="food-card-content">

                  <h3>
                    {food.name}
                  </h3>

                  <p>
                    🍗 กับข้าว:{" "}
                    {food.sideName}
                  </p>

                  <div className="food-remaining">

                    <strong>
                      {food.remaining}
                    </strong>

                    <span>
                      จาน
                    </span>

                  </div>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      style={{
                        width:
                          `${percentage}%`,
                      }}
                    />

                  </div>

                  <small>
                    เหลือ {percentage}%
                  </small>

                  <button
                    className="food-analyze-button"
                    onClick={() =>
                      onSelectFood(food)
                    }
                  >
                    📷 วิเคราะห์อาหาร
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      )}

    </section>
  );
}

export default FoodStock;