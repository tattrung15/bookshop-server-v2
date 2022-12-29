enum DELIVERY_INDEX {
  ADDED_TO_CART = "AddedToCart",
  WAITING_TO_CONFIRM = "WaitingToConfirm",
  DELIVERING = "Delivering",
  DELIVERED = "Delivered",
  CANCELED = "Canceled",
}

const DELIVERY_VALUE = {
  [DELIVERY_INDEX.ADDED_TO_CART]: "Đã thêm vào giỏ",
  [DELIVERY_INDEX.WAITING_TO_CONFIRM]: "Chờ xác nhận",
  [DELIVERY_INDEX.DELIVERING]: "Đang giao hàng",
  [DELIVERY_INDEX.DELIVERED]: "Đã giao",
  [DELIVERY_INDEX.CANCELED]: "Đã hủy",
};

const today = new Date();

const deliveryCommon = {
  createdAt: today,
  updatedAt: today,
};

export const deliveryData = [
  {
    ...deliveryCommon,
    index: DELIVERY_INDEX.ADDED_TO_CART,
    value: DELIVERY_VALUE[DELIVERY_INDEX.ADDED_TO_CART],
  },
  {
    ...deliveryCommon,
    index: DELIVERY_INDEX.WAITING_TO_CONFIRM,
    value: DELIVERY_VALUE[DELIVERY_INDEX.WAITING_TO_CONFIRM],
  },
  {
    ...deliveryCommon,
    index: DELIVERY_INDEX.DELIVERING,
    value: DELIVERY_VALUE[DELIVERY_INDEX.DELIVERING],
  },
  {
    ...deliveryCommon,
    index: DELIVERY_INDEX.DELIVERED,
    value: DELIVERY_VALUE[DELIVERY_INDEX.DELIVERED],
  },
  {
    ...deliveryCommon,
    index: DELIVERY_INDEX.CANCELED,
    value: DELIVERY_VALUE[DELIVERY_INDEX.CANCELED],
  },
];
