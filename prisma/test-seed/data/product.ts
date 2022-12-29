import { categoryData } from "./category";

function slugify(string: string): string {
  const a =
    "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
  const b =
    "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return string
    .toString()
    .toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a")
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e")
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, "i")
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o")
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u")
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y")
    .replace(/đ/gi, "d")
    .replace(/\s+/g, "-")
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const today = new Date();

export const productData = [
  {
    title: "Naruto - Tập 71",
    slug: slugify("Naruto - Tập 71"),
    author: "Masashi Kishimoto",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 208,
    price: 22500,
    longDescription: "Naruto - Tập 71",
    shortDescription: "Naruto - Tập 71",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Vua sáng chế - Tập 5",
    slug: slugify("Vua sáng chế - Tập 5"),
    author: "Tatsuki Nohda",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 192,
    price: 18000,
    longDescription: "Vua sáng chế - Tập 5",
    shortDescription: "Vua sáng chế - Tập 5",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Thiên thần diệt thế - Seraph of the end - Tập 22",
    slug: slugify("Thiên thần diệt thế - Seraph of the end - Tập 22"),
    author: "Takaya Kagami,Yamato Yamamoto,Daisuke Furuya",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 196,
    price: 19800,
    longDescription: "Thiên thần diệt thế - Seraph of the end - Tập 22",
    shortDescription: "Thiên thần diệt thế - Seraph of the end - Tập 22",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Bên dưới cây cầu Arakawa - Tập 10",
    slug: slugify("Bên dưới cây cầu Arakawa - Tập 10"),
    author: "Hikaru Nakamura",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 180,
    price: 27000,
    longDescription: "Bên dưới cây cầu Arakawa - Tập 10",
    shortDescription: "Bên dưới cây cầu Arakawa - Tập 10",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Cơ Bản là Cơ Bản",
    slug: slugify("Cơ Bản là Cơ Bản"),
    author: "Huy Thông",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 208,
    price: 43200,
    longDescription: "Cơ Bản là Cơ Bản",
    shortDescription: "Cơ Bản là Cơ Bản",
    categoryId: categoryData[3].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  // Combo
  {
    title: "Combo Hồ sơ tội phạm (2 quyển)",
    slug: slugify("Combo Hồ sơ tội phạm (2 quyển)"),
    author: "Cương Tuyết Ấn",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 0,
    price: 156000,
    longDescription: "Combo Hồ sơ tội phạm (2 quyển)",
    shortDescription: "Combo Hồ sơ tội phạm (2 quyển)",
    categoryId: categoryData[9].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Combo Sách Kinh điển (4 quyển)",
    slug: slugify("Combo Sách Kinh điển (4 quyển)"),
    author: "Shirley Jackson,Mary Shelley,Robert Louis Stevenson,Henry James",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 0,
    price: 186600,
    longDescription: "Combo Sách Kinh điển (4 quyển)",
    shortDescription: "Combo Sách Kinh điển (4 quyển)",
    categoryId: categoryData[9].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Combo Triết lí sống đẹp (3 quyển)",
    slug: slugify("Combo Triết lí sống đẹp (3 quyển)"),
    author:
      "Liz Marvin,Annie Davidson,Richard Harrington,Annie Davidson,Oliver Luke Delorie",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 0,
    price: 135000,
    longDescription: "Combo Triết lí sống đẹp (3 quyển)",
    shortDescription: "Combo Triết lí sống đẹp (3 quyển)",
    categoryId: categoryData[9].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Combo Artbook mĩ thuật cổ trang (3 quyển)",
    slug: slugify("Combo Artbook mĩ thuật cổ trang (3 quyển)"),
    author: "Nhật Xuất Tiểu Thái Dương,Yaya,Mèo Lọc Cọc",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 0,
    price: 268800,
    longDescription: "Combo Artbook mĩ thuật cổ trang (3 quyển)",
    shortDescription: "Combo Artbook mĩ thuật cổ trang (3 quyển)",
    categoryId: categoryData[9].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Combo Sức mạnh của sự cô đơn (3 quyển)",
    slug: slugify("Combo Sức mạnh của sự cô đơn (3 quyển)"),
    author: "Lí Tư Viên,Tokio Godo,Lý Thành Cơ",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 0,
    price: 153600,
    longDescription: "Combo Sức mạnh của sự cô đơn (3 quyển)",
    shortDescription: "Combo Sức mạnh của sự cô đơn (3 quyển)",
    categoryId: categoryData[9].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  // Manga - comic
  {
    title: "'Cậu' ma nhà xí Hanako - Tập 14",
    slug: slugify("'Cậu' ma nhà xí Hanako - Tập 14"),
    author: "AidaIro",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 178,
    price: 27000,
    longDescription: "'Cậu' ma nhà xí Hanako - Tập 14",
    shortDescription: "'Cậu' ma nhà xí Hanako - Tập 14",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  // Doraemon
  {
    title: "Doraemon truyện dài - Tập 8 - Nobita và hiệp sĩ rồng",
    slug: slugify("Doraemon truyện dài - Tập 8 - Nobita và hiệp sĩ rồng"),
    author: "Fujiko F Fujio",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 192,
    price: 16200,
    longDescription: "Doraemon truyện dài - Tập 8 - Nobita và hiệp sĩ rồng",
    shortDescription: "Doraemon truyện dài - Tập 8 - Nobita và hiệp sĩ rồng",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Doraemon truyện dài - Tập 7 - Nobita và binh đoàn người sắt",
    slug: slugify(
      "Doraemon truyện dài - Tập 7 - Nobita và binh đoàn người sắt",
    ),
    author: "Fujiko F Fujio",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 192,
    price: 16200,
    longDescription:
      "Doraemon truyện dài - Tập 7 - Nobita và binh đoàn người sắt",
    shortDescription:
      "Doraemon truyện dài - Tập 7 - Nobita và binh đoàn người sắt",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Doraemon tuyển tập tranh truyện màu - Tập 5",
    slug: slugify("Doraemon tuyển tập tranh truyện màu - Tập 5"),
    author: "Fujiko F Fujio",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 160,
    price: 36000,
    longDescription: "Doraemon tuyển tập tranh truyện màu - Tập 5",
    shortDescription: "Doraemon tuyển tập tranh truyện màu - Tập 5",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Doraemon bóng chày - Truyền kì về bóng chày siêu cấp - Tập 4",
    slug: slugify(
      "Doraemon bóng chày - Truyền kì về bóng chày siêu cấp - Tập 4",
    ),
    author: "Fujiko F Fujio,Mugiwara Shintaro",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 192,
    price: 16200,
    longDescription:
      "Doraemon bóng chày - Truyền kì về bóng chày siêu cấp - Tập 4",
    shortDescription:
      "Doraemon bóng chày - Truyền kì về bóng chày siêu cấp - Tập 4",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Doraemon - Nobita và người khổng lồ xanh (2020)",
    slug: slugify("Doraemon - Nobita và người khổng lồ xanh (2020)"),
    author: "Fujiko F Fujio",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 194,
    price: 20250,
    longDescription: "Doraemon - Nobita và người khổng lồ xanh (2020)",
    shortDescription: "Doraemon - Nobita và người khổng lồ xanh (2020)",
    categoryId: categoryData[6].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  // Wings Books
  {
    title: "Nhà có cụ mèo già",
    slug: slugify("Nhà có cụ mèo già"),
    author: "Fujihito",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 128,
    price: 56000,
    longDescription: "Nhà có cụ mèo già",
    shortDescription: "Nhà có cụ mèo già",
    categoryId: categoryData[7].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Nhân vật hạ cấp Tomozaki - Tập 2 - Bản giới hạn",
    slug: slugify("Nhân vật hạ cấp Tomozaki - Tập 2 - Bản giới hạn"),
    author: "Yuki Yaku,Fly",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 424,
    price: 77700,
    longDescription: "Nhân vật hạ cấp Tomozaki - Tập 2 - Bản giới hạn",
    shortDescription: "Nhân vật hạ cấp Tomozaki - Tập 2 - Bản giới hạn",
    categoryId: categoryData[7].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Thị trấn mèo - Tập 6",
    slug: slugify("Thị trấn mèo - Tập 6"),
    author: "Nekomaki (ms-work)",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 176,
    price: 47600,
    longDescription: "Thị trấn mèo - Tập 6",
    shortDescription: "Thị trấn mèo - Tập 6",
    categoryId: categoryData[7].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Lời hiệu triệu của Cthulhu - Tuyển tập H.P. Lovecraft",
    slug: slugify("Lời hiệu triệu của Cthulhu - Tuyển tập H.P. Lovecraft"),
    author: "H. P. Lovecraft",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 252,
    price: 56000,
    longDescription: "Lời hiệu triệu của Cthulhu - Tuyển tập H.P. Lovecraft",
    shortDescription: "Lời hiệu triệu của Cthulhu - Tuyển tập H.P. Lovecraft",
    categoryId: categoryData[7].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
  {
    title: "Thiên sứ nhà bên - Tập 2 - Bản giới hạn",
    slug: slugify("Thiên sứ nhà bên - Tập 2 - Bản giới hạn"),
    author: "Saekisan,Hanekoto",
    currentNumber: getRandomInt(10, 500),
    numberOfPage: 332,
    price: 66500,
    longDescription: "Thiên sứ nhà bên - Tập 2 - Bản giới hạn",
    shortDescription: "Thiên sứ nhà bên - Tập 2 - Bản giới hạn",
    categoryId: categoryData[7].id,
    quantityPurchased: 0,
    createdAt: today,
    updatedAt: today,
  },
];
