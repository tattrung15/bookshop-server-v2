/* eslint-disable no-console */
import { PrismaClient } from "@prisma/client";

export async function truncate(prisma: PrismaClient) {
  const tablenames = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;
  for (const { tablename } of tablenames) {
    if (tablename !== "_prisma_migrations") {
      try {
        const result = await prisma.$queryRawUnsafe(
          `SELECT count(0) FROM "public"."${tablename}";`,
        );
        if (result[0].count > 0) {
          await prisma.$executeRawUnsafe(
            `TRUNCATE TABLE "public"."${tablename}" CASCADE;`,
          );
        }
      } catch (error) {
        console.log({ error });
      }
    }
  }
}
export async function truncateOf(prisma: PrismaClient, tableNames: string[]) {
  for (const tableName of tableNames) {
    try {
      const result = await prisma.$queryRawUnsafe(
        `SELECT count(0) FROM "public"."${tableName}";`,
      );
      if (result[0].count > 0) {
        await prisma.$executeRawUnsafe(
          `TRUNCATE TABLE "public"."${tableName}" CASCADE;`,
        );
      }
    } catch (error) {
      console.log({ error });
    }
  }
}
