const categoryNames: string[] = [
  "Lịch sử truyền thống", // 0
  "Sách công cụ Đoàn - Đội", // 1
  "Kiến thức - Khoa học", // 2
  "Văn học Việt Nam", // 3
  "Văn học nước ngoài", // 4
  "Truyện tranh", // 5
  "Manga - comic", // 6
  "Wings Books", // 7
  "Giải mã bản thân", // 8
  "Combo", // 9
];

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

const today = new Date();

export const categoryData = categoryNames.map((item, index) => ({
  id: BigInt(index + 1),
  name: item,
  description: null,
  parentCategoryId: null,
  slug: slugify(item),
  isAuthor: false,
  createdAt: today,
  updatedAt: today,
}));
