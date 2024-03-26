"use client";

import { useState } from "react";
import RadioGroup from "./RadioGroup";
import * as style from "./Questionnaire.css";
import { useMutation } from "valentin";

type QuestionProps = {
  question: {
    id: string;
    text: string;
    position: number;
    options: Array<{
      id: string;
      text: string;
      position: number;
    }>;
    answers: Array<{
      optionId: string;
    }>;
  };
  onAnswer: () => void;
};

const Question = ({ question, onAnswer }: QuestionProps) => {
  const [checked, setChecked] = useState(
    question.answers?.[0]?.optionId || null
  );

  const [save] = useMutation<{ questionId: string; optionId: string }>(
    ({ questionId, optionId }) =>
      `/api/questions/${questionId}/options/${optionId}`
  );

  const onCheck = (option: { id: string }) => async () => {
    save({ questionId: question.id, optionId: option.id });

    setChecked(option.id);
    if (checked === null) {
      onAnswer();
    }
  };

  return (
    <RadioGroup
      label={question.text}
      options={question.options
        .sort((a, b) => a.position - b.position)
        .map((option) => ({
          checked: checked === option.id,
          onCheck: onCheck(option),
          label: option.text,
        }))}
    />
  );
};

type QuestionnaireProps = {
  questionnaire: Array<{
    id: string;
    text: string;
    position: number;
    options: Array<{
      id: string;
      text: string;
      position: number;
    }>;
    answers: Array<{
      optionId: string;
    }>;
  }>;
};

const Questionnaire = ({ questionnaire }: QuestionnaireProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    questionnaire
      .sort((a, b) => a.position - b.position)
      .findLastIndex((question) => question.answers.length > 0) + 1
  );

  return (
    <div className={style.questionnaire}>
      {questionnaire
        .sort((a, b) => a.position - b.position)
        .filter((_, index) => index <= currentQuestionIndex)
        .map((question) => (
          <Question
            key={question.id}
            question={question}
            onAnswer={() => setCurrentQuestionIndex((index) => index + 1)}
          />
        ))}
    </div>
  );
};

export default Questionnaire;
