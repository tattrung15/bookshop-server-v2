export const PAGING_DEFAULT_LIMIT = 20;

export enum DELIVERY_INDEX {
  ADDED_TO_CART = "AddedToCart",
  WAITING_TO_CONFIRM = "WaitingToConfirm",
  DELIVERING = "Delivering",
  DELIVERED = "Delivered",
  CANCELED = "Canceled",
}

export const DELIVERY_VALUE = {
  [DELIVERY_INDEX.ADDED_TO_CART]: "Đã thêm vào giỏ",
  [DELIVERY_INDEX.WAITING_TO_CONFIRM]: "Chờ xác nhận",
  [DELIVERY_INDEX.DELIVERING]: "Đang giao hàng",
  [DELIVERY_INDEX.DELIVERED]: "Đã giao",
  [DELIVERY_INDEX.CANCELED]: "Đã hủy",
};

export enum ROLE {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
}
