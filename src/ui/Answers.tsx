"use client";

import { useEffect } from "react";
import { useQuery } from "valentin";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { motion } from "framer-motion";
import * as style from "./Answer.css";

const sort = (a: { position: number }, b: { position: number }) =>
  a.position - b.position;

type Questionnaire = Array<{
  id: string;
  text: string;
  position: number;
  options: Array<{
    id: string;
    text: string;
    position: number;
    questionId: string;
  }>;
  answers: Array<{
    questionId: string;
    userId: string;
    optionId: string;
  }>;
}>;

type AnswersProps = {
  slides?: boolean;
};

const Answers = ({ slides = false }: AnswersProps) => {
  const [, , questions, refresh] = useQuery<Questionnaire>("/api/questions");

  useEffect(() => {
    const interval = setInterval(refresh, slides ? 2000 : 5000);

    return () => clearInterval(interval);
  }, [refresh, slides]);

  const respondents =
    questions
      ?.flatMap((question) => question.answers.map(({ userId }) => userId))
      .filter((value, index, array) => array.indexOf(value) === index).length ||
    0;

  return (
    <div className={style.wrapper}>
      {!slides && (
        <h2 className={style.respondants}>
          <span>Répondants</span>
          <span>{respondents}</span>
        </h2>
      )}

      {questions?.sort(sort).map((question) => {
        const respondants = question.answers
          .map(({ userId }) => userId)
          .filter(
            (value, index, array) => array.indexOf(value) === index
          ).length;

        return (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={style.question}
          >
            <div className={style.questionHeader}>
              <span>{question.text}</span>
              {!slides && <span>{respondants}</span>}
            </div>
            <ul className={style.answers}>
              {question.options
                .sort(sort)
                .filter((option) =>
                  slides
                    ? question.answers.some(
                        ({ optionId }) => optionId === option.id
                      )
                    : true
                )
                .map((option) => {
                  const percentage =
                    question.answers.filter(
                      ({ optionId }) => optionId === option.id
                    ).length / respondants || 0;

                  return (
                    <li
                      key={option.id}
                      className={style.answer}
                      style={assignInlineVars({
                        [style.percentage]: percentage.toString(),
                      })}
                    >
                      <span className={style.answerContent}>{option.text}</span>
                      <span className={style.answerContent}>
                        {Math.round(percentage * 100)}%
                      </span>
                    </li>
                  );
                })}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Answers;
