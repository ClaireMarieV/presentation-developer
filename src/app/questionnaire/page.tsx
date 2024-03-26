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

const QuestionnairePage = async () => {
  let userId = cookies().get("userId")?.value;
  let newUserId = null;
  if (!userId) {
    newUserId = randomUUID();
    userId = newUserId;
  }

  const questions = await getQuestions(userId);

  return (
    <main className={style.page}>
      {newUserId && <SetUserIdCookie userId={newUserId} />}

      <Questionnaire questionnaire={questions} />
    </main>
  );
};

export default QuestionnairePage;
