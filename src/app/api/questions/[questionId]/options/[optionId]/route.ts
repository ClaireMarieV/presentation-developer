import prisma from "@/lib/database";
import { cookies } from "next/headers";
import { Result, visitor } from "valentin";
import { z } from "zod";

export const POST = visitor(
  async ({ questionId, optionId }) => {
    const userId = cookies().get("userId")?.value;

    if (!userId) {
      return Result.err({
        code: 403,
        message: "You need a user id to answer questions",
      });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      await prisma.user.create({ data: { id: userId } });
    }

    return Result.ok(
      await prisma.answer.create({
        data: {
          optionId,
          questionId,
          userId,
        },
      })
    );
  },
  z.object({
    questionId: z.string(),
    optionId: z.string(),
  })
);
