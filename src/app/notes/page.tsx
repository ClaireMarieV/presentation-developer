"use client";

import { useNotes } from "@/lib/useSlide";
import * as style from "./page.css";

const presentationNotes = {
  1: (
    <ul>
      <li>Bonjour</li>
      <li>
        Vous pouvez scanner le QR code pour répondre à un court questionnaire
        pour la présentation
      </li>
      <li>A la fin, il y a un ticket pour une conférence à gagner</li>
      <li>Personne ne va être concentré du coup mais bon 🤷</li>
      <li>On va se pencher sur la définition d&apos;un développeur</li>
    </ul>
  ),
  2: (
    <ul>
      <li></li>
    </ul>
  ),
};

const Notes = () => {
  const { page, slide, notes } = useNotes({ notes: presentationNotes });

  return (
    <main className={style.page}>
      <div>{notes}</div>
      <iframe src={`/presentation/${page}?communication=false`} />
      <iframe src={`/presentation/${page + 1}?communication=false`} />
    </main>
  );
};

export default Notes;
