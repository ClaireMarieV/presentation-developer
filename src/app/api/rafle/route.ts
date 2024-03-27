import prisma from "@/lib/database";
import { cookies } from "next/headers";
import { Result, visitor } from "valentin";
import { z } from "zod";

export const POST = visitor(async ({ name }) => {
  const userId = cookies().get("userId")?.value;

  if (!userId) {
    return Result.err({
      code: 403,
      message: "Vous avez besoin d'un id pour participer",
    });
  }

  return Result.ok(
    await prisma.user.update({
      data: { name },
      where: { id: userId },
    })
  );
}, z.object({ name: z.string().min(1) }));

export const GET = visitor(
  async ({ userId }) => {
    if (userId) {
      return Result.ok(await prisma.user.findUnique({ where: { id: userId } }));
    }

    const userCount = await prisma.user.count();
    // We skip a user to skip the presenter
    const skip = Math.floor(Math.random() * (userCount - 1)) + 1;

    return Result.ok(
      await prisma.user.findFirst({
        take: 1,
        skip: skip,
        where: { name: { not: null } },
      })
    );
  },
  z.object({
    userId: z.string().uuid().optional(),
  })
);
