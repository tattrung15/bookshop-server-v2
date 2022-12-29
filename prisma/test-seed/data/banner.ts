const BANNER_TYPE = {
  CATEGORY: 1,
  PRODUCT: 2,
};

const today = new Date();

export const bannerData = [
  {
    title: "Nhân vật hạ cấp Tomozaki",
    imageUrl: null,
    isActive: false,
    type: BANNER_TYPE.PRODUCT,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "'Cậu' ma nhà xí Hanako",
    imageUrl: null,
    isActive: false,
    type: BANNER_TYPE.CATEGORY,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Nhà có cụ mèo già",
    imageUrl: null,
    isActive: false,
    type: BANNER_TYPE.PRODUCT,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Nhật kí những trái tim xanh đỏ",
    imageUrl: null,
    isActive: false,
    type: BANNER_TYPE.PRODUCT,
    createdAt: today,
    updatedAt: today,
  },
];
