import prisma from "@/lib/database";
import { Result, visitor } from "valentin";
import { z } from "zod";

export const GET = visitor(async ({ questionId }) => {
  const options = await prisma.option.findMany({
    where: { questionId },
    include: { answers: true },
  });

  return Result.ok(
    options.reduce(
      (topOption, option) =>
        topOption
          ? topOption.answers.length > option.answers.length
            ? topOption
            : option
          : option,
      null as null | { answers: Array<unknown> }
    )
  );
}, z.object({ questionId: z.string().uuid() }));
