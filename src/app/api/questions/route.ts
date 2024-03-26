import prisma from "@/lib/database";
import { Result, visitor } from "valentin";

export const GET = visitor(async () =>
  Result.ok(
    await prisma.question.findMany({
      include: {
        options: true,
        answers: true,
      },
    })
  )
);
