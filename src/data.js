// =========================
// ร้านอาหาร
// =========================

export const shops = [
  {
    id: "shop1",
    name: "ร้านข้าวมันไก่",
    description: "ข้าวมันไก่และอาหารจานเดียว",
  },
  {
    id: "shop2",
    name: "ร้านก๋วยเตี๋ยว",
    description: "ก๋วยเตี๋ยวและอาหารประเภทเส้น",
  },
  {
    id: "shop3",
    name: "ร้านอาหารตามสั่ง",
    description: "อาหารตามสั่งหลากหลายเมนู",
  },
];

// =========================
// เมนูอาหารแยกตามร้าน
// =========================

export const foods = [
  // ร้านข้าวมันไก่
  {
    id: "food1",
    shopId: "shop1",
    name: "ข้าวมันไก่",
    total: 50,
    remaining: 50,
  },
  {
    id: "food2",
    shopId: "shop1",
    name: "ข้าวมันไก่ทอด",
    total: 40,
    remaining: 40,
  },

  // ร้านก๋วยเตี๋ยว
  {
    id: "food3",
    shopId: "shop2",
    name: "ก๋วยเตี๋ยวหมู",
    total: 50,
    remaining: 50,
  },
  {
    id: "food4",
    shopId: "shop2",
    name: "ก๋วยเตี๋ยวไก่",
    total: 40,
    remaining: 40,
  },

  // ร้านอาหารตามสั่ง
  {
    id: "food5",
    shopId: "shop3",
    name: "กะเพราไก่",
    total: 50,
    remaining: 50,
  },
  {
    id: "food6",
    shopId: "shop3",
    name: "ข้าวผัด",
    total: 40,
    remaining: 40,
  },
];