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
      <li>Bon, on s&apos;éloigne du sujet, et clairement ça ne marche pas</li>
      <li>Donc on va regarder ce que vous vous en pensez</li>
    </ul>
  ),
  6: (
    <ul>
      <li>Expliquer les résultats</li>
      <li>
        <strong>Si comme prévu :</strong>
      </li>
      <li>
        Le resenti de ce que <em>devrait</em> être un développeur ne correspond
        pas à la réalité
      </li>
      <li>Nous avons laissé la main sur la définition de notre métier</li>
      <li>Ce sont donc surtout les employeurs qui ont décidé du sens</li>
      <li>Et forcément ça nous cantonne à des rôles d&apos;exécutants</li>
      <li>
        <strong>
          Si <em>pas</em> comme prévu :
        </strong>
      </li>
      <li>Improviser 😄</li>
      <li></li>
      <li>Pour conclure : Du coup, c&apos;est quoi une développeuse ?</li>
      <li>
        <strong>FAIRE UNE PAUSE AVANT DE PASSER A LA SLIDE SUIVANTE</strong>
      </li>
      <li>
        La langue française est une langue vivante, elle change en fonction des
        lieux, des époques des générations. Elle apartient à tout le monde, et
        on peut décider d&apos;en faire ce qu&apos;on veut. Si je veux utiliser
        le féminin comme forme neutre je peux. Si ça te dérange, tu sais ce que
        ressentent les femmes au quotidien.
      </li>
    </ul>
  ),
  7: (
    <ul>
      <li>On a la définition scolaire</li>
      <li>On a la définition historique, par l&apos;exemple</li>
      <li>On a votre définition</li>
      <li>On a votre quotidien</li>

      <li>
        <strong>Si comme prévu :</strong>
      </li>
      <li>On voit qu&apos;il y a une définition qui se détache du lot</li>
      <li>Donc pour résumer</li>
    </ul>
  ),
  8: (
    <ul>
      <li>Il créé et maintient des programmes</li>
      <li>Mais surtout</li>
      <li>C&apos;est un professionnel</li>
      <li>Et en particulier</li>
      <li>C&apos;est un prolétaire</li>
      <li>
        Pour rappel, la définition : Personne qui ne possède pour vivre que les
        revenus que lui procure une activité salariée.
      </li>
      <li>Là vous vous demandez d&apos;où ça sort</li>
      <li>On est tous fier de notre métier, de notre savoir faire</li>
      <li>
        Nous avons une connaissance technique qui n&apos;est pas facile à saisir
      </li>
      <li>
        Mais il faut bien réaliser qu&apos;on reste des gens dont la seule force
        est notre force de travail
      </li>
      <li>
        <strong>FAIRE UNE PAUSE AVANT DE PASSER A LA SLIDE SUIVANTE</strong>
      </li>
      <li>Là où je veux en venir</li>
    </ul>
  ),
  9: (
    <ul>
      <li>Il faut considérer son métier comme un métier</li>
      <li>Bien sur, pour beaucoup c&apos;est une passion</li>
      <li>Sinon vous ne seriez pas en train de faire des heures sup ici 😄</li>
      <li>Mais on sait tous que c&apos;est un boulot</li>
      <li>Et il faut le traiter comme tel</li>
      <li>
        Et dans cet espace de travail, il ne faut pas hésiter à gérer sa
        carrière
      </li>
      <li>
        Il faut trouver ce qu&apos;on aime, ce qu&apos;on veut faire, ce à quoi
        on est bon
      </li>
      <li>Il faut pousser pour faire ça, ça doit être une démarche active</li>
      <li>
        Donc n&apos;hésitez pas à être clair à votre prochain 1-1 quand à ce que
        vous attendez de l&apos;entreprise qui vous emploi
      </li>
      <li>Voilà, merci</li>
    </ul>
  ),
  10: (
    <ul>
      <li>Des questions ?</li>
    </ul>
  ),
};

const Notes = () => {
  const { page, notes } = useNotes({ notes: presentationNotes });

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
