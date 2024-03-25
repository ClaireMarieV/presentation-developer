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
      <li>Le mot développeur est un anglicisme</li>
    </ul>
  ),
  3: (
    <ul>
      <li>La définition n&apos;est pas super satisfaisante</li>
      <li>(Montrer les résultats du questionnaire)</li>
      <li>C&apos;est le problème des définitions</li>
      <li>
        La définition d&apos;un mot au moyen d&apos;autres mots mène à une
        régression à l&apos;infini
      </li>
      <li>Surtout, ça ne correspond pas à votre resenti de développeur</li>
      <li>
        Wittgenstein propose d&apos;identifier la signification d&apos;un mot à
        son usage
      </li>
      <li>
        On a vu donc que le mot venait de l&apos;anglais, donc on peut commencer
        par regarder quand il a été utilisé pour la première fois (en anglais)
      </li>
    </ul>
  ),
  4: (
    <ul>
      <li>Pas le bon</li>
      <li>
        Mais le verbe &quot;to develop&quot; signifie &quot;créer ou produire
        par un effort délibéré sur une période de temps&quot;
      </li>
      <li>(Oui, on en revient aux définitions)</li>
      <li>
        On a en 1905, une utilisation qui commence à s&quot;en approcher :
      </li>
      <li>
        [O]ur chairman, the reinventor and the leading developer of the
        spectroheliograph
      </li>
      <li>
        Mais on ne parle pas encore d&quot;informatique, même si on touche au
        technique
      </li>
      <li>En 1961, enfin, dans un magazine d&quot;Arizona :</li>
      <li>
        Roderick D. McIver, program <strong>developer</strong> for the GE
        computer group will be host.
      </li>
      <li>Aucune info sur lui cependant 😄</li>
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
