/* eslint-disable no-console */

import { hashSync } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { deliveryData } from "./data/delivery";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  const deliveryCount = await prisma.delivery.count();

  if (!deliveryCount) {
    await prisma.delivery.createMany({ data: deliveryData });
  }

  const userCount = await prisma.user.count();

  if (!userCount) {
    await prisma.user.create({
      data: {
        address: "Ha Noi",
        amount: 0,
        email: "admin@gmail.com",
        firstName: "Admin",
        lastName: "Admin",
        username: "admin",
        password: hashSync("admin", 10),
        phone: "0123456789",
        role: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

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
