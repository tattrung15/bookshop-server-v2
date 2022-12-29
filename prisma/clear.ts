/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";
import { truncate } from "./common";

const prisma = new PrismaClient();

async function main() {
  console.log("Start clear database ...");

  await truncate(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
