/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import { bannerData } from "./data/banner";
import { categoryData } from "./data/category";
import { productData } from "./data/product";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  await prisma.banner.createMany({ data: bannerData });
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE banners_id_seq RESTART WITH ${bannerData.length + 1}`,
  );
  await prisma.category.createMany({ data: categoryData });
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE categories_id_seq RESTART WITH ${categoryData.length + 1}`,
  );
  await prisma.product.createMany({ data: productData });
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE products_id_seq RESTART WITH ${productData.length + 1}`,
  );

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
