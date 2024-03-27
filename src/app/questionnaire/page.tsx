import prisma from "@/lib/database";
import * as style from "./page.css";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import SetUserIdCookie from "./SetUserIdCookie";
import Questionnaire from "@/ui/Questionnaire";

const getQuestions = async (userId: string) =>
  prisma.question.findMany({
    include: {
      options: true,
      answers: { where: { userId } },
    },
  });

const getUserName = async (userId: string) =>
  (await prisma.user.findUnique({ where: { id: userId } }))?.name || "";

const QuestionnairePage = async () => {
  let userId = cookies().get("userId")?.value;
  let newUserId = null;
  if (!userId) {
    newUserId = randomUUID();
    userId = newUserId;
  }

  const questions = await getQuestions(userId);
  const name = await getUserName(userId);

  return (
    <main className={style.page}>
      {newUserId && <SetUserIdCookie userId={newUserId} />}

      <Questionnaire questionnaire={questions} initialName={name} />
    </main>
  );
};

export default QuestionnairePage;
