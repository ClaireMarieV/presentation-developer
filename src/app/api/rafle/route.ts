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
