"use client";

import { useNotes } from "@/lib/useSlide";
import * as style from "./page.css";
import Answers from "@/ui/Answers";

const presentationNotes = {
  1: (
    <ul className={style.list}>
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
    <ul className={style.list}>
      <li>Le mot développeur est un anglicisme</li>
    </ul>
  ),
  3: (
    <ul className={style.list}>
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
    <ul className={style.list}>
      <li>Ca fait un peu tôt, et pas sur que ça parle de programmation 😁</li>
      <li>
        On rappelle quand même qu&apos;Ada Lovelace écrit le premier programme
        du monde en 1843
      </li>
      <li>
        Mais le verbe &quot;to develop&quot; signifie &quot;créer ou produire
        par un effort délibéré sur une période de temps&quot;
      </li>
      <li>(Oui, on en revient aux définitions)</li>
      <li>
        On a en 1905, une utilisation qui commence à s&apos;en approcher :
      </li>
      <li>
        [O]ur chairman, the reinventor and the leading developer of the
        spectroheliograph
      </li>
      <li>
        Mais on ne parle pas encore d&apos;informatique, même si on touche au
        technique
      </li>
      <li>En 1961, enfin, dans un magazine d&apos;Arizona :</li>
      <li>
        Roderick D. McIver, program <strong>developer</strong> for the GE
        computer group will be host.
      </li>
      <li>
        Je n&apos;ai pas réussi à trouver d&apos;infos sur lui cependant 😄
      </li>
      <li>
        Par contre GE Computer est un compétiteur d&apos;IBM à l&apos;époque, et
        ils ont mis en place un ordinateur et programme de vérification de
        chèques en 59
      </li>
      <li>
        Parce que oui, à l&apos;époque hardware et software ça allait de paire,
        il n&apos;y avait pas d&apos;ordinateur générique
      </li>
      <li>
        Ca nous donne une idée de son utilisation en anglais, et en français ?
      </li>
    </ul>
  ),
  5: (
    <ul className={style.list}>
      <li>Je n&apos;ai rien trouvé</li>
      <li>Du côté des entreprises, il y a eu Bull, fondé en 1930</li>
      <li>
        Ils faisaient leurs propres machines, puis ils ont fini par faire du
        logiciel
      </li>
      <li>C&apos;était des concurents sérieux à IBM</li>
      <li>
        On n&apos;a pas vraiment de grande entreprise de la tech en france
      </li>
      <li>
        En tous cas, pas jusque récemment (Dassault Systèmes, Worldline, Talend)
      </li>
    </ul>
  ),
};

const Notes = () => {
  const { page, slide, notes } = useNotes({ notes: presentationNotes });

  return (
    <main className={style.page}>
      <div className={style.notes}>{notes}</div>
      <div className={style.answers}>
        <Answers />
      </div>
      <iframe
        src={`/presentation/${page}?communication=false`}
        className={style.current}
      />
      <iframe
        src={`/presentation/${page + 1}?communication=false`}
        className={style.next}
      />
    </main>
  );
};

export default Notes;
