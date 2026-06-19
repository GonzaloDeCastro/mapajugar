export type TriviaReward = {
  speciesName: string;
  label: string;
  imagePath: string;
};

/** Las 23 fichas de fauna que se pueden ganar en trivia. */
export const TRIVIA_ANIMAL_PRIZES: TriviaReward[] = [
  {
    speciesName: "Yaguareté",
    label: "El yaguareté",
    imagePath: "/images/awareness/animals/yaguarete.png",
  },
  {
    speciesName: "Guanaco",
    label: "El guanaco andino",
    imagePath: "/images/awareness/animals/guanaco.png",
  },
  {
    speciesName: "Carpincho",
    label: "El carpincho",
    imagePath: "/images/awareness/animals/carpincho.png",
  },
  {
    speciesName: "Pingüino de Magallanes",
    label: "El pingüino de Magallanes",
    imagePath: "/images/awareness/animals/pinguino-magallanes.png",
  },
  {
    speciesName: "Cóndor andino",
    label: "El cóndor andino",
    imagePath: "/images/awareness/animals/condor-andino.png",
  },
  {
    speciesName: "Flamenco austral",
    label: "El flamenco austral",
    imagePath: "/images/awareness/animals/flamenco-austral.png",
  },
  {
    speciesName: "Ñandú",
    label: "El ñandú pampeano",
    imagePath: "/images/awareness/animals/nandu.png",
  },
  {
    speciesName: "Zorro pampeano",
    label: "El zorro pampeano",
    imagePath: "/images/awareness/animals/zorro-pampeano.png",
  },
  {
    speciesName: "Tatú carreta",
    label: "El tatú carreta",
    imagePath: "/images/awareness/animals/tatu-carreta.png",
  },
  {
    speciesName: "Mara",
    label: "La mara patagónica",
    imagePath: "/images/awareness/animals/mara.png",
  },
  {
    speciesName: "Tucán grande",
    label: "El tucán grande",
    imagePath: "/images/awareness/animals/tucan-grande.png",
  },
  {
    speciesName: "Lechucita vizcachera",
    label: "La lechucita vizcachera",
    imagePath: "/images/awareness/animals/lechucita-vizcachera.png",
  },
  {
    speciesName: "Paloma araucana",
    label: "La paloma araucana",
    imagePath: "/images/awareness/animals/paloma-araucana.png",
  },
  {
    speciesName: "Yarará",
    label: "La yarará",
    imagePath: "/images/awareness/animals/yarara.png",
  },
  {
    speciesName: "Rana criolla",
    label: "La rana criolla",
    imagePath: "/images/awareness/animals/rana-criolla.png",
  },
  {
    speciesName: "Hornero",
    label: "El hornero, ave nacional",
    imagePath: "/images/awareness/animals/hornero.png",
  },
  {
    speciesName: "Zorrino",
    label: "El zorrino",
    imagePath: "/images/awareness/animals/zorrino.png",
  },
  {
    speciesName: "Comadreja overa",
    label: "La comadreja overa",
    imagePath: "/images/awareness/animals/comadreja-overa.png",
  },
  {
    speciesName: "Vizcacha",
    label: "La vizcacha de montaña",
    imagePath: "/images/awareness/animals/vizcacha.png",
  },
  {
    speciesName: "Coatí",
    label: "El coatí",
    imagePath: "/images/awareness/animals/coati.png",
  },
  {
    speciesName: "Delfín franciscana",
    label: "El delfín franciscana",
    imagePath: "/images/awareness/animals/delfin-franciscana.png",
  },
  {
    speciesName: "Margay",
    label: "El margay",
    imagePath: "/images/awareness/animals/margay.png",
  },
  {
    speciesName: "Pejerrey",
    label: "El pejerrey",
    imagePath: "/images/awareness/animals/pejerrey.png",
  },
];

export function pickRandomTriviaPrize(): TriviaReward {
  const index = Math.floor(Math.random() * TRIVIA_ANIMAL_PRIZES.length);
  return TRIVIA_ANIMAL_PRIZES[index] ?? TRIVIA_ANIMAL_PRIZES[0];
}
